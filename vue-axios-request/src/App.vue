<template>
  <h3>axios 的封装使用</h3>

  <p>{{ result.content }}</p>
</template>

<script>
/**引入封装后的 api */
import api from './api/index';
export default {
  data() {
    return {
      result: []
    }
  },
  mounted() {
    console.log('mounted');
    api.getHeFei().then(res => {
      console.log(res.data);
      this.result = res.data.result;
    })
  },
}
</script>  