/**
 *
 * @param string
 * @param object
 * @param remove (optional)
 * @param debug (optional)
 * @returns {string}
 * @example
 *
 * t('Hello, {{ @who }}!', { who: 'world' })
 * // Hello, world!
 *
 */
export default function t(string, object, remove = true, debug = true) {
  let result = string;
  let regExpNotFound = new RegExp('{{\\s?@?\\w+\\s?}}', 'ig');

  for (let property in object) {
    let regExp = new RegExp('{{\\s?@?' + property + '\\s?}}', 'ig');

    if (regExp.test(string)) {
      result = result.replace(regExp, object[property]);
    } else {
      if (debug) {
        console.error(`"${property}" was not found in string.`);
      }
    }
  }

  if (remove) {
    result = result.replace(regExpNotFound, '');
  }

  return result;
}
