<script setup>
import {onMounted, ref} from "vue";

const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 800)
  setTimeout(() => {
    show2.value = true
  }, 1300)
  setTimeout(() => {
    show3.value = true
  }, 1800)
})
</script>

<template>
  <div class="row playstation-main">
    <div class="col-6 background-left"></div>
    <div class="col-6 background-right"></div>

    <div class="__content col-xxl-11 col-xxxl-10">
      <div class="col-12 col-lg-6 content-left px-3 px-xxl-0">
        <h1 class="title-lg mt-5 mt-lg-0">
          Кастомизированные <br /> коллекции PLAYSTATION
        </h1>
        <div class="pb-5 mt-4 pt-1">
          <a href="https://rainboskin.me/sony/" target="_blank" class="__button text-md shining">Купить</a>
        </div>
      </div>
      <div class="col-12 col-lg-6 justify-content-end content-right align-self-center align-self-xl-end">
        <div class="content-right__box ps-lg-5">
          <div class="d-flex content-right__img">
            <img src="../../assets/images/Playstation/ps1.png" data-aos="fade-left" v-if="show" alt="#">
            <img src="../../assets/images/Playstation/ps2.png" data-aos="fade-left" v-if="show2" alt="#">
            <img src="../../assets/images/Playstation/ps3.png" data-aos="fade-left" v-if="show3" alt="#">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playstation-main {
  height: 770px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
}

.background-left {
  background: #161616;
  border-radius: 0 0 375px 0;
  height: 100%;
  z-index: 0;
  width: 47%;
}

.background-right {
  z-index: 0;
  background: black;
  height: 100%;
  margin-left: -240px;
  width: calc(53% + 240px);
  border-radius: 0 0 0 364px;
}

.playstation-main .__content {
  margin: auto;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
}

.playstation-main .__button {
  color: white;
  transition: background-color .3s;
  border-radius: 50rem;
  background-color: #FF6891;
  padding: 13px 96px;
}

.playstation-main .__button:hover {
  background-color: rgba(255, 104, 145, 0.8);
}

.content-right__img img{
  width: 33%;
}

.content-right__img {
  width: 100%;
  max-width: 760px;
  display: flex;
}

@media screen and (max-width: 1400px) {
  .playstation-main .__content {
    width: 100%;
    padding: 0;
  }
}

@media screen and (max-width: 1199px) {
  .playstation-main {
    height: 600px;
  }

  .content-right__img {
    max-width: 450px;
  }
}

@media screen and (max-width: 991px) {
  .background-left, .background-right {
    display: none;
  }
  .playstation-main {
    margin-top: 112px;
  }
  .playstation-main .__content {
    display: block;
  }

  .content-right__box {
    background-color: black;
    border-radius: 0 150px 0 0;
    height: 500px;
    width: 100%;
  }

  .playstation-main {
    height: 720px;
  }

  .playstation-main .__button {
    padding: 11px 72px;
  }

  .content-right__img {
    max-width: 535px;
    margin: auto;
    padding: 80px 10px 0 10px;
  }
}

@media screen and (max-width: 574px) {
  .playstation-main {
    height: 580px;
  }

  .content-right__box {
    max-height: 350px;
  }

  .content-right__img {
    max-width: 350px;
    margin: auto;
    padding: 80px 10px 0 10px;
  }
}
</style>
