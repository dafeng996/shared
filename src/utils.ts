/**
 * 是否Date类型
 * @param {*} date 需要判断的数据
 * @return {boolean} boolean
 */
export function isDate (date: any) {
  const typeStr = '[object Date]'
  return typeof date === 'object' &&
    Object.prototype.toString.call(date) === typeStr
}
