<template>
  <div>

  <div class="flex justify-start py-5">
      <input v-model="text"
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             name="new-item" type="text" @keyup.enter="add">
      <button :disabled="!text"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="add">Add
      </button>
    </div>

    <ol class="divide-y">
      <li v-for="item in items" :key="item.id">
        <ListItem :item="item" @delete-item="deleteItem(item)" @toggle-complete="item.is_done = !item.is_done"/>
      </li>
    </ol>
    <button class="block rounded w-full text-white py-2 px-4 bg-red-500" name="clear-items" @click="clear">Clear
    </button>
  </div>
</template>


<script lang="ts" setup>
import ListItem from "./ListItem.vue";
import {Item} from "@/types";

import {ref} from "vue";

const text = ref("Do the dishes")
const items = ref<Item[]>([{id: 123, description: "Something else", is_done: false}]);

function add() {
  items.value.push({id: Date.now(), description: text.value, is_done: false})
  text.value = '';
}

function clear() {
  items.value = [];
}

function deleteItem(targetForDeletion: Item) {
  items.value = items.value.filter(item => item.id !== targetForDeletion.id)
}
</script>
