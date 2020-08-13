### 语法糖

> v-for item in message
```
<li v-for="item in message">{{item}}</li>
```

> v-on

> @click
```
<div id="app">
   <h2>当前计数: {{counter}}</h2>
   <button type="button" v-on:click="add">+</button>		
   <button type="button" @click="sub">-</button>
</div>
```
