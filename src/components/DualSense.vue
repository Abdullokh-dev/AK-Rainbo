<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col col-12 col-xxl-11 col-xxxl-10">
      <h2 class="dualScene__title title-md">
        КАСТОМИЗИРОВАННЫЕ ГЕЙМПАДЫ DualSense
      </h2>
    </div>
  </div>

  <div class="row d-flex dualSense">
    <div class="col-1 d-none d-xxxl-block"></div>
    <div class="col-12 col-lg-7 col-xxl-6 ps-3 flex-margin-left">
      <p class="__info pb-sm-2 pb-lg-4">
        <span class="_bold">Высочайшее качество кастомизации не оставит равнодушным никого.</span> Кастомизированные
        <span class="_bold">геймпады DualSense</span> станут прекрасными дизайнерскими объектами в вашей квартире, офисе
        или заведении. Незамеченной остаться не получится, она будет привлекать к себе внимание всех ваших гостей.
      </p>

      <ul class="list-unstyled gamePads-ul">
        <li class="list __info">
          <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#6337FF"/>
          </svg>
          Мы кастомизируем <span class="_bold">только оригинальные геймпады</span> PlayStation (прямые поставки)
        </li>
        <li class="list __info">
          <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#F4414E"/>
          </svg>
          <span class="_bold">Наша кастомизация – это не наклейки.</span>
          Используются несколько технологий нанесения рисунков, включая покраску
        </li>
        <li class="list __info">
          <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#FBD301"/>
          </svg>
          <span class="_bold">Все дизайны консолей и геймпадов футбольных клубов являются лицензированными</span> и ободренными самими клубами
        </li>
      </ul>
    </div>

    <div class="col-12 col-lg-5 col-xxl-5 d-flex flex-col justify-content-end p-0">
      <div>
        <img src="../assets/images/GamePads/img.png" width="1634" alt="#" class="__img">
      </div>
    </div>
  </div>
</template>

<style scoped>
.dualScene__title {
  margin: 150px 0 50px 0;
}

.dualSense .__img {
  width: 100%;
  max-width: 821px;
}

.dualSense .__info {
  font-size: 20px;
  font-weight: 400;
  line-height: 130%;
}

.dualSense ._bold {
  font-weight: 700;
}

.gamePads-ul {
  padding-left: 20px;
}

.gamePads-ul svg {
  left: -20px;
  top: 10px;
}

.gamePads-ul .list {
  position: relative;
  margin-bottom: 30px;
}

@media screen and (max-width: 1199px) {
  .dualScene__title {
    font-size: 35px;
    margin: 100px 0 50px 0;
  }

  .dualSense .__info {
    font-size: 17px;
    font-weight: 500;
  }

  .dualSense ._bold {
    font-weight: 500;
  }
}

@media screen and (max-width: 991px) {
  .gamePads-ul svg {
    left: -19px;
    top: 5px;
  }

  .gamePads-ul {
    padding-left: 20px;
  }

  .gamePads-ul .list {
    position: relative;
    margin-bottom: 20px;
  }

}

@media screen and (max-width: 575px) {
  .dualScene__title {
    font-size: 24px;
    margin: 50px 0 25px 0;
  }

  .dualSense .__info {
    font-size: 15px;
  }

  .gamePads-ul .list {
    position: relative;
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
