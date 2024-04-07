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
    props: ["title", "dynamicDesc"]
}
</script>