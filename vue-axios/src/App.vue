<template>
  <h3>Axios 网络请求</h3>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log('load');
    axios({
      method:'get',
      url:'https://api.oioweb.cn/api/SoulWords'
    }).then(res => {
      console.log(res.data);
    })
  },
}
</script>