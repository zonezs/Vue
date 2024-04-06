<template>
    <h3 class="asideContent">{{ title }}</h3>
</template>

<script>
export default {
    data() {
        return {
            title: "Aside Content View"
        }
    }
}
</script>

<style scoped>
.asideContent {
    font-size: 20px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    margin-top: 50px;
    background: gray;
    box-sizing: border-box;
}
</style> 