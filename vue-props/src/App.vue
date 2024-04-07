<template>
  <h3>{{ title }}</h3>
  <Parents />
</template>

<script>
import Parents from './components/Parents.vue'

export default {
  data() {
    return {
      title: "父子组件的数据传递"
    }
  },
  components: {
    Parents
  }
}
</script>

<style scoped>

</style>