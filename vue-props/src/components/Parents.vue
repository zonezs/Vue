<template>
    <h4>{{ title }}</h4>

    <!-- 静态传递 -->
    <Child title="this is parents data" />

    <!-- 通过 v-bind 动态传递 -->
    <Child :title="dynamicDesc" />
    
    <Child :age="age" />

    <Child :arr="arr" />
    
    <Child :userInfo="userInfo" />

</template>

<script>

import Child from './Child.vue';

export default {
    data() {
        return {
            title: "父控件 Parents",
            dynamicDesc: "父子组件的动态数据传递",
            age: 20,
            arr: [10, 20, 30],
            userInfo: {
                name: "kk",
                age: 20
            }
        }
    },
    components: {
        Child
    }
}
</script>