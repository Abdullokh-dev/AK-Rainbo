<script setup>

import Header from "../components/Header.vue";
import HomePodMain from "../components/HomePod/HomePodMain.vue";
import Acquaint from "../components/HomePod/Acquaint.vue";
import HIFI from "../components/HomePod/HIFI.vue";
import Comparison from "../components/HomePod/Comparison.vue";
import SuitableInterior from "../components/HomePod/SuitableInterior.vue";
</script>

<template>
  <Header show-lists="false"/>
  <HomePodMain />
  <Acquaint />
  <HIFI />
  <Comparison />
  <SuitableInterior />
</template>

<style scoped>

</style>
