<template>
  <h3>flex 布局</h3>
  <ComponentFlex />

  <h3>flex 子项布局</h3>
  <ComponentFlexChild />
</template>

<script>
import ComponentFlex from './components/ComponentFlex.vue'
import ComponentFlexChild from './components/ComponentFlexChild.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    ComponentFlex,
    ComponentFlexChild
  }
}
</script>