<script setup>
import Plyr from 'plyr';
import {onMounted, ref} from "vue";
import '../../assets/videos/plyr.css';

const player = ref(null)

onMounted(() => {
  player.value = new Plyr('#player-2', {
    controls: [],
    // autoplay: true
  })
})

</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 ps-3 col-xxl-11 col-xxxl-10">
      <h2 class="gamePodStick__title title-lg text-black">
        Насадки на стики геймпада Rainbo
      </h2>
    </div>
  </div>

  <div class="row gamePodStick text-black">
    <div class="col-1 d-none d-xxxl-block"></div>
    <div class="col-12 col-lg-6 col-xxl-5 ps-3 pe-5 flex-margin-left">
      <h3 class="title-xs">Играй на профессиональном уровне</h3>
      <p class="__info text-md">
        Разная высота стиков позволит настроить контроллер под себя. Увеличивает высоту стика на 1 см., что дает увеличение диапазон движения на 37%.
        Рифленая поверхность обеспечивает более высокий уровень контроля во время игры, вы управляете буквально кончиками пальцев.
      </p>
      <h3 class="title-xs">Защити стики от повреждений</h3>
      <p class="__info text-md">
        Эффективно выполняют задачу: защищают стики от стирания и деформации
      </p>
      <h3 class="title-xs">Индивидуальный дизайн! Накладки</h3>
      <p class="__info text-md mb-4 mb-lg-0">
        Накладки на стики придадут вашему геймпаду новую индивидуальность. Нами разработано более 30 вариантов дизайна и их количество будет постоянно расти.
      </p>
    </div>

    <div class="col-12 col-lg-6 col-xxl-6 flex-col p-0 my-auto">
      <video id="player-2" data-poster="./data-poster.png">
        <source src="../../assets/videos/video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style scoped>
.gamePodStick__title {
  margin: 150px 0 50px 0;
  max-width: 1195px;
}

.gamePodStick .__info {
  font-weight: 500;
  margin: 10px 0 40px 0;
}

#player-2 {
  max-width: 950px;
}

@media screen and (max-width:1199px) {
  .gamePodStick__title {
    font-size: 35px;
    margin: 100px 0 50px 0;
  }

  .gamePodStick .__info {
    margin: 7px 0 25px 0;
  }
}
@media screen and (max-width:575px) {
  .gamePodStick__title {
    font-size: 24px;
    margin: 50px 0 25px 0;
  }

  .gamePodStick .__info {
    margin: 5px 0 15px 0;
  }
}

@media screen and (min-width: 1515px) {
  .d-xxxl-block {
    display: block !important;
  }
}

@media only screen and (max-width: 1514px) and (min-width: 1399px)  {
  .flex-margin-left {
    padding-left: 5.1111% !important;
  }

  .flex-col {
    display: flex;
    width: 58%;
  }
}
</style>
