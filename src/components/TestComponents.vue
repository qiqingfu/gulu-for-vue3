<template>
  <h2>
    {{ reverseTitle }}
  </h2>
</template>

<script lang="ts" setup="props">

  import { computed } from 'vue'

  declare const props: {
  	title: string
  };

	export const reverseTitle = computed(() => props.title.split('').reverse().join(''))

	export default {
  	props: {
  		title: String
    }
  }

</script>

<style scoped>

</style>
