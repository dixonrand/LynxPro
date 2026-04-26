#!/usr/bin/env node
/**
 * build-resources.js
 *
 * Parses ../Lynx_Master_Reference.md and writes ../data/resources.json
 *
 * Parsing rules (from Build Spec slide 06 — "Source of truth"):
 *   1. ### N. Title  → category  (drop the leading "N. ")
 *   2. #### Title    → subcategory
 *   3. ##### Title   → resource entry title
 *   4. Capture URL, File Status, Use as fields beneath each ##### heading
 *   5. If URL is ❌ , skip the entry — never invent a URL
 *   6. Infer type from subcategory name (see TYPE_MAP below)
 *   7. Output one flat array — sorting/grouping happens in the renderer
 *
 * Only entries inside the "## Document Index" section are parsed.
 * The "## Product Rules & Gotchas" section and everything after it
 * contains operational notes, not linkable resources.
 */

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', '..', 'Lynx_Master_Reference.md');
const OUT = path.resolve(__dirname, '..', 'data', 'resources.json');

// Subcategory name → type slug
// Spec rule 6: "Infer type from subcategory name"
const TYPE_MAP = {
  'datasheets':                              'datasheet',
  'qsgs':                                   'qsg',
  'manuals and user guides':                 'manual',
  'miscellaneous':                           'misc',
  'remote training webinars':                'video',
  'troubleshooting videos':                  'video',
  'tutorial videos':                         'video',
  'athletics (track) packages qsgs':         'qsg',
  'athletics (track) packages brochures':    'brochure',
  'athletics (field) packages brochures':    'brochure',
  'cross country packages brochures':        'brochure',
  'cycling and bmx packages brochures':      'brochure',
  'rowing and regatta packages brochures':   'brochure',
  'speed skating packages':                  'brochure',
  'cameras for chip timing packages':        'brochure',
  'lynx display and scoreboard scripts':     'guide',
  'daktronics':                              'guide',
  'hytek':                                   'guide',
  'milesplit / direct athletics':             'manual',
  'athletic.net':                            'guide',
};

function inferType(subcategory) {
  if (!subcategory) return 'misc';
  const key = subcategory.toLowerCase().trim();
  return TYPE_MAP[key] || 'misc';
}

function parse(markdown) {
  const lines = markdown.split('\n');
  const entries = [];
  let category = null;
  let subcategory = null;
  let current = null;
  let inDocumentIndex = false;
  let totalFound = 0;
  let totalSkipped = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Start parsing at "## Document Index"
    if (line.startsWith('## Document Index')) {
      inDocumentIndex = true;
      continue;
    }

    // Stop parsing at "## Product Rules" or any other ## section after Document Index
    if (inDocumentIndex && line.startsWith('## ') && !line.startsWith('## Document Index')) {
      break;
    }

    if (!inDocumentIndex) continue;

    // Rule 1: ### N. Title → category (drop leading number)
    const catMatch = line.match(/^### \d+\.\s+(.+)/);
    if (catMatch) {
      category = catMatch[1].trim();
      subcategory = null;
      continue;
    }

    // Rule 2: #### Title → subcategory
    if (line.startsWith('#### ')) {
      subcategory = line.replace('#### ', '').trim();
      continue;
    }

    // Rule 3: ##### Title → resource entry
    if (line.startsWith('##### ')) {
      // Flush previous entry if it exists
      if (current) {
        if (current.url === '❌' || !current.url) {
          totalSkipped++;
        } else {
          entries.push(current);
        }
      }
      totalFound++;
      current = {
        title: line.replace('##### ', '').trim(),
        url: null,
        category: category,
        subcategory: subcategory,
        fileStatus: null,
        use: null,
        type: inferType(subcategory),
      };
      continue;
    }

    // Rule 4: Capture fields beneath each ##### heading
    if (current) {
      const urlMatch = line.match(/^\s*-\s+\*\*URL:\*\*\s*(.+)/);
      if (urlMatch) {
        current.url = urlMatch[1].trim();
        continue;
      }

      const statusMatch = line.match(/^\s*-\s+\*\*File Status:\*\*\s*(.+)/);
      if (statusMatch) {
        current.fileStatus = statusMatch[1].trim();
        continue;
      }

      const useMatch = line.match(/^\s*-\s+\*\*Use:\*\*\s*(.+)/);
      if (useMatch) {
        current.use = useMatch[1].trim();
        continue;
      }
    }
  }

  // Flush last entry
  if (current) {
    if (current.url === '❌' || !current.url) {
      totalSkipped++;
    } else {
      entries.push(current);
    }
  }

  return { entries, totalFound, totalSkipped };
}

// --- Main ---
console.log(`Reading: ${SRC}`);
const md = fs.readFileSync(SRC, 'utf-8');

const { entries, totalFound, totalSkipped } = parse(md);

// Remove fileStatus from output — it's internal metadata, not needed by the site
const output = entries.map(e => ({
  title: e.title,
  url: e.url,
  category: e.category,
  subcategory: e.subcategory,
  use: e.use,
  type: e.type,
}));

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(output, null, 2));

console.log('');
console.log('=== Build Summary ===');
console.log(`Total ##### entries found:  ${totalFound}`);
console.log(`Entries skipped (❌ / no URL): ${totalSkipped}`);
console.log(`Entries written to JSON:    ${output.length}`);
console.log(`Output: ${OUT}`);
