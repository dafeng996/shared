/**
 * Date 格式化
 * @description 模版参数
 * @description YYYY，年份如: 2021年
 * @description YY, 年份如: 21年
 * @description M, 月份
 * @description D, 日期
 * @description H, 小时(24小时制)
 * @description h, 小时(12小时制)
 * @description m, 分钟
 * @description s, 秒钟
 * @description MM，两位月份开头用0补齐
 * @description DD，两位日期开头用0补齐
 * @description HH，两位小时开头用0补齐(24小时制)
 * @description hh，两位小时开头用0补齐(12小时制)
 * @description mm，两位分钟开头用0补齐
 * @description ss，两位秒钟开头用0补齐
 * @description W，星期(0开始, 6为周日)如: 1(周二)
 * @description Q, 季度 (1,2,3,4)
 * @param {Date | string | number} date 需要格式化的日期
 * @param {string} format=dateFormat.defaultFormat 格式化模版
 * @return {string | null} 解析成功返回格式化字符串，否则返回null
 */
declare function dateFormat(date: Date | string | number, format?: string): string | null;
declare namespace dateFormat {
    var defaultFormat: string;
}
export default dateFormat;
