<script setup>

import Header from "../components/Header.vue";
import YandexStationMain from "../components/YandexStationMain.vue";
import CustomizedCollection from "../components/CustomizedCollection.vue";
import Characters from "../components/Characters.vue";
import ChooseCustomStation from "../components/ChooseCustomStation.vue";
import Specifications from "../components/Specifications.vue";
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
