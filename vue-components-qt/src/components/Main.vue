<template>
    <div class="main">
        <h3>{{ title }}</h3>

        <MainContent /> 
        <MainContent />
    </div>
</template>

<script>

import MainContent from "./MainContent.vue"


export default {
    data() {
        return {
            title: "Main View"
        }
    },
    components: {
        MainContent
    }
}
</script>

<style scoped>
.main {
    float: left;
    font-size: 60px;
    width: 70%;
    height: 600px;
    color: blue;
    border: 5px solid #999;
    box-sizing: border-box;
}
</style> 