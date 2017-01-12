# t.js

Tiny template pure function

## Usage

```
import t from 't';

t('Hello, {{who}}!', { who: 'JavaScript' });
// "Hello, JavaScript!"

t('Hello, {{who}}! It's {{time}} ms since epoch.', { who: 'JavaScript', time: Date.now })
// "Hello, JavaScript! It's 1299680443046 ms since epoch."
```
