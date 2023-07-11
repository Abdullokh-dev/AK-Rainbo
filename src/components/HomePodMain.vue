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
  </div>
</template>

<script setup>

</script>

<style scoped>
.mainPodSection {
  line-height: normal;
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


@media screen and (max-width:1199px) {
  .homePod__title {
    max-width: 420px;
  }

}

@media screen and (max-width:991px) {
  .homePod__info {
    margin-top: 10px;
  }
}

@media screen and (max-width:575px) {
  .homePod__info {
    font-size: 20px;
  }

  .homePod__title {
    font-size: 24px;
    max-width: 250px;
  }
}
</style>
