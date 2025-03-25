import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt([
  prettierRecommended,
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "no-console": "warn",
      "no-unused-vars": "warn",
      indent: ["error", 2],
    },
  },
]);
