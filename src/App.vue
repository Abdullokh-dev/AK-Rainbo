<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const container = ref('')

const fixColor = () => {
  console.log(route.path)
  switch(route.path) {
    case '/yandex-station':
      container.value.style.background = 'white'
      break;
    case '/nozzles':
      container.value.style.background = 'white'
      break;
    default:
      container.value.style.background = 'black'
      break
  }
}

onMounted(() => {
  container.value = document.getElementById('main-container');
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
