<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center nozzleMain-bg position-relative h-100">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row">
        <div class="col">
          <video class="background-video" preload="auto" autoplay="1" loop muted="1">
            <source src="../assets/videos/Nozzles.mp4" type="video/mp4">
          </video>

          <div class="nozzleMain-box">
            <h1 class="nozzleMain__title title-lg">Насадки на стики геймпада</h1>
            <div class="mt-5">
              <a href="https://rainboskin.me/aksessuary/" class="nozzleMain-btn" target="_blank">Купить</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.background-video {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
}

.nozzleMain-box {
  z-index: 1;
  position: relative;
  margin: 385px 0;
}

.nozzleMain__title {
  color: black;
  max-width: 448px;
}

.nozzleMain-btn {
  color: black;
  transition: background-color .3s;
  background-color: #FF6891;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  padding: 13px 90px;
  border-radius: 50rem;
}

.nozzleMain-btn:hover {
  background-color: rgba(255, 104, 145, 0.8);
}

@media screen and (max-width:1199px) {
  .nozzleMain-box {
    margin: 258px 0;
  }
}

@media screen and (max-width:575px) {
  .nozzleMain__title {
    max-width: 234px;
  }

  .nozzleMain-btn {
    padding: 8px 58px;
  }
}
</style>
