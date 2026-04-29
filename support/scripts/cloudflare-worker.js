/**
 * FinishLynx Support Chat — Cloudflare Worker Proxy
 *
 * Forwards chat requests from lynx-assistant.html to the Anthropic API,
 * adds the API key server-side, and injects the LynxPro system prompt
 * + embedded knowledge base.
 *
 * Knowledge files are fetched at runtime from GitHub, pinned to the
 * current `main` commit SHA. The SHA is rechecked every SHA_CACHE_SECONDS
 * so a new commit propagates to every chat session within that window —
 * no manual cache purge needed. File bodies are then cached against the
 * immutable SHA-pinned URL for KNOWLEDGE_CACHE_SECONDS. Anthropic prompt
 * caching reduces per-request cost for the (large) system prompt.
 *
 * Deploy:
 *   1. Paste this file into a Cloudflare Worker
 *   2. Add ANTHROPIC_API_KEY (encrypted) under Settings → Variables and Secrets
 *   3. Deploy
 *   4. Knowledge updates: just commit to the repo — picked up within
 *      ~SHA_CACHE_SECONDS automatically.
 */

const REPO_OWNER = 'dixonrand';
const REPO_NAME = 'LynxPro';
const REPO_BRANCH = 'main';

// Inline knowledge: kept small enough to stay well under per-minute input
// token limits even on a cold cache. Larger sources (Known Fixes, the
// extracted PDF library) are exposed as on-demand tools — see TOOLS.
const KNOWLEDGE_FILES = [
  { path: '/Lynx_Master_Reference.md',          label: 'Lynx_Master_Reference.md' },
  { path: '/support/data/faq.json',             label: 'FAQ Entries (faq.json)', json: true },
];

const KNOWN_FIXES_PATH = '/FinishLynx_Known_Fixes.md';

const SHA_CACHE_SECONDS = 60;          // recheck commit SHA every 60s
const KNOWLEDGE_CACHE_SECONDS = 3600;  // file body cache (keyed by SHA, so safe to keep long)


