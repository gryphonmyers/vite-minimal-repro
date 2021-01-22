<template>
  <main-component /> 
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    MainComponent: defineAsyncComponent(() => import('./components/main.vue'))
  }
}
</script>