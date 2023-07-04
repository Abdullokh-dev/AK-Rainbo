<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header background="black" show-lists="true" />
    <router-view />
  <Footer />
</template>

<style scoped>

</style>
