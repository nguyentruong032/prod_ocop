#!/usr/bin/env node
/**
 * Extract OCOP_CONTENT from content.js using precise position-based extraction
 * Run: node scripts/extract-content.js
 */

const fs = require('fs');
const path = require('path');

// Read content.js
const contentPath = path.join(__dirname, '..', 'content.js');
const contentJs = fs.readFileSync(contentPath, 'utf-8');

console.log('Reading content.js, size:', contentJs.length, 'chars');

// Find the start of OCOP_CONTENT object
const startMatch = contentJs.match(/window\.OCOP_CONTENT\s*=\s*\{/);
if (!startMatch) {
  console.error('Could not find window.OCOP_CONTENT');
  process.exit(1);
}

const startIdx = startMatch.index + startMatch[0].length - 1; // Include the opening brace

// Find the matching closing brace by counting braces
function findMatchingBrace(str, startIdx) {
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let inTemplate = false;
  let escapeNext = false;
  
  for (let i = startIdx; i < str.length; i++) {
    const char = str[i];
    const nextChar = str[i + 1];
    
    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    
    if (char === '\\') {
      escapeNext = true;
      continue;
    }
    
    if (inTemplate) {
      if (char === '`') {
        inTemplate = false;
      }
      continue;
    }
    
    if (inString) {
      if (char === stringChar) {
        inString = false;
      }
      continue;
    }
    
    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      continue;
    }
    
    if (char === '`') {
      inTemplate = true;
      continue;
    }
    
    if (char === '{') {
      depth++;
    } else if (char === '}') {
      depth--;
      if (depth === 0) {
        return i + 1; // Return position after closing brace
      }
    }
  }
  return -1;
}

const endIdx = findMatchingBrace(contentJs, startIdx);
if (endIdx === -1) {
  console.error('Could not find matching closing brace');
  process.exit(1);
}

const ocopContentStr = contentJs.slice(startIdx, endIdx);
console.log('Extracted OCOP_CONTENT object, length:', ocopContentStr.length);

// Now parse the object by extracting each key-value pair at the top level
function extractTopLevelKeys(objStr) {
  const keys = [];
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let inTemplate = false;
  let escapeNext = false;
  let keyStart = 0;
  let readingKey = true;
  let currentKey = '';
  
  for (let i = 0; i < objStr.length; i++) {
    const char = objStr[i];
    
    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    
    if (char === '\\') {
      escapeNext = true;
      continue;
    }
    
    if (inTemplate) {
      if (char === '`') {
        inTemplate = false;
      }
      continue;
    }
    
    if (inString) {
      if (char === stringChar) {
        inString = false;
      }
      continue;
    }
    
    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      continue;
    }
    
    if (char === '`') {
      inTemplate = true;
      continue;
    }
    
    if (char === '{' || char === '[') {
      if (depth === 0 && readingKey) {
        // We're at the start of a value
      }
      depth++;
    } else if (char === '}' || char === ']') {
      depth--;
    } else if (char === ':' && depth === 0 && readingKey) {
      // Found key:value separator at top level
      currentKey = objStr.slice(keyStart, i).trim();
      readingKey = false;
      keyStart = i + 1;
    } else if (char === ',' && depth === 0 && !readingKey) {
      // Found end of value at top level
      const valueStr = objStr.slice(keyStart, i).trim();
      keys.push({ key: currentKey, value: valueStr });
      readingKey = true;
      keyStart = i + 1;
    }
  }
  
  // Handle last key-value pair
  if (!readingKey && keyStart < objStr.length) {
    const valueStr = objStr.slice(keyStart).trim().replace(/,$/, '');
    keys.push({ key: currentKey, value: valueStr });
  }
  
  return keys;
}

const topLevelKeys = extractTopLevelKeys(ocopContentStr);
console.log('Top-level keys found:', topLevelKeys.map(k => k.key));

// Helper to parse a JS value string
function parseJsValue(str) {
  if (!str) return null;
  
  let cleaned = str.trim().replace(/,$/, '');
  
  // Handle template literals
  cleaned = cleaned.replace(/`([\s\S]*?)`/g, (match, content) => {
    return '"' + content
      .replace(/"/g, '\\"')
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t')
      .replace(/\r/g, '\\r')
      .replace(/\$/g, '\\$')
      + '"';
  });
  
  // Handle single-quoted strings
  cleaned = cleaned.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (match, content) => {
    return '"' + content.replace(/"/g, '\\"') + '"';
  });
  
  // Quote unquoted keys
  cleaned = cleaned.replace(/([{,]\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '$1"$2":');
  
  // Remove trailing commas
  cleaned = cleaned.replace(/,(\s*[}\]])/g, '$1');
  
  // Handle undefined
  cleaned = cleaned.replace(/:\s*undefined/g, ': null');
  
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // Last resort: use Function constructor
    try {
      return new Function('return ' + cleaned + ';')();
    } catch (e2) {
      console.error('Parse error, first 500 chars:', cleaned.substring(0, 500));
      throw e2;
    }
  }
}

