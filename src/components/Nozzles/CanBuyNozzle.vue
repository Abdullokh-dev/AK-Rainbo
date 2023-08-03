<script setup>
import {onMounted, reactive} from "vue";
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

const items = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})

onMounted(() => {
  items.first = document.getElementById('football')
  items.second = document.getElementById('texture')
  items.third = document.getElementById('gamer')
  items.fourth = document.getElementById('warn')
})

const hoverElement = (item) => {
  switch(item) {
    case items.first:
      items.second.style.cssText += "display: none;"
      items.first.style.cssText += "display: block;"
      break;
    case items.second:
      items.first.style.cssText += "display: none;"
      items.second.style.cssText += "display: block;"
      break;
    case items.third:
      items.fourth.style.cssText += "display: none;"
      items.third.style.cssText += "display: block;"
      break;
    case items.fourth:
      items.third.style.cssText += "display: none;"
      items.fourth.style.cssText += "display: block;"
      break;
    default:
      console.log('item not found')
      break
  }
}

</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="title-lg text-black can-buy-section__title">
        Вы можете купить насадки на стики себе или в подарок: есть дизайны для всех возрастов, для мужчин и женщин.
      </h2>
    </div>
  </div>

  <div class="row can-buy-section">
    <div class="col-1 d-none d-xxl-block"></div>
    <div class="col-12 col-lg-6 text-block">

      <div class="row">
        <div class="col-12 d-flex">
          <div class="pointer" @mouseenter="hoverElement(items.first)">
            <img src="../../assets/images/Nozzles/icon-1.png" alt="#" height="126" class="__icon">
          </div>
          <p class="text-black text-md __text pointer" @mouseenter="hoverElement(items.first)">
            <b class="_bold title-xs">Коллекция футбол</b>
            – Мы единственная  компания, производящая лицензионные накладки стики в дизайне клубов: Спартак, ЦСКА,
            Динамо, Зенит, Локомотив и т.д.
          </p>
        </div>
      </div>

      <div class="row mt-4 pt-lg-3">
        <div class="col-12 d-flex">
          <div class="pointer" @mouseenter="hoverElement(items.second)">
            <img src="../../assets/images/Nozzles/icon-2.png" alt="#" height="126" class="__icon">
          </div>
          <p class="text-black text-md __text pointer" @mouseenter="hoverElement(items.second)">
            <b class="_bold title-xs">Коллекция текстура</b>
            – Одноцветные накладки с необычной формой обеспечат нужную эргономику
          </p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6 col-xxl-5 p-0 overflow-none d-flex justify-content-start justify-content-md-end">
      <img id="football" src="../../assets/images/Nozzles/img.png" class="__img-1" alt="#">
      <img id="texture" src="../../assets/images/GamePads/slide-3.png" class="__img-1" alt="#" style="display: none">
    </div>
  </div>

  <div class="row flex-lg-row-reverse can-buy-section">
    <div class="col-12 col-lg-6">

      <div class="row">
        <div class="col-12 d-flex text-block_second mt-xxl-5">
          <div class="pointer" @mouseenter="hoverElement(items.third)">
            <img src="../../assets/images/Nozzles/icon-3.png" alt="#" height="126" class="__icon">
          </div>
          <p class="text-black text-md __text pointer" @mouseenter="hoverElement(items.third)"><b class="_bold title-xs">Коллекция геймер</b>
            – Накладки на стики с узнаваемыми символами: клеверов, подковой, звездами, пиктограммами и цветами
          </p>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12 d-flex mt-2 mt-lg-4 pt-lg-3">
          <div class="pointer" @mouseenter="hoverElement(items.fourth)">
            <img src="../../assets/images/Nozzles/icon-4.png" alt="#" height="126" class="__icon">
          </div>
          <p class="text-black text-md __text pointer" @mouseenter="hoverElement(items.fourth)">
            <b class="_bold title-xs d-none d-lg-block">Коллекция воин</b>
            – Для любителей файтинга и шутеров с черепами, оружием прицелами и т.д.
          </p>
        </div>
        <div class="mt-4 pt-3 d-flex justify-content-center justify-content-lg-start">
          <a href="https://rainboskin.me/aksessuary/" class="__btn text-md shining" target="_blank">
            Выберите свой дизайн
          </a>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 p-0 d-flex justify-content-end justify-content-sm-start">
      <img id="gamer" class="__img-2" src="../../assets/images/Nozzles/img_1.png" alt="#">
      <img id="warn" class="__img-2" src="../../assets/images/GamePads/slide-2.png" alt="#" style="display: none">
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
  animation: slideaway .3s;
}

.can-buy-section .__text {
  font-weight: 500;
  max-width: 550px;
}

.can-buy-section ._bold {
  font-weight: 700;
}

.can-buy-section .__icon {
  width: 64px;
  height: 63px;
  margin: 2px 20px 0 0;
}

.can-buy-section .__btn {
  transition: background-color .3s;
  margin-left: 84px;
  background-color: #CD0413;
  border-radius: 50rem;
  color: white;
  padding: 13px 28px;
}

.can-buy-section .__btn:hover {
  background-color: rgba(205, 4, 19, 0.8);
}

@media screen and (max-width: 1199px) {
  .can-buy-section .text-block {
    margin-top: 10%;
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

@keyframes slideaway {
  from { opacity: 0;}
  to { display: block; }
}

@media screen and (max-width: 991px) {
  .can-buy-section .text-block_second {
    margin-top: -50px;
  }

  .can-buy-section__title {
    margin-top: 50px;
  }

  .can-buy-section .__btn {
    margin-left: 0;
  }
}

@media screen and (max-width: 575px) {
  .can-buy-section .text-block {
    margin-top: 24px;
  }
}

@media screen and (min-width: 992px) {
  .can-buy-section .__img-2 {
    margin-top: -70px;
  }
}
</style>
