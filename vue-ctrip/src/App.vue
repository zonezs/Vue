<template>
  <ComponentSearch />
  <ComponentNavGird />
  <ComponentBanner />
</template>

<script>
import ComponentSearch from './components/ComponentSearch.vue'
import ComponentNavGird from './components/ComponentNavGird.vue'
import ComponentBanner from './components/ComponentBanner.vue'
export default {
  data() {
    return {
      title: ""
    }
  },
  components: {
    ComponentSearch,
    ComponentNavGird,
    ComponentBanner
  }
}
</script>

<!-- 

  banner pic
https://dimg04.c-ctrip.com/images/0zg0p12000cz4eu861DA5.jpg

 -->