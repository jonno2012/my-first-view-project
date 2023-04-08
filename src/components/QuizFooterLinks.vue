<template>
  <div>
    <h5>{{ quiz.name }}</h5>

    <button>{{ quiz.name }}</button>
  </div>

  <ul>
    <li><a href="#">asdas</a></li>
    <li><a href="#">fffff</a></li>

  </ul>
</template>

<script setup>
import {inject} from "vue";

defineProps({ quiz: Object })

// let { name, changedName } = inject('name')

let quiz = inject('quiz')

setTimeout(() => {
  quiz.value = {name: 'Way is a legend'}
}, 2000)
</script>
