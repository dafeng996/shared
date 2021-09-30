'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 是否Date类型
 * @param {*} date 需要判断的数据
 * @return {boolean} boolean
 */
function isDate(date) {
    var typeStr = '[object Date]';
    return typeof date === 'object' &&
        Object.prototype.toString.call(date) === typeStr;
}

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
function dateFormat(date, format) {
    if (format === void 0) { format = dateFormat.defaultFormat; }
    var result = format;
    try {
        date = isDate(date) ? date : new Date(date);
        var templateMap = new Map();
        var yearNums = date.getFullYear().toString().split('');
        templateMap.set('YYYY', yearNums.join(''));
        templateMap.set('YY', [yearNums[yearNums.length - 2], [yearNums[yearNums.length - 1]]].join(''));
        templateMap.set('MM', (date.getMonth() + 1).toString().padStart(2, '0'));
        templateMap.set('DD', date.getDate().toString().padStart(2, '0'));
        templateMap.set('HH', date.getHours().toString().padStart(2, '0'));
        templateMap.set('hh', Math.floor(date.getHours() - 12).toString().padStart(2, '0'));
        templateMap.set('mm', date.getMinutes().toString().padStart(2, '0'));
        templateMap.set('ss', date.getSeconds().toString().padStart(2, '0'));
        templateMap.set('M', (date.getMonth() + 1).toString());
        templateMap.set('D', date.getDate().toString());
        templateMap.set('H', date.getHours().toString());
        templateMap.set('h', Math.floor(date.getHours() - 12).toString());
        templateMap.set('m', date.getMinutes().toString());
        templateMap.set('s', date.getSeconds().toString());
        templateMap.set('W', date.getDay().toString());
        templateMap.set('Q', Math.ceil((date.getMonth() + 1) / 3).toString());
        templateMap.forEach(function (value, key) {
            result = result.replace(key, value);
        });
    }
    catch (_a) {
        return null;
    }
    return result;
}
/**
 * 默认格式化
 */
dateFormat.defaultFormat = 'YYYY-MM-DD hh:mm:ss';

exports.dateFormat = dateFormat;
exports.isDate = isDate;
//# sourceMappingURL=shared.js.map
