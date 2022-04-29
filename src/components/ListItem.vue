<template>
  <div class="flex justify-between py-3">
    <div class="flex items-center gap-x-5">
      <input type="checkbox" @change="$emit('toggle-complete')">
      <div v-if="!props.item.is_done">{{ props.item.description }}</div>
      <del v-else>{{ props.item.description }}</del>
    </div>
    <button class="bg-red-500 text-white hover:bg-red-400 p-2 rounded-lg" @click="$emit('deleteItem')">
      <trash-icon class="h-4 w-4"/>
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
