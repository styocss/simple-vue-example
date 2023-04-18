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
      $apply: ['theme:light'],
      backgroundColor: '#ffffff'
    },
    {
      $apply: ['theme:dark'],
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
      $selector: '&:hover',
      transform: 'scale(1.05)'
    },
    {
      $apply: ['@md'],
      width: '250px',
      height: '250px',
    },
    {
      $apply: ['@sm'],
      width: '200px',
      height: '200px',
    },
    {
      $apply: ['@xs'],
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
      $apply: ['theme:light'],
      color: '#A96462'
    },
    {
      $apply: ['theme:dark'],
      color: '#F5C2A0'
    },
    {
      $apply: ['@md'],
      fontSize: '96px',
    },
    {
      $apply: ['@sm'],
      fontSize: '64px',
    },
    {
      $apply: ['@xs'],
      fontSize: '48px',
    }
  ),
  themeBtn: style(
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
      $selector: '&:not(:active):hover',
      transform: 'scale(1.05)'
    },
    {
      $selector: '&:active',
      transform: 'scale(0.95)'
    },
    {
      $apply: ['theme:light'],
      backgroundColor: '#A96462',
      color: '#ffffff'
    },
    {
      $apply: ['theme:dark'],
      backgroundColor: '#F5C2A0',
      color: '#414141'
    },
    {
      $apply: ['@md'],
      width: '200px',
      height: '80px',
      fontSize: '48px',
    },
    {
      $apply: ['@sm'],
      width: '150px',
      height: '60px',
      fontSize: '36px',
    },
    {
      $apply: ['@xs'],
      width: '100px',
      height: '40px',
      fontSize: '24px',
    }
  ),
  hiddenIfDark: style(
    {
      $apply: ['theme:dark'],
      display: 'none',
    },
  ),
  hiddenIfLight: style(
    {
      $apply: ['theme:light'],
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

