<script setup>
defineProps({
  show: Boolean
});
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div>
          <slot>default body</slot>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Default Close!</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .4);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: .8rem;
}

.modal-footer button {
  background: #ddd;
  padding: .25rem .5rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #c8c8c8;
}
/* The 'modal' prefix for these classes is applied to any <Transition> tags which have the name="modal".
  The class name can be anything you want */

.modal-enter-active, .modal-leave-active {
  transition: opacity 1s;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-to, .modal-leave-from {
  opacity: 100;
}

</style>