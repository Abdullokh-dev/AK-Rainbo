<script setup>
import {ref} from "vue";
import { Pagination, Fade } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import '../../assets/css/presentationPsPlyr.css'
import '../../assets/css/flicking-inline.css';
import "../../assets/css/pagination.css";
const plugins = ref([new Pagination({ type: 'bullet' }), new Fade()])

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
          <a href="https://rainboskin.me/sony/sony-playstation-5/" target="_blank" class="_buy text-md shining"> Купить </a>
        </div>

        <b class="_bold __info text-md">Или создать свой собственный уникальный дизайн!</b>

        <p class="__info text-md mt-2 mt-lg-3">
          Выберите DualSenseдля PS5 , который Вы хотите приобрести, раскрасьте его в понравившиеся цвета, и мы произведём
          её в течение 5-7 дней и отправим Вам.
        </p>

        <div class="__btn text-center">
          <a href="https://rainboskin.me/ps5_custom/" target="_blank" class="text-md _pink shining">Создать</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 pe-0 pe-lg-1 pe-xl-3 pe-xxl-5 ps-0 align-self-center">
      <Flicking :plugins="plugins" :options="{changeOnHold: true,circular: true,moveType: 'strict'}" class="images-plyr">
        <div class="text-center img-block">
          <img src="../../assets/images/GamePads/slide-1.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/GamePads/slide-2.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/GamePads/slide-3.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/GamePads/slide-4.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/GamePads/slide-5.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/GamePads/slide-6.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <template #viewport>
          <div class="flicking-pagination _blue-dots"></div>
        </template>
      </Flicking>
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

.shining {
  position: relative;
}

.shining::before, .shining::after {
  content: "";
  display: block;
  position: absolute;
  height: 70%;
  top: 0;
  border-radius: inherit;
}

.shining:before {
  background: rgba(255, 255, 255, 0.5);
  width: 60px;
  left: 0;
  filter: blur(30px);
  animation: shine-alt1 5s ease-in-out infinite;
}

.shining:after {
  background: rgba(255, 255, 255, 0.2);
  width: 30px;
  left: 30px;
  filter: blur(5px);
  animation: shine-alt2 5s ease-in-out infinite;
}

@keyframes shine-alt1 {
  0% {
    opacity: 0.5;
    transform: translateX(-100px) skewX(-15deg);
    transition-property: opacity, transform;
  }
  20%, 100% {
    opacity: 0.6;
    transform: translateX(300px) skewX(-15deg);
    transition-property: opacity, transform;
  }
}

@keyframes shine-alt2 {
  0% {
    opacity: 0;
    transform: translateX(-100px) skewX(-15deg);
    transition-property: opacity, transform;
  }
  20%, 100% {
    opacity: 1;
    transform: translateX(300px) skewX(-15deg);
    transition-property: opacity, transform;
  }
}
</style>
