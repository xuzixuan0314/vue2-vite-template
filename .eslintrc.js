module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/base",
    "plugin:vue/recommended", // Use this if you are using Vue.js 2.x.
    "prettier"
  ],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "warn",
    "vue/comment-directive": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-lone-template": "off",
    "vue/block-tag-newline": [
      "error",
      {
        // 单行标签开合标签必定换行
        singleline: "always"
      }
    ]
  }
}
