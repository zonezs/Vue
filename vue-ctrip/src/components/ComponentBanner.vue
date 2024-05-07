<template>
    <div>
        <img @click="imgHandler" src="https://dimg04.c-ctrip.com/images/0zg0p12000cz4eu861DA5.jpg" alt="banner">
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        imgHandler() {
            console.log("img click");
        }
    },
}
</script>

<style scoped> 
div {
    width: 100%;
    height: 120px;
}
img {
    margin-top: 10px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
}
</style>