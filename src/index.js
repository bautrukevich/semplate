/**
 * A tiny template pure function
 *
 * @param string
 * @param object
 * @returns {*}
 */
export default function t(string, object) {
  let result = string;

  for (let property in object) {
    result = result.replace(new RegExp('{{' + property + '}}', 'g'), object[property]);
  }
  return result;
}
