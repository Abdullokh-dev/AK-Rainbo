<script setup>
import {ref} from "vue";
import { Pagination,Arrow, Fade } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import '../../assets/css/flicking-inline.css';
import "../../assets/css/arrow.css";
import "../../assets/css/pagination.css";
const plugins = ref([new Pagination({ type: 'bullet' }), new Arrow(), new Fade()])
</script>

<template>
  <div class="row d-flex justify-content-center comparison">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="__title title-xl">
        Сравнение с конкурентами
      </h2>
    </div>
  </div>
  <Flicking :plugins="plugins" :options="{changeOnHold: true,circular: true,moveType: 'strict'}" class="comparison d-lg-none">
    <!-- Slide 1-->
    <div class="d-flex duality-slider w-100">
      <div class="col-12">
        <div class="row">
          <!-- Images -->
          <div class="col-6 px-4">
            <img src="../../assets/images/HomePod/compare-1.png" width="658" alt="#" class="__img" draggable="false">
          </div>
          <div class="col-6 px-4">
            <img src="../../assets/images/HomePod/compare-2.png" width="658" alt="#" class="__img" draggable="false">
          </div>
          <!-- Names -->
          <div class="col-6 text-center">
            <h3 class="__name">RAINBO TECHNICS</h3>
            <div class="_hr mx-4"></div>
          </div>
          <div class="col-6 text-center">
            <h3 class="__name">Klipsch The Three II</h3>
            <div class="_hr mx-4"></div>
          </div>
          <!-- Header -->
          <div class="col-6 text-center vertical-hr">
            <div class="__header">Класс</div>
          </div>
          <div class="col-6 text-center">
            <div class="__header">Класс</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">Беспроводная Hi-Fi</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">Беспроводная Hi-Fi</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Подключения</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Подключения</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">Аналоговый, SP-DIF, Bluetooth 5.1 aptX HD</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">Аналоговый, Bluetooth 4.2</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Мощность</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Мощность</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">130 Вт</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">120 Вт</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Частотный диапазон</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Частотный диапазон</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">35 – 22 000 Hz</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">45 – 20 000 Hz</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Акустическое оформление</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Акустическое оформление</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">Бандпасс</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">Пассивные излучатели</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Конфигурация</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Конфигурация</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">Трёхполосная</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">Двухполосная</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Регуляторы тембра</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Регуляторы тембра</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">НЧ, СЧ, ВЧ</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">НЧ</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Материал кормпуса</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Материал кормпуса</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">МДФ /металл/акрил</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">МДФ/АВС</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center vertical-hr">
            <div class="__theme">Вес</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Вес</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center vertical-hr">
            <div class="__info text-md">7,2 кг</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">4,4 кг</div>
          </div>
        </div>
      </div>
    </div>
    <!--Slide 2-->
    <div class="d-flex duality-slider w-100">
      <div class="col-12">
        <div class="row">
          <!-- Images -->
          <div class="col-6 px-4">
            <img src="../../assets/images/HomePod/compare-3.png" alt="#" width="658" class="__img" draggable="false">
          </div>
          <div class="col-6 px-4">
            <img src="../../assets/images/HomePod/compare-4.png" alt="#" width="658" class="__img" draggable="false">
          </div>
          <!-- Names -->
          <div class="col-6 text-center">
            <h3 class="__name">Marshall Woburn ll</h3>
            <div class="_hr mx-4"></div>
          </div>
          <div class="col-6 text-center">
            <h3 class="__name">Audio Pro C10 MK</h3>
            <div class="_hr mx-4"></div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__header">Класс</div>
          </div>
          <div class="col-6 text-center">
            <div class="__header">Класс</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">Беспроводная Hi-Fi</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">Беспроводная Hi-Fi</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Подключения</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Подключения</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">Аналоговый, Bluetooth 5.0 aptX</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">Аналоговый, Bluetooth 4.2</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Мощность</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Мощность</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">130 Вт</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">80 Вт</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Частотный диапазон</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Частотный диапазон</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">30-20 000 Hz</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">45 - 22000 Гц</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Акустическое оформление</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Акустическое оформление</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">Фазоинверторного типа</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">Закрытый ящик</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Конфигурация</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Конфигурация</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">Двухполосная</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">2.1</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Регуляторы тембра</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Регуляторы тембра</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">НЧ, ВЧ</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">НЧ, ВЧ</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Материал кормпуса</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Материал кормпуса</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">МДФ/металл</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">МДФ/АВС</div>
          </div>
          <!-- Theme -->
          <div class="col-6 text-center">
            <div class="__theme">Вес</div>
          </div>
          <div class="col-6 text-center">
            <div class="__theme">Вес</div>
          </div>
          <!-- Info -->
          <div class="col-6 text-center">
            <div class="__info text-md">6,5 кг</div>
          </div>
          <div class="col-6 text-center">
            <div class="__info text-md">3,9 кг</div>
          </div>
        </div>
      </div>
    </div>

    <template #viewport>
      <div class="flicking-pagination pagination-light-table mt-5"></div>

      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
    </template>
  </Flicking>

  <div class="d-none d-lg-inline-block row d-flex justify-content-center comparison">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="row">
            <!-- Images -->
            <div class="col-6 px-4">
              <img src="../../assets/images/HomePod/compare-1.png" width="658" alt="#" class="__img">
            </div>
            <div class="col-6 px-4">
              <img src="../../assets/images/HomePod/compare-2.png" width="658" alt="#" class="__img">
            </div>
            <!-- Names -->
            <div class="col-6 text-center">
              <h3 class="__name">RAINBO TECHNICS</h3>
              <div class="_hr mx-4"></div>
            </div>
            <div class="col-6 text-center">
              <h3 class="__name">Klipsch The Three II</h3>
              <div class="_hr mx-4"></div>
            </div>
            <!-- Header -->
            <div class="col-6 text-center vertical-hr">
              <div class="__header">Класс</div>
            </div>
            <div class="col-6 text-center">
              <div class="__header">Класс</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">Беспроводная Hi-Fi</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">Беспроводная Hi-Fi</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Подключения</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Подключения</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">Аналоговый, SP-DIF, Bluetooth 5.1 aptX HD</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">Аналоговый, Bluetooth 4.2</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Мощность</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Мощность</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">130 Вт</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">120 Вт</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Частотный диапазон</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Частотный диапазон</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">35 – 22 000 Hz</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">45 – 20 000 Hz</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Акустическое оформление</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Акустическое оформление</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">Бандпасс</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">Пассивные излучатели</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Конфигурация</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Конфигурация</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">Трёхполосная</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">Двухполосная</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Регуляторы тембра</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Регуляторы тембра</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">НЧ, СЧ, ВЧ</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">НЧ</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Материал кормпуса</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Материал кормпуса</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">МДФ /металл/акрил</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">МДФ/АВС</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center vertical-hr">
              <div class="__theme">Вес</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Вес</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center vertical-hr">
              <div class="__info text-md">7,2 кг</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">4,4 кг</div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="row">
            <!-- Images -->
            <div class="col-6 px-4">
              <img src="../../assets/images/HomePod/compare-3.png" alt="#" width="658" class="__img">
            </div>
            <div class="col-6 px-4">
              <img src="../../assets/images/HomePod/compare-4.png" alt="#" width="658" class="__img">
            </div>
            <!-- Names -->
            <div class="col-6 text-center">
              <h3 class="__name">Marshall Woburn ll</h3>
              <div class="_hr mx-4"></div>
            </div>
            <div class="col-6 text-center">
              <h3 class="__name">Audio Pro C10 MK</h3>
              <div class="_hr mx-4"></div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__header">Класс</div>
            </div>
            <div class="col-6 text-center">
              <div class="__header">Класс</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">Беспроводная Hi-Fi</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">Беспроводная Hi-Fi</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Подключения</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Подключения</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">Аналоговый, Bluetooth 5.0 aptX</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">Аналоговый, Bluetooth 4.2</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Мощность</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Мощность</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">130 Вт</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">80 Вт</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Частотный диапазон</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Частотный диапазон</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">30-20 000 Hz</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">45 - 22000 Гц</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Акустическое оформление</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Акустическое оформление</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">Фазоинверторного типа</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">Закрытый ящик</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Конфигурация</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Конфигурация</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">Двухполосная</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">2.1</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Регуляторы тембра</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Регуляторы тембра</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">НЧ, ВЧ</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">НЧ, ВЧ</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Материал кормпуса</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Материал кормпуса</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">МДФ/металл</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">МДФ/АВС</div>
            </div>
            <!-- Theme -->
            <div class="col-6 text-center">
              <div class="__theme">Вес</div>
            </div>
            <div class="col-6 text-center">
              <div class="__theme">Вес</div>
            </div>
            <!-- Info -->
            <div class="col-6 text-center">
              <div class="__info text-md">6,5 кг</div>
            </div>
            <div class="col-6 text-center">
              <div class="__info text-md">3,9 кг</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comparison .__title {
  margin: 100px 0 42px 0;
}

