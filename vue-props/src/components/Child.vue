<template>
    <h4>{{ title }}</h4>

    <h4>{{ dynamicDesc }}</h4>
</template>

<script>
export default {
    data() {
        return {
            desc: ""
        }
    },
    // props 数据传递是用数组的方式来接收父级的参数，并且支持多个参数接收
    /*
    注意事项：
    props 传递数据，只能父级传给子级，不能反其道而行之
    */
    props: ["title", "dynamicDesc"]
}
</script>