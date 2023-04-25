# simple-vue-example

## Project Description
This is a simple example of using StyoCSS with Vue 3.

Showcasing the following features:
  - Breakpoints
  - Pseudo-classes
  - Theme

See the [vite.config.ts](./vite.config.ts) file for the configuration.

See the [VersionA.vue](./src/components/VersionA.vue) file for the example of using `styo()` directly in the `<template>`.

See the [VersionB.vue](./src/components/VersionB.vue) file for the example of defining styles using `styo()` in the `<script setup>`, then using them in the `<template>`.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
