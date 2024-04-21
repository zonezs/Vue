<template>
    <h5>ComponentA</h5>

    <p>{{ msg }}</p>

    <button @click="changeMsgHandler">改变数据</button>
</template>

<script>
export default {
    beforeUnmount() {
        console.log("被销毁之前");
    },
    unmounted() {
        console.log("被销毁之后");
    },
    data() {
        return {
            msg: "老数据"
        }
    },
    methods: {
        changeMsgHandler() {
            this.msg = "新数据"
        }
    }
}
</script>