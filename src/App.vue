<script setup lang="ts">
import VersionA from './components/VersionA.vue';

const preferredColorScheme = usePreferredColorScheme()
const theme = ref<'light' | 'dark'>(preferredColorScheme.value === 'dark' ? 'dark' : 'light')
watch(
  theme,
  (newTheme) => {
    document.documentElement.setAttribute('theme', newTheme)
  },
  { immediate: true }
)
function handleSwitchTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <VersionA @switchTheme="handleSwitchTheme" />
</template>
