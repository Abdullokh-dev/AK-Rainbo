<script setup>
import {ref} from "vue";
import { Pagination, Fade } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import '../../assets/css/flicking-inline.css';
import "../../assets/css/pagination.css";
const plugins = ref([new Pagination({ type: 'bullet' }), new Fade()])
</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="suit-title title-xl">
        Подходит под разный интерьер
      </h2>
    </div>
  </div>

  <div class="row">
    <div class="col-12 p-0">
      <Flicking :plugins="plugins" :options="{changeOnHold: true,circular: true,moveType: 'strict'}">
        <!-- First Slide -->
        <div class="interior d-flex">
          <div class="col-8 p-0 bg-warning">
            <img class="__img flex-shrink-0" src="../../assets/images/HomePod/suit-1-1.png" width="2620" alt="#" draggable="false">
          </div>

          <div class="col-4 d-flex bg-info">
            <div class="row d-flex">
              <div class="col-12 p-0 d-flex">
                <img class="__img flex-shrink-0" src="../../assets/images/HomePod/suit-1-2.png" width="1220" alt="#" draggable="false">
              </div>

              <div class="col-12 p-0 d-flex">
                <img class="__img flex-shrink-0" src="../../assets/images/HomePod/suit-1-3.png" width="1220" alt="#" draggable="false">
              </div>
            </div>
          </div>
        </div>

        <div class="interior d-flex">
          <div class="col-8 p-0 bg-warning">

            <img class="__img flex-shrink-0" src="../../assets/images/HomePod/suit-2-1.png" width="2618" alt="#" draggable="false">
          </div>

          <div class="col-4 d-flex bg-info">
            <div class="row d-flex">
              <div class="col-12 p-0 d-flex">
                <img class="__img flex-shrink-0" src="../../assets/images/HomePod/suit-2-2.png" width="1222" alt="#" draggable="false">
              </div>

              <div class="col-12 p-0 d-flex">
                <img class="__img flex-shrink-0" src="../../assets/images/HomePod/suit-2-3.png" width="1221" alt="#" draggable="false">
              </div>
            </div>
          </div>
        </div>

        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </div>
  </div>
</template>

<style scoped>
.suit-title {
  margin: 121px 0 50px 0;
}

.interior {
  width: 100%;
}

.interior .__img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

@media screen and (max-width:1199px) {
  .suit-title {
    margin-top: 75px;
  }
}
@media screen and (max-width:575px) {
  .suit-title {
    margin-top: 50px;
  }
}
</style>
