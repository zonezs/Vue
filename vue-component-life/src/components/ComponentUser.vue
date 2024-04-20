<template>
    <h3>组件的生命周期应用</h3>

    <p ref="name">{{ msg }}</p>
</template>

<script>
export default {
    beforeMount() {
        console.log(this.$refs.name);  // undefined 这里就读取不到 p标签
    },
    mounted() {
        console.log(this.$refs.name);  // <p>生命周期的应用</p>   这里已经渲染完成了，就可以读取到 p标签了
    },
    data() {
        return {
            msg: "通过ref获取元素DOM结构" 
        }
    },
}
</script>