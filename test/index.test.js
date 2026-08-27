const { test } = require('node:test');
const assert = require('node:assert');
const slugify = require('../index.js');

test('basic spaces become hyphens', () => {
  assert.strictEqual(slugify('Hello World'), 'hello-world');
});

test('punctuation is stripped or treated as a separator', () => {
  assert.strictEqual(slugify('What is Node.js? A Guide!'), 'what-is-node-js-a-guide');
});

test('accented letters are transliterated', () => {
  assert.strictEqual(slugify('Café Día'), 'cafe-dia');
});

test('multiple spaces/underscores collapse to one hyphen', () => {
  assert.strictEqual(slugify('Hello    World___Test'), 'hello-world-test');
});

test('leading/trailing/duplicate hyphens are cleaned up', () => {
  assert.strictEqual(slugify('---Hello---World---'), 'hello-world');
});

test('numbers are kept', () => {
  assert.strictEqual(slugify('Top 10 Tips!'), 'top-10-tips');
});

test('emoji are stripped', () => {
  assert.strictEqual(slugify('Best Pizza 🍕 Ever'), 'best-pizza-ever');
});

test('non-string input throws', () => {
  assert.throws(() => slugify(123), TypeError);
});
