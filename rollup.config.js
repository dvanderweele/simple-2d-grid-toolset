import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const prenom = 'dist/bundle.'
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${prenom}cjs.js`,
      format: 'cjs'
    },
    {
      file: `${prenom}esm.js`,
      format: 'esm'
    },
    {
      name: 'Simple2dGridToolset',
      file: `${prenom}umd.js`,
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    production && terser()
  ]
}
