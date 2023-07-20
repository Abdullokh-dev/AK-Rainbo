<script setup>

import Header from "../components/Header.vue";
import PlaystationMain from "../components/PlaystationMain.vue";
import CustomizePlaystation from "../components/CustomizePlaystation.vue";
import Ps5DualSense from "../components/Ps5DualSense.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
import BottomList from "../components/BottomList.vue";
import Playstation4 from "../components/Playstation4.vue";
</script>

<template>
  <Header show-lists="false"/>
  <PlaystationMain />
  <CustomizePlaystation />
  <Ps5DualSense title="PLAYSTATION 5" />
  <Playstation4 />
  <DeliverAndGuarantee color="white"/>
  <BottomList color="white"/>
</template>

<style scoped>

</style>
