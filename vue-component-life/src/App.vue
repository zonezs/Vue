<template>
  <ComponentUser />

  <ComponentUserData />
</template>

<script>
import ComponentUser from './components/ComponentUser.vue'
import ComponentUserData from './components/ComponentUserData.vue'

export default {
  components: {
    ComponentUser,
    ComponentUserData
  }
}

</script>