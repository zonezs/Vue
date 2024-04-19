<template>
    搜索：<input type="text" v-model="search">
</template>

<script>

export default {
    /*
        注意：Vue3 在子组件向父组件 emit 的话，父组件会报警告；
            解决方式就是在子组件中加上声明 emits:[]
    */
    emits:["searchEvent"],
    data() {
        return {
            search: ""
        }
    },
    watch: {
        search(newValue, oldValue) {
            console.log(newValue);
            this.$emit("searchEvent", newValue)
        }
    }
}
</script>