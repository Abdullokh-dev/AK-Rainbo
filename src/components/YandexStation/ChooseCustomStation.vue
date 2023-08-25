<script setup>
import {onMounted, onUnmounted, reactive, ref} from "vue";
import { Pagination, Fade } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import '../../assets/css/flicking-inline.css';
import "../../assets/css/pagination.css";
const plugins = ref([new Pagination({ type: 'bullet' }), new Fade()])

const items = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})

const viewIn = () => {
  const top =  document.querySelector('#animate-trigger').getBoundingClientRect().y;
  if(top <= 962) {
    hoverElement(items.first)
    setTimeout(() => {
      hoverElement(items.second)
      setTimeout(() => {
        hoverElement(items.third)
        setTimeout(() => {
          hoverElement(items.fourth)
        }, 700)
      }, 700)
    }, 700)
    window.removeEventListener('scroll', viewIn);
  }
}

onMounted(() => {
  items.first = document.getElementById('kids')
  items.second = document.getElementById('romantic')
  items.third = document.getElementById('sport')
  items.fourth = document.getElementById('street')

  window.addEventListener('scroll', viewIn);
})

onUnmounted(() => {
  window.removeEventListener('scroll', viewIn);
})

const hoverElement = (element) => {
  switch(element) {
    case items.first:
      items.second.style.cssText += "opacity: 0;"
      items.third.style.cssText += "opacity: 0;"
      items.fourth.style.cssText += "opacity: 0;"
      items.first.style.cssText += 'opacity: 1;margin:auto;'
      break;
    case items.second:
      items.first.style.cssText += "opacity: 0;"
      items.third.style.cssText += "opacity: 0;"
      items.fourth.style.cssText += "opacity: 0;"
      items.second.style.cssText += 'opacity: 1;margin:auto;'
      break;
    case items.third:
      items.first.style.cssText += "opacity: 0;"
      items.second.style.cssText += "opacity: 0;"
      items.fourth.style.cssText += "opacity: 0;"
      items.third.style.cssText += 'opacity: 1;margin:auto;'
      break;
    case items.fourth:
      items.first.style.cssText += "opacity: 0;"
      items.second.style.cssText += "opacity: 0;"
      items.third.style.cssText += "opacity: 0;"
      items.fourth.style.cssText += 'opacity: 1;margin:auto;'
      break;
    default:
      console.log('item not found')
      break
  }
}
</script>

<template>
  <div class="row d-flex justify-content-center position-relative chooseCustomStation">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row">
        <div class="col">
          <h2 class="__title text-black title-lg">
            Выбирай кастомизированную Яндекс.Станцию, которая больше тебе подойдет:
          </h2>
        </div>
      </div>

      <!-- Mobile Show -->
      <div class="row mt-2 d-lg-none">
        <div class="col-12 px-0 title-xs slider-custom text-black">
          <Flicking :plugins="plugins" :options="{changeOnHold: true,circular: true,moveType: 'strict'}">
            <div class="d-flex slider justify-content-center w-100">
              <div>
                <p class="__info ps-3 ps-sm-0">
                  <b class="_bold _kids">Kids Collection</b> – для самых маленьких. Алиса станет подругой для вашего ребенка
                </p>

                <img src="../../assets/images/YandexStation/choose-1.png" alt="#" width="2040" draggable="false">
              </div>
            </div>

            <div class="d-flex slider justify-content-center w-100">
              <div>
                <p class="__info ps-3 ps-sm-0">
                  <b class="_bold _romantic">Romantic Collection</b> – для неё и для него. Отличный подарок любимому человеку
                </p>

                <img src="../../assets/images/YandexStation/choose-2.png" alt="#" width="2041" draggable="false">
              </div>
            </div>

            <div class="d-flex slider justify-content-center w-100">
              <div>
                <p class="__info ps-3 ps-sm-0">
                  <b class="_bold _sport">Sport Collection</b> – для поклонников спорта. С любимым клубом по жизни
                </p>

                <img src="../../assets/images/YandexStation/choose-3.png" alt="#" width="2038" draggable="false">
              </div>
            </div>

            <div class="d-flex slider justify-content-center w-100">
              <div>
                <p class="__info ps-3 ps-sm-0">
                  <b class="_bold _street">Street Art Collection</b> – дизайны от уличных художников-граффитистов.
                </p>

                <img src="../../assets/images/YandexStation/choose-4.png" alt="#" width="2040" draggable="false">
              </div>
            </div>

            <template #viewport>
              <div class="flicking-pagination default-dots"></div>
            </template>
          </Flicking>
          <div class="text-center mt-2">
            <a href="https://rainboskin.me/umnaya_kolonka_rainbo" target="_blank" class="__btn text-md shining"> Купить </a>
          </div>
        </div>
      </div>

      <!-- Desktop Show -->
      <div class="row d-none d-lg-block">
        <div class="col-6 text-black title-xs">
          <p class="__info">
            <b class="_bold _kids" data-aos="yellow-light" data-aos-anchor=".main-trigger" data-aos-offset="0" @mouseenter="hoverElement(items.first)">Kids Collection</b> – для самых маленьких. Алиса станет подругой для вашего ребенка
          </p>
          <p class="__info">
            <b class="_bold _romantic" data-aos="brown-light" data-aos-anchor=".main-trigger" data-aos-offset="0" @mouseenter="hoverElement(items.second)">Romantic Collection</b> – для неё и для него. Отличный подарок любимому человеку
          </p>
          <p class="__info">
            <b class="_bold _sport" data-aos="blue-light" data-aos-anchor=".main-trigger" data-aos-offset="0" @mouseenter="hoverElement(items.third)">Sport Collection</b> – для поклонников спорта. С любимым клубом по жизни
          </p>
          <p class="__info">
            <b class="_bold _street" data-aos="red-light" data-aos-anchor=".main-trigger" data-aos-offset="0" @mouseenter="hoverElement(items.fourth)">Street Art Collection</b> – дизайны от уличных художников-граффитистов.
          </p>
          <div class="mt-5 pt-3 main-trigger" data-aos="fade-zoom-in" data-aos-offset="0" id="animate-trigger">
            <a href="https://rainboskin.me/umnaya_kolonka_rainbo" target="_blank" class="__btn text-md shining"> Купить </a>
          </div>
        </div>

        <div class="col-6 position-absolute choose-custom-box p-0">
          <div class="choose-custom-img">
            <img class="__img-1" id="kids" src="../../assets/images/YandexStation/choose-1.png" alt="#" width="2040">
            <img class="__img-2" id="romantic" src="../../assets/images/YandexStation/choose-2.png" alt="#" width="2041">
            <img class="__img-3" id="sport" src="../../assets/images/YandexStation/choose-3.png" alt="#" width="2038">
            <img class="__img-4" id="street" src="../../assets/images/YandexStation/choose-4.png" alt="#" width="2040">
            <img src="../../assets/images/YandexStation/choose-1.png" alt="#">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.chooseCustomStation .__title {
  max-width: 1290px;
  margin-top: 165px;
}

