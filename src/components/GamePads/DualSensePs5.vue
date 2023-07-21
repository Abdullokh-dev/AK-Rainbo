<script setup>
import '../../assets/css/presentationPsPlyr.css'
import "../../assets/css/slick-carousel.css"
import "../../assets/css/slick-carousel-theme-md.css"

defineProps({
  title: {
    type: String,
    default: "геймпад DualSense PS5"
  },
})
</script>

<template>
  <div class="row flex-lg-row-reverse presentation-section">
    <div class="col-12 col-lg-6 d-flex">
      <div class="my-auto flex-width">
        <h2 class="title-lg"> Кастомизированные <br /> геймпад DualSense PS5 </h2>

        <p class="__info text-md mt-4 mt-lg-2 mt-xl-3 mt-xxl-5 mb-4 pe-5 pe-lg-0">
          <b class="_bold">У Вас есть возможность купить</b>
          уникальные кастомизированные геймпады DualSenseдля PS5 с уникальным готовым дизайном.
        </p>

        <div class="__btn text-center">
          <a href="https://rainboskin.me/sony/sony-playstation-5/" target="_blank" class="_buy btn-txt"> Купить </a>
        </div>

        <b class="_bold __info text-md">Или создать свой собственный уникальный дизайн!</b>

        <p class="__info text-md mt-2 mt-lg-3">
          Выберите DualSenseдля PS5 , который Вы хотите приобрести, раскрасьте его в понравившиеся цвета, и мы произведём
          её в течение 5-7 дней и отправим Вам.
        </p>

        <div class="__btn text-center">
          <a href="https://rainboskin.me/ps5_custom/" target="_blank" class="btn-txt _pink">Создать</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 pe-0 pe-lg-1 pe-xl-3 pe-xxl-5 ps-0 align-self-center">
      <!-- Slider -->
      <section class="regular images-plyr mt-auto">
        <div class="text-center">
          <img src="../../assets/images/GamePads/slide-1.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../../assets/images/GamePads/slide-2.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../../assets/images/GamePads/slide-3.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../../assets/images/GamePads/slide-4.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../../assets/images/GamePads/slide-5.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../../assets/images/GamePads/slide-6.png" alt="#" class="mx-auto __img">
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.presentation-section .__btn ._pink {
  background-color: #EA4F86;
}

.presentation-section .__btn ._pink:hover {
  background-color: rgba(234, 79, 134, 0.8);
}
</style>
