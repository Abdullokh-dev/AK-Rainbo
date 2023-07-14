<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center h-100 nozzleMain-bg position-relative bg-white p-0">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row">
        <div class="col">
          <video class="background-video" preload="auto" autoplay="1" loop muted="1">
            <source src="../assets/videos/Nozzles.mp4" type="video/mp4">
          </video>

          <div class="yandexStationMain-box">
            <h1 class="yandexStationMain__title">Умные колонки <br /> RAINBO с Алисой</h1>
            <div class="mt-2 mt-lg-4 pt-4">
              <a href="https://rainboskin.me/umnaya_kolonka_rainbo" target="_blank" class="yandexStationMain-btn">Купить</a>
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

.yandexStationMain-box {
  margin-top: 40vh;
  position: relative;
  z-index: 1;
}

.yandexStationMain__title {
  font-size: 50px;
  font-weight: 600;
  color: black;
  line-height: 65px;
}

.yandexStationMain-btn:hover {
  background-color: rgba(99, 55, 255, 0.8);
}

.yandexStationMain-btn {
  transition: background-color .3s;
  color: white;
  background-color: #6337FF;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  padding: 13px 90px;
  border-radius: 50rem;
}

@media screen and (max-width:1199px) {
  .yandexStationMain__title {
    font-size: 35px;
    line-height: normal;
  }

  .yandexStationMain-box {
    margin-top: 45vh;
  }

  .yandexStationMain-btn {
    padding: 12px 70px;
    font-size: 17px;
  }
}

@media screen and (max-width:575px) {
  .yandexStationMain__title {
    font-size: 24px;
    max-width: 234px;
  }

  .yandexStationMain-btn {
    padding: 10px 67px;
    font-size: 15px;
  }
}
</style>
