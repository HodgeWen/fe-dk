import { defineConfig } from 'rollup'
import esBuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'

const input = 'sdk/index.ts'

export default [
  defineConfig({
    input,
    output: {
      file: 'dist/fe-sdk.js',
      format: 'es'
    },
    plugins: [
      esBuild({ minify: true })
    ]
  }),
  defineConfig({
    input: 'sdk/index.ts',
    output: {
      file: 'types/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  })
]
