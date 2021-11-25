<template>
<!-- search(cardData.title) -->
<div class="card-container"  v-on:click="urlifyAndDisplayTitle(cardData.bloggerlink)" @mouseenter="mouseOver" @mouseleave ="mouseOver">  
      <router-link to="/searchResult">
        <div class="card">
            <img class="card-img" :src="cardData.referenceIdentifier" alt=""> 
            <span class="hover" v-if="isHover">
              <div class="hover-font" >{{cardData.title}}<br><br>{{cardData.readyContent}}</div>
              <div id="test">또순이네</div>
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

        getThumb (url){
          console.log('클릭 url :',url)
          axios.post( "http://api.linkpreview.net", {q:url, key:'123456'}).then((res)=>{
            console.log('섬네일 가져오기',res)
          }).catch((err)=> {
            console.log(err)
          })
        },

         getTitle(externalUrl){
          //document.getElementById("test").innerHTML += "<bR>in title";
          $.ajax({
            url: "https://crossorigin.me/"+externalUrl,
            success: function(data) {
              document.getElementById("test").innerHTML += "success";
              var matches = data.match(/<title>(.*?)<\/title>/);
              //alert(match[1]);
              return(matches[1]);
            },
            error: function(e) {
              document.getElementById("test").innerHTML += "error";
              alert("error! " + e);
            }
          });
        },

        urlify(text) {
          var urlRegex = /(https?:\/\/[^\s]+)/g;
          return text.match(urlRegex);
        },
        urlifyAndDisplayTitle(_url){
          var text = _url
          
          //document.getElementById("test").innerHTML += "found text <br>";
          var url = this.urlify(text);
          //document.getElementById("test").innerHTML += "found url " + url;
          var title = this.getTitle(url);
          console.log(title)
          //document.getElementById("test").innerHTML = "<br>found title" + title;
          //var newText = text.replace(url,title);
          //document.getElementById("url").innerHTML = newText;
        }

        
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