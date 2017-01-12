# t.js

Tiny template pure function

## Usage

```js
import t from 't';

t('Hello, {{who}}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

t('Hello, {{ who }}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

t('Hello, {{ WHO }}!', { who: 'JavaScript' });
// "Hello, JavaScript!"
```
