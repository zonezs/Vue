<template>
  <h3>组件插槽基础知识</h3>
  
  <!-- 注意一：插槽的方式，需要要写成双标签形式才行，不能再已单标签加 ‘/’ 的方式来书写了 -->
  <!-- <ComponentsSlotBase></ComponentsSlotBase> -->

  <ComponentsSlotBase>
    <template v-slot:header>
      <h2>我是具名插槽头部</h2>
    </template>

    <!-- 注意二：‘v-slot:footer‘ 可以简写为 ‘#footer’ -->
    <template #footer>
        <h4>我是具名插槽尾部</h4>
    </template>
  </ComponentsSlotBase>
  

  <hr>
  <ComponentsSlotAttr  v-slot="slotProps">
    <p>{{ slotProps.msg }}</p>
  </ComponentsSlotAttr>

  <ComponentsSlotAttr #footer="slotProps">
    <p>{{ slotProps.msg }}</p>
  </ComponentsSlotAttr>

</template>

<script> 
import ComponentsSlotBase from './components/ComponentsSlotBase.vue'
import ComponentsSlotAttr from './components/ComponentsSlotAttr.vue'
export default {
  components: {
    ComponentsSlotBase,
    ComponentsSlotAttr
  }
}
</script>