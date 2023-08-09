<script setup>
import first from "../../assets/images/Playstation/img.png"
import second from "../../assets/images/Playstation/img_1.png"
import third from "../../assets/images/Playstation/img_2.png"
import {onMounted, ref, watch} from "vue";
const images = [
  first, second, third
]
const imageOpacity = ref(1)
const currentIndex = ref(0)
const currentImageSrc = ref(images[currentIndex.value])

watch(currentIndex, (newSrc, oldSrc) => {
  imageOpacity.value = 0;
  setTimeout(() => {
    imageOpacity.value = 1;
  }, 100);
});

onMounted(() => {
  setInterval(() => {
    currentImageSrc.value = images[currentIndex.value]
    currentIndex.value = (currentIndex.value + 1) % images.length;
  },5000)
})
</script>

<template>
  <div class="row d-flex customize-playstation">
    <div class="col-1 d-none d-xxxl-block"></div>
    <div class="col-12 col-lg-5 col-xxl-5 ps-3 flex-margin-left">
      <h2 class="__title title-lg">
        Кастомизированные <br /> PLAYSTATION:
      </h2>

      <p class="_top text-md pb-sm-2 pb-lg-4" data-aos="fade-right" data-aos-offset="40">
        <span class="_bold">Высочайшее качество кастомизации не оставит равнодушным никого.</span> <br>
        Кастомизированная PlayStation станет прекрасным дизайнерским объектом в вашей квартире, офисе или заведении.
        Незамеченной остаться не получится, она будет привлекать к себе внимание всех ваших гостей.
      </p>

      <ul class="list-unstyled text-md">
        <li class="__info" data-aos="fade-right" data-aos-offset="40">
          <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#6337FF"/>
          </svg>
          Мы кастомизируем <span class="_bold">только оригинальные геймпады</span> PlayStation (прямые поставки)
        </li>
        <li class="__info" data-aos="fade-right" data-aos-offset="40">
          <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#F4414E"/>
          </svg>
          <span class="_bold">Наша кастомизация – это не наклейки.</span>
          Используются несколько технологий нанесения рисунков, включая покраску
        </li>
        <li class="__info" data-aos="fade-right" data-aos-offset="40">
          <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#FBD301"/>
          </svg>
          <span class="_bold">Все дизайны консолей и геймпадов футбольных клубов являются лицензированными</span>
          и ободренными самими клубами
        </li>
      </ul>
    </div>

    <div class="col-12 col-lg-7 col-xxl-7 align-self-end text-start flex-col">
      <div class="d-flex justify-content-end pe-lg-4">
          <img :key="currentImageSrc" :src=currentImageSrc :style="{ opacity: imageOpacity}" class="__img" alt="#">
      </div>
    </div>
  </div>
</template>

<style scoped>
.customize-playstation .__title {
  margin: 130px 0 50px 0;
}

.customize-playstation .__img {
  width: 100%;
  max-width: 920px;
  transition: ease 1s
}

.customize-playstation ._top {
  width: 102%;
}

.customize-playstation ._bold {
  font-weight: 700;
}

.customize-playstation ul {
  max-width: 560px;
  padding-left: 20px;
}

.customize-playstation ul svg {
  left: -20px;
  top: 10px;
}

.customize-playstation ul li {
  position: relative;
  margin-bottom: 30px;
}

@media screen and (max-width: 1199px) {
  .customize-playstation .__title {
    margin: 100px 0 50px 0;
  }

  .customize-playstation .__info {
    font-weight: 500;
  }

  .customize-playstation ._bold {
    font-weight: 500;
  }
}

@media screen and (max-width: 991px) {
  .customize-playstation ul svg {
    left: -19px;
    top: 5px;
  }

  .customize-playstation ._top {
    width: 100%;
  }

  .customize-playstation ul {
    padding-left: 20px;
  }

  .customize-playstation ul li {
    margin-bottom: 20px;
  }

}

@media screen and (max-width: 575px) {
  .customize-playstation .__title {
    margin: 50px 0 25px 0;
  }

  .customize-playstation .__info {
    font-size: 15px;
  }

  .customize-playstation ul li {
    margin-bottom: 10px;
  }
}

@media screen and (min-width: 1515px) {
  .d-xxxl-block {
    display: block !important;
  }

  .flex-col {
    width: 50%;
  }
}

@media only screen and (max-width: 1514px) and (min-width: 1399px) {
  .flex-margin-left {
    padding-left: 5.1111% !important;
  }

  .flex-col {
    width: 58%;
  }
}
</style>
