<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center h-100 position-relative">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row video-content">
        <div class="col">
          <video preload="auto" autoplay="1" loop muted="1">
            <source src="../../assets/videos/Nozzles.mp4" type="video/mp4">
          </video>

          <div class="__box">
            <h1 class="flex-title title-lg text-black">Насадки на стики геймпада</h1>
            <div class="mt-4">
              <a href="https://rainboskin.me/aksessuary/" class="__btn pinked-btn shining text-md" target="_blank">Купить</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.flex-title{
  max-width: 448px;
}

.pinked-btn {
  background-color: #FF6891;
}

.pinked-btn:hover {
  background-color: rgba(255, 104, 145, 0.8);
}

@media screen and (max-width:575px) {
  .flex-title {
    max-width: 234px;
  }
}
</style>
