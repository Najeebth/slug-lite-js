# slug-lite-js

Convert any text into a clean, URL-safe slug. Zero dependencies.

## Install

```bash
npm install slug-lite-js
```

## Usage

```js
const slugify = require('slug-lite-js');

slugify('Hello World');           // 'hello-world'
slugify('Café Día');              // 'cafe-dia'
slugify('Top 10 Tips!');          // 'top-10-tips'
slugify('---Hello---World---');   // 'hello-world'
```

## Behavior

- Lowercases everything
- Removes accents/diacritics (`é` → `e`)
- Replaces any run of non-alphanumeric characters with a single hyphen
- Trims leading/trailing hyphens
- Throws `TypeError` on non-string input

## What it does NOT do (v1 scope)

- Does not transliterate non-Latin scripts (Chinese, Arabic, Hindi, etc.) — they are stripped
- No custom separator option yet (always `-`)
- No max-length truncation option yet

## License

MIT
