import * as utils from '../src/utils'

it("Date类型", () => {
  expect(utils.isDate(new Date())).toBeTruthy()
})

it("非Date类型", () => {
  expect(utils.isDate("")).toBeFalsy()
  expect(utils.isDate(1)).toBeFalsy()
  expect(utils.isDate(true)).toBeFalsy()
  expect(utils.isDate(false)).toBeFalsy()
  expect(utils.isDate({})).toBeFalsy()
  expect(utils.isDate([])).toBeFalsy()
  expect(utils.isDate(null)).toBeFalsy()
  expect(utils.isDate(undefined)).toBeFalsy()
  expect(utils.isDate(function () {})).toBeFalsy()
  expect(utils.isDate(new RegExp(''))).toBeFalsy()
})
