<template>
    <h5>Component-B</h5>

    <p>{{ onEvent("用函数的方式，由子元素组件向父级元素组件传递参数") }}</p>
</template>

<script>
export default {
    props: {
        title: String,
        onEvent: Function  // 函数类型，由父级元素声明带参数函数方法
    }
}
</script>