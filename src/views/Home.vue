<template>
  <div class="home"> 
    <div class="container">
      <div v-for="card in cards" :key="card.rnum">
          <Card v-bind:cardData="card"/>
      </div> 
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import dotenv from "dotenv";
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import Card from '../components/Card.vue'

const spotStore = 'spotStore'

export default {
  name: "Home",
  components: { Card },
  data () {
    return {
      cards : this.$store.state.spotStore.spots
    }
  },
  methods: {
    getData() {
      this.$store.dispatch({type:'getSpots', commit:'SET_SPOTS' , test: 'test'})
    },
  ...mapMutations(spotStore, ['spotStore/SET_SPOTS']),
  ...mapActions(spotStore, ['spotStore/getSpots'])
  },
  
  mounted() {
    dotenv.config();
    this.getData();
  },
};
</script>

<style lang='scss' scoped >
  .home{
    width: 80%;
    position:absolute;
    left: 50%;
    transform: translate(-50%);
  }

  .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: 10px;
      width: 90%;    
      @media (min-width: 1440px) {
        //grid-template-columns: ${(props) => props.grid};
        grid-gap: 5px;
      }
      @media (max-width: 1440px) {
        /* 1440밑으로 넓이가 내려가면 */
        margin-top: 4vh;
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
        margin-top: 250px;
        padding-top: 0px;
      }
      @media (max-width: 960px) {
       
        grid-gap: 5px;
        margin: auto;
        margin-top: 250px;
        padding-top: 0px;
      }
      @media (max-width: 600px) {
        margin-top: 19vh;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2px;
      }
  }
</style>
