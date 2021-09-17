import {isDate} from "./utils"

/**
 * Date 格式化
 * @param date
 * @param format
 */
function dateFormat (
  date: Date | string | number, format = dateFormat.defaultFormat
) : string | null {
  try {
    date = isDate(date) ? date as Date : new Date(date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const quarter = Math.ceil(month / 3)
    const week = date.getDay()
    const templateValues = {
      YYYY: year,
      MM: month,
      DD: day
    }
  } catch {
    return null
  }
  return null
}

/**
 * 默认格式化
 */
dateFormat.defaultFormat = 'YYYY-MM-DD hh:mm:ss'

export default dateFormat
