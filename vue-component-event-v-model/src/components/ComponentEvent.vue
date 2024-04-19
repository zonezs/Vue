<template>
    <h3> Main Component Event </h3>

    <p>搜索内容为：{{ searchStr }}</p>

    <SearchComponent @searchEvent="getSearch" />
</template>

<script>
import SearchComponent from './SearchComponent.vue'

export default {
    data() {
        return {
            searchStr: ""
        }
    },
    components: {
        SearchComponent
    },
    methods: {
        getSearch(data) {
            this.searchStr = data;
        }
    },
}
</script>