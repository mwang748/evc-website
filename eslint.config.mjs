import nextVitals from "eslint-config-next/core-web-vitals";

// Next 16 dropped `next lint` and ships eslint-config-next as a native flat config,
// so the old FlatCompat wrapper around "next/core-web-vitals" no longer loads.
const eslintConfig = [
  ...nextVitals,
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
];

export default eslintConfig;
