<template>
  <div class="row d-flex justify-content-center position-relative">
    <div class="h-100 video-content"></div>
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="homepod position-absolute">
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
</template>

<style scoped>
.video-content {
  background: url("../../assets/images/HomePod/img.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-animation: zoomin 5s linear;
  animation: zoomin 5s linear;
  animation-fill-mode: forwards;
}

@-webkit-keyframes zoomin {
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.homepod {
  margin-top: 233px;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
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


@media screen and (max-width: 1199px) {
  .homePod__title {
    max-width: 620px;
  }
}

@media screen and (max-width: 991px) {
  .homePod__info {
    margin-top: 10px;
  }

  .homepod {
    margin-top: 150px;
  }
}

@media screen and (max-width: 575px) {
  .homePod__info {
    font-size: 20px;
  }

  .homePod__title {
    font-size: 24px;
    max-width: 250px;
  }
}
</style>
