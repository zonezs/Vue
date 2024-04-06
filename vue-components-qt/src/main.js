// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";

import Header from "./components/Header.vue";

const app = createApp(App);

// 全局组件注入的方式，必须在中间这里注册组件（通常建议还是使用局部组件注入）
// 如果全局注册的话，那么如果这个组件在项目中并没有使用的话，也会被一并打包进入项目
app.component("Header", Header);

app.mount("#app");
