# Semplate

Tiny template library.

[![NPM version][npm-img]][npm-url]
[![GitHub release][badge-release-img]][badge-release-url]&nbsp;

<!-- toc -->

* [Install](#install)
* [Usage](#usage)
* [Feedback](#feedback)
* [License](#license)

<!-- tocstop -->

## Install

```bash
npm install semplate --save
```

## Usage

```javascript
import semplate from 'semplate'

semplate('Hello, {{who}}!', { who: 'JavaScript' })
// "Hello, JavaScript!"

semplate('Hello, {{ who }}!', { who: 'JavaScript' })
// "Hello, JavaScript!"

semplate('Hello, {{ WHO }}!', { who: 'JavaScript' })
// "Hello, JavaScript!"

// Variable can have @ to avoid conflict with another template engines (as an example, Blade). 
// More prefer to use function like this:
semplate('Hello, {{ @who }}!', { who: 'JavaScript' })
// "Hello, JavaScript!"
```

## Feedback

Issues and PRs are welcome. You can provide your feedback or drop me a support
request at [hello@bautrukevich.com][email-hello].

[email-hello]: mailto:hello@bautrukevich.com
[github-releases]: https://github.com/bautrukevich/semplate/releases
[github-contributors]: https://github.com/bautrukevich/semplate/graphs/contributors
[badge-release-img]: https://img.shields.io/github/release/bautrukevich/semplate.svg
[badge-release-url]: https://github.com/bautrukevich/semplate/releases
[npm-img]: http://img.shields.io/npm/v/semplate.svg
[npm-url]: https://www.npmjs.org/package/semplate

## License
[MIT](./LICENSE)
