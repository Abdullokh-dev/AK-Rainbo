<script setup>
import Plyr from 'plyr';
import {onMounted, ref} from "vue";
import '../assets/videos/plyr.css';

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
    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="row">
        <div class="col">
          <h2 class="gamePodStick__title title-md text-black">
            Насадки на стики геймпада Rainbo
          </h2>
        </div>
      </div>

      <div class="row gamePodStick text-black">
        <div class="col-12 col-lg-6">
          <h3 class="__title">Играй на профессиональном уровне</h3>
          <p class="__info">
            Разная высота стиков позволит настроить контроллер под себя. Увеличивает высоту стика на 1 см., что дает увеличение диапазон движения на 37%.
            Рифленая поверхность обеспечивает более высокий уровень контроля во время игры, вы управляете буквально кончиками пальцев.
          </p>
          <h3 class="__title">Защити стики от повреждений</h3>
          <p class="__info">
            Эффективно выполняют задачу: защищают стики от стирания и деформации
          </p>
          <h3 class="__title">Индивидуальный дизайн! Накладки</h3>
          <p class="__info">
            Накладки на стики придадут вашему геймпаду новую индивидуальность. Нами разработано более 30 вариантов дизайна и их количество будет постоянно расти.
          </p>
        </div>

        <div class="col-12 col-lg-6 my-auto">
          <video id="player-2" data-poster="./data-poster.png">
            <source src="../assets/videos/video.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gamePodStick__title {
  margin: 150px 0 50px 0;
  max-width: 1195px;
}

.gamePodStick .__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
}

.gamePodStick .__info {
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  margin: 10px 0 40px 0;
}

@media screen and (max-width:1199px) {
  .gamePodStick__title {
    font-size: 35px;
    margin: 100px 0 50px 0;
  }

  .gamePodStick .__info {
    font-size: 17px;
  }
}
@media screen and (max-width:575px) {
  .gamePodStick__title {
    font-size: 24px;
    margin: 50px 0 25px 0;
  }

  .gamePodStick .__info {
    font-size: 15px;
  }
}
</style>
