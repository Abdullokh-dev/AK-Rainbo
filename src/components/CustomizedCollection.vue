<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center bg-white">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row">
        <div class="col">
          <h2 class="gamePodStick__title">
            Кастомизированная коллекция <br> Яндекс.Станции Лайт
          </h2>

          <div class="row">
            <div class="col-12 col-md-6 mt-3 mt-md-0">
              <ul class="list-unstyled customizedCollection-ul ps-4">
                  <li class="list">
                    <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="#6337FF"/>
                    </svg>
                    Четкость рисунка
                  </li>
                  <li class="list _red">
                    <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="#F4414E"/>
                    </svg>
                    Насыщенность цветов
                  </li>
                  <li class="list _yellow">
                    <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="#FBD301"/>
                    </svg>
                    Нанесение технически сложных элементов
                  </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 d-flex">
              <ul class="list-unstyled customizedCollection-ul ps-4">
                  <li class="list _pink">
                    <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="#F81478"/>
                    </svg>
                    Износостойкое финишное покрытие
                  </li>
                  <li class="list _brown">
                    <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="#CCA370"/>
                    </svg>
                    Заводская гарантия
                  </li>
                  <li class="list _blue">
                    <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5" cy="5" r="5" fill="#10D8D9"/>
                    </svg>
                    Доставка по России
                  </li>
                </ul>
            </div>
          </div>

          <div class="row">
            <div class="col mt-sm-2">
              <p class="customizedCollection__info">
                Высочайшее качество кастомизации не оставит равнодушным никого. Кастомизированная Яндекс.Станции Лайт
                станет прекрасным дизайнерским объектом в вашей квартире, офисе или заведении. Незамеченной остаться не
                получится, она будет привлекать к себе внимание всех ваших гостей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gamePodStick__title {
  margin: 110px 0 40px 0;
  color: black;
  font-size: 50px;
  font-weight: 600;
  line-height: 65px;
}

.customizedCollection-ul svg {
  left: -20px;
  top: 6px;
}

.customizedCollection-ul .list {
  position: relative;
  margin-bottom: 10px;
  color: black;
}

.customizedCollection__info {
  color: black;
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
  max-width: 1420px;
}

@media screen and (max-width:1199px) {
  .gamePodStick__title {
    margin: 50px 0 10px 0;
    font-size: 35px;
    line-height: normal;
  }

  .customizedCollection-ul {
    font-size: 17px;
  }

  .customizedCollection__info {
    font-size: 20px;
    line-height: normal;
  }
}
@media screen and (max-width:767px) {
  .customizedCollection-ul {
    margin: 0;
  }
}
@media screen and (max-width:575px) {
  .gamePodStick__title {
    font-size: 24px;
    line-height: 31px;
  }

  .customizedCollection-ul {
    font-size: 15px;
  }

  .customizedCollection__info {
    font-size: 15px;
  }
}
</style>
