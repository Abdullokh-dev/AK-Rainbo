<script setup>

</script>

<template>
  <div class="row bg-white specification">
    <div class="col">

      <div class="row">
        <div class="col text-center">
          <h2 class="__title">Технические характеристики</h2>
        </div>
      </div>

      <div class="row d-flex flex-lg-row-reverse">
        <div class="col-12 col-lg-6 d-flex">
          <p class="__info my-lg-auto">
            <b class="_bold">Голосовой помощник:</b> Алиса <br>
            <b class="_bold">Язык голосового помощника:</b> русский <br>
            <b class="_bold">Экосистема:</b> Умный дом Яндекса <br>
            <b class="_bold">Питание:</b> от сети <br>
            <b class="_bold">Суммарная мощность:</b> 5 Вт <br>
            <b class="_bold">Протокол связи Умного дома:</b> Bluetooth, Wi-Fi <br>
            <b class="_bold">Беспроводная связь:</b> Bluetooth, Wi-Fi <br>
            <b class="_bold">Размеры (ШxВxГ):</b> 90x55x90 мм <br>
            <b class="_bold">Вес:</b> 0.23 кг <br>
          </p>
        </div>

        <div class="col-12 col-lg-6">
          <div class="mt-lg-5 mt-xl-3 mt-xxl-0">
            <img class="specification-img" src="../assets/images/YandexStation/specification.png" width="1898" alt="#">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.specification .__title {
  color: black;
  font-size: 50px;
  font-weight: 600;
  line-height: 130%;
  margin: 183px 0 50px 0;
}

.specification-img {
  width: 100%;
  max-width: 949px;
}

.specification .__info {
  font-size: 24px;
  font-style: normal;
  color: #000;
  font-weight: 400;
  line-height: 40px;
}

.specification .__info ._bold {
  font-weight: 500;
}

@media screen and (max-width:1199px) {
  .specification .__title {
    font-size: 35px;
    margin: 50px auto 25px auto;
  }
}

@media screen and (max-width:991px) {
  .specification-img {
    margin-left: -6%;
  }

  .specification .__info ._bold {
    font-weight: 600;
  }
}

@media screen and (max-width:575px) {
  .specification .__title {
    font-size: 24px;
    max-width: 245px;
  }

  .specification .__info {
    font-size: 15px;
  }
}
</style>
