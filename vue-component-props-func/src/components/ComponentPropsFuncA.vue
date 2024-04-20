<template>
    <h4>Component-A</h4>

    <p>{{ childStr }}</p>

    <ComponentPropsFuncB title="A ---> Bsss" :onEvent="dataFunc" />
</template>

<script>
import ComponentPropsFuncB from './ComponentPropsFuncB.vue'
export default {
    data() {
        return {
            childStr: ""
        }
    },
    components: {
        ComponentPropsFuncB
    },
    methods: {
        dataFunc(data) {
            this.childStr = data
        }
    }
}
</script>