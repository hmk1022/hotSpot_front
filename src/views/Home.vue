<template>
  <div class="home">
   
  </div>
</template>

<script>
import axios from 'axios'
import dotenv from 'dotenv'

export default {
  name: 'Home',
  components: { },
  methods: {
      getData () {
          axios.get(`http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver01?serviceKey=${process.env.VUE_APP_SPOT}`).then((res)=>{
            console.log('광광지 데이터 : ', res);
          }).catch((err)=> {
            console.log(err);
          })
      },
  },
  mounted(){
    dotenv.config();
    this.getData();
  }
  
}
</script>
