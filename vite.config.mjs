import { fileURLToPath, URL } from 'node:url'

import yaml from '@rollup/plugin-yaml'
import vue from '@vitejs/plugin-vue'
import { marked } from 'marked'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import svgLoader from 'vite-svg-loader'

const markdownFields = new Set(['summary', 'note', 'text'])

function renderMarkdownFields(data) {
  if (Array.isArray(data)) {
    return data
  }

  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      markdownFields.has(key) && typeof value === 'string'
        ? marked.parse(value)
        : value,
    ])
  )
}

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({ defaultImport: 'component', svgo: false }),
    imagetools({ include: /\.(jpe?g|png)\?(.+&)?as=picture(&|$)/ }),
    yaml({ transform: renderMarkdownFields }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    include: ['src/**/*.{test,integration}.js'],
  },
})
