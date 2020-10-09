<template>
<div class="demo">
  <h2>{{component.__sourceCodeTitle}}</h2>
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-actions">
    <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
    <Button @click="showCode" v-else>查看代码</Button>
  </div>
  <div class="demo-code" v-if="codeVisible">
    <span @click="copyCode">复制代码</span>
    <pre class="language-html" v-html="html" />
  </div>

</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
import {
  computed,
  ref
} from 'vue';
const Prism = (window as any).Prism;
export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
		/**
     * html 通过 highlight 方法生成的高亮的 html 字符串
		 */
		const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    });
    const showCode = () => codeVisible.value = true;
    const hideCode = () => codeVisible.value = false;
    const copyCode = () => {
    	console.log("复制代码")
    };
    const codeVisible = ref(false);
    return {
      html,
      codeVisible,
      showCode,
      hideCode,
			copyCode
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    position: relative;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    & > span {
      position: absolute;
      right: 20px;
      top: 10px;
      padding: 4px 8px;
      font-size: 12px;
      cursor: pointer;
      border: 1px dashed transparent;

      &:hover {
        border-color: rgb(64, 169, 255);
        color: rgb(64, 169, 255);
        border-radius: 4px;
        transition: all .3s;
      }
    }

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
