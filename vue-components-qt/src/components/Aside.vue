<template>
    <div class="asideContainer">
       <h3>{{ title }}</h3>
       <AsideContent />
       <AsideContent />
       <AsideContent />
    </div>
</template>

<script>
import AsideContent from "./AsideContent.vue"

export default {
    data() {
        return {
            title: "Aside View"
        }
    },
    components: {
        AsideContent
    }
}
</script>

<style scoped>
.asideContainer {
    float: right;
    font-size: 60px;
    width: 30%;
    height: 600px;
    color: blue;
    border: 5px solid #999;
    box-sizing: border-box;
}
</style> 