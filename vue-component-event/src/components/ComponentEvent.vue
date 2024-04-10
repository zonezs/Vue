<template>
    <h3>{{ title }}</h3>
    
    <Child />
</template>

<script>
import Child from './Child.vue'
export default {
    data() {
        return {
            title: "组件事件 Event"
        }
    },
    components: {
        Child
    }
}
</script>