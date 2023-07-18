<script setup>

import GamePadsMain from "../components/GamePadsMain.vue";
import DualSense from "../components/DualSense.vue";
import Header from "../components/Header.vue";
import Ps5DualSense from "../components/Ps5DualSense.vue";
import BottomList from "../components/BottomList.vue";
import DeliverAndGuarantee from "../components/DeliverAndGuarantee.vue";
</script>

<template>
  <Header show-lists="false"/>
  <GamePadsMain />
  <DualSense />
  <Ps5DualSense />
  <DeliverAndGuarantee color="white"/>
  <BottomList color="white"/>
</template>

<style scoped>

</style>
