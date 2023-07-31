<script setup>

</script>

<template>
  <div class="row main-section">
    <div class="col-6 background-left"></div>
    <div class="col-6 background-right"></div>

    <div class="__content col-xxl-11 col-xxxl-10">
      <div class="col-12 col-lg-6 content-left px-3 px-xxl-0">
        <h1 class="__title title-xl uppercase mt-5 mt-lg-0">
          Стереосистема Rainbo Technics
        </h1>
        <p class="text-md mt-3 mt-lg-3">
          Слышать звук так, как он звучит.
        </p>
        <div class="pb-5 mt-4 pt-3">
          <a href="#/home-pod" class="__button text-md">
            Узнать больше
            <span>
            <svg class="main-section__svg" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.785086L0.785086 0L7.28509 6.5L0.785086 13L0 12.2149L5.71436 6.5L0 0.785086Z" fill="white"/>
            </svg>
          </span>
          </a>
        </div>
      </div>
      <div class="col-12 col-lg-6 content-right">
        <div class="__right-box">
          <img class="content-right__img" src="../../assets/images/Home/main-player.png" alt="#" width="1256">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-section {
  height: 730px;
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
  margin-right: -120px;
  width: calc(50% + 120px);
}

.background-right {
  z-index: 0;
  background: #20211D;
  height: calc(100% - 40px);
  margin-left: -120px;
  width: calc(50% + 120px);
  border-radius: 0 0 0 364px;
}

.main-section .__content {
  margin: auto;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
}

.main-section .__title {
  font-weight: 700;
  line-height: normal;
  width: 600px;
}

.main-section .__button {
  position: relative;
  color: white;
  background-color: #757D62;
  padding: 13px 71px 13px 53px;
  border-radius: 50rem;
  text-decoration: none;
}

.main-section__svg {
  position: absolute;
  right: 45px;
  top: 20px;
  transition: right 0.3s;
}

.main-section .__button:hover .main-section__svg {
  right: 35px;
}

.content-right__img {
  width: 100%;
  max-width: 628px;
  display: flex;
  margin: auto;
  filter: drop-shadow( 1rem -1rem 2.75rem #788166);
}

@media screen and (max-width: 1400px) {
  .main-section .__content {
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

  .main-section .__title {
    max-width: 400px;
  }

  .main-section .__button {
    padding: 10.4px 43px 10.4px 25px;
  }

  .main-section__svg {
    right: 23px;
    top: 15px;
    height: 10.4px;
  }

  .main-section .__button:hover .main-section__svg {
    right: 18px;
  }
}

@media screen and (max-width: 991px) {
  .background-left, .background-right {
    display: none;
  }

  .main-section .__content {
    display: block;
  }

  .main-section .__right-box {
    background-color: #20211D;
    border-radius: 0 150px 0 0;
    margin: auto;
    display: flex;
    justify-items: center;
    justify-content: center;
    height: 500px;
  }

  .main-section {
    height: 800px;
  }

  .content-right__img {
    max-width: 550px;
  }

  .main-section .__title {
    max-width: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 574px) {
  .main-section {
    height: 580px;
  }

  .main-section .__right-box {
    max-height: 350px;
  }

  .content-right__img {
    max-width: 320px;
  }

  .main-section .__title {
    max-width: 220px;
  }
}
</style>
