<!-- 

  Define the styles first in the <script setup> tag, then use them in the <template> tag.

-->

<script setup lang="ts">
defineEmits(['switchTheme'])

const styles = {
  mainContainer: style(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      transition: 'all 0.3s ease',
    },
    {
      $selector: 'theme:light',
      backgroundColor: '#ffffff'
    },
    {
      $selector: 'theme:dark',
      backgroundColor: '#414141'
    },
  ),
  logoImg: style(
    {
      width: '300px',
      height: '300px',
      transition: 'all 0.3s ease',
    },
    {
      $selector: ':hover',
      transform: 'scale(1.05)'
    },
    {
      $nestedWith: '@md',
      width: '250px',
      height: '250px',
    },
    {
      $nestedWith: '@sm',
      width: '200px',
      height: '200px',
    },
    {
      $nestedWith: '@xs',
      width: '150px',
      height: '150px',
    }
  ),
  brandTitle: style(
    {
      margin: '0 0 50px 0',
      fontSize: '128px',
      fontWeight: '700',
    },
    {
      $selector: 'theme:light',
      color: '#A96462'
    },
    {
      $selector: 'theme:dark',
      color: '#F5C2A0'
    },
    {
      $nestedWith: '@md',
      fontSize: '96px',
    },
    {
      $nestedWith: '@sm',
      fontSize: '64px',
    },
    {
      $nestedWith: '@xs',
      fontSize: '48px',
    }
  ),
  themeBtn: style(
    'btn',
    {
      $selector: 'theme:light',
      backgroundColor: '#A96462',
      color: '#ffffff'
    },
    {
      $selector: 'theme:dark',
      backgroundColor: '#F5C2A0',
      color: '#414141'
    },
  ),
  hiddenIfDark: style(
    {
      $selector: 'theme:dark',
      display: 'none',
    },
  ),
  hiddenIfLight: style(
    {
      $selector: 'theme:light',
      display: 'none',
    },
  ),
}
</script>

<template>
  <main
    :class="styles.mainContainer"
  >
    <img
      src="@/assets/logo.svg"
      :class="styles.logoImg"
    >
    <h1
      :class="styles.brandTitle"
    >
      StyoCSS
    </h1>

    <button 
      :class="styles.themeBtn"
      @click="$emit('switchTheme')"
    >
      <IconLineMdMoonAltLoop :class="styles.hiddenIfDark" />
      <IconLineMdMoonAltToSunnyOutlineLoopTransition :class="styles.hiddenIfLight" />
    </button>
  </main>
</template>

