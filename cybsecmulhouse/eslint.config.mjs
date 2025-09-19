import { createConfigForNuxt } from '@nuxt/eslint-config'
import stylistic from '@stylistic/eslint-plugin'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    'indent': ['error', 2],
    '@stylistic/indent': ['error', 2],
    // ...
  },
})
