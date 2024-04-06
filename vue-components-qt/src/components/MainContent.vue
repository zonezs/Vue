<template>
    <h3 class="mainContainer">{{ title }}</h3>
</template>

<script>
export default {
    data() {
        return {
            title: "Main Content View"
        }
    }
}
</script>

<style scoped>
.mainContainer {
    font-size: 20px;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    margin-top: 50px;
    background: gray;
    box-sizing: border-box;
}
</style> 