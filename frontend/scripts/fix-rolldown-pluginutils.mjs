import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const packageRoot = process.cwd();
const filterDir = join(packageRoot, 'node_modules', '@rolldown', 'pluginutils', 'dist', 'filter');
const jsFile = join(filterDir, 'index.js');
const dtsFile = join(filterDir, 'index.d.ts');
const routerDomDir = join(packageRoot, 'node_modules', 'react-router-dom', 'dist');
const routerDomMjsFile = join(routerDomDir, 'index.mjs');
const routerDomDmtsFile = join(routerDomDir, 'index.d.mts');

function escapeRegex(value) {
  return String(value).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function exactRegex(id) {
  return new RegExp('^' + escapeRegex(id) + '$');
}

function toQueryAwareRegex(id) {
  if (id instanceof RegExp) {
    const flags = id.flags.replace('g', '');
    return new RegExp(id.source + '(?:\\?.*)?$', flags);
  }

  return new RegExp('^' + escapeRegex(id) + '(?:\\?.*)?$');
}

function makeIdFiltersToMatchWithQuery(filters) {
  if (Array.isArray(filters)) {
    return filters.map(toQueryAwareRegex);
  }

  return filters == null ? filters : toQueryAwareRegex(filters);
}

const jsSource = [
  'export { exactRegex, makeIdFiltersToMatchWithQuery };',
  '',
  'export default {',
  '  exactRegex,',
  '  makeIdFiltersToMatchWithQuery,',
  '};',
  '',
].join('\n');

const dtsSource = [
  'export declare function exactRegex(id: string): RegExp;',
  '',
  'export declare function makeIdFiltersToMatchWithQuery(filters: unknown): unknown;',
  '',
].join('\n');

mkdirSync(filterDir, { recursive: true });
writeFileSync(jsFile, [
  'function escapeRegex(value) {',
  "  return String(value).replace(/[-/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');",
  '}',
  '',
  'function exactRegex(id) {',
  "  return new RegExp('^' + escapeRegex(id) + '$');",
  '}',
  '',
  'function toQueryAwareRegex(id) {',
  '  if (id instanceof RegExp) {',
  "    const flags = id.flags.replace('g', '');",
  "    return new RegExp(id.source + '(?:\\\\?.*)?$', flags);",
  '  }',
  '',
  "  return new RegExp('^' + escapeRegex(id) + '(?:\\\\?.*)?$');",
  '}',
  '',
  'function makeIdFiltersToMatchWithQuery(filters) {',
  '  if (Array.isArray(filters)) {',
  '    return filters.map(toQueryAwareRegex);',
  '  }',
  '',
  '  return filters == null ? filters : toQueryAwareRegex(filters);',
  '}',
  '',
  jsSource,
].join('\n'));
writeFileSync(dtsFile, dtsSource);

mkdirSync(routerDomDir, { recursive: true });
writeFileSync(routerDomMjsFile, [
  "export { HydratedRouter, RouterProvider } from 'react-router/dom';",
  "export * from 'react-router';",
  '',
].join('\n'));
writeFileSync(routerDomDmtsFile, [
  "export { HydratedRouter, RouterProvider } from 'react-router/dom';",
  "export * from 'react-router';",
  '',
].join('\n'));