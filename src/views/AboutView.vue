<script setup>
import {useFlash} from "@/composables/useFlash";

import {useCounterStore} from "@/stores/CounterStore";

let counter = useCounterStore()

let {flash} = useFlash()
</script>

<template>
  <main>
    <p>
      <button @click="flash('Success!', 'You have succeeded')"></button>
      <button @click="counter.count++">Increment Counter {{ counter.count }}</button>
    </p>


  </main>
</template>