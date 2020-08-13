### 语法糖

> v-for item in message
```
<li v-for="item in message">{{item}}</li>
```

> v-on @click
```
<div id="app">
   <h2>当前计数: {{counter}}</h2>
   <button type="button" v-on:click="add">+</button>		
   <button type="button" @click="sub">-</button>
</div>
```

> v-once 当数据变化时,不会随着改变
```
   <h2 v-once>你好啊</h2>		
```
