import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import StyoCSS from '@styocss/vite-plugin-styocss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    Vue(),
    StyoCSS({
      config: {
        aliases: {
          nested: [
            {
              type: 'dynamic',
              key: '@min',
              pattern: /^@min\[(\d+)\]$/,
              exampleList: ['@min[576]', '@min[768]', '@min[992]', '@min[1200]', '@min[1400]'],
              createValue: (matched: RegExpMatchArray) => `@media (min-width: ${matched[1]}px)`,
            },
            {
              type: 'dynamic',
              key: '@max',
              pattern: /^@max\[(\d+)\]$/,
              exampleList: ['@max[575]', '@max[767]', '@max[991]', '@max[1199]', '@max[1399]'],
              createValue: (matched: RegExpMatchArray) => `@media (max-width: ${matched[1]}px)`,
            },
            {
              type: 'dynamic',
              key: '@between',
              pattern: /^@between\[(\d+),(\d+)\]$/,
              exampleList: ['@between[576,767]', '@between[768,991]', '@between[992,1199]', '@between[1200,1399]'],
              createValue: (matched: RegExpMatchArray) => `@media (min-width: ${matched[1]}px) and (max-width: ${matched[2]}px)`,
            },
            {
              type: 'static',
              key: '@xsOnly',
              alias: '@xsOnly',
              value: '@max[575]',
            },
            {
              type: 'static',
              key: '@smOnly',
              alias: '@smOnly',
              value: '@between[576,767]',
            },
            {
              type: 'static',
              key: '@mdOnly',
              alias: '@mdOnly',
              value: '@between[768,991]',
            },
            {
              type: 'static',
              key: '@lgOnly',
              alias: '@lgOnly',
              value: '@between[992,1199]',
            },
            {
              type: 'static',
              key: '@xlOnly',
              alias: '@xlOnly',
              value: '@between[1200,1399]',
            },
            {
              type: 'static',
              key: '@xxlOnly',
              alias: '@xxlOnly',
              value: '@min[1400]',
            },
          ],
          selector: [
            {
              type: 'dynamic',
              key: '[theme]',
              pattern: /^\[theme:(.*)\]$/,
              exampleList: ['[theme:dark]', '[theme:light]'],
              createValue: (matched: RegExpMatchArray) => `[theme="${matched[1]}"]{s},[theme="${matched[1]}"] {s}`,
            }
          ]
        },
        macroStyles: [
          {
            type: 'static',
            key: 'btn',
            name: 'btn',
            partials: [
              {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '250px',
                height: '100px',
                border: 0,
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '60px',
              },
              {
                $selector: ':not(:active):hover',
                transform: 'scale(1.05)'
              },
              {
                $selector: ':active',
                transform: 'scale(0.95)'
              },
              {
                $nested: '@mdOnly',
                width: '200px',
                height: '80px',
                fontSize: '48px',
              },
              {
                $nested: '@smOnly',
                width: '150px',
                height: '60px',
                fontSize: '36px',
              },
              {
                $nested: '@xsOnly',
                width: '100px',
                height: '40px',
                fontSize: '24px',
              }
            ],
          },
          {
            type: 'dynamic',
            key: 'padding-all',
            pattern: /^pa-(\d+)$/,
            exampleList: ['pa-4'],
            createPartials: (match) => {
              const n = match[1]
              return [{
                padding: `${n}px`,
              }]
            }
          }
        ],
      },
      dts: true,
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      eslintrc: {
        enabled: true,
      },
      dts: true,
    }),
    Icons({
      compiler: 'vue3',
    }),
    Components({
      dts: true,
      resolvers: [
        IconsResolver({
          componentPrefix: 'icon',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
