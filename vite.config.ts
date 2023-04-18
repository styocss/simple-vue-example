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
      createStyo(builder){
        return builder
          .registerNestedWithTemplates({
            '@md': '@media (min-width: 768px) and (max-width: 1023px)',
            '@sm': '@media (min-width: 650px) and (max-width: 767px)',
            '@xs': '@media (max-width: 649px)',
          })
          .registerSelectorTemplates({
            'theme:light': '[theme="light"]{s},[theme="light"] {s}',
            'theme:dark': '[theme="dark"]{s},[theme="dark"] {s}',
          })
          .registerStaticMacroStyoRule({
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
                $nestedWith: '@md',
                width: '200px',
                height: '80px',
                fontSize: '48px',
              },
              {
                $nestedWith: '@sm',
                width: '150px',
                height: '60px',
                fontSize: '36px',
              },
              {
                $nestedWith: '@xs',
                width: '100px',
                height: '40px',
                fontSize: '24px',
              }
            ]
          })
          .done()
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
