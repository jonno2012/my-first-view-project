<template>
  <QuizHeader />

  <QuizQuestion />

  <QuizFooter />
</template>

<script setup>

import QuizHeader from "@/components/QuizHeader.vue";
import QuizQuestion from "@/components/QuizQuestion.vue";
import QuizFooter from "@/components/QuizFooter.vue";
import {provide, ref} from "vue";

// let props = defineProps({quiz: Object})
let quiz = ref({name: 'Jeffrey Way is my code dad'})
let name = ref('Shakin` Stevens')

provide('key', 'tits')

// provide('name', {
//   name,
//   changeName: () => name.value = 'Changed'
// })

provide('quiz', quiz)

</script>