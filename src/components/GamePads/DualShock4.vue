<script setup>

</script>

<template>
  <div class="dual-shock row d-flex justify-content-center">
    <div class="col col-12 col-xxl-11 col-xxxl-10">
      <h2 class="title-lg __title">
        <span class="uppercase">Кастомизированные Геймпады</span> <span class="nowrap">DUALSHOCK 4</span>
      </h2>

      <div class="__info text-md mb-3 mb-lg-5">
        <p class="mb-2 pb-1">
          Каждый геймер знает, что от качества геймпада зависит многое.
        </p>
        <p>
          Уникальность дизайна в сочетании с качеством и надежностью — это главный принцип, по которому выбирают для себя
          гаджеты все современные геймеры! Поэтому стоит купить DUALSHOCK 4 для новой консоли с эксклюзивным дизайном без
          потери эргономики и качества.
        </p>
      </div>

      <div class="__btn text-md d-flex pt-3 pt-lg-0">
        <a class="mx-auto ms-lg-0 shining" href="https://rainboskin.me/sony/gamepad-sony-playstation-4/">Купить</a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 px-0 mt-4 pt-3 mt-lg-5 d-flex justify-content-center">
      <div class="dual-shock-images text-center">
        <img src="../../assets/images/GamePads/img_2.png" alt="#" class="__img position-relative __sm-last" data-aos="fade-up-left" data-aos-delay="300" data-aos-duration="1000" data-aos-anchor=".main-trigger">
        <img src="../../assets/images/GamePads/img_4.png" alt="#" class="__img position-relative __md-left" data-aos="fade-up-left" data-aos-delay="150" data-aos-duration="1000" data-aos-anchor=".main-trigger">
        <img src="../../assets/images/GamePads/img_1.png" alt="#" class="__img position-relative main-trigger" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="0">
        <img src="../../assets/images/GamePads/img_3.png" alt="#" class="__img position-relative __md-right" data-aos="fade-up-right" data-aos-delay="150" data-aos-duration="1000" data-aos-anchor=".main-trigger">
        <img src="../../assets/images/GamePads/img_5.png" alt="#" class="__img position-relative __sm-last" data-aos="fade-up-right" data-aos-delay="300" data-aos-duration="1000" data-aos-anchor=".main-trigger">
      </div>
    </div>
  </div>
</template>

<style scoped>
.dual-shock-images .main-trigger {
  width: 38%;
  margin: 0 -15%;
  z-index: 2;
}

.dual-shock-images .__md-left {
  width: 34%;
  margin: 0 0 8% -15%;
}

.dual-shock-images .__md-right {
  width: 34%;
  margin: 0 -15% 8% 0;
  z-index: 1;
}

.dual-shock-images .__sm-last {
  width: 27%;
  margin-bottom: 18%;
}

.dual-shock .__title {
  margin-top: 150px;
}

.dual-shock .__btn a {
  background-color: #E1405E;
  border-radius: 50rem;
  transition: all .3s;
  color: white;
  padding: 13px 95px;
}

.dual-shock .__info {
  font-weight: 500;
  margin-top: 50px;
  max-width: 946px;
}

@media screen and (max-width: 1199px) {
  .dual-shock .__title {
    margin-top: 100px;
  }

  .dual-shock .__info {
    margin-top: 35px;
  }
}

@media screen and (max-width: 991px) {
  .dual-shock .__btn a {
    padding: 11px 72px;
  }
}

@media screen and (max-width: 575px) {
  .dual-shock .__title {
    margin-top: 50px;
  }

  .dual-shock .__info {
    margin-top: 25px;
  }
}
</style>
