<template>
  <div class="home"> 
    <Spinner v-if="isLoading"/>
    <div class="container">
      <div v-for="card in cards" :key="card.rnum">
          <Card v-bind:cardData="card"/>
      </div>
    </div>
     <infinite-loading @infinite="infiniteHandler" spinner="Spinner"></infinite-loading>
  </div>
</template>

<script>
//import axios from "axios";
import dotenv from "dotenv";
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import Spinner from '../components/Spinner.vue'
import Card from '../components/Card.vue'
import InfiniteLoading from "vue-infinite-loading";

const spotStore = 'spotStore'

export default {
  name: "Home",
  components: { Card , Spinner , InfiniteLoading },
  data () {
    return {
      cards : this.$store.state.spotStore.spots,
      isLoading: true,
      pageNo: 2,
    }
  },
  methods: {
    infiniteHandler() {
      this.$store.dispatch({type:'getSpots', commit:'SET_SPOTS' ,numOfRows: 16 , pageNo: 1 ,test: 'test'})
      this.pageNo++
    },
  ...mapMutations(spotStore, ['spotStore/SET_SPOTS']),
  ...mapActions(spotStore, ['spotStore/getSpots'])
  },
  
  mounted() {
    dotenv.config();
    this.infiniteHandler();
  },
  watch: {
    cards () {
      this.isLoading = false;
    }
  }
};
</script>

<style lang='scss' scoped >
  .home{
    width: 80%;
  
  }

  .container {
    margin: auto;
    display: grid;
    position:absolute;
    left: 50%;
    margin-top: 30px;
    transform: translate(-50%);
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
      grid-gap: 5px;
      margin: auto;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2px;
    }
  }
</style>
