<template>
  <div>
    <div style="display: flex;justify-content: normal; align-content: center">
      <input v-model="text" name="new-item" type="text">
      <button :disabled="!text" @click="add">Add</button>
    </div>

    <ol>
      <li v-for="item in items" :key="item.id">
        <ListItem :item="item" @delete-item="deleteItem(item)"/>
      </li>
    </ol>
  </div>
</template>


<script lang="ts" setup>
import ListItem from "./ListItem.vue";
import {Item} from "@/types";

import {ref} from "vue";

const text = ref("Do the dishes")
const items = ref<Item[]>([{id: 123, description: "Something else"}]);

function add() {
  items.value.push({id: Date.now(), description: text.value})
  text.value = '';
}

function deleteItem(targetForDeletion: Item) {
  items.value = items.value.filter(item => item.id !== targetForDeletion.id)
}
</script>
