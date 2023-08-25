<script setup>
import router from "../../plugins/router.js";
const scrollElement = (id) => {
  try {
    document.getElementById(id).scrollIntoView({behavior: "smooth",'top':'top'})
  } catch (e) {
    router.push('/' + id)
  }
}

</script>

<template>
  <div class="row d-flex justify-content-center" id="yandex-customize">
    <div class="col-12 col-xxl-11 col-xxxl-10 customized-collection">
          <h2 class="__title text-black title-lg">
            Кастомизированная коллекция <br> Яндекс.Станции Лайт
          </h2>

          <div class="row">
            <div class="col-12 col-md-6 mt-2 mt-sm-3 mt-md-0">
              <ul class="list-unstyled ps-4">
                <li data-aos="fade-up" data-aos-offset="30">
                  <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#6337FF"/></svg>
                  Четкость рисунка
                </li>
                <li data-aos="fade-up" data-aos-delay="50" data-aos-offset="30">
                  <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#F4414E"/></svg>
                  Насыщенность цветов
                </li>
                <li class="list" data-aos="fade-up" data-aos-delay="100" data-aos-offset="30">
                  <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#FBD301"/></svg>
                  Нанесение технически сложных элементов
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6 d-flex">
              <ul class="list-unstyled ps-4">
                <li data-aos="fade-up" data-aos-delay="150" data-aos-offset="30">
                  <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#10D8D9"/></svg>
                  Износостойкое финишное покрытие
                </li>
                <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="30">
                  <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#F81478"/></svg>
                  Заводская гарантия
                </li>
                <li data-aos="fade-up" data-aos-delay="250" data-aos-offset="30">
                  <svg class="position-absolute" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#CCA370"/></svg>
                  Доставка по России
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col mt-sm-2">
              <p class="__info mt-3">
                Высочайшее качество кастомизации не оставит равнодушным никого. Кастомизированная Яндекс.Станции Лайт
                станет прекрасным дизайнерским объектом в вашей квартире, офисе или заведении. Незамеченной остаться не
                получится, она будет привлекать к себе внимание всех ваших гостей.
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
.customized-collection .__title {
  margin: 110px 0 40px 0;
}

.customized-collection svg {
  left: -20px;
  top: 10px;
}

.customized-collection li {
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  position: relative;
  margin-bottom: 10px;
  color: black;
}

.customized-collection .__info {
  color: black;
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  max-width: 1420px;
}

@media screen and (max-width: 1199px) {
  .customized-collection .__title {
    margin: 50px 0 10px 0;
  }

  .customized-collection svg {
    left: -20px;
    top: 6px;
  }

  .customized-collection li,
  .customized-collection .__info {
    font-size: 20px;
  }
}

@media screen and (max-width: 767px) {
  .customized-collection ul {
    margin: 0;
  }
}

@media screen and (max-width: 575px) {
  .customized-collection li,
  .customized-collection .__info {
    font-size: 15px;
  }

  .customized-collection svg {
    top: 4px;
  }
}
</style>
