<script setup>

</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10 ps4">

      <div class="row">
        <div class="col-12">
          <h2 class="title-md text-center">Кастомизированные <span class="nowrap">PLAYSTATION 4</span></h2>
        </div>

        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <div class="text-center __box my-auto">
            <h3 class="__title-md mt-4 pb-1">PLAYSTATION 4 PRO</h3>
            <p class="__info">
              Купить Sony PlayStation 4 PRO теперь можно в уникальном дизайне без лишних переплат в нашем магазине.
            </p>
            <div class="__btn">
              <a href="https://rainboskin.me/sony/sony-playstation-pro/" target="_blank" class="btn-txt">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <img class="__img d-flex mx-auto mx-lg-0" src="../assets/images/Playstation/ps-first.png" width="1312" alt="#">
        </div>
      </div>

      <div class="row flex-lg-row-reverse">
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <div class="text-center __box-second my-auto">
            <h3 class="__title-md pb-1 mt-4 pt-3 mt-lg-0 pt-lg-0">PLAYSTATION 4</h3>
            <p class="__info">
              Кастомизированный вариант игровой консоли PlayStation 4 – ваш персональный центр развлечений. Вы сможете
              играть, смотреть видео, слушать музыку, а доступ в интернет позволит найти партнеров для игр.
            </p>
            <div class="__btn">
              <a href="https://rainboskin.me/sony/sony-playstation-4/" target="_blank" class="btn-txt _pink">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 d-flex justify-content-end">
          <img class="__img-2 mx-auto mx-lg-0" src="../assets/images/Playstation/ps-second.png" width="1140" alt="#">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-md {
  margin-top: 150px;
}

.ps4 .__box {
  max-width: 451px;
}

.ps4 .__box-second{
  max-width: 500px;
}

.ps4 .__title-md {
  font-size: 20px;
  font-weight: 700;
  line-height: 130%;
}

.ps4 .__info {
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
}

.ps4 .__btn {
  margin: 47px 0 35px 0;
}

.ps4 .__btn a {
  transition: background-color .3s;
  color: white;
  background-color: #3E3AFF;
  padding: 13px 96px;
  border-radius: 50rem;
}

.ps4 .__btn a:hover {
  background-color: rgba(62, 58, 255, 0.8);
}

.ps4 .__btn ._pink {
  background-color: #FF6891;
}

.ps4 .__btn ._pink:hover {
  background-color: rgba(255, 104, 145, 0.8);
}

.ps4 .__img {
  width: 100%;
  max-width: 636px;
}

.__img-2 {
  width: 100%;
  max-width: 570px;
}

@media screen and (max-width: 1199px) {
  .title-md {
    margin-top: 90px;
  }

  .ps4 .__title-md,
  .ps4 .__info {
    font-size: 17px;
  }
}

@media screen and (max-width: 575px) {
  .title-md {
    text-align: left !important;
  }

  .ps4 .__title-md,
  .ps4 .__info {
    font-size: 15px;
  }
}
</style>
