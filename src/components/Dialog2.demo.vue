<demo>
一键打开 Dialog
</demo>
<template>
<div>
  <Button @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts" setup>
import {
  Button,
  openDialog
} from "../lib/index";

import {
  h
} from 'vue'

const TEXT_MESSAGE = 'ok 和 cancel 函数通过闭包的特性才能访问到我'

export const showDialog = () => {
  openDialog({
    title: () => h('strong', {}, '标题'),
    content: () => h('p', {}, '你好'),
    ok() {
      console.log('ok -' + TEXT_MESSAGE)
    },
    cancel() {
      console.log('cancel - ' + TEXT_MESSAGE)
    }
  })
}

export default {
  components: {
    Button
  },
}
</script>
