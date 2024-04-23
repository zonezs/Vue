<template>
  <h3>异步组件的动态懒加载模式</h3>

  <component :is="tableComponent"></component>

  <button @click="changedHandler">切换组件</button>
</template>

<script>
import ComponentA from './components/ComponentA.vue';
//import ComponentB from './components/ComponentB.vue';

/**
 * 注意：异步加载组件的方式，注意这种写法，特别重要
 */
import { defineAsyncComponent } from 'vue';
const ComponentB = defineAsyncComponent(() => 
  import('./components/ComponentB.vue')
)

export default {
  data() {
    return {
      tableComponent: "ComponentA"
    }
  },
  components: {
    ComponentA,
    ComponentB
  },
  methods: {
    changedHandler() {
      this.tableComponent = this.tableComponent === "ComponentA" ? "ComponentB" : "ComponentA"
    }
  }
}
</script>