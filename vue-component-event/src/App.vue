<template>
  <ComponentEvent />
</template>

<script>
import ComponentEvent from './components/ComponentEvent.vue'
export default {
  components: {
    ComponentEvent
  }
}
</script>

<!-- 
  注意：
      组件之间的数据传递方案：
      1、父传子：props
      2、子传父：this.$emit
 -->