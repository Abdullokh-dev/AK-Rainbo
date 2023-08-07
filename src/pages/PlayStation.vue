<script setup>

import Header from "../components/Header.vue";
import PlaystationMain from "../components/Playstation/PlaystationMain.vue";
import CustomizePlaystation from "../components/Playstation/CustomizePlaystation.vue";
import Playstation5 from "../components/Playstation/Playstation5.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
import Playstation4 from "../components/Playstation/Playstation4.vue";
</script>

<template>
  <Header show-lists="false"/>
  <PlaystationMain />
  <CustomizePlaystation />
  <Playstation5 />
  <Playstation4 />
  <DeliverAndGuarantee color="white"/>
  <div class="row d-flex justify-content-center mb-4">
    <div class="col-12 col-xxl-11 col-xxxl-10 p-0 d-none d-xl-block">
      <ul class="list-unstyled bottom-list p-0 d-flex justify-content-around">
        <li class="_list">
          <a href="#/home-pod" class="_light">Стереосистема RAINBO TECHNICS</a>
        </li>
        <li class="_list">
          <a href="#/yandex-station" class="_light">Яндекс.Станции</a>
        </li>
        <li class="_list">
          <a href="#/gamepads" class="_light">Геймпады</a>
        </li>
        <li class="_list">
          <a href="#/nozzles" class="_light">Насадки</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
