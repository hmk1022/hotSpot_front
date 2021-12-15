<template>
  <div class="diary-container">
    <div>
      <label>Title</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="1"
        v-model="title"
      ></b-form-textarea>
    </div>

    <div style="margin-top: 10px">
      <label>Desciption</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="20"
        v-model="content"
      ></b-form-textarea>
    </div>

    <b-button type="" @click="submitDiary()" class="mt-3" variant="primary">post!</b-button>
  </div>
  
</template>

<script>
import axios from 'axios';
import {config} from '../config';

export default {
    name: 'UploadDiary',
    components : {},
    data () {
      return {
        title: "",
        content: ""
      }
    },
    methods : {
      submitDiary (){
        console.log('param : ',this.title, this.content)
        axios.post(`${config.localUrl}/diary/post`,{
          title: this.title,
          content: this.content,
          headers : {
            "Authorization": localStorage.getItem("Authorization")
          }
        }).then((res)=> {
          console.log('게시물 작성 반응값 : ', res)
        })
      }
    }

}
</script>

<style>
  .diary-container {
    width: 80%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
  }
</style>