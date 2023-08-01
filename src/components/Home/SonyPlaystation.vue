<script setup>

</script>

<template>
  <!-- Yandex Console Belt -->
  <div class="row d-flex justify-content-center radius-border customize-box_dark my-4">
    <div class="col-12 pt-2 col-xxl-11 col-xxxl-10" id="sony-playstation">

      <div class="row pb-lg-0">
        <div class="col-12 pe-xl-3 p-xxl-0 ps-lg-4 ps-xl-0 col-lg-6 d-flex justify-content-center justify-content-xxl-start">
          <div class="mt-sm-2 my-lg-auto px-4 px-xxl-3">
            <h3 class="customize-title title-md">Консоли Sony Playstation</h3>
            <p class="customize-description text-md mt-2 mt-lg-3 mt-xl-4" data-aos="fade-up">
              Мы рады предложить Вам услугу индивидуальной кастомизации игровых консолей и геймпадов. Если у вас есть концепция подарков, корпоративного мерча, подарков для розыгрышей или другие идеи – мы будем рады их обсудить.
            </p>
            <div class="mb-4 mt-4 pt-xl-1 mt-xxl-5">
              <a href="#" class="yandex-station__button text-md">
                Узнать больше
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.785086L0.785086 0L7.28509 6.5L0.785086 13L0 12.2149L5.71436 6.5L0 0.785086Z" fill="#2997FF"/>
                </svg>
              </a>
              <a href="https://rainboskin.me/sony" class="yandex-station__button text-md ps-3 ps-lg-0" target="_blank">
                Купить
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.28125 0.785086L1.06634 0L7.56634 6.5L1.06634 13L0.28125 12.2149L5.99561 6.5L0.28125 0.785086Z" fill="#2997FF"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 mt-4 ps-lg-0 d-flex justify-content-center justify-content-lg-start">
          <img class="playStations-img" src="../../assets/images/Home/playStations.png" width="1398" alt="#">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customize-box_dark {
  background-color: #1D1D1F;
}

.customize-description {
  line-height: normal;
  max-width: 466px;
}

.yandex-station__button {
  color: #2997FF;
  margin-right: 46px;
}

.yandex-station__button svg {
  position: absolute;
  transition: all 0.3s;
  margin: 7px 0 0 10px;
}

.yandex-station__button:hover svg {
  margin-left: 15px;
}

.playStations-img {
  width: 95%;
  max-width: 700px;
}

@media screen and (max-width:1399px) {
  .customize-description, .yandex-station__button {
    max-width: 400px;
  }
}

@media screen and (max-width:991px) {
  .customize-description {
    max-width: 100%;
  }

  .playStations-img {
    width: 70%;
  }
}
</style>
