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
     * post 请求，需要对 data 中参数进行 string 遍历
     * npm install --save querystring
     * import querystring from 'querystring'
     * querystring.stringify()
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
  }
}
</script>