<template>
  <h3>Axios 网络请求</h3>

  <div>{{ result.content }}</div>
</template>

<script>
import axios from 'axios'
import querystring from 'querystring'
export default {
  data() {
    return {
      result: []
    }
  },
  mounted() {
    // get 请求
    axios({
      method:'get',
      url:'https://api.oioweb.cn/api/SoulWords'
    }).then(res => {  /** axios 异步请求，执行 then 方法拿到返回数据 */
      console.log(res.data);
      this.result = res.data.result
    })

    /**
     * 那么 get 请求也可以简写为以下方式
     */
    axios.get('https://api.oioweb.cn/api/SoulWords').then(res => {
      console.log(res.data);
    })



    /** 
     * post 请求，需要对 data 中参数进行 string 转换一下格式
     * 1、npm install --save querystring
     * 2、import querystring from 'querystring'
     * 3、querystring.stringify()
    */
    axios({
      method: 'post',
      url: 'https://api.oioweb.cn/api/weather/weather',
      data: querystring.stringify({  // 对象类型要转换为字符串类型的参数进行提交
        'city_name': '合肥市'
      })
    })
    .then (res => {
      console.log(res.data);
    })

    /**
     * 那么 post 请求也可以简写为以下方式，在链接的后面直接带上 querystring.stringify({}) 转换参数即可
     */
    axios.post('https://api.oioweb.cn/api/weather/weather', querystring.stringify({
      'city_name': '合肥市'
    })).then(res => {
      console.log(res.data);
    })
  }
}
</script>