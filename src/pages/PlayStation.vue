<script setup>

import Header from "../components/Header.vue";
import PlaystationMain from "../components/Playstation/PlaystationMain.vue";
import CustomizePlaystation from "../components/Playstation/CustomizePlaystation.vue";
import Playstation5 from "../components/Playstation/Playstation5.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
import BottomList from "../components/BottomList.vue";
import Playstation4 from "../components/Playstation/Playstation4.vue";
</script>

<template>
  <Header show-lists="false"/>
  <PlaystationMain />
  <CustomizePlaystation />
  <Playstation5 />
  <Playstation4 />
  <DeliverAndGuarantee color="white"/>
  <BottomList color="white"/>
</template>

<style scoped>

</style>
