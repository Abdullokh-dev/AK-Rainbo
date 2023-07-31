<script setup>

import Header from "../components/Header.vue";
import Main from "../components/Home/Main.vue";
import YandexBelt from "../components/Home/YandexBelt.vue";
import AboutTeam from "../components/Home/AboutTeam.vue";
</script>

<template>
  <Header show-lists="true" theme="white"/>
  <Main class="sterio"/>
  <YandexBelt />
  <AboutTeam />
</template>

<style scoped>
@media screen and (max-width: 1199px) {
  .sterio {
    margin-top: 112px;
  }
}
</style>