.chooseCustomStation img {
  width: 100%;
}

.choose-custom-box {
  right: 0;
  bottom: -60px;
}

.choose-custom-img {
  max-width: 985px;
}

.choose-custom-img .__img-1,
.choose-custom-img .__img-2,
.choose-custom-img .__img-3,
.choose-custom-img .__img-4 {
  opacity: 0;
  transition: opacity .5s;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
}

.chooseCustomStation .__info {
  font-weight: 500;
  margin-top: 40px;
}

.chooseCustomStation .__info ._kids:hover,
.slider-custom ._kids {
  color: #FBD301;
  transition: color 0s;
}

.chooseCustomStation .__info ._romantic:hover,
.slider-custom ._romantic {
  color: #D0AB75;
  transition: color 0s;
}

.chooseCustomStation .__info ._sport:hover,
.slider-custom ._sport {
  color: #10D8D9;
  transition: color 0s;
}

.chooseCustomStation .__info ._street:hover,
.slider-custom ._street {
  color: #F4414E;
  transition: color 0s;
}

.chooseCustomStation .__info ._bold {
  font-weight: 700;
  cursor: pointer;
}

.chooseCustomStation .__btn {
  background-color: #6337FF;
  transition: background-color 0.3s;
  color: white;
  padding: 13px 96px;
  border-radius: 50rem;
}

.chooseCustomStation .__btn:hover {
  background-color: rgba(99, 55, 255, 0.8);
}

.slider-custom img {
  max-width: 700px;
  margin: auto;
}

[data-aos="yellow-light"].aos-animate {
  animation: yellowing 1.5s ease-in-out;
}

[data-aos="brown-light"].aos-animate {
  animation: browning 1.5s ease-in-out;
  animation-delay: .7s;
}

[data-aos="blue-light"].aos-animate {
  animation: bluing 1.5s ease-in-out;
  animation-delay: 1.4s;
}

[data-aos="red-light"].aos-animate {
  animation: redding 1.5s ease-in-out;
  animation-delay: 2.1s;
}

@keyframes yellowing {
  0%, 100% {
    color: black;
  }
  50% {
    color: #FBD301;
  }
}

@keyframes browning {
  0%, 100% {
    color: black;
  }
  50% {
    color: #D0AB75;
  }
}

@keyframes bluing {
  0%, 100% {
    color: black;
  }
  50% {
    color: #10D8D9;
  }
}

@keyframes redding {
  0%, 100% {
    color: black;
  }
  50% {
    color: #F4414E;
  }
}

@media screen and (max-width:1299px) {
  .choose-custom-box {
    bottom: 15%;
  }
}

@media screen and (max-width:1199px) {
  .chooseCustomStation .__title {
    margin-top: 75px;
  }
}

@media screen and (max-width:991px) {
  .slider-custom p {
    text-align: center;
    max-width: 560px;
    margin: auto;
  }

  .chooseCustomStation .__info ._bold {
    font-weight: 600;
  }
}

@media screen and (max-width:575px) {
  .chooseCustomStation .__title {
    margin-top: 50px;
  }

  .chooseCustomStation .__info {
    margin-top: 25px;
  }

  .chooseCustomStation .__btn {
    padding: 11px 65px;
  }

  .slider-custom p {
    text-align: start;
  }
}
</style>
