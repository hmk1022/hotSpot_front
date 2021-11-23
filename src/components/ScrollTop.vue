<template>
  <div class="btn-container">
    <i class="fas fa-angle-up"></i>
  </div>
</template>

<script>
export default {
    name: 'scrollTop',
    methods : {
        scrollTop () {
            window.addEventListener("scroll", this.scrollListener);
        },
        scrollTopBtn () {
            this.intervalId = setInterval(() => {
            if (window.pageYOffset === 0) {
                clearInterval(this.intervalId);
            }
            window.scroll(0, window.pageYOffset - 50);
            }, 20);
        },
    }
}
</script>

<style>
    .btn-container{
        position: fixed;
        width: 50px;
        height: 50px;
        background-color: white;
        bottom: 50px;
        right: 50px;
        z-index: 100;
        border-radius: 50%;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    }
</style>