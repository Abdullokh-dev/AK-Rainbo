<script setup>

import Header from "../components/Header.vue";
import YandexStationMain from "../components/YandexStation/YandexStationMain.vue";
import CustomizedCollection from "../components/YandexStation/CustomizedCollection.vue";
import Characters from "../components/YandexStation/Characters.vue";
import ChooseCustomStation from "../components/YandexStation/ChooseCustomStation.vue";
import Specifications from "../components/YandexStation/Specifications.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
</script>

<template>
  <Header show-lists="false" />
  <YandexStationMain />
  <CustomizedCollection />
  <Characters />
  <ChooseCustomStation />
  <Specifications />
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
          <a href="#/nozzles" class="_dark">Насадки</a>
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
