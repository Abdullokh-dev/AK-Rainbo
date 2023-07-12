<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center bg-white">
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row">
        <div class="col">
          <h2 class="characters-title">
            6 разных характеров – 6 цветов!
          </h2>
        </div>
      </div>

      <!-- Colored Pods -->
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="characters__img-box">
            <img class="img-colored" src="../assets/images/YandexStation/uncolored-1.png" alt="#">
            <img src="../assets/images/YandexStation/colored-1.png" alt="#">

            <p class="__info mx-auto">
              <span class="__purple">Танцы, звуки и ритмы</span> — в вашей комнате ночь напролет
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="characters__img-box">
            <img class="img-colored" src="../assets/images/YandexStation/uncolored-2.png" alt="#">
            <img src="../assets/images/YandexStation/colored-2.png" alt="#">

            <p class="__info mx-auto">
              <span class="__red"> Отлично вписывается</span> в ваш интерьер и образ жизни
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="characters__img-box">
            <img class="img-colored" src="../assets/images/YandexStation/uncolored-3.png" alt="#">
            <img src="../assets/images/YandexStation/colored-3.png" alt="#">

            <p class="__info mx-auto">
              <span class="__yellow">Поддержит</span> самые смелые идеи и ответит на неожиданные вопросы
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center">
          <div class="characters__img-box">
            <img class="img-colored" src="../assets/images/YandexStation/uncolored-4.png" alt="#">
            <img src="../assets/images/YandexStation/colored-4.png" alt="#">

            <p class="__info mx-auto">
              <span class="__blue">Свечи, ужин</span>, романтичная музыка и самое нежное признание
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center">
          <div class="characters__img-box">
            <img class="img-colored" src="../assets/images/YandexStation/uncolored-5.png" alt="#">
            <img src="../assets/images/YandexStation/colored-5.png" alt="#">

            <p class="__info mx-auto">
              <span class="__pink">Самыми интересными</span> тропами проведет вас в сказочный мир
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mt-lg-5 d-flex justify-content-center">
          <div class="characters__img-box">
            <img class="img-colored" src="../assets/images/YandexStation/uncolored-6.png" alt="#">
            <img src="../assets/images/YandexStation/colored-6.png" alt="#">

            <p class="__info mx-auto">
              <span class="__brown">Мягкая музыка</span>, светлые тона — неторопливый, но приятный путь к себе
            </p>
          </div>
        </div>

        <div class="col-12 text-center my-5 pt-3">
            <a href="#" class="characters__button">Выбрать свой характер</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.characters-title {
  color: black;
  font-size: 50px;
  margin-top: 150px;
  font-weight: 600;
  line-height: 65px;
}

.characters__img-box {
  position: relative;
  text-align: center;
}

.characters__img-box img {
  width: 100%;
  max-width: 450px;
}

.characters__img-box .img-colored {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}

.characters__img-box:hover .img-colored {
  display: inline;
}

.characters__img-box .__info {
  color: black;
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
  text-align: center;
  max-width: 80%;
}

.characters__img-box .__info .__purple {
  color: #6337FF;
  font-weight: 500;
}

.characters__img-box .__info .__red {
  color: #F4414E;
  font-weight: 500;
}

.characters__img-box .__info .__yellow {
  color: #FBD301;
  font-weight: 500;
}

.characters__img-box .__info .__blue {
  color: #10D8D9;
  font-weight: 500;
}

.characters__img-box .__info .__pink{
  color: #F81478;
  font-weight: 500;
}

.characters__img-box .__info .__brown {
  color: #CCA370;
  font-weight: 500;
}

.characters__button {
  background-color: #6337FF;
  border-radius: 50rem;
  color: white;
  padding: 13px 29px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}

@media screen and (max-width:1199px) {
  .characters-title {
    margin-top: 150px;
    font-size: 35px;
    line-height: normal;
  }

  .characters__img-box .__info {
    font-size: 20px;
    line-height: normal;
  }
}

@media screen and (max-width:575px) {
  .characters-title {
    font-size: 24px;
  }

  .characters__img-box .__info {
    font-size: 15px;
  }

  .characters__button {
    padding: 11px 24px;
    font-size: 15px;
  }
}
</style>
