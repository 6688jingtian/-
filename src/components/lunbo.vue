<template>
	  <div>
	  	  <!-- swiper -->
        <swiper :options="swiperOption">

	        <swiper-slide><img src="../assets/1.jpg"></swiper-slide>
	        <swiper-slide><img src="../assets/2.jpg"></swiper-slide>
	        <swiper-slide><img src="../assets/3.jpg"></swiper-slide>
	        <swiper-slide><img src="../assets/4.jpg"></swiper-slide>
	        <div class="swiper-button-prev" slot="button-prev"></div>
	        <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="swiper-pagination"></div>
	  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  export default {
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
		    el: '.swiper-pagination',
		    clickable :true,
		  },
          //autoplay:true,
          autoplay: {
          	delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
        }
      }
    }
  }
  
  
</script>
<style scoped>
	*{margin:0;padding: 0;}
	img{
		height:200px;
		width: 500px;
	}
	.swiper-pagination{
		position: relative;
	}
</style>