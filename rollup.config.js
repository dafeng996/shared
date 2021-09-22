import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {file: `./dist/${pkg.name}.js`, format: 'cjs', sourcemap: true},
    {file: `./dist/${pkg.name}.esm.js`, format: 'es', sourcemap: true},
    {file: `./dist/${pkg.name}.umd.js`, format: 'umd', sourcemap: true, name: pkg.name}
  ],
  plugins: [
    typescript({tsconfig: './tsconfig.json'}),
    commonjs({extensions: ['.js', '.ts']})
  ]
}
