<template>
  <div class="home">
    {{this.$store.state}}
  </div>
</template>

<script>
//import axios from "axios";
import dotenv from "dotenv";
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

const spotStore = 'spotStore'

export default {
  name: "Home",
  components: {},
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
