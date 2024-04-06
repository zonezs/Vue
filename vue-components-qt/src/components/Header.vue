<template>
    <div class="header">
        {{ title }}
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: "Header View"
        }
    }
}
</script>

<style scoped>
.header {
    font-size: 60px;
    width: 100%;
    height: 100px;
    color: red;
    opacity: 30%;
    border: 5px solid #999;
    border-color: gray;
    text-align: center;
    line-height: 100px;
    box-sizing: border-box;
}
</style> 