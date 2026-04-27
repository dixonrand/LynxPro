#!/usr/bin/env node
/**
 * build-faq.js
 *
 * Parses the operational sections of ../Lynx_Master_Reference.md
 * (everything after "## Document Index") into support/data/faq.json.
 *
 * Sections parsed:
 *   - Product Rules & Gotchas
 *   - Default Settings & Values
 *   - Support Workflow
 *   - Troubleshooting Patterns
 *   - Product Recommendations & Sales Awareness
 *   - Integration & Export
 *   - Networking
 *
 * Each ### heading becomes one FAQ entry with its content.
 */

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', '..', 'Lynx_Master_Reference.md');
const OUT = path.resolve(__dirname, '..', 'data', 'faq.json');

const SECTION_TYPES = {
  'Product Rules & Gotchas':                'tip',
  'Default Settings & Values':              'reference',
  'Support Workflow':                       'workflow',
  'Email & Communication Standards':        null,  // skip — internal process
  'Troubleshooting Patterns':               'troubleshooting',
  'Product Recommendations & Sales Awareness': 'reference',
  'Integration & Export':                   'integration',
  'Networking':                             'networking',
};

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parse(markdown) {
  const lines = markdown.split('\n');
  const entries = [];
  let inOperational = false;
  let currentSection = null;
  let sectionType = null;
  let currentEntry = null;
  let contentLines = [];

  function flush() {
    if (currentEntry && contentLines.length && sectionType !== null) {
      currentEntry.content = contentLines.join('\n').trim();
      if (currentEntry.content) {
        entries.push(currentEntry);
      }
    }
    contentLines = [];
    currentEntry = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Start after Document Index ends — look for ## sections
    if (line.startsWith('## Product Rules')) {
      inOperational = true;
    }
    if (!inOperational) continue;

    // ## Section — set the category/type
    const sectionMatch = line.match(/^## (.+)/);
    if (sectionMatch) {
      flush();
      currentSection = sectionMatch[1].trim();
      sectionType = SECTION_TYPES.hasOwnProperty(currentSection)
        ? SECTION_TYPES[currentSection]
        : null;
      continue;
    }

    // Skip sections we don't want (Email standards = internal)
    if (sectionType === null) continue;

    // ### Subsection — becomes an FAQ entry
    const subMatch = line.match(/^### (.+)/);
    if (subMatch) {
      flush();
      const title = subMatch[1].trim();
      currentEntry = {
        id: slugify(title),
        title: title,
        section: currentSection,
        type: sectionType,
      };
      continue;
    }

    // Content lines (skip --- dividers)
    if (currentEntry && line.trim() !== '---') {
      contentLines.push(line);
    }
  }
  flush();
  return entries;
}

console.log(`Reading: ${SRC}`);
const md = fs.readFileSync(SRC, 'utf-8');
const entries = parse(md);

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(entries, null, 2));

// Summary
const types = {};
entries.forEach(e => { types[e.type] = (types[e.type] || 0) + 1; });

console.log('');
console.log('=== FAQ Build Summary ===');
console.log(`Total entries: ${entries.length}`);
Object.entries(types).forEach(([k, v]) => console.log(`  ${v} ${k}`));
console.log(`Output: ${OUT}`);
