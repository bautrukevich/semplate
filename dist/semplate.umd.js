(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.semplate = factory());
}(this, function () { 'use strict';

  /**
   * A tiny template function.
   * @param {string} string
   * @param {object} object
   * @returns {string}
   * @example
   * semplate('Hello, {{ @who }}!', { who: 'world' })
   * // Hello, world!
   */
  function semplate(string, object) {
      var result = string;
      var regExpNotFound = new RegExp('{{\\s?@?\\w+\\s?}}', 'ig');
      for (var property in object) {
          if (object.hasOwnProperty(property)) {
              var regExp = new RegExp("{{\\s?@?" + property + "\\s?}}", 'ig');
              if (regExp.test(string)) {
                  // @ts-ignore
                  result = result.replace(regExp, object[property]);
              }
              else {
                  throw new Error("\"" + property + "\" was not found in \"" + string + "\".");
              }
          }
      }
      result = result.replace(regExpNotFound, '');
      return result;
  }

  return semplate;

}));
