<script setup>
import {ref} from "vue";
import "../../assets/css/pagination.css";
import { Pagination, AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import '../../assets/css/flicking-inline.css';
const plugins = ref([new Pagination({ type: 'bullet' }), new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false })])
// const plugins = ref([new Pagination({ type: 'bullet' })])s
</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="home-specification-title title-xl">
        Технические характеристики
      </h2>
    </div>
  </div>

  <div class="row home-specification">
    <div class="col-12 col-lg-6 d-flex px-4 px-xxl-5" style="margin: auto">
      <Flicking :plugins="plugins">
        <div class="d-flex" style="width: 100%">
          <img class="__img my-auto" src="../../assets/images/HomePod/360degree.png" width="1620" alt="#" draggable="false">
        </div>

        <div class="d-flex" style="width: 100%">
          <img class="__img my-auto" src="../../assets/images/HomePod/360degree.png" width="1620" alt="#" draggable="false">
        </div>

        <div class="d-flex" style="width: 100%">
          <img class="__img my-auto" src="../../assets/images/HomePod/360degree.png" width="1620" alt="#" draggable="false">
        </div>

        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </div>

    <div class="col-12 col-lg-6 col-xxl-5 mt-2 mt-lg-0">
      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Частотный диапазон:</span>
          <span class="text-md">50 Гц — 20 кГц</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Суммарная мощность:</span>
          <span class="text-md">150 Вт</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">НЧ-динамик:</span>
          <span class="text-md">1×30 Вт (∅85 мм)</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">ВЧ-динамики:</span>
          <span class="text-md">2×10 Вт (∅20 мм)</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Пассивные излучатели:</span>
          <span class="text-md">2 (∅95 мм)</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Отношение сигнал/шум:</span>
          <span class="text-md">96 дБ</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Выходы:</span>
          <span class="text-md d-sm-none">HDMI 1.4</span>
          <span class="text-md d-none d-sm-block">HDMI 1.4 (выход без аудиосигнала)</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Wi-Fi:</span>
          <span class="text-md">IEEE 802.11b/g/n/ac, 2,4/5 ГГц</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Bluetooth:</span>
          <span class="text-md">Bluetooth 4.1/BLE</span>
        </div>
      </div>

      <div class="__info-block">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Количество микрофонов:</span>
          <span class="text-md">7</span>
        </div>
      </div>

      <div class="__info-block mb-5">
        <div class="d-flex justify-content-between">
          <span class="__theme text-md">Вес:</span>
          <span class="text-md">2,9 кг</span>
        </div>
      </div>
    </div>

    <div class="col-1 d-none d-xxl-flex"></div>
  </div>
</template>

<style scoped>
.home-specification-title {
  margin: 100px 0 50px 0;
}

.flicking-pagination {
  position: absolute;
  left: 0;
  bottom: 0;
}

.home-specification .__img {
  width: 100%;
  max-width: 800px;
  padding-bottom: 70px;
}

.home-specification .__info-block {
  border-bottom: 1px solid #A5A5A5;
  margin-top: 20px;
  padding-bottom: 15px;
}

.home-specification .__theme {
  font-weight: 600;
}

@media screen and (max-width:1199px) {
  .home-specification-title {
    margin: 75px 0 40px 0;
  }
}
@media screen and (max-width:575px) {
  .home-specification-title {
    margin: 50px 0 30px 0;
  }

  .home-specification .__info-block {
    margin-top: 10px;
    padding-bottom: 7.5px;
  }
}
</style>
