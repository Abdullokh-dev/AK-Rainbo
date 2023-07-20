<script setup>

</script>

<template>
  <div class="row main-section">
    <div class="col-6 background-left"></div>
    <div class="col-6 background-right"></div>

    <div class="main-section__content col-xxl-11 col-xxxl-10">
      <div class="col-12 col-lg-6 content-left px-3 px-xxl-0">
        <h1 class="main-section__title title-lg mt-5 mt-lg-0">
          Кастомизированные <br /> коллекции PLAYSTATION
        </h1>
        <div class="pb-5 mt-4 pt-3">
          <a href="https://rainboskin.me/sony/" target="_blank" class="main-section__button btn-txt">Купить</a>
        </div>
      </div>
      <div class="col-12 col-lg-6 content-right align-self-center align-self-xl-end">
        <div class="content-right__box ps-lg-5">
          <img class="content-right__img" src="../assets/images/Playstation/main.png" alt="#" width="1458">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-section {
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

.main-section__content {
  margin: auto;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
}

.main-section__button {
  color: white;
  transition: background-color .3s;
  border-radius: 50rem;
  background-color: #FF6891;
  padding: 13px 96px;
}

.main-section__button:hover {
  background-color: rgba(255, 104, 145, 0.8);
}

.content-right__img {
  width: 100%;
  max-width: 760px;
  display: flex;
}

@media screen and (max-width: 1400px) {
  .main-section__content {
    width: 100%;
    padding: 0;
  }
}

@media screen and (max-width: 1199px) {
  .main-section {
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

  .main-section__content {
    display: block;
  }

  .content-right__box {
    background-color: black;
    border-radius: 0 150px 0 0;
    height: 500px;
  }

  .main-section {
    height: 720px;
  }

  .main-section__button {
    padding: 11px 72px;
  }

  .content-right__img {
    max-width: 535px;
    margin: auto;
    padding: 80px 10px 0 10px;
  }
}

@media screen and (max-width: 574px) {
  .main-section {
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
