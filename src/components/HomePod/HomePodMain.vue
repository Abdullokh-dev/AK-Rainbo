<template>
  <div class="row d-flex justify-content-center h-100 position-relative">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row video-content">
        <div class="col">
          <video preload="auto" autoplay="1" loop muted="1">
            <source src="../../assets/videos/Nozzles.mp4" type="video/mp4">
          </video>

          <div class="homepod">
            <div class="row mainPodSection">
              <div class="col-12 text-center">
                <p class="homePod__info title-xs"><span class="uppercase">Rainbo Technics</span> Bass Expert</p>
              </div>

              <div class="col-12 text-center">
                <h1 class="homePod__title mx-auto mt-3 pt-1">
                  Услышать звук так, как задумал артист
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.homepod {
  margin-top: 233px;
  position: relative;
  z-index: 1;
}
.mainPodSection {
  line-height: normal;
}

.homePod__title {
  font-size: 60px;
  font-weight: 500;
}

.homePod__info {
  font-weight: 500;
  line-height: normal;
}


@media screen and (max-width:1199px) {
  .homePod__title {
    max-width: 620px;
  }
}

@media screen and (max-width:991px) {
  .homePod__info {
    margin-top: 10px;
  }

  .homepod {
    margin-top: 150px;
  }
}

@media screen and (max-width:575px) {
  .homePod__info {
    font-size: 20px;
  }

  .homePod__title {
    font-size: 24px;
    max-width: 250px;
  }
}
</style>
