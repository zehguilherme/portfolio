import { defineConfig, globalIgnores } from 'eslint/config'
import nextConfig from 'eslint-config-next'
import tseslint from 'typescript-eslint'

const eslintConfig = defineConfig([
  globalIgnores(['.next/**', 'node_modules/**']),
  ...nextConfig,
  ...tseslint.configs.recommended,
])

export default eslintConfig