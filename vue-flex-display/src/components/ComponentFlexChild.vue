<template>
    <section>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    width: 60%;
    height: 300px;
    background-color: pink;
}

section div:nth-child(1) {
    width: 100px;
    height: 300px;
    background-color: blue;
}
section div:nth-child(2) {
    flex: 1;  /** 这就是子项目所占用的份数 */
    background-color: green;  
}
section div:nth-child(3) {
    width: 100px;
    height: 300px;
    background-color: yellow;
} 
</style>

<!-- 
    flex 布局中子项中属性：
        flex 子项目分配剩余空间，子项目占的份数
        align-self 控制子项自己在侧轴的排列方式
        order 属性定义子项的排列顺序
-->