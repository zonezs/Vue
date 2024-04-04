<template>
    <h3>列表渲染</h3>   
    <p v-for="item in name">{{ item }}</p>
    <p>----</p>
    <p v-for="name1 in name">{{ name1 }}</p>
    <h2>{{ count }}</h2>
    <button @click="addCount">{{ count }}</button>
</template>

<script>
export default {
    data() {
        return {
            name: ['hello world', 'zhangsan', 'wangwu'],
            count: 0
        }
    },
    // 以后所有的方法都采用这种方式来写
    methods: {
        addCount(e) {
            // Vue 中的 event 对象就是原生 JS 中的 Event 对象
            console.log(e);
            // 读取到 data 里面的数据方案：this.count
            this.count++
        }
    },
}
</script>