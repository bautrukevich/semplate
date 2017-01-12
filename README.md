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

// Variable can have @ to avoid conflict with another template engines (as an example, Blade), 
t('Hello, {{ @who }}!', { who: 'JavaScript' });
// "Hello, JavaScript!"
```
