<script setup>
import {onMounted, ref, watch} from "vue";
import first from "../../assets/images/GamePads/img_9.png"
import second from "../../assets/images/GamePads/img_10.png"
import third from "../../assets/images/GamePads/img_11.png"
import fourth from "../../assets/images/GamePads/img_12.png"

const images = [
  first, second, third, fourth
]
const imageOpacity = ref(1)
const currentIndex = ref(0)
const currentImageSrc = ref(images)

const animate = () => {
  setTimeout(() => {
    imageOpacity.value = 0;
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % images.length;
      setTimeout(() => {
        imageOpacity.value = 1;
      }, 300)
    }, 300)
  },300)
}
onMounted(() => {
  setInterval(() => {
    animate()
  },5000)
})
</script>

<template>
  <div class="row d-flex justify-content-center" id="dualsense">
    <div class="col col-12 col-xxl-11 col-xxxl-10">
      <h2 class="dualScene__title title-lg">
        <span class="uppercase">Кастомизированные Геймпады</span> DualSense
      </h2>
    </div>
  </div>

  <div class="row d-flex dualSense">
    <div class="col-1 d-none d-xxxl-block"></div>
    <div class="col-12 col-lg-7 col-xxl-6 ps-3 flex-margin-left">
      <div class="trigger" data-aos="fade-right" data-aos-offset="40">
        <p class="__info text-md  pb-sm-2 pb-lg-4">
          <span class="_bold">Высочайшее качество кастомизации не оставит равнодушным никого.</span> Кастомизированные
          <span class="_bold">геймпады DualSense</span> станут прекрасными дизайнерскими объектами в вашей квартире, офисе
          или заведении. Незамеченной остаться не получится, она будет привлекать к себе внимание всех ваших гостей.
        </p>

        <ul class="list-unstyled">
          <li class="__info text-md">
            <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="#6337FF"/>
            </svg>
            Мы кастомизируем <span class="_bold">только оригинальные геймпады</span> PlayStation (прямые поставки)
          </li>
          <li class="__info text-md">
            <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="#F4414E"/>
            </svg>
            <span class="_bold">Наша кастомизация – это не наклейки.</span>
            Используются несколько технологий нанесения рисунков, включая покраску
          </li>
          <li class="__info text-md">
            <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="#FBD301"/>
            </svg>
            <span class="_bold">Все дизайны консолей и геймпадов футбольных клубов являются лицензированными</span> и ободренными самими клубами
          </li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-lg-5 col-xxl-5 d-flex flex-col justify-content-end p-0">
      <div class="my-auto mt-3 mt-lg-auto" data-aos-anchor=".trigger" data-aos="fade-left" data-aos-delay="150">
        <img :key="currentImageSrc" :src=currentImageSrc[currentIndex] :style="{ opacity: imageOpacity}" class="__img" alt="#">
      </div>
    </div>
  </div>
</template>

<style scoped>
.dualScene__title {
  margin: 150px 0 50px 0;
}

.dualSense .__img {
  width: 125%;
  margin-right: -25%;
  transition: opacity .3s
}

.dualSense ._bold {
  font-weight: 700;
}

.dualSense ul {
  padding-left: 20px;
}

.dualSense ul svg {
  left: -20px;
  top: 10px;
}

.dualSense li {
  position: relative;
  margin-bottom: 30px;
}

@media screen and (max-width: 1199px) {
  .dualScene__title {
    margin: 100px 0 50px 0;
  }

  .dualSense .__info {
    font-weight: 500;
  }

  .dualSense ._bold {
    font-weight: 500;
  }
}

@media screen and (max-width: 991px) {
  .dualSense ul svg {
    left: -19px;
    top: 5px;
  }

  .dualSense ul {
    padding-left: 20px;
  }

  .dualSense li {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 575px) {
  .dualScene__title {
    margin: 50px 0 25px 0;
  }

  .dualSense li {
    margin-bottom: 10px;
  }
}
@media screen and (min-width: 1515px) {
  .d-xxxl-block {
    display: block !important;
  }
}

@media only screen and (max-width: 1514px) and (min-width: 1399px) {
  .flex-margin-left {
    padding-left: 5.1111% !important;
  }
  .flex-col {
    width: 50%;
  }
}
</style>
