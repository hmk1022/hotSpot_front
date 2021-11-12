<template>
<div class="card-container">
  <div class="card-wrap">
      <div class="card">
          <img class="card-img" :src="cardData.referenceIdentifier" alt="">
      </div>
  </div>
</div>
</template>

<script>
export default {
    name:'Card',
    props: ['cardData']
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
    height: 100%;   
}

.card{
    background-position: center;
    width: 100%;
    aspect-ratio: 1/1; 
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;   
   
}

.card-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    cursor: pointer;  
}

</style>