<template>
    <h3>{{ title }}</h3>
    
    <button @click="clickHandler">{{ btnTitle }}</button>

    <Child />
</template>

<script>
import Child from './Child.vue'
export default {
    data() {
        return {
            title: "组件事件 Event",
            btnTitle: "点我调用子组件"
        }
    },
    components: {
        Child
    },
    methods: {
        clickHandler() {
            console.log("调用了子组件");
        }
    }
}
</script>