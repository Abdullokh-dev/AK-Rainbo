<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center nozzleMain-bg">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row">
        <div class="col">
          <div class="nozzleMain-box">
            <video class="background-video" preload="auto" autoplay="1" loop muted="1">
              <source src="../assets/videos/Nozzles.mp4" type="video/mp4">
            </video>
            <h1 class="nozzleMain__title">Насадки на стики геймпада</h1>
            <div class="mt-5">
              <a href="#" class="nozzleMain-btn">Купить</a>
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
  z-index: -1;
  inset: 0;
  pointer-events: none;
}

.nozzleMain-box {
  margin: 385px 0;
}

.nozzleMain__title {
  font-size: 50px;
  font-weight: 600;
  color: black;
  line-height: 65px;
  max-width: 448px;
}

.nozzleMain-btn {
  color: black;
  background-color: #FF6891;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  padding: 13px 90px;
  border-radius: 50rem;
}

@media screen and (max-width:1199px) {
  .nozzleMain__title {
    font-size: 35px;
    line-height: normal;
  }

  .nozzleMain-box {
    margin: 258px 0;
  }
}

@media screen and (max-width:575px) {
  .nozzleMain__title {
    font-size: 24px;
    max-width: 234px;
  }

  .nozzleMain-btn {
    padding: 8px 58px;
  }
}
</style>
