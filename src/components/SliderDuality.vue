<script setup>
import {ref} from "vue";
import { Pagination,Arrow, Fade } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import '../assets/css/flicking-inline.css';
import "../assets/css/arrow.css";
import "../assets/css/pagination.css";
const plugins = ref([new Pagination({ type: 'bullet' }), new Arrow(), new Fade()])
</script>

<template>
<div class="row mt-2 mt-lg-4">
  <div class="col-12 p-0">
    <Flicking :plugins="plugins" :options="{changeOnHold: true,circular: true,moveType: 'strict'}">
      <div class="d-flex duality-slider">
        <div class="col-6 pe-1 pe-lg-2">
          <img class="__img" src="../assets/images/img.png" width="1900" alt="#" draggable="false">
        </div>
        <div class="col-6 ps-1 ps-lg-2">
          <img class="__img" src="../assets/images/img_1.png" width="1900" alt="#" draggable="false">
        </div>
      </div>

      <div class="d-flex duality-slider">
        <div class="col-6 pe-1 pe-lg-2">
          <img class="__img" src="../assets/images/img.png" width="1900" alt="#" draggable="false">
        </div>
        <div class="col-6 ps-1 ps-lg-2">
          <img class="__img" src="../assets/images/img_1.png" width="1900" alt="#" draggable="false">
        </div>
      </div>

      <div class="d-flex duality-slider">
        <div class="col-6 pe-1 pe-lg-2">
          <img class="__img" src="../assets/images/img.png" width="1900" alt="#" draggable="false">
        </div>
        <div class="col-6 ps-1 ps-lg-2">
          <img class="__img" src="../assets/images/img_1.png" width="1900" alt="#" draggable="false">
        </div>
      </div>

      <div class="d-flex duality-slider">
        <div class="col-6 pe-1 pe-lg-2">
          <img class="__img" src="../assets/images/img.png" width="1900" alt="#" draggable="false">
        </div>
        <div class="col-6 ps-1 ps-lg-2">
          <img class="__img" src="../assets/images/img_1.png" width="1900" alt="#" draggable="false">
        </div>
      </div>

      <div class="d-flex duality-slider">
        <div class="col-6 pe-1 pe-lg-2">
          <img class="__img" src="../assets/images/img.png" width="1900" alt="#" draggable="false">
        </div>
        <div class="col-6 ps-1 ps-lg-2">
          <img class="__img" src="../assets/images/img_1.png" width="1900" alt="#" draggable="false">
        </div>
      </div>

      <div class="d-flex duality-slider">
        <div class="col-6 pe-1 pe-lg-2">
          <img class="__img" src="../assets/images/img.png" width="1900" alt="#" draggable="false">
        </div>
        <div class="col-6 ps-1 ps-lg-2">
          <img class="__img" src="../assets/images/img_1.png" width="1900" alt="#" draggable="false">
        </div>
      </div>

      <template #viewport>
        <div class="flicking-pagination pagination-light"></div>

        <span class="flicking-arrow-prev"></span>
        <span class="flicking-arrow-next"></span>
      </template>
    </Flicking>
  </div>
</div>
</template>

<style scoped>
.duality-slider {
  width: 100%;
}

.duality-slider .__img {
  width: 100%;
}
</style>
