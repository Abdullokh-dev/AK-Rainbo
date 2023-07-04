<script setup>

</script>

<template>
  <!-- Bordered Background -->
  <div class="row d-none d-lg-block" style="position: absolute; width: 100vw; z-index: -1">
    <div class="col">
      <div class="bg-left"></div>
      <div class="bg-right"></div>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h1>СТЕРЕОСИСТЕМА RAINBO TECHNICS</h1>
          <p>
            Слышать звук так, как он звучит.
          </p>
          <button class="mt-4">
            Узнать больше
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.785086L0.785086 0L7.28509 6.5L0.785086 13L0 12.2149L5.71436 6.5L0 0.785086Z" fill="white"/>
            </svg>
          </button>
        </div>

        <div class="col-12 col-lg-6 speaker_background">
          <div class="speaker">
            <img src="../assets/images/main-player.png" alt="#" style="width: 100%">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
h1 {
  font-size: 60px;
  font-weight: 700;
  line-height: 73px;
  margin-top: 223px;
  max-width: 593px;
}

p {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}

button {
  color: white;
  background-color: #757D62;
  font-size: 20px;
  padding: 13px 53px;
  margin-bottom: 300px;
}

.speaker {
  filter: drop-shadow( 1rem -1rem 2.75rem #788166);
  width: 80%;
  max-width: 628px;
  display: flex;
  margin: 150px auto 75px auto;
}

.bg-left {
  position: absolute;
  left: 0;
  width: 55%;
  height: 770px;
  background-color: #161616;
  border-radius: 0 0 375px 0;
}

.bg-right {
  width: 55%;
  height: 730px;
  background-color: #20211D;
  border-radius: 0 0 0 363px;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 991px) {
  h1 {
    line-height: normal;
    margin-top: 127px;
  }

  button {
    margin-bottom: 43px;
  }

  .speaker_background {
    background-color: #20211D;
    border-radius: 0 150px 0 0;
  }

  .speaker {
    filter: drop-shadow( 1rem -1rem 2.75rem #788166);
    width: 100%;
    max-width: 628px;
    display: flex;
    margin: 60px auto 46px auto;
  }
}

@media screen and (max-width: 1199px) {
  h1 {
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  }

  .bg-left {
    position: absolute;
    left: 0;
    width: 55%;
    height: 670px;
    background-color: #161616;
    border-radius: 0 0 375px 0;
  }
  .bg-right {
    width: 55%;
    height: 630px;
    background-color: #20211D;
    border-radius: 0 0 0 363px;
    position: absolute;
    right: 0;
  }
}
</style>
