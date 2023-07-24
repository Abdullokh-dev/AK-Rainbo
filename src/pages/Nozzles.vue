<script setup>

import Header from "../components/Header.vue";
import NozzleMain from "../components/Nozzles/NozzleMain.vue";
import GamepadStick from "../components/Nozzles/GamepadStick.vue";
import CanBuyNozzle from "../components/Nozzles/CanBuyNozzle.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
</script>

<template>
  <Header show-lists="false" />
  <NozzleMain />
  <GamepadStick />
  <CanBuyNozzle />
  <DeliverAndGuarantee />
  <div class="row d-flex justify-content-center mb-4">
    <div class="col-12 col-xxl-11 col-xxxl-10 p-0 d-none d-xl-block">
      <ul class="list-unstyled bottom-list p-0 d-flex justify-content-around">
        <li class="_list">
          <a href="#" class="_dark">Стереосистема RAINBO TECHNICS</a>
        </li>
        <li class="_list">
          <a href="#/playstation" class="_dark">Sony Playstation</a>
        </li>
        <li class="_list">
          <a href="#/yandex-station" class="_dark">Яндекс.Станции</a>
        </li>
        <li class="_list">
          <a href="#/gamepads" class="_dark">Геймпады</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
