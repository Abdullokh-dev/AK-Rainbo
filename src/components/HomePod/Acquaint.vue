<script setup>

</script>

<template>
  <div class="row position-relative">
    <div class="col-12 experts-section">
      <!-- Pulse Animate -->
      <div>
        <img src="../../assets/images/HomePod/pulse.png" class="animated__pulse" alt="#" width="1280">
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 col-xxl-11 col-xxxl-10">
          <h2 class="__title title-xl">
            ЗНАКОМЬТЕСЬ: RAINBO <br/> TECHNICS Bass Expert
          </h2>

          <p class="__info text-lg mt-4 mb-3 mt-md-5 mb-md-4">
            Обычно для полноценного прослушивания музыки необходимо покупать дорогостоящие большие напольные колонки,
            усилители и проигрыватель, а прослушивание музыки в студиях – удел немногих. Теперь вы можете присоединиться
            к ним и услышать ритм так, как его хотели услышать ваши любимые исполнители.
          </p>
          <p class="__info text-lg">
            Домашняя музыкальная система RAINBO TECHNICS Bass Expert – настоящая Hi-Fi система в относительно небольшом
            корпусе. Погрузитесь в настолько насыщенный опыт прослушивания, что вы удивитесь, как вы наслаждались
            музыкой раньше.
          </p>
        </div>
      </div>

      <div class="row my-3 my-lg-4 py-lg-2 d-flex">
        <div class="col-5 p-0 d-flex">
          <div class="acquaint-img d-flex">
            <img src="../../assets/images/HomePod/slide-1.png" alt="#" width="1590" class="__img">
          </div>
        </div>
        <div class="col-7 p-0 d-flex">
          <div class="acquaint-img d-flex ps-2 ps-lg-3">
            <img src="../../assets/images/HomePod/slide-2.png" alt="#" width="2210" class="__img-2">
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center pt-2">
        <div class="col-12 col-xxl-11 col-xxxl-10">
          <p class="__info text-lg mb-3 mb-md-4">
            Оснащенный твитерами и мощным сабвуфером, RT Bass Expert создан для того, чтобы поражать исключительным
            качеством беспроводного звука, по-настоящему чтить музыку в том виде, в каком она была написана. Каждая
            деталь, каждая частота, каждый тон и вибрация.
          </p>
          <p class="__info text-lg">
            Приготовьтесь привнести непревзойденный музыкальный опыт в свой дом по доступной цене.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>


<style scoped>
.animated__pulse {
  width: 40%;
  position: absolute;
  right: 0;
  max-width: 1022px;
}

.experts-section .__title {
  margin-top: 134px;
}

.experts-section .__info {
  font-weight: 400;
  max-width: 78%;
}

.acquaint-img .__img, .acquaint-img .__img-2 {
  width: 100%;
  flex-shrink: 0;
}

@media screen and (max-width: 1199px) {
  .experts-section .__info {
    max-width: 95%;
  }
}

@media screen and (max-width: 991px) {
  .experts-section .__title {
    margin-top: 40px;
  }
}
</style>