const SYSTEM_PROMPT_HEADER = `You are an expert Lynx System Developers knowledge assistant.

You have been given a curated knowledge base assembled by Lynx System Developers, covering the full range of FinishLynx products, software, accessories, packages, and integrations. It is designed to be useful across multiple roles — technical support, sales, training, onboarding, product, management, field operations, and international distribution.

The knowledge base includes product documentation references, quick start guide URLs, datasheet URLs, troubleshooting resources, third-party integration guides, training webinars, tutorial videos, and a growing library of confirmed real-world fixes. A Master Reference Document ties everything together and serves as the operational brain.

Your job is to help the person using this tool get accurate, fast, and useful answers about Lynx products, systems, and workflows — regardless of their role or experience level.

This is a Lynx-first tool. It may be used by Lynx employees, partners, distributors, or customers. Always represent Lynx products accurately and professionally. When competitor products are relevant to a conversation, you may acknowledge or compare them honestly, but the lens is always Lynx-first.

This tool is currently English-only.

---

KNOWLEDGE BASE STRUCTURE

You have access to two layers of knowledge.

INLINE — embedded at the end of this system prompt. Always consult before answering:
- Lynx_Master_Reference.md — the primary operational reference. Contains the full document index with URLs and usage notes, product rules and gotchas, default settings, support workflow, email and communication standards, troubleshooting patterns, product recommendations, integration notes, and networking guidance. Always consult this first.
- FAQ Entries (faq.json) — curated quick-reference Q&A entries derived from the Master Reference.

ON-DEMAND — accessed via the tools described in DOCUMENT TOOLS below:
- FinishLynx_Known_Fixes.md — confirmed real-world solutions from actual support cases. Entries marked Confirmed Fix have been verified in the field. Use \`search_known_fixes\` whenever the question is about a symptom, error, or troubleshooting scenario — these field-confirmed fixes outrank generic documentation when they match.
- FinishLynx PDF library — manuals, QSGs, datasheets, troubleshooting guides. Searched via \`search_docs\`, read via \`read_doc\`.

The Master Reference's Document Index lists URLs for the full FinishLynx Online Manual, Product QSGs, Datasheets, Troubleshooting Guides, Manuals (ResulTV, LynxPad, ReacTime, etc.), Third-Party Docs (MeetPro2, HyTek, AthleticNET RunMeet, Daktronics, MYLAPS, LinkGate, MicroTab), Package QSGs and Brochures, and YouTube videos (Remote Training Webinars, Troubleshooting Videos, Tutorial Videos). When the user asks for documentation, hand them the relevant URL from that index.

If a question cannot be answered from the embedded knowledge base, say so clearly — do not guess or fabricate information. State that the information is not currently available in the knowledge base, which helps identify gaps for future improvement.

SOURCE PRIORITY

1. Lynx_Master_Reference.md and FinishLynx_Known_Fixes.md
2. URLs to product documentation, manuals, and QSGs listed in the Master Reference Document Index
3. Strongly supported reasoning based on the documentation
4. General background knowledge only when not in conflict with embedded material

If documentation and a confirmed fix appear to conflict, state the conflict clearly and explain what seems most likely. Never invent product features, settings, menu paths, or behavior that is not confirmed in the documentation.

---

CORE BEHAVIOR

Always be:
- Accurate — ground answers in the documentation; distinguish between what is confirmed, inferred, or uncertain
- Practical — prioritize the fastest and most useful path to an answer
- Concise — short when short is enough, structured when structure is needed
- Honest — never fake certainty or claim documentation support that isn't there

Adapt your tone to the person you are talking to. If they are conversational and casual, match that. If they are formal or technical, match that. Always stay professional and accurate regardless of tone.

Attempt to solve issues before suggesting the user contact Lynx support. Only recommend contacting support when troubleshooting is exhausted or the issue clearly requires direct Lynx involvement.

When relevant, suggest Lynx products or upgrades based on what the person is asking about. Cover everything Lynx offers — timing systems, cameras, software, accessories, scoreboards, displays, and packages.

---

SITUATIONAL BEHAVIOR

TECHNICAL SUPPORT — TROUBLESHOOTING
When helping with a technical issue, default to this structure unless asked otherwise:
1. Most likely causes (ranked)
2. Step-by-step checks
3. What to ask or confirm next
4. Most likely fix if confirmed
5. Escalation path or fallback

For live or urgent situations, optimize for speed and scannability. Keep responses tight.

CUSTOMER EMAIL DRAFTING
When drafting a customer-facing email:
- Produce a complete, ready-to-send draft every time
- Start with: Hello, (followed by a blank line)
- End with: Thank you, — no closing sentence, no signature
- Use > for all navigation paths (e.g., File > Options > General)
- Always include the full title of any document or video when sharing a URL
- Lead with actionable steps before linking resources
- Address the customer by name when known
- Normalize issues — avoid editorializing ("great news," "this is a common one")
- Avoid AI-sounding filler language

LOGGING A CONFIRMED FIX
When a solution is confirmed, convert it to a reusable Known Fix entry using this format:

Issue:
Symptoms:
Likely Causes:
Confirmed Fix:
Steps:
Products:
Notes:

Only mark as Confirmed Fix when the user explicitly confirms it worked. Mark as PENDING if the outcome is still unknown.

LEARNING AND EXPLANATION
When explaining concepts or helping someone build knowledge:
- Start simple, go deeper if needed
- Connect concepts to real-world scenarios
- Help build mental models, not just one-off answers

PRODUCT AND SALES QUESTIONS
When helping with product recommendations or comparisons:
- Ask qualifying questions before recommending (e.g., scoreboard pixel dimensions before recommending ResulTV vs. VDM)
- Reference the correct datasheets, package brochures, and comparison documents from the document index
- Cover everything Lynx offers — never assume a product is out of scope
- Competitor products may be acknowledged honestly when relevant, but always lead with what Lynx offers

IDEA GENERATION AND IMPROVEMENT
When asked for ideas, tools, or workflow improvements:
- Think proactively and creatively
- Draw on patterns from the Known Fixes and Master Reference
- Never say something is outside your role

---

HARD RULES — NEVER DEVIATE FROM THESE

FIREWALL: Always use C:\\Lynx\\Lynx.exe when adding FinishLynx to Windows Firewall. Steps go through Windows Security, not Control Panel.

CAMERA BOOT: "Error aligning camera" is always caused by the camera not booting correctly. Always reference the Camera Boot Troubleshooting Guide.

CAMERA ALIGNMENT — PLUMB BOB: Never recommend the plumb bob and string method to a typical user. It's an advanced technique reserved for installers, distributors, or users who explicitly ask about precision alignment. For normal users, point them to EasyAlign (2D Align mode) in FinishLynx and the standard tripod placement steps — that's enough.

LENS ADAPTERS: C-Mount lenses require the CS-C 5mm ring adapter. CS-Mount lenses must NOT use the adapter. Always verify adapter usage when troubleshooting focus issues.

FINISHLYNX LITE: Installs to C:\\LynxLite, not C:\\Lynx. Does not support meet management database connections. Supports peripherals only.

FIELDLYNX LITE: Does not support meet management database connections. Full FieldLynx does.

RADIOLYNX: Always set Wired Start Sensor to None on the Inputs tab first.

ACM: Uncheck "Allow button override" in File > Options > General.

LYNXPAD SPLITS: The splits checkbox only appears when Results view is set to By Heat.

SCOREBOARD STATUS: "Running" only means FinishLynx is sending data — not that the scoreboard is receiving it.

CAMERA IPs: Auto-assigned by FinishLynx — never manually configured by the user.

NCP PLUGIN: Bundled in FinishLynx 13.00 and later — no separate install needed.

RUN AS ADMINISTRATOR: Causes Z: drive visibility issues on the read laptop — should be unchecked.

VIRTUAL PHOTO BEAM UNIT: Software-based ACM — not physical hardware.

IMAGE ORIENTATION: Based on the direction competitors move across the lens, not which side of the track the camera is on.

MEET DIRECTORY: C:\\Meets

IDENTILYNX: Use Automatic capture mode (not IdentiLynx Motion) when used alongside an EtherLynx camera.

FINISHLYNX API: FinishLynx has no API. Third-party integrations use .LIF file export or scoreboard output via .LSS scripts.

LOANERS: Only offered for brand-new hardware with a confirmed hardware defect. Not offered for older units.

SOFTWARE UPGRADES: Always free. Direct customers to www.finishlynx.com/support.

SUPPORT ESCALATION: Only recommend calling support as a last resort. Always direct customers to download TeamViewer first: www.finishlynx.com/support

SUPPORT PAGE: Always include the full URL: www.finishlynx.com/support

PLUGIN DOWNLOADS PATH: Support > Update Your Software & Plug-ins > FinishLynx > Product Downloads > FinishLynx Software Plug-ins

WI-FI: Disable after a remote session ends, not during — TeamViewer depends on the active connection.

MULTI-USER MODE: Both computers must have access to the same Event Directory and to C:\\Lynx\\Temp on the primary computer. Without Temp folder access, event images will not carry over to the second laptop during an active race.

RESULTV vs VDM: Before recommending either, ask: (1) pixel dimensions of the scoreboard; (2) how customizable the customer wants the layout. ResulTV = more flexible, more expensive. ResulTV-VDM = simpler, less expensive, locked to scoreboard dimensions but colors/fonts/fields are customizable.

LED DISPLAY: The Portable Display requires HDMI video input. The RJ45 port carries internal LED panel data — not standard Ethernet. It cannot receive data directly from FinishLynx or ResulTV over a network connection.

NETWORKING: A bad Ethernet cable between the meet management computer and the network switch should be checked early when network issues have no obvious cause. A faulty cable between the PoE injector and the camera can present as a missing network adapter.

CAMERA LED STATES: Flashing amber = waiting for FinishLynx; solid green = powered on; flashing red = booting/waiting (normal); solid red beyond ~1 minute = boot failure.

VDM UPGRADE CODE: "Invalid code" may appear even when the code was accepted. Always restart the camera and FinishLynx before concluding the code failed. Check Camera [#] (HDMI) in Scoreboard > Options to confirm activation.

HARDWARE TYPE NONE: Required when using a second laptop in Multi-User Mode or when timing without a camera.

LAPTIME FROM IMAGE: Required for split capability on a read laptop or manual start without a camera. A restart is required after setup for the device status to change from Not Loaded to Running.

ROADMAP ITEMS: Always label features or products identified as planned or not yet released when discussing them. Never present roadmap items as currently available.

---

LYNX SUPPORT PORTAL URLS

In addition to www.finishlynx.com/support, the following pages are part of the Lynx Support portal and can be linked to:

- https://dixonrand.github.io/index.html — Lynx Support home
- https://dixonrand.github.io/document-library.html — searchable index of all 156 docs
- https://dixonrand.github.io/faq.html — FAQ & troubleshooting browser
- https://dixonrand.github.io/video-library.html — webinar, troubleshooting, and tutorial videos
- https://dixonrand.github.io/system-builder.html — interactive timing system builder
- https://dixonrand.github.io/product-guide.html — product comparison guide
- https://dixonrand.github.io/lif-results-viewer.html — .LIF file viewer

---

DOCUMENT TOOLS

You have three tools for fetching content that is not inlined in this system prompt. Use them as follows.

- \`search_known_fixes(query)\` — keyword search across FinishLynx_Known_Fixes.md. Returns up to 3 full matching entries (title, issue, symptoms, likely causes, confirmed fix, steps, products, notes). Use this WHENEVER the question involves a symptom, error message, hardware misbehavior, or other troubleshooting scenario. These confirmed real-world fixes outrank generic documentation when they match.
- \`search_docs(query)\` — keyword search across the extracted FinishLynx PDF library (manuals, QSGs, datasheets, troubleshooting guides). Returns up to 5 matching documents with slug, title, and category. Use this first to discover which doc(s) to read.
- \`read_doc(slug)\` — fetch the full extracted text of a specific document by slug (returned by search_docs). Use this when you need to quote the doc verbatim, look up specific steps, or verify a claim.

When to use these tools:
- Troubleshooting question → call \`search_known_fixes\` first; if no good match, fall back to \`search_docs\` / \`read_doc\` or the Master Reference.
- "What does the [X] manual / QSG / guide say" → \`search_docs\` then \`read_doc\`.
- Need specific steps, settings, or numbers from a doc → \`search_docs\` then \`read_doc\`.
- Want to quote or paraphrase from a doc directly → \`read_doc\`.

When NOT to use them:
- The Master Reference or FAQ already answer the question — those are faster.
- The question is conversational (greetings, clarifications).
- You already read the relevant entry/doc earlier in this conversation.

If \`search_docs\` returns no matches, the doc may not have been extracted yet (videos, third-party-hosted docs, and a few PDFs are skipped). In that case, point the user at the relevant URL from the Master Reference's Document Index instead.
`;

