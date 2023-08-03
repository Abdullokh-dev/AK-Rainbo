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
        <h2 class="title-lg"> Кастомизированные <br /> <span class="uppercase"> Playstation 5</span> </h2>

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
          <a href="https://rainboskin.me/ps5_custom/" target="_blank" class="text-md _yellow shining">Создать</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 pe-0 pe-lg-1 pe-xl-3 pe-xxl-5 ps-0 align-self-center">
      <Flicking :plugins="plugins" :options="{changeOnHold: true,circular: true,moveType: 'strict'}" class="images-plyr">
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-1.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-2.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-3.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-4.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-5.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-6.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-7.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-8.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-9.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <div class="text-center img-block">
          <img src="../../assets/images/Playstation/slide-10.png" alt="#" class="mx-auto __img" draggable="false">
        </div>
        <template #viewport>
          <div class="flicking-pagination _blue-dots"></div>
        </template>
      </Flicking>
    </div>

  </div>
</template>

<style scoped>
.presentation-section .__btn ._yellow {
  background-color: #F2C402;
}

.presentation-section .__btn ._yellow:hover {
  background-color: rgba(242, 196, 2, 0.8);
}
</style>
