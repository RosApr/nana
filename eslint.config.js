import globals from 'globals'
import neostandard from 'neostandard'

export default [
  ...neostandard({
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
    ts: true
  }),
  {
    files: ['__test__/**/*.ts', '*.ts'],
    languageOptions: {
      globals: globals.jest
    }
  }
]
