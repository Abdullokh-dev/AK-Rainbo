<script setup>

import Header from "../components/Header.vue";
import HomePodMain from "../components/HomePod/HomePodMain.vue";
import Acquaint from "../components/HomePod/Acquaint.vue";
import HIFI from "../components/HomePod/HIFI.vue";
import Comparison from "../components/HomePod/Comparison.vue";
import SuitableInterior from "../components/HomePod/SuitableInterior.vue";
import HomeSpecification from "../components/HomePod/HomeSpecification.vue";
import WhereBuy from "../components/HomePod/WhereBuy.vue";
import SliderDuality from "../components/SliderDuality.vue";
</script>

<template>
  <Header show-lists="false"/>
  <HomePodMain />
  <Acquaint />
  <HIFI />
  <SliderDuality />
  <Comparison />
  <SuitableInterior />
  <HomeSpecification />
  <WhereBuy />
</template>

<style scoped>

</style>
