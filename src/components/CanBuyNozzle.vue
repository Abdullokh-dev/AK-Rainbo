<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="title-md text-black can-buy-section__title">
        Вы можете купить насадки на стики себе или в подарок: есть дизайны для всех возрастов, для мужчин и женщин.
      </h2>
    </div>
  </div>

  <div class="row can-buy-section">
    <div class="col-1 d-none d-xxl-block"></div>
    <div class="col-12 col-lg-6 text-block">

      <div class="row">
        <div class="col-12 d-flex">
          <div>
            <img src="../assets/images/Nozzles/icon-1.png" alt="#" height="126" class="__icon">
          </div>
          <p class="text-black __text"><b class="_bold">Коллекция футбол</b>
            – Мы единственная  компания, производящая лицензионные накладки стики в дизайне клубов: Спартак, ЦСКА,
            Динамо, Зенит, Локомотив и т.д.
          </p>
        </div>
      </div>

      <div class="row mt-4 pt-lg-3">
        <div class="col-12 d-flex">
          <div><img src="../assets/images/Nozzles/icon-2.png" alt="#" height="126" class="__icon"></div>
          <p class="text-black __text"><b class="_bold">Коллекция текстура</b>
            – Одноцветные накладки с необычной формой обеспечат нужную эргономику
          </p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6 col-xxl-5 p-0 overflow-none d-flex justify-content-start justify-content-md-end">
      <img src="../assets/images/Nozzles/img.png" class="__img-1" alt="#">
    </div>
  </div>

  <div class="row flex-lg-row-reverse can-buy-section">
    <div class="col-12 col-lg-6">

      <div class="row">
        <div class="col-12 d-flex text-block_second mt-xxl-5">
          <div>
            <img src="../assets/images/Nozzles/icon-3.png" alt="#" height="126" class="__icon">
          </div>
          <p class="text-black __text"><b class="_bold">Коллекция геймер</b>
            – Накладки на стики с узнаваемыми символами: клеверов, подковой, звездами, пиктограммами и цветами
          </p>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12 d-flex mt-2 mt-lg-4 pt-lg-3">
          <div><img src="../assets/images/Nozzles/icon-4.png" alt="#" height="126" class="__icon"></div>
          <p class="text-black __text"><b class="_bold">Коллекция воин</b>
            – Для любителей файтинга и шутеров с черепами, оружием прицелами и т.д.
          </p>
        </div>
        <div class="mt-4 pt-3">
          <a href="https://rainboskin.me/aksessuary/" class="__btn" target="_blank">
            Выберите свой дизайн
          </a>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 p-0 d-flex justify-content-end justify-content-sm-start">
      <img src="../assets/images/Nozzles/img_1.png" alt="#" class="__img-2">
    </div>
  </div>
</template>


<style scoped>
.can-buy-section__title {
  margin-top: 150px;
  max-width: 1195px;
}

.can-buy-section .text-block {
  margin-top: 200px;
}

.can-buy-section .__img-1,
.can-buy-section .__img-2 {
  width: 100%;
  min-width: 433px;
  max-width: 866px;
  margin-top: 75px;
}

.can-buy-section .__text {
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  max-width: 550px;
}

.can-buy-section ._bold {
  font-size: 24px;
  font-weight: 700;
}

.can-buy-section .__icon {
  width: 64px;
  height: 63px;
  margin: 2px 20px 0 0;
}

.can-buy-section .__btn {
  margin-left: 84px;
  transition: background-color .3s;
  background-color: #CD0413;
  color: white;
  border-radius: 50rem;
  padding: 13px 28px;
}

.can-buy-section .__btn:hover {
  background-color: rgba(205, 4, 19, 0.8);
}

@media screen and (max-width: 1199px) {
  .can-buy-section .text-block {
    margin-top: 10%;
  }

  .can-buy-section .__text {
    font-size: 17px;
  }

  .can-buy-section ._bold {
    font-size: 22px;
  }

  .can-buy-section .__icon {
    width: 40px;
    height: 40px;
    margin: 2px 14px 0 0;
  }

  .can-buy-section .__img-1 {
    margin-top: 20px;
  }
  .can-buy-section .__btn {
    margin-left: 54px
  }
}

@media screen and (max-width: 991px) {
  .can-buy-section .text-block_second {
    margin-top: -50px;
  }

  .can-buy-section__title {
    margin-top: 50px;
  }
}
@media screen and (max-width: 575px) {
  .can-buy-section .text-block {
    margin-top: 24px;
  }

  .can-buy-section ._bold {
    font-size: 20px;
  }

  .can-buy-section .__text {
    font-size: 15px;
  }
}
@media screen and (min-width: 992px) {
  .can-buy-section .__img-2 {
    margin-top: -70px;
  }
}
</style>