// Resolve the current `main` commit SHA, with a short edge cache so
// repeated requests within SHA_CACHE_SECONDS reuse one GitHub API call.
// Falls back to the branch name on any failure (rate-limit, network),
// which preserves prior behavior.
async function fetchHeadSha() {
  const apiUrl = 'https://api.github.com/repos/' + REPO_OWNER + '/' + REPO_NAME +
    '/commits/' + REPO_BRANCH;
  const cache = caches.default;
  const cacheKey = new Request(apiUrl);

  const cached = await cache.match(cacheKey);
  if (cached) {
    try {
      const sha = JSON.parse(await cached.text()).sha;
      if (sha) return sha;
    } catch (_) { /* fall through and refetch */ }
  }

  try {
    const fresh = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'lynxpro-worker',
        'Accept': 'application/vnd.github+json',
      },
      cf: { cacheTtl: 0, cacheEverything: false },
    });
    if (!fresh.ok) return REPO_BRANCH;
    const text = await fresh.text();
    await cache.put(cacheKey, new Response(text, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=' + SHA_CACHE_SECONDS,
      },
    }));
    return JSON.parse(text).sha || REPO_BRANCH;
  } catch (_) {
    return REPO_BRANCH;
  }
}

async function fetchCachedRepoFile(path) {
  // Pin to the current commit SHA so each commit produces a fresh cache key.
  // When the SHA flips, every Worker invocation immediately fetches the new
  // file body — no need to manually purge or wait on a TTL.
  const ref = await fetchHeadSha();
  const url = 'https://raw.githubusercontent.com/' + REPO_OWNER + '/' + REPO_NAME +
    '/' + ref + path;
  const cache = caches.default;
  const cacheKey = new Request(url);

  const cached = await cache.match(cacheKey);
  if (cached) return cached.text();

  // Bypass Cloudflare edge cache so failures don't stick — only successful
  // responses go into our explicit cache.put below.
  const fresh = await fetch(url, { cf: { cacheTtl: 0, cacheEverything: false } });
  if (!fresh.ok) {
    throw new Error('Failed to fetch ' + url + ' (' + fresh.status + ')');
  }
  const text = await fresh.text();
  const cacheable = new Response(text, {
    headers: {
      'Content-Type': fresh.headers.get('Content-Type') || 'text/plain',
      'Cache-Control': 'public, max-age=' + KNOWLEDGE_CACHE_SECONDS,
    },
  });
  await cache.put(cacheKey, cacheable);
  return text;
}

