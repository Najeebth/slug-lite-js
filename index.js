/**
 * Convert a string into a URL-safe slug.
 *
 * Steps:
 *  1. Normalize unicode so accented letters decompose into base letter + accent mark
 *  2. Strip the accent marks (leaves plain letters: e -> e)
 *  3. Lowercase everything
 *  4. Replace anything that isn't a letter/number with a hyphen
 *  5. Collapse multiple hyphens into one
 *  6. Trim leading/trailing hyphens
 *
 * @param {string} input
 * @returns {string}
 */
function slugify(input) {
  if (typeof input !== 'string') {
    throw new TypeError('slugify() expects a string');
  }

  return input
    .normalize('NFKD')                     // decompose accented letters, e.g. e-acute -> e + accent mark
    .replace(/[\u0300-\u036f]/g, '')       // strip the combining accent marks left behind
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')           // anything not a letter/number -> hyphen
    .replace(/-+/g, '-')                   // collapse repeated hyphens
    .replace(/^-|-$/g, '');                // trim leading/trailing hyphen
}

module.exports = slugify;
