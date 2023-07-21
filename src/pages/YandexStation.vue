<script setup>

import Header from "../components/Header.vue";
import YandexStationMain from "../components/YandexStation/YandexStationMain.vue";
import CustomizedCollection from "../components/YandexStation/CustomizedCollection.vue";
import Characters from "../components/YandexStation/Characters.vue";
import ChooseCustomStation from "../components/YandexStation/ChooseCustomStation.vue";
import Specifications from "../components/YandexStation/Specifications.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
import BottomList from "../components/BottomList.vue";
</script>

<template>
  <Header show-lists="false" />
  <YandexStationMain />
  <CustomizedCollection />
  <Characters />
  <ChooseCustomStation />
  <Specifications />
  <DeliverAndGuarantee />
  <BottomList />
</template>

<style scoped>

</style>
