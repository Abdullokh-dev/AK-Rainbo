<script setup>

import Header from "../components/Header.vue";
import NozzleMain from "../components/NozzleMain.vue";
import GamepadStick from "../components/GamepadStick.vue";
import CanBuyNozzle from "../components/CanBuyNozzle.vue";
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
