/**
 *
 * @param name
 */
export const getName = (name: string) => {
  return `hello, I\`m${String.fromCharCode(32) + name}`
}