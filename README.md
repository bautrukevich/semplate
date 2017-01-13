# semplate (simple template || string template)

A tiny template pure function

## Installation

You can use this function simply add `dist/semplate.min.js` file on the page.

Or you can install as npm module

```
yarn add semplate
```

## Usage

```js
import semplate from 'semplate';

semplate('Hello, {{who}}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

semplate('Hello, {{ who }}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

semplate('Hello, {{ WHO }}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

// Variable can have @ to avoid conflict with another template engines (as an example, Blade). 
// More prefer to use function like this:
semplate('Hello, {{ @who }}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

// You can pass other optional arguments: remove (default: true) and debug (default: true) 
semplate('Hello, {{ @who }}!', { what: 'JavaScript' }, true, true);
// "what" property was not found in string.
// "Hello, !"

// You can pass other optional arguments: remove (default: true) and debug (default: true) 
semplate('Hello, {{ @who }}!', { what: 'JavaScript' }, true, false);
// "Hello, !"

// You can pass other optional arguments: remove (default: true) and debug (default: true) 
semplate('Hello, {{ @who }}!', { what: 'JavaScript' }, false, false);
// "Hello, {{ @who }}!"
```
