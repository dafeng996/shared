// jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets')
// const { defaultsESM: tsjPreset } = require('ts-jest/presets')
// const { jsWithTs: tsjPreset } = require('ts-jest/presets')
// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')
// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
      ...tsjPreset.transform,
      // [...]
  },
};
