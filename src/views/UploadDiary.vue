<template>
  <div class="diary-container">
    <div>
      <label>Title</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="1"
      ></b-form-textarea>
    </div>

    <div style="margin-top: 10px">
      <label>Desciption</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="20"
      ></b-form-textarea>
    </div>
  </div>
</template>

<script>

export default {
    name: 'UploadDiary',
    components : {},
    methods : {

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