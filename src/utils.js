"use strict";
exports.__esModule = true;
exports.isDate = void 0;
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
exports.isDate = isDate;
