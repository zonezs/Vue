<template>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content:space-between;  /** 先两边贴边，再平均分配剩余空间 */
    width: 80%;
    height: 300px;
    background-color: pink;
    flex-wrap: wrap;
    /* align-items: center; */
    align-content: space-around;
}

div span {
    background-color: purple;
    width: 200px;
    height: 100px;
}
</style>


<!-- flex-direction：设置主轴还是侧轴 -->

<!-- justify-content：设置主轴上的子元素排列方式 -->

<!-- flex-wrap：设置子元素是否换行，默认是不换行的，只会缩小宽度 -->

<!-- align-items：设置侧轴上子元素的排列方式，通常在子项为单行的时候使用 -->

<!-- align-content: 设置侧轴上子元素的排列方式，用于多行 -->