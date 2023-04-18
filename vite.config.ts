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
          .registerMacroStyoRule('theme:light', [{ $selector: '[theme="light"]&,[theme="light"] &' }])
          .registerMacroStyoRule('theme:dark', [{ $selector: '[theme="dark"]&,[theme="dark"] &' }])
          .registerMacroStyoRule('@md', [{ $nestedWith: '@media (min-width: 768px) and (max-width: 1023px)' }])
          .registerMacroStyoRule('@sm', [{ $nestedWith: '@media (min-width: 650px) and (max-width: 767px)' }])
          .registerMacroStyoRule('@xs', [{ $nestedWith: '@media (max-width: 649px)' }])
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
