<template>
  <form @submit.prevent>
    <input v-model="credentials.email" type="email">
    <input v-model="credentials.password" type="password">
    <button type="submit" @click="login">Submit</button>
  </form>
</template>


<script lang="ts" setup>
import httpClient from "@/support/HttpClient";
import {reactive} from "vue";

const credentials = reactive({email: "", password: ""});

async function login() {
  const result = await httpClient.post("api/login", credentials)

  window.localStorage.setItem('token', result?.data?.token);
}

</script>
