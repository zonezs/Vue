<template>
    <h3>Child</h3>

    <button @click="clickEventHandler">传递数据</button>
</template>

<script>
export default {
    data() {
        return {
            msg: "Child 的数据"
        }
    },
    methods: {
        clickEventHandler() {
            // 通过自定义事件向父元素传递数据，支持传递各种类型的参数过去
            this.$emit("someEvent", this.msg)
        }
  }
}
</script>

<style scoped>
</style>