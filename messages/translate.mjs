const fs = require('fs');
let json = fs.readFileSync('C:/DIBS SOLUTIONS/jobs/site-institucional-dibs-solutions/frontend/messages/pt.json', 'utf8');
// Read the PT JSON
let pt2 = JSON.parse(json);

// Deep clone and translate all values
function cloneDeep(o) {
  if (o === null || typeof o !== 'object') return o;
  if (Array.isArray(o)) return o.map(cloneDeep);
  const r = {};
  for (const [k, v] of Object.entries(o)) r[k] = cloneDeep(v);
  return r;
}

// Start with a copy
let es = cloneDeep(pt2);
es.layout.htmlLang = 'es-ES';

// ============ STRING-BASED REPLACEMENT ============
// We'll work on the JSON string, replacing ONLY value strings
// This is safe because JSON keys are in English/slug format, values are PT

// Helper - replace all occurrences of a PT string with its ES translation
function tr(pt, esp) {
  // Replace in JSON string, but only full value matches
  const re = new RegExp(JSON.stringify(pt).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  json = json.replace(re, JSON.stringify(esp).replace(/\$/g, '$$$$'));
}
