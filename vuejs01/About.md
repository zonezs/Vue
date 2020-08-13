### 语法糖 (插值指令) 对应的 Mustache 指令

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

> v-html 

> v-text (不够灵活,用的不多)

> v-pre (原封不动的展示效果)
```
<h2 v-pre>{{message}}</h2>

输出效果: {{message}}		
```
