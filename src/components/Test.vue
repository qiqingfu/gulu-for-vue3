<template>
  <div>{{ count }}</div>
  <button @click="addHandle">Add</button>
  <reverseTitle title="Hello,World"/>
</template>

<script lang="ts" setup>
  import reverseTitle from "./TestComponents.vue"
  import { ref } from 'vue'

  export let count = ref(0);
  export const addHandle = function () {
  	count.value = count.value + 1
  };

  export default {
  	components: {
			reverseTitle
    }
  }

</script>

<style scoped>

</style>
