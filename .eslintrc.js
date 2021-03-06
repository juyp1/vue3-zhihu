module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
    
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces':'off',
    '@typescript-eslint/type-annotation-spacing':'off',
    'space-before-function-paren':"off",
    'no-useless-escape':'off',
    'func-call-spacing':'off',
    'indent':'off',
    'comma-spacing':'off',
    'vue/no-unused-components':'off',
    'vue/no-textarea-mustache':'off'
  }
}
