<script setup>
import {useFlash} from "@/composables/useFlash";

let {flash} = useFlash()
</script>

<template>
  <main>
    <p>
      <button @click="flash('Success!', 'You have succeeded')"></button>
    </p>
  </main>
</template>