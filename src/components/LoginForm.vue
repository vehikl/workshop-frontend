<template>
  <form @submit.prevent>
    <input v-model="credentials.email" type="email">
    <input v-model="credentials.password" type="password">
    <button type="submit" @click="login">Submit</button>
  </form>
</template>


<script lang="ts" setup>
import {HttpClient} from "@/support/HttpClient";
import {reactive} from "vue";

const http = new HttpClient();

const credentials = reactive({email: "", password: ""});

async function login() {
  const result = await http.post("api/login", credentials)

  window.localStorage.setItem('token', result?.data?.token);
}

</script>
