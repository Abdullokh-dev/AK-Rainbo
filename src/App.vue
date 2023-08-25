<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from "./components/Footer.vue";

const route = useRoute();
const container = ref('');
const header = ref('')
const footer = ref('');

// todo
const fixColor = () => {
  switch(route.path) {
    case '/yandex-station':
      container.value.style.background = 'white'
      header.value.style.cssText += 'background: rgba(0,0,0,0.2); backdrop-filter: saturate(180%) blur(20px); transition: all .3s; -webkit-backdrop-filter: blur(20px);';
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
      container.value.style.background = 'black'
      footer.value.style.background = '#1D1D1F'
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
  header.value = document.getElementById("navbar")
  fixColor()
});

watch(
  () => route.path,
  () => {
    fixColor()
  }
);
</script>

<template>
  <div class="container-fluid overflow-none" id="main-container">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
