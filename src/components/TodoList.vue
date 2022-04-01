<template>
  <div>
    <div style="display: flex;justify-content: normal; align-content: center">
      <input v-model="text" name="new-item" type="text">
      <button @click="add">Add</button>
    </div>

    <ul>
      <li v-for="item  of items" :key="item.id">
        <ListItem :item="item"/>
      </li>
    </ul>
  </div>
</template>


<script lang="ts" setup>
import ListItem from "./ListItem.vue";
import {Item} from "@/types";

import {ref} from "vue";

const text = ref("Do the dishes")
const items = ref<Item[]>([{id: 123, description: "Something else"}]);

function add() {
  items.value.push({id: 11, description: text.value})
}

</script>
