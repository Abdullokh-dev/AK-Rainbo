<script setup>

</script>

<template>
  <div class="row">
    <div class="col-12 text-center homePod__description">
      <!-- Pulse Animate -->
      <div>
        <img src="../../assets/images/HomePod/pulse.png" class="animated__pulse" alt="#" width="1280">
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 col-xxl-11 col-xxxl-10">
          <h2 class="homePod__title-2">
            ЗНАКОМЬТЕСЬ: RAINBO <br/> TECHNICS Bass Expert
          </h2>

          <p class="__info mt-4 mb-3 mt-md-5 mb-md-4">
            Обычно для полноценного прослушивания музыки необходимо покупать дорогостоящие большие напольные колонки,
            усилители и проигрыватель, а прослушивание музыки в студиях – удел немногих. Теперь вы можете присоединиться
            к
            ним и услышать ритм так, как его хотели услышать ваши любимые исполнители.
          </p>
          <p class="__info">
            Домашняя музыкальная система RAINBO TECHNICS Bass Expert – настоящая Hi-Fi система в относительно небольшом
            корпусе. Погрузитесь в настолько насыщенный опыт прослушивания, что вы удивитесь, как вы наслаждались
            музыкой
            раньше.
          </p>
        </div>
      </div>

      <div class="row my-3 my-lg-4">
        <div class="col-5 p-0 d-flex">
          <div class="acquaint-img d-flex">
            <img src="../../assets/images/HomePod/img.png" alt="#" width="1590" class="__img">
          </div>
        </div>
        <div class="col-7 p-0 d-flex">
          <div class="acquaint-img d-flex ps-2 ps-lg-3">
            <img src="../../assets/images/HomePod/img_1.png" alt="#" width="2210" class="__img-2">
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 col-xxl-11 col-xxxl-10">
          <p class="__info mb-3 mb-md-4">
            Оснащенный твитерами и мощным сабвуфером, RT Bass Expert создан для того, чтобы поражать исключительным
            качеством беспроводного звука, по-настоящему чтить музыку в том виде, в каком она была написана. Каждая
            деталь, каждая частота, каждый тон и вибрация.
          </p>
          <p class="__info">
            Приготовьтесь привнести непревзойденный музыкальный опыт в свой дом по доступной цене.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animated__pulse {
  width: 100%;
  max-width: 1022px;
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
  max-width: 75%;
}

.acquaint-img .__img, .acquaint-img .__img-2 {
  width: 100%;
}

@media screen and (max-width: 1199px) {
  .homePod__title-2 {
    font-size: 40px;
  }

  .homePod__description .__info {
    font-size: 20px;
    max-width: 95%;
  }
}

@media screen and (max-width: 575px) {
  .homePod__title-2 {
    font-size: 24px;
  }

  .homePod__description .__info {
    font-size: 15px;
  }
}
</style>
