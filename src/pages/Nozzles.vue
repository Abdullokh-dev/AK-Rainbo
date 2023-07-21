<script setup>

import Header from "../components/Header.vue";
import NozzleMain from "../components/Nozzles/NozzleMain.vue";
import GamepadStick from "../components/Nozzles/GamepadStick.vue";
import CanBuyNozzle from "../components/Nozzles/CanBuyNozzle.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
import BottomList from "../components/BottomList.vue";
</script>

<template>
  <Header show-lists="false" />
  <NozzleMain />
  <GamepadStick />
  <CanBuyNozzle />
  <DeliverAndGuarantee />
  <BottomList />
</template>

<style scoped>

</style>