// Parse each collection
const extracted = {};
topLevelKeys.forEach(({ key, value }) => {
  try {
    extracted[key] = parseJsValue(value);
    console.log(`✓ Parsed ${key}:`, Array.isArray(extracted[key]) ? extracted[key].length + ' items' : 'object');
  } catch (e) {
    console.error(`✗ Failed to parse ${key}:`, e.message);
  }
});

// Output directory
const outputDir = path.join(__dirname, '..', 'apps', 'api-gateway', 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Type mapping
const typeMap = {
  stories: 'Story',
  destinations: 'Destination',
  businesses: 'Business',
  news: 'NewsArticle',
  events: 'Event',
  integrationArticles: 'IntegrationArticle',
  ocopNow: 'OcopNowItem',
  products: 'Product'
};

function generateTsFile(collectionName, data, typeName) {
  const header = `/**
 * ${collectionName} Data
 * Auto-generated from content.js - DO NOT EDIT MANUALLY
 * Run: node scripts/extract-content.js
 */
import type { ${typeName} } from '@/types';

export const ${collectionName}: ${typeName}[] = `;

  const footer = `;\n\nexport default ${collectionName};\n`;
  const jsonStr = JSON.stringify(data, null, 2);
  return header + jsonStr + footer;
}

// Generate array-based collections
Object.entries(typeMap).forEach(([key, type]) => {
  if (extracted[key] && Array.isArray(extracted[key])) {
    const content = generateTsFile(key, extracted[key], type);
    const filePath = path.join(outputDir, `${key}.ts`);
    fs.writeFileSync(filePath, content);
    console.log(`Generated: ${filePath} (${extracted[key].length} items)`);
  } else {
    console.warn(`Collection '${key}' not available for generation`);
  }
});

// Generate site-config.ts
if (extracted.siteConfig) {
  const siteConfigContent = `/**
 * Site Configuration Data
 * Auto-generated from content.js - DO NOT EDIT MANUALLY
 * Run: node scripts/extract-content.js
 */
import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = ${JSON.stringify(extracted.siteConfig, null, 2)};

export default siteConfig;
`;
  fs.writeFileSync(path.join(outputDir, 'site-config.ts'), siteConfigContent);
  console.log(`Generated: site-config.ts`);
}

// Generate pages.ts
if (extracted.pages) {
  const pagesContent = `/**
 * Page Configurations Data
 * Auto-generated from content.js - DO NOT EDIT MANUALLY
 * Run: node scripts/extract-content.js
 */
import type { PageConfig } from '@/types';

export const pages: Record<string, PageConfig> = ${JSON.stringify(extracted.pages, null, 2)};

export default pages;
`;
  fs.writeFileSync(path.join(outputDir, 'pages.ts'), pagesContent);
  console.log(`Generated: pages.ts`);
}

// Generate search-index.ts
if (extracted.pages) {
  const searchIndex = {
    stories: extracted.stories?.map(s => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      excerpt: s.excerpt,
      category: s.category,
      tags: s.tags,
      type: 'story'
    })) || [],
    destinations: extracted.destinations?.map(d => ({
      id: d.id,
      slug: d.slug,
      title: d.name,
      excerpt: d.shortDescription,
      province: d.province,
      tags: d.tags,
      type: 'destination'
    })) || [],
    businesses: extracted.businesses?.map(b => ({
      id: b.id,
      slug: b.slug,
      title: b.name,
      excerpt: b.positioning,
      province: b.province,
      tags: b.tags,
      type: 'business'
    })) || [],
    news: extracted.news?.map(n => ({
      id: n.id,
      slug: n.slug,
      title: n.headline,
      excerpt: n.excerpt,
      category: n.category,
      tags: n.tags,
      type: 'news'
    })) || [],
    events: extracted.events?.map(e => ({
      id: e.id,
      slug: e.slug,
      title: e.headline,
      excerpt: e.excerpt,
      category: e.category,
      tags: e.tags,
      type: 'event'
    })) || [],
    products: extracted.products?.map(p => ({
      id: p.id,
      slug: p.slug,
      title: p.name,
      excerpt: p.shortDescription,
      category: p.category,
      tags: p.tags,
      type: 'product'
    })) || [],
  };

  const searchIndexContent = `/**
 * Search Index Data
 * Auto-generated from content.js - DO NOT EDIT MANUALLY
 * Run: node scripts/extract-content.js
 */
import type { SearchIndex } from '@/types';

export const searchIndex: SearchIndex = ${JSON.stringify(searchIndex, null, 2)};

export default searchIndex;
`;
  fs.writeFileSync(path.join(outputDir, 'search-index.ts'), searchIndexContent);
  console.log(`Generated: search-index.ts`);
}

console.log('\n✅ All data files generated successfully!');
console.log(`Output directory: ${outputDir}`);