/**
 * Converts camel case string (fooBar) to a spinal case (foo-bar) string.
 * @param   {string} camelCase Input camel case string.
 * @returns {string}           Returns string in spinal case.
 */
export default function spinalCase(camelCase) {
  return camelCase
    .split(/(?=[A-Z])/)
    .join('-').toLowerCase();
}
