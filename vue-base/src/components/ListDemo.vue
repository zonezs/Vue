<template>
    <h3>列表渲染</h3>   
    <p v-for="item in name">{{ item }}</p>
    <p>----</p>
    <p v-for="name1 in name">{{ name1 }}</p>
</template>

<script>
export default {
    data() {
        return {
            name: ['hello world', 'zhangsan', 'wangwu']
        }
    }
}
</script>