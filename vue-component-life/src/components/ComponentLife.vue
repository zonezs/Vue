<template>  
    <p>{{ msg }}</p>
  
    <button @click="updateHandler">更新数据</button>
  </template>
  
  <script>
  /**
   * 生命周期函数：
   *    创建期：beforeCreate、created
   *    挂载期：beforeMounte、mounted
   *    更新期：beforeUpdate、updated
   *    销毁期：beforeUnmounte、unmounted
   */
  export default {
    /** 
     * 生命周期函数是顶层独立方法
    */
    beforeCreate() {
      console.log("组件创建之前");
    },
    created() {
      console.log("组件创建之后");
    },
    beforeMount() {
      console.log("组件渲染之前");
    },
    mounted() {
      console.log("组件渲染之后");
    },
    beforeUpdate() {
      console.log("组件更新之前");
    },
    updated() {
      console.log("组件更新之后");
    },
    beforeUnmount() {
      console.log("组件销毁之前");
    },
    unmounted() {
      console.log("组件销毁之后");
    },
    data() {
      return {
        msg: "各种生命周期方法"
      }
    },
    methods: {
      updateHandler() {
        this.msg = "组件生命周期方法更新了"
      }
    },
  }
  </script>