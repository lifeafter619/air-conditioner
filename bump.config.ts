import { defineConfig } from 'bumpp'

const packages = [
  'react',
  'vue',
  // 'widget',
]

export default defineConfig({
  all: true,
  files: [
    'package.json',
    ...packages.map(name => `packages/${name}/package.json`),
  ],
})
