
<template>
  <title>{{ title }}</title>
  <div class="container mx-auto max-w-lg">
    <h1 class="text-2xl text-center">{{ title }}</h1>
    <TodoList/>
  </div>
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList.vue';

const title = process.env.VUE_APP_APP_TITLE

</script>

