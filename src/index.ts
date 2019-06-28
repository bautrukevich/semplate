/**
 * A tiny template function.
 * @param {string} string
 * @param {object} object
 * @returns {string}
 * @example
 * semplate('Hello, {{ @who }}!', { who: 'world' })
 * // Hello, world!
 */
export default function semplate(string: string, object: Object): string {
  let result = string
  let regExpNotFound = new RegExp('{{\\s?@?\\w+\\s?}}', 'ig')

  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      let regExp = new RegExp(`{{\\s?@?${property}\\s?}}`, 'ig')

      if (regExp.test(string)) {
        // @ts-ignore
        result = result.replace(regExp, object[property])
      } else {
        throw new Error(`"${property}" was not found in "${string}".`)
      }
    }
  }

  result = result.replace(regExpNotFound, '')

  return result
}
