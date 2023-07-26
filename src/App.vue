<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const container = ref('');
const footer = ref('');

// todo
const fixColor = () => {
  switch(route.path) {
    case '/yandex-station':
      container.value.style.background = 'white'
      break;
    case '/nozzles':
      container.value.style.background = 'white'
      break;
    case '/gamepads':
      container.value.style.background = '#1D1D1F'
      footer.value.style.background = 'black'
      break;
    case '/playstation':
      container.value.style.background = '#1D1D1F'
      footer.value.style.background = 'black'
      break;
    case '/home-pod':
      footer.value.style.borderRadius = 0
      break;
    default:
      container.value.style.background = 'black'
      footer.value.style.background = '#1D1D1F'
      break
  }
}

onMounted(() => {
  container.value = document.getElementById('main-container');
  footer.value = document.getElementById('footer');
  fixColor()
});

watch(
  () => route.path,
  () => {
    fixColor()
  }
);

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
