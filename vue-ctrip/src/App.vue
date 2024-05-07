<template>
  <ComponentSearch />
  <ComponentNavGird />
</template>

<script>
import ComponentSearch from './components/ComponentSearch.vue'
import ComponentNavGird from './components/ComponentNavGird.vue'
export default {
  data() {
    return {
      title: ""
    }
  },
  components: {
    ComponentSearch,
    ComponentNavGird
  }
}
</script>