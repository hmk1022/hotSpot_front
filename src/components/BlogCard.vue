<template>
<!-- search(cardData.title) -->
<div class="card-container"  v-on:click="align()" @mouseenter="mouseOver" @mouseleave ="mouseOver">  
      <router-link to="/searchResult">
        <div class="card">
            <img class="card-img" :src="cardData.referenceIdentifier" alt=""> 
            <span class="hover" v-if="isHover">
              <div class="hover-font" >{{cardData.title}}<br><br>{{cardData.readyContent}}</div>
            </span> 
        </div>
      </router-link>
</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
//import { mapMutations } from 'vuex';

export default {
    name:'Card',
    props: {
      cardData: Object
    },
    data () {
       return {
         isHover : false,
         searchContent : ""
       } 
    },
    methods : {
        mouseOver (){
          //console.log('마우스');
          this.isHover = !this.isHover
        },
        goUrl (url){
          window.location.href = url;
        },
        search (searchUrl){
          let regex = /[^0-9]/gi;
          console.log('검색어1 : ', searchUrl)
          let replaceSearch = searchUrl.replace(regex,"");
          axios.post(`http://localhost:8000/search/url=${replaceSearch}`).then((res) =>{
            this.$store.commit('SET_SEARCH_RESULT', res);
          }).catch((err)=>{
            console.log('에러 : ',err)
          })
        },
        createThumb (_thumbUrl){
          let img = document.createElement('IMG');
          let thumbUrl = _thumbUrl.replace(/[^:]*:\/\/([^:\/]*)(:{0,1}\/{1}.*)/, '$1');
          img.src = 'http://msnsearch.srv.girafa.com/srv/i?s=MSNSEARCH&r='+ thumbUrl;
          img.className = 'linkThumb';
          img.alt = thumbUrl;
          img.style.display = 'none';
          return img
        },


        align (array){
          
          let thisUrl = document.domain;
          console.log('thisUrl1 : ',thisUrl)
          if(thisUrl.split('.')[0] == 'www'){
            thisUrl = thisUrl.substring(4, thisUrl.length);
          }
          
          $(array).each((element)=> {
            var url = element.href;
            if(url.indexOf(thisUrl) == -1) {
              let img = this.createThumb(url)
              console.log(img)
            }
          })


        },
    },

}
</script>

<style>
.card-container{
    /* width: 400px;
    height: 400px; */
}

.card-wrap{
    z-index: 200;
    width: 100%;
   
}

.card{
    background-position: center;
    width: 100%;
    aspect-ratio: 1/1; 
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;   
    border: none;
   
}

.card-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    cursor: pointer;  
}

.hover {
  font-size: 0.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: 1;
  color: white;
}

.hover-font{
  font-size: 0.5rem;
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>