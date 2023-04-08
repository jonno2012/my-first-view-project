<template>
  <footer>
    <h4>{{ key }}</h4>

    <QuizFooterLinks />
  </footer>
</template>

<script setup>
import QuizFooterLinks from "@/components/QuizFooterLinks.vue";
import {inject} from "vue";

let key = inject('key')

defineProps({ quiz: Object })
</script>