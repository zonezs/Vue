<template>
  <h3>通过 props 父传子的函数调用方式进行子传父传递数据</h3>

  <ComponentPropsFuncA />
</template>

<script>
import ComponentPropsFuncA from './components/ComponentPropsFuncA.vue'
export default {
  components: {
    ComponentPropsFuncA
  }
}
</script>