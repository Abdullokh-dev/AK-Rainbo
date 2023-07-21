<script setup>

import GamePadsMain from "../components/GamePads/GamePadsMain.vue";
import DualSense from "../components/GamePads/DualSense.vue";
import Header from "../components/Header.vue";
import DualSensePs5 from "../components/GamePads/DualSensePs5.vue";
import BottomList from "../components/BottomList.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
import DualShock4 from "../components/GamePads/DualShock4.vue";
</script>

<template>
  <Header show-lists="false"/>
  <GamePadsMain />
  <DualSense />
  <DualSensePs5 />
  <DualShock4 />
  <DeliverAndGuarantee color="white"/>
  <BottomList color="white"/>
</template>

<style scoped>

</style>
