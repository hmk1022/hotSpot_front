<template>
  <div> 
    <!-- <Spinner v-if="isLoading"/> -->
    <div class="container"> 
      <div v-for="card in Posts" :key="card.url" >
          <Card v-bind:cardData="card"/>
      </div>
    </div>
  <infinite-loading @infinite="infiniteHandler" spinner="waveDots">무한스크롤 끄읏 :)</infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
//import Spinner from '../components/Spinner.vue'
import Card from '../components/Card.vue'
import InfiniteLoading from "vue-infinite-loading";

const spotStore = 'spotStore'

export default {
  name: "Home",
  components: { Card  , InfiniteLoading },
  data () {
    return {
      cards : this.$store.state.spotStore.spots,
      isLoading: true,
      pageNo: 1,
      Posts : []
    }
  },
  methods: {
    infiniteHandler($state) {
      axios
      .get(
        `http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver01?serviceKey=${process.env.VUE_APP_SPOT}&pageNo=${this.pageNo}&numOfRows=16`
      )
      .then((res) => {
        //console.log('처음 res : ', res);
        let data = res.data.response.body.items.item;
        //console.log('data',data)
        for (let i = 0; i < data.length; i++){
           this.Posts.push(data[i]);
        }
        this.pageNo++
        $state.loaded();
      })
      .catch((err) => {
        console.log(err);
      });
    },
    test () {
      console.log('검색시작');
      axios
      .get(`http://localhost:8000/search`).then((res)=> {
        console.log('테스트 : ', res)
      })
    },
  ...mapMutations(spotStore, ['spotStore/SET_SPOTS']),
  ...mapActions(spotStore, ['spotStore/getSpots'])
  },
  
  mounted() {
    this.test()
  },
};
</script>

<style lang='scss' scoped >
 

  .container {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    width: 100%;    
    @media (min-width: 1440px) {
       grid-gap: 5px;
    }
    @media (max-width: 1440px) {
        /* 1440밑으로 넓이가 내려가면 */
        
    }
      /* @media (max-width: 1280px) {
        grid-template-columns: ${(props) => props.grid};
        grid-gap: 10px;
        margin: auto;
        margin-top: 4vh;
        padding-top: 0px;
      } */
    @media (max-width: 1025px) {       
      grid-gap: 5px;
      margin: auto;     
    }
    @media (max-width: 960px) {   
     grid-template-columns: 1fr 1fr 1fr; 
      grid-gap: 5px;
      margin: auto;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2px;
    }
  }
</style>
