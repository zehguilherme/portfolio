import { defineConfig, globalIgnores } from "eslint/config";
import nextConfig from "eslint-config-next";

const eslintConfig = defineConfig([
  globalIgnores([".next/**", "node_modules/**"]),
  ...nextConfig,
]);

export default eslintConfig;