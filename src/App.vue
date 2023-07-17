<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const container = ref('')

onMounted(() => {
  container.value = document.getElementById('main-container');

  watch(
    () => route.path,
    () => {
      if(route.path === '/yandex-station') {
        container.value.style.background = 'white'
      } else  {
        container.value.style.background = 'black'
      }
    }
  );
});

import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container-fluid" id="main-container">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
