<script>

// 第一步：引入组件
import MyComponent from './components/MyComponent.vue'

export default {

  // 第二步：注入组件
  components: {
    MyComponent
  }
}
</script>

<template>  

  <!-- 第三步：显示组件 -->
  <MyComponent />
</template>

<!-- scoped：让当前样式只在当前组件中生效，如果不加的话，相当于全局组件，在任何地方都会生效，相当于作用域 -->
<style scoped>
</style> 