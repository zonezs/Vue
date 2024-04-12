<template>
    <h3>组件事件 Event</h3>
    
    <Child @someEvent="getHandler" />

    <p>父元素接收到的子元素数据：{{ reciveMsg }}</p>
</template>

<script>
import Child from './Child.vue'
export default {
    data() {
        return {
            reciveMsg: ""
        }
    },
    components: {
        Child
    },
    methods: {
        getHandler(data) {
            console.log("父元素接收到了", data)
            this.reciveMsg = data
        }
    }, 
}
</script>