<template>
  <div class="row mainPodSection">
    <div class="col-12 text-center">
      <p class="homePod__info">RAINBO TECHNICS Bass Expert</p>
    </div>

    <div class="col-12 text-center">
      <h1 class="homePod__title mx-auto mt-4">
        Услышать звук так, как задумал артист
      </h1>
    </div>

    <div class="col-12 text-center homePod__description">
      <!-- Pulse Animate -->
      <div>
        <img src="../assets/images/HomePod/pulse.png" class="animated__pulse" alt="#" width="1280">
      </div>

      <h2 class="homePod__title-2">
        ЗНАКОМЬТЕСЬ: RAINBO TECHNICS Bass Expert
      </h2>

      <p class="__info mt-4 mb-3 mt-md-5 mb-md-4">
        Обычно для полноценного прослушивания музыки необходимо покупать дорогостоящие большие напольные колонки,
        усилители и проигрыватель, а прослушивание музыки в студиях – удел немногих. Теперь вы можете присоединиться к
        ним и услышать ритм так, как его хотели услышать ваши любимые исполнители.
      </p>
      <p class="__info">
        Домашняя музыкальная система RAINBO TECHNICS Bass Expert – настоящая Hi-Fi система в относительно небольшом
        корпусе. Погрузитесь в настолько насыщенный опыт прослушивания, что вы удивитесь, как вы наслаждались музыкой
        раньше.
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.mainPodSection {
  line-height: normal;
}
.animated__pulse  {
  width: 100%;
  max-width: 1022px;
}

.homePod__title {
  font-size: 60px;
  font-weight: 500;
}

.homePod__info {
  margin-top: 233px;
  font-size: 24px;
  font-weight: 500;
}

.homePod__title-2 {
  font-size: 60px;
  font-weight: 600;
  text-align: left;
}

.homePod__description .__info {
  font-size: 24px;
  font-weight: 500;
  text-align: left;
}

@media screen and (max-width:1366px) {}
@media screen and (max-width:1199px) {
  .homePod__title, .homePod__title-2 {
    font-size: 40px;
  }

  .homePod__title {
    max-width: 420px;
  }

  .homePod__description .__info {
    font-size: 20px;
  }
}
@media screen and (max-width:991px) {
  .homePod__info {
    margin-top: 10px;
  }
}
@media screen and (max-width:767px) {}
@media screen and (max-width:575px) {
  .homePod__info {
    font-size: 20px;
  }

  .homePod__title, .homePod__title-2 {
    font-size: 24px;
  }

  .homePod__title {
    max-width: 250px;
  }

  .homePod__description .__info {
    font-size: 15px;
  }
}
</style>