.comparison .__img {
  width: 100%;
}

.comparison .__name,
.comparison .__header,
.comparison .__theme {
  font-size: 24px;
  font-weight: 600;
}

.comparison .__name {
  margin-top: 29px;
}

.comparison ._hr {
  border-bottom: 1px solid #A5A5A5;
  margin-top: 40px;
}

.comparison .__header {
  margin-top: 50px;
}

.comparison .__info {
  margin: 25px auto 0 auto;
  max-width: 274px;
}

.comparison .__theme {
  margin: 39px auto 0 auto;
  max-width: 259px;
}

.vertical-hr {
  border-right: 1px solid #A5A5A5;
}

@media screen and (max-width:1199px) {
  .comparison .__name,
  .comparison .__header,
  .comparison .__theme {
    font-size: 21px;
  }
}

@media screen and (max-width:991px) {
  .comparison .__title {
    margin: 50px 0 40px 0;
  }
  .comparison .vertical-hr {
    border-right: none;
  }

  .comparison .__header {
    margin-top: 20px;
  }
  .comparison ._hr {
    margin-top: 20px;
  }

  .comparison .__theme {
    margin: 20px auto 0 auto;
  }
}

@media screen and (max-width:575px) {
  .comparison .__name,
  .comparison .__header,
  .comparison .__theme {
    font-size: 19px;
  }
}

</style>
