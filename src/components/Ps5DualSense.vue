<script setup>
defineProps({
  title: {
    type: String,
    default: "геймпад DualSense PS5"
  },
})

import "../assets/css/slick-carousel.css"
import "../assets/css/slick-carousel-theme-md.css"
</script>

<template>
  <div class="row ps5 flex-lg-row-reverse">
    <div class="col-12 col-lg-6 d-flex">
      <div class="my-auto flex-width">
        <h2 class="__title title-md"> Кастомизированные <br /> <span>{{title}}</span> </h2>

        <p class="__info mt-4 mt-lg-2 mt-xl-3 mt-xxl-5 mb-4 pe-5 pe-lg-0">
          <b class="_bold">У Вас есть возможность купить</b>
          уникальные кастомизированные геймпады DualSenseдля PS5 с уникальным готовым дизайном.
        </p>

        <div class="__btn text-center">
          <a href="https://rainboskin.me/sony/sony-playstation-5/" target="_blank" class="_buy btn-txt"> Купить </a>
        </div>

        <b class="_bold __info">Или создать свой собственный уникальный дизайн!</b>

        <p class="__info mt-2 mt-lg-3">
          Выберите DualSenseдля PS5 , который Вы хотите приобрести, раскрасьте его в понравившиеся цвета, и мы произведём
          её в течение 5-7 дней и отправим Вам.
        </p>

        <div class="__btn text-center">
          <a href="https://rainboskin.me/ps5_custom/" target="_blank" class="btn-txt">Создать</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 pe-0 pe-lg-1 pe-xl-3 pe-xxl-5 ps-0 align-self-center">
      <!-- Slider -->
      <section class="regular images-plyr mt-auto">
        <div class="text-center">
          <img src="../assets/images/GamePads/slider.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../assets/images/Playstation/slide-1.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../assets/images/Playstation/slide-2.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../assets/images/Playstation/slide-3.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../assets/images/Playstation/slide-4.png" alt="#" class="mx-auto __img">
        </div>
        <div class="text-center">
          <img src="../assets/images/Playstation/slide-5.png" alt="#" class="mx-auto __img">
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.ps5 {
  margin-top: 150px;
}

.ps5 .__img {
  width: 100%;
}

.ps5 .__info {
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
}

.ps5 ._bold {
  font-weight: 700;
}

.ps5 .__btn a {
  background-color: #EA4F86;
  transition: background-color .3s;
  padding: 13px 89px;
  border-radius: 50rem;
  color: white;
}

.ps5 .__btn a:hover {
  background-color: rgba(234, 79, 134, 0.8);
}

.ps5 .__btn ._buy {
  background-color: #C62229;
  padding: 13px 95px;
}

.ps5 .__btn ._buy:hover {
  background-color: rgba(198, 34, 41, 0.8);
}

.ps5 .__btn {
  margin: 52px 0 50px 0;
}

.flex-width {
  max-width: 633px;
}

.images-plyr {
  max-width: 950px;
}

@media screen and (max-width:1366px) {
  .ps5 .__btn {
    margin: 30px 0 25px 0;
  }
}

@media screen and (max-width:1199px) {
  .ps5 {
    margin-top: 100px;
  }

  .ps5 .__btn {
    margin: 30px 0 25px 0;
  }
}

@media screen and (max-width:991px) {
  .flex-width {
    max-width: 100%;
  }

  .ps5 .__info {
    font-size: 17px;
  }

  .ps5 .__btn {
    margin: 44px 0 55px 0;
  }
}

@media screen and (max-width:575px) {
  .ps5 .__info {
    font-size: 15px;
  }

  .ps5 {
    margin-top: 40px;
  }
}
</style>
