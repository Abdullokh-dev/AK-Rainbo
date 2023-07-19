<script setup>
defineProps({
  color: {
    type: String,
    default: "black"
  }
})

</script>

<template>
  <div class="row d-flex justify-content-center mb-4">
    <div class="col-12 col-xxl-11 col-xxxl-10 p-0 d-none d-lg-block">
      <ul class="list-unstyled bottom-list p-0 d-flex justify-content-around">
        <li class="_list">
          <a href="#" :style="{color: color}">Стереосистема RAINBO TECHNICS</a>
        </li>
        <li class="_list">
          <a href="#/playstation" :style="{color: color}">Sony Playstation</a>
        </li>
        <li class="_list">
          <a href="#/yandex-station" :style="{color: color}">Яндекс.Станции</a>
        </li>
        <li class="_list">
          <a href="#/gamepads" :style="{color: color}">Геймпады</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bottom-list ._list > a:hover {
  color: #2997FF !important;
  cursor: pointer;
}
.bottom-list ._list > a {
  color: black;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
}

</style>