function formatFaqJson(text) {
  try {
    const data = JSON.parse(text);
    return data
      .map((entry) => {
        const header = '## ' + (entry.title || entry.id || 'Untitled') +
          (entry.section ? ' (' + entry.section + ')' : '');
        return header + '\n' + (entry.content || '');
      })
      .join('\n\n---\n\n');
  } catch {
    return text;
  }
}

async function buildKnowledgeBlock() {
  const sections = await Promise.all(
    KNOWLEDGE_FILES.map(async (f) => {
      const raw = await fetchCachedRepoFile(f.path);
      const body = f.json ? formatFaqJson(raw) : raw;
      return '===== BEGIN ' + f.label + ' =====\n\n' + body + '\n\n===== END ' + f.label + ' =====';
    })
  );
  return '# EMBEDDED KNOWLEDGE BASE\n\n' + sections.join('\n\n');
}

// ---------------------------------------------------------------------------
// Document tools — let the model search and read the extracted PDF library
// ---------------------------------------------------------------------------

const TOOLS = [
  {
    name: 'search_known_fixes',
    description:
      'Search FinishLynx_Known_Fixes.md (confirmed real-world support fixes) by keyword. Returns up to 3 full matching entries — title, issue, symptoms, likely causes, confirmed fix, steps, products, notes. Use this WHENEVER the question involves a symptom, error message, hardware misbehavior, or other troubleshooting scenario. These field-confirmed fixes outrank generic documentation when they match.',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'Keywords describing the symptom, error, or product. Examples: "blurry image vision camera", "spacebar capture", "VDM upgrade invalid code", "RadioLynx not triggering", "IdentiLynx pink".',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'search_docs',
    description:
      'Search the FinishLynx extracted-PDF library by keyword. Returns up to 5 matching documents with slug, title, and category. Always use this BEFORE read_doc to find the right slug. Searches across document titles, categories, and use descriptions.',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'Keywords to match. Examples: "vision camera setup", "scoreboard scripts", "ResulTV", "RadioLynx QSG", "field events". Multiple words narrow results.',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'read_doc',
    description:
      'Read the full extracted text of a specific FinishLynx document by its slug. Use this AFTER search_docs identifies a relevant slug, when you need to quote the document, look up specific steps, or verify a claim. If the doc is very long, it will be truncated; you can re-call with a different slug if needed.',
    input_schema: {
      type: 'object',
      properties: {
        slug: {
          type: 'string',
          description: 'The document slug, exactly as returned by search_docs (e.g. "etherlynx-vision-camera-qsg").',
        },
      },
      required: ['slug'],
    },
    // Cache breakpoint on the last tool — folds the tool block into the same
    // cached prefix as the system prompt, so per-request input tokens (and
    // thus ITPM consumption) stay low across the tool-use loop. The 1h TTL
    // keeps the cache warm across normal idle gaps between users; the
    // default 5m TTL was short enough that nearly every conversation paid
    // the full uncached input-token cost on its first request.
    cache_control: { type: 'ephemeral', ttl: '1h' },
  },
];

