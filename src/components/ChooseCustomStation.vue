<script setup>
const items = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
import {onMounted, reactive} from "vue";

onMounted(() => {
  items.first = document.getElementById('kids')
  items.second = document.getElementById('romantic')
  items.third = document.getElementById('sport')
  items.fourth = document.getElementById('street')
})

const hoverFirst = (element) => {
  element.style.cssText += 'display:inline;margin:auto;'
}

const unHoverFirst = (element) => {
  element.style.cssText += "display:none;"
}

</script>

<template>
  <div class="row d-flex justify-content-center position-relative bg-white chooseCustomStation">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row">
        <div class="col">
          <h2 class="__title">
            Выбирай кастомизированную Яндекс.Станцию, которая больше тебе подойдет:
          </h2>
        </div>
      </div>

      <!-- Mobile Show -->
      <div class="row d-lg-none">
        <div class="col-12 p-0">
          <!-- Slider -->
          <section class="regular slider-custom mt-0">
            <div>
              <p class="__info ps-3 ps-sm-0">
                <b class="_bold _kids">Kids Collection</b> – для самых маленьких. Алиса станет подругой для вашего ребенка
              </p>

              <img src="../assets/images/YandexStation/choose-1.png" alt="#" width="2040">
            </div>

            <div>
              <p class="__info ps-3 ps-sm-0">
                <b class="_bold _romantic">Romantic Collection</b> – для неё и для него. Отличный подарок любимому человеку
              </p>

              <img src="../assets/images/YandexStation/choose-2.png" alt="#" width="2041">
            </div>

            <div>
              <p class="__info ps-3 ps-sm-0">
                <b class="_bold _sport">Sport Collection</b> – для поклонников спорта. С любимым клубом по жизни
              </p>

              <img src="../assets/images/YandexStation/choose-3.png" alt="#" width="2040">
            </div>

            <div>
              <p class="__info ps-3 ps-sm-0">
                <b class="_bold _street">Street Art Collection</b> – дизайны от уличных художников-граффитистов.
              </p>

              <img src="../assets/images/YandexStation/choose-4.png" alt="#" width="2040">
            </div>
          </section>
          <div class="text-center mt-4 pt-2">
            <a href="https://rainboskin.me/umnaya_kolonka_rainbo" target="_blank" class="__btn"> Купить </a>
          </div>
        </div>
      </div>

      <!-- Desktop Show -->
      <div class="row d-none d-lg-block">
        <div class="col-6">
          <p class="__info">
            <b class="_bold _kids" @mouseenter="hoverFirst(items.first)" @mouseleave="unHoverFirst(items.first)">Kids Collection</b> – для самых маленьких. Алиса станет подругой для вашего ребенка
          </p>
          <p class="__info">
            <b class="_bold _romantic" @mouseenter="hoverFirst(items.second)" @mouseleave="unHoverFirst(items.second)">Romantic Collection</b> – для неё и для него. Отличный подарок любимому человеку
          </p>
          <p class="__info">
            <b class="_bold _sport" @mouseenter="hoverFirst(items.third)" @mouseleave="unHoverFirst(items.third)">Sport Collection</b> – для поклонников спорта. С любимым клубом по жизни
          </p>
          <p class="__info">
            <b class="_bold _street" @mouseenter="hoverFirst(items.fourth)" @mouseleave="unHoverFirst(items.fourth)">Street Art Collection</b> – дизайны от уличных художников-граффитистов.
          </p>
          <div class="mt-5 pt-3">
            <a href="https://rainboskin.me/umnaya_kolonka_rainbo" target="_blank" class="__btn"> Купить </a>
          </div>
        </div>

        <div class="col-6 position-absolute choose-custom-box p-0">
          <div class="choose-custom-img">
            <img class="__img-1" id="kids" src="../assets/images/YandexStation/choose-1.png" alt="#" width="2040">
            <img class="__img-2" id="romantic" src="../assets/images/YandexStation/choose-2.png" alt="#" width="2041">
            <img class="__img-3" id="sport" src="../assets/images/YandexStation/choose-3.png" alt="#" width="2040">
            <img class="__img-4" id="street" src="../assets/images/YandexStation/choose-4.png" alt="#" width="2040">
            <img id="default-kids" src="../assets/images/YandexStation/choose-1.png" alt="#">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.choose-custom-img {
  max-width: 985px;
}

.choose-custom-box {
  right: 0;
  bottom: -60px;
}

.choose-custom-img .__img-1,
.choose-custom-img .__img-2,
.choose-custom-img .__img-3,
.choose-custom-img .__img-4 {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
}

.chooseCustomStation .__title {
  color: black;
  max-width: 1290px;
  font-size: 50px;
  margin-top: 165px;
  font-weight: 600;
  line-height: 130%;
}

.chooseCustomStation img {
  width: 100%;
}

.chooseCustomStation .__info {
  color: black;
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  margin-top: 40px;
}

.chooseCustomStation .__info ._kids:hover,
.slider-custom ._kids {
  color: #FBD301;
}

.chooseCustomStation .__info ._romantic:hover,
.slider-custom ._romantic {
  color: #D0AB75;
}

.chooseCustomStation .__info ._sport:hover,
.slider-custom ._sport {
  color: #10D8D9;
}

.chooseCustomStation .__info ._street:hover,
.slider-custom ._street {
  color: #F4414E;
}

.chooseCustomStation .__info ._bold {
  font-weight: 600;
  cursor: pointer;
}

.chooseCustomStation .__btn {
  background-color: #6337FF;
  transition: background-color 0.3s;
  color: white;
  padding: 13px 96px;
  border-radius: 50rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}

.chooseCustomStation .__btn:hover {
  background-color: rgba(99, 55, 255, 0.8);
}

.slider-custom img {
  min-width: 458px;
  max-width: 700px;
  margin: auto;
}

@media screen and (max-width:1299px) {
  .choose-custom-box {
    bottom: 15%;
  }
}

@media screen and (max-width:1199px) {
  .chooseCustomStation .__title {
    margin-top: 75px;
    font-size: 35px;
  }
}

@media screen and (max-width:991px) {
  .slider-custom p {
    text-align: center;
    max-width: 560px;
    margin: auto;
  }
}

@media screen and (max-width:575px) {
  .chooseCustomStation .__title {
    margin-top: 50px;
    font-size: 24px;
  }

  .chooseCustomStation .__info {
    font-size: 15px;
    margin-top: 25px;
  }

  .chooseCustomStation .__btn {
    font-size: 15px;
    padding: 11px 65px;
  }

  .slider-custom p {
    text-align: start;
  }
}
</style>
