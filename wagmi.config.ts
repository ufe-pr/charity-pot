import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    foundry({
      project: './smart_contracts',
      forge: {
        build: false
      },
      exclude: [
        'Mock*/**',
        '*/*.sol/**'
      ]
    }),
  ],
})
