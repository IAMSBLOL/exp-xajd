import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import * as importPlugin from 'eslint-plugin-import-x'
// import * as mdx from 'eslint-plugin-mdx'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname
})

export default [
  ...compat.extends('standard'),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      indent: ['error', 2],
      '@stylistic/indent': ['error', 2]
      // ...
    }
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-var': 'error',
      'no-undef': 'error',
      // no console/debugger
      'no-console': process.env.NODE_ENV === 'production'
        ? 'warn'
        : 'off',
      'no-debugger': process.env.NODE_ENV === 'production'
        ? 'warn'
        : 'off'
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-closing-bracket-location': ['error', {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned'
      }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-child-element-spacing': ['error'],
      'react/jsx-curly-brace-presence': ['error', {
        props: 'never',
        children: 'never',
        propElementValues: 'always'
      }],
      'react/jsx-curly-newline': ['error', {
        multiline: 'consistent',
        singleline: 'consistent'
      }],
      'react/jsx-curly-spacing': ['error', { when: 'never' }],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-first-prop-new-line': ['error', 'always'],
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
      'react/jsx-newline': ['error', { prevent: true, allowMultilines: true }],
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      'react/jsx-pascal-case': ['error', {
        allowAllCaps: false,
        allowNamespace: true,
        allowLeadingUnderscore: false
      }],
      'react/jsx-props-no-multi-spaces': ['error'],
      'react/jsx-sort-props': ['error', {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ['key']
      }],
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }],
      'react/self-closing-comp': ['error']
    },
    settings: { react: { version: 'detect' } }
  },
  {
    plugins: { 'import-x': importPlugin },
    rules: {
      'import/order': ['error', {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        warnOnUnassignedImports: true
      }],
      'import/first': 'error',
      'import/default': 'error',
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/export': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default': 'warn',
      'import-x/no-named-as-default-member': 'warn'
    }
  },
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/filename-case': ['error', {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true
        }
      }],
      'unicorn/no-array-for-each': 'off'
    }
  },
  {
    rules: {
      'unicorn/empty-brace-spaces': 'off',
      'array-element-newline': ['error', 'consistent'],
      'array-bracket-newline': ['error', 'consistent'],
      'no-undef': 'error',
      'space-before-function-paren': 'off',
      'no-useless-constructor': 'off'
    }
  },
  // {
  //   ...mdx.flat,
  //   // optional, if you want to lint code blocks at the same
  //   processor: mdx.createRemarkProcessor({
  //     lintCodeBlocks: true,
  //     // optional, if you want to disable language mapper, set it to `false`
  //     // if you want to override the default language mapper inside, you can provide your own
  //     languageMapper: {}
  //   })
  // },
  // {
  //   ...mdx.flatCodeBlocks,
  //   rules: {
  //     ...mdx.flatCodeBlocks.rules,
  //     // if you want to override some rules for code blocks
  //     'no-var': 'error',
  //     'prefer-const': 'error'
  //   }
  // },
  {
    ignores: [
      '**/node_modules/**',
      '**/.git/**',
      '**/dist/**',
      '**/test/**',
      '**/**spec.ts'
    ]
  }
]
