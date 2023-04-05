<script setup>
import TheWelcome from '../components/TheWelcome.vue'
// import { ref } from "vue"

let message = $ref('test')

let doSomething = () => {
  alert("sfefsdfsdf")
}

setTimeout((() => {
  message.value = 'i have been changed'
}), 2000)

</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message">
      <br>
      <button @click="doSomething">Do Something</button>
    </p>
  </main>
</template>
