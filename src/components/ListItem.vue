<template>
  <div class="flex justify-between py-3">
    <div class="flex items-center gap-x-5">
      <input type="checkbox" @change="$emit('toggle-complete')">
      <div v-if="!props.item.is_done">{{ props.item.description }}</div>
      <del v-else>{{ props.item.description }}</del>
    </div>
    <button class="bg-red-500 text-white hover:bg-red-400 p-2 rounded-lg" @click="$emit('deleteItem')">
      <svg
          class="h-4 w-4"
          fill="none" stroke="currentColor"
          stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import {Item} from "@/types";

const props = defineProps<{ item: Item }>();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
