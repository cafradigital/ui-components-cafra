import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' assert { type: 'json' };

/* ========================================================================

======================================================================== */
// O rollup config é uma matriz de objetos config. Para esta biblioteca
// precisamos de dois objetos de configuração separados. O primeiro exportará os
// arquivos javascript. O segundo é para exportar os tipos.

const config = [
  /* ======================
    JS files configuration
  ====================== */
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        inlineSources: true,
        exclude: [
          '**/__tests__',
          '**/tests',
          '**/__mocks__',
          '**/mocks',
          '**/jest-setup.*',
          '**/setupTests.*',
          '**/*.test.*',
          '**/*.stories.*',
          '**/story.*'
        ]
      }),
      terser()
    ]
  },
  /* ======================
      types configuration
  ====================== */
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.s?css$/]
  }
];

export default config;
