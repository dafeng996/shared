/**
 * 是否Date类型
 * @param date
 */
export function isDate (date: any) {
  const typeStr = '[object Date]'
  return typeof date === 'object' &&
    Object.prototype.toString.call(date) === typeStr
}
