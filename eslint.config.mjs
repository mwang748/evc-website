import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Next 15's eslint-config-next is a legacy (eslintrc) config, so it's loaded through
// FlatCompat. (Next 16 ships a native flat config instead; if you upgrade back to 16,
// switch this to `import nextVitals from "eslint-config-next/core-web-vitals"`.)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
];

export default eslintConfig;