const KNOWN_FIXES_MAX_HITS = 3;
const READ_DOC_MAX_CHARS = 40_000;

// Parse FinishLynx_Known_Fixes.md into one entry per "### " heading.
// The file uses `---` as a visual separator between entries, but we key on
// the H3 heading instead so the parser doesn't depend on separator style.
function parseKnownFixes(text) {
  const entries = [];
  const lines = text.split('\n');
  let inFixes = false;
  let current = null;
  for (const line of lines) {
    if (/^##\s+Confirmed Fixes\b/i.test(line)) { inFixes = true; continue; }
    if (!inFixes) continue;
    const h3 = line.match(/^###\s+(.+?)\s*$/);
    if (h3) {
      if (current) entries.push(current);
      current = { title: h3[1].trim(), body: '' };
      continue;
    }
    if (current) {
      // Strip horizontal-rule separators between entries.
      if (/^---+\s*$/.test(line)) continue;
      current.body += line + '\n';
    }
  }
  if (current) entries.push(current);
  // Drop the example/template entry whose title is the literal placeholder.
  return entries
    .filter((e) => !/^\[.*\]$/.test(e.title))
    .map((e) => ({ title: e.title, body: e.body.trim() }));
}

async function searchKnownFixes(query) {
  let raw;
  try {
    raw = await fetchCachedRepoFile(KNOWN_FIXES_PATH);
  } catch (err) {
    return `Could not load FinishLynx_Known_Fixes.md: ${err.message}`;
  }
  const entries = parseKnownFixes(raw);
  if (!entries.length) {
    return 'FinishLynx_Known_Fixes.md is empty or could not be parsed.';
  }

  const terms = (query || '').toLowerCase().split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return 'Empty query. Provide at least one keyword.';

  const scored = entries
    .map((e) => {
      const titleLc = e.title.toLowerCase();
      const bodyLc = e.body.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (titleLc.includes(t)) score += 3;
        // Count body occurrences (capped) so multi-mention entries rank higher.
        let idx = 0, hits = 0;
        while ((idx = bodyLc.indexOf(t, idx)) !== -1 && hits < 5) { hits++; idx += t.length; }
        score += hits;
      }
      return { ...e, score };
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, KNOWN_FIXES_MAX_HITS);

  if (!scored.length) {
    return `No Known Fixes matched "${query}". Try different keywords (symptom, product, or error message), or fall back to search_docs / the Master Reference.`;
  }

  return (
    `Top ${scored.length} Known Fixes for "${query}":\n\n` +
    scored.map((e) => `### ${e.title}\n\n${e.body}`).join('\n\n---\n\n')
  );
}

function parseIndex(indexText) {
  // Walk the markdown, tracking the current "### Category" header so we can
  // attach a category to each entry line.
  const entries = [];
  let currentCat = '';
  for (const line of indexText.split('\n')) {
    const h = line.match(/^###\s+(.+?)\s*$/);
    if (h) { currentCat = h[1].trim(); continue; }
    const e = line.match(/^- `([^`]+)` — \*\*([^*]+)\*\*(?:\s+_\(([^)]+)\)_)?\s*—\s*([\d,]+)\s*chars\s*—\s*\[source\]\(([^)]+)\)/);
    if (e) {
      entries.push({
        slug: e[1],
        title: e[2].trim(),
        subcategory: e[3] || '',
        chars: parseInt(e[4].replace(/,/g, ''), 10),
        url: e[5],
        category: currentCat,
      });
    }
  }
  return entries;
}

async function searchDocs(query) {
  let indexText;
  try {
    indexText = await fetchCachedRepoFile('/support/data/extracted/INDEX.md');
  } catch {
    return 'No extracted documents are currently available. The extraction workflow may not have run yet. Fall back to using the Document Index in the Master Reference and link to the document URL there.';
  }
  const entries = parseIndex(indexText);
  if (!entries.length) {
    return 'The extracted-docs index is empty. Use the Document Index in the Master Reference instead.';
  }

  const terms = (query || '').toLowerCase().split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return 'Empty query. Provide at least one keyword.';

  const scored = entries
    .map((e) => {
      const haystack = (e.title + ' ' + e.category + ' ' + e.subcategory + ' ' + e.slug)
        .toLowerCase();
      const titleLc = e.title.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (haystack.includes(t)) score += 1;
        if (titleLc.includes(t)) score += 2;
      }
      return { ...e, score };
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (!scored.length) {
    return `No documents matched "${query}". Try different keywords, or use the Document Index in the Master Reference and link to the URL there.`;
  }

  return (
    `Top ${scored.length} matches for "${query}":\n\n` +
    scored
      .map(
        (e) =>
          `- slug: \`${e.slug}\`\n  title: ${e.title}\n  category: ${e.category}` +
          (e.subcategory ? ' › ' + e.subcategory : '') +
          `\n  source: ${e.url}\n  size: ${e.chars.toLocaleString()} chars`
      )
      .join('\n\n')
  );
}

async function readDoc(slug) {
  const safe = String(slug || '').replace(/[^a-z0-9-]/gi, '');
  if (!safe) return 'Invalid slug.';
  let text;
  try {
    text = await fetchCachedRepoFile(`/support/data/extracted/${safe}.md`);
  } catch (err) {
    return `Could not read document "${safe}": ${err.message}. Use search_docs to find a valid slug.`;
  }
  if (text.length > READ_DOC_MAX_CHARS) {
    const remaining = text.length - READ_DOC_MAX_CHARS;
    return text.slice(0, READ_DOC_MAX_CHARS) +
      `\n\n[... document truncated; ${remaining.toLocaleString()} more characters omitted. Re-call with the same slug if you need a different section, or summarise what you have.]`;
  }
  return text;
}

async function executeTool(name, input) {
  try {
    if (name === 'search_known_fixes') return await searchKnownFixes(input?.query);
    if (name === 'search_docs')        return await searchDocs(input?.query);
    if (name === 'read_doc')           return await readDoc(input?.slug);
    return `Unknown tool: ${name}`;
  } catch (err) {
    return `Tool error (${name}): ${err.message}`;
  }
}

// Wrap a final text response in the SSE shape the chat client expects.
// The client's typewriter handles the visual reveal regardless of how many
// chunks it arrives in.
function streamFinalText(corsHeaders, text) {
  const evt = JSON.stringify({
    type: 'content_block_delta',
    delta: { type: 'text_delta', text },
  });
  const sse = `data: ${evt}\n\ndata: [DONE]\n\n`;
  return new Response(sse, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    },
  });
}

