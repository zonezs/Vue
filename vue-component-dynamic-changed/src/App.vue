<template>
  <h3>动态组件的切换</h3>

  <!-- 
    注意：
      Vue 本身提供了一个承载组件的标签，如果遇到动态组件的方式，可以用这种方式来切换和选择需要显示的组件
   -->
  <component :is="tableComponent"></component>

  <!-- 
    通过使用 keep-alive 标签可以使得组件保存存活状态，并没有被销毁
   -->
  <keep-alive>
    <component :is="tableComponent"></component>
  </keep-alive>

  <button @click="changedTabHandler">切换Tab组件</button>

</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
export default {
  data() {
    return {
      tableComponent: "ComponentA"  // 需要注意的是：组件赋值时需要使用 “” 字符串的形式，一定要切记 
    }
  },
  components: {
    ComponentA,
    ComponentB
  },
  methods: {
    changedTabHandler() {
      this.tableComponent = this.tableComponent === "ComponentA" ? "ComponentB" : "ComponentA"
    }
  },
}
</script>