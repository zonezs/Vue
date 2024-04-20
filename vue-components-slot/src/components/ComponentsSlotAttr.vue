<template>
    <h3>插槽中的数据传递</h3>
    <hr>
    <slot :msg="childMsg">
        <h2>我是插槽</h2>
    </slot>
    <slot :msg="childFooter" name="footer">
        <h4>我是具名插槽尾部</h4>
    </slot>
</template>

<script>
export default {

    data() {
        return {
            childMsg: "子组件中的插槽数据",
            childFooter: "子组件的具名插槽数据"
        }
    },
}
</script>