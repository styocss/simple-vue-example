<!--

  Directly use the style function in the <template> tag.

-->

<script setup lang="ts">
defineEmits(['switchTheme'])

</script>

<template>
  <main
    :class="styo(
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
        $selector: '[theme:light]',
        backgroundColor: '#ffffff'
      },
      {
        $selector: '[theme:dark]',
        backgroundColor: '#414141'
      },
    )"
  >
    <img
      src="@/assets/logo.svg"
      :class="styo(
        {
          width: '300px',
          height: '300px',
          transition: 'all 0.3s ease',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '20px',
        },
        'pa-4',
        {
          $selector: ':hover',
          $apply: ['pa-36'],
          transform: 'scale(1.05)'
        },
        {
          $nestedWith: '@mdOnly',
          width: '250px',
          height: '250px',
        },
        {
          $nestedWith: '@smOnly',
          width: '200px',
          height: '200px',
        },
        {
          $nestedWith: '@xsOnly',
          width: '150px',
          height: '150px',
        }
      )"
    >
    <h1
      :class="styo(
        {
          margin: '0 0 50px 0',
          fontSize: '128px',
          fontWeight: '700',
        },
        {
          $selector: '[theme:light]',
          color: '#A96462'
        },
        {
          $selector: '[theme:dark]',
          color: '#F5C2A0'
        },
        {
          $nestedWith: '@mdOnly',
          fontSize: '96px',
        },
        {
          $nestedWith: '@smOnly',
          fontSize: '64px',
        },
        {
          $nestedWith: '@xsOnly',
          fontSize: '48px',
        }
      )"
    >
      StyoCSS
    </h1>

    <button 
      :class="styo(
        'btn',
        {
          $selector: '[theme:light]',
          backgroundColor: '#A96462',
          color: '#ffffff'
        },
        {
          $selector: '[theme:dark]',
          backgroundColor: '#F5C2A0',
          color: '#414141'
        },
      )"
      @click="$emit('switchTheme')"
    >
      <IconLineMdMoonAltLoop 
        :class="styo(
          {
            $selector: '[theme:dark]',
            display: 'none',
          },
        )" 
      />
      <IconLineMdMoonAltToSunnyOutlineLoopTransition 
        :class="styo(
          {
            $selector: '[theme:light]',
            display: 'none',
          },
        )"
      />
    </button>
  </main>
</template>