function jsonError(corsHeaders, status, message) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

const MAX_TOOL_TURNS = 6;

// Retry policy for transient Anthropic responses (429 rate-limited, 529
// overloaded, 5xx). Without this, a single rate-limit blip turns into a
// user-visible "busy" message — which is the dominant failure mode given
// the large cached system prompt and multi-turn tool loop.
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504, 529]);
const MAX_RETRY_ATTEMPTS = 3;          // total attempts including the first
const RETRY_BASE_DELAY_MS = 750;       // exponential: 750ms, 1.5s, 3s
const RETRY_MAX_DELAY_MS = 8000;       // honor retry-after up to this cap

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function parseRetryAfter(headerVal) {
  if (!headerVal) return null;
  const seconds = Number(headerVal);
  if (Number.isFinite(seconds) && seconds >= 0) {
    return Math.min(seconds * 1000, RETRY_MAX_DELAY_MS);
  }
  // HTTP-date form — fall back to default backoff
  return null;
}

async function callAnthropicWithRetry(payload, apiKey) {
  let lastResp = null;
  for (let attempt = 0; attempt < MAX_RETRY_ATTEMPTS; attempt++) {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(payload),
    });
    if (resp.ok || !RETRYABLE_STATUS.has(resp.status) || attempt === MAX_RETRY_ATTEMPTS - 1) {
      return resp;
    }
    const retryAfter = parseRetryAfter(resp.headers.get('retry-after'));
    const backoff = retryAfter ?? Math.min(RETRY_BASE_DELAY_MS * 2 ** attempt, RETRY_MAX_DELAY_MS);
    // Drain the body so the connection can be reused.
    try { await resp.text(); } catch (_) {}
    lastResp = resp;
    await sleep(backoff);
  }
  return lastResp; // unreachable, but keeps the type checker honest
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.json();
      const knowledge = await buildKnowledgeBlock();

      // System prompt as content blocks so we can mark the (large) knowledge
      // block as cacheable — Anthropic prompt caching gives ~10% pricing on
      // cached tokens for repeat requests within a 5-minute window.
      const system = [
        { type: 'text', text: SYSTEM_PROMPT_HEADER },
        // 1h TTL keeps the system-prompt cache warm across normal idle gaps
        // between users; the default 5m TTL was short enough that nearly
        // every conversation paid the full uncached input-token cost on
        // its first request.
        { type: 'text', text: knowledge, cache_control: { type: 'ephemeral', ttl: '1h' } },
      ];

      const model = body.model || 'claude-sonnet-4-6';
      const maxTokens = body.max_tokens || 2048;
      let messages = body.messages || [];

      // Tool-use loop: call the model, execute any tool_use blocks it returns,
      // append the results, and call again until it stops asking for tools.
      // Intermediate turns are non-streamed; the final text is wrapped in a
      // single SSE delta so the existing client code keeps working.
      for (let turn = 0; turn < MAX_TOOL_TURNS; turn++) {
        const resp = await callAnthropicWithRetry(
          { model, max_tokens: maxTokens, system, tools: TOOLS, messages },
          env.ANTHROPIC_API_KEY,
        );

        if (!resp.ok) {
          return jsonError(corsHeaders, resp.status, await resp.text());
        }

        const data = await resp.json();
        const content = Array.isArray(data.content) ? data.content : [];
        const toolUses = content.filter((c) => c.type === 'tool_use');

        if (toolUses.length === 0) {
          const finalText = content
            .filter((c) => c.type === 'text')
            .map((c) => c.text)
            .join('');
          return streamFinalText(corsHeaders, finalText || '(empty response)');
        }

        // Execute every tool_use the model requested, in parallel.
        const toolResults = await Promise.all(
          toolUses.map(async (tu) => ({
            type: 'tool_result',
            tool_use_id: tu.id,
            content: await executeTool(tu.name, tu.input || {}),
          }))
        );

        messages = [
          ...messages,
          { role: 'assistant', content },
          { role: 'user', content: toolResults },
        ];
      }

      return streamFinalText(
        corsHeaders,
        '(I exceeded my tool-call budget while looking up information. Try rephrasing the question, or ask me to skip the document lookup.)'
      );
    } catch (e) {
      return jsonError(corsHeaders, 500, e.message);
    }
  },
};
