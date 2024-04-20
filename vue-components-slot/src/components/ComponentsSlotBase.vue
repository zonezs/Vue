<template>
    <h3>插槽基础</h3>
    <slot>
        插槽默认值
        <hr> 
        <h4>我是第二个值</h4>
        <h5>我是第三个值</h5>        
    </slot>

    <hr>
    <slot name="header">
        <h2>我是具名插槽头部</h2>
    </slot>
    <slot name="footer">
        <h4>我是具名插槽尾部</h4>
    </slot>
</template>

<script>

</script>