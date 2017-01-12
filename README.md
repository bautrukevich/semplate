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

// Variable can have @ to avoid conflict with another template engines (as an example, Blade). 
// More prefer to use function like this:
t('Hello, {{ @who }}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

// You can pass other optional arguments: remove (default: true) and debug (default: true) 
t('Hello, {{ @who }}!', { what: 'JavaScript' }, true, true);
// "what" property was not found in string.
// "Hello, !"

// You can pass other optional arguments: remove (default: true) and debug (default: true) 
t('Hello, {{ @who }}!', { what: 'JavaScript' }, true, false);
// "Hello, !"

// You can pass other optional arguments: remove (default: true) and debug (default: true) 
t('Hello, {{ @who }}!', { what: 'JavaScript' }, false, false);
// "Hello, {{ @who }}!"
```
