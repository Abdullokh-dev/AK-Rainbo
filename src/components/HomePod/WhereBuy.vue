<script setup>
</script>

<template>
  <div class="where-buy row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row bg-row">
        <div class="col-12 col-lg-5">
          <h2 class="__title title-xl">
            Где купить?
          </h2>
          <h3 class="title-md __title-md uppercase">
            Cтереосистема <br> Раинбо Technics
          </h3>
          <p class="__info text-md">Слышать звук так, как он звучит.</p>
          <div class="__btn">
            <a href="https://rainboskin.me" target="_blank" class="text-md shining"> Купить
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0195312 0.797162L0.810848 0L7.36243 6.59999L0.810848 13.2L0.0195312 12.4028L5.77924 6.59999L0.0195312 0.797162Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.where-buy {
  background: url("../../assets/images/HomePod/img_1.png") center top;
  background-size: cover;
}

.where-buy .__title {
  margin-top: 35px;
  font-weight: 600;
}

.where-buy .__title-md {
  font-weight: 600;
  margin: 109px 0 30px;
}

.where-buy .__info {
  font-weight: 500;
  line-height: normal;
}

.where-buy .__btn  {
  margin: 50px 0 89px 0;
}

.where-buy .__btn a {
  background-color: #757D62;
  color: white;
  padding: 18px 100px 18px 82px;
  border-radius: 10px;
  position: relative;
}

.where-buy .__btn svg {
  transition: right .3s;
  position: absolute;
  right: 80px;
  top: 25px
}

.where-buy .__btn a:hover svg {
  right: 75px;
}

@media screen and (max-width:1199px) {
  .where-buy .__title {
    margin-top: 25px;
  }

  .where-buy .__title-md,
  .where-buy .__btn {
    margin-top: 30px;
  }

  .where-buy .__btn a {
    padding: 15px 75px 15px 62px;
  }

  .where-buy .__btn svg {
    right: 50px;
    top: 20px
  }

  .where-buy .__btn a:hover svg {
    right: 45px;
  }
}

@media screen and (max-width:991px) {
  .where-buy {
    background: url("../../assets/images/HomePod/mobile-bottom.png") bottom no-repeat;
    background-size: cover !important;
  }

  .where-buy .__title-md {
    margin: 35px 0 25px;
  }

  .where-buy .__btn  {
    margin: 35px 0 264px 0;
  }
}

@media screen and (max-width:575px) {
  .where-buy .__title {
    margin-top: 20px;
  }

  .where-buy .__title-md {
    margin: 10px 0;
  }

  .where-buy .__btn  {
    margin: 32px 0 164px 0;
  }

  .where-buy .__btn a {
    padding: 3px 35px 3px 23px;
  }

  .where-buy .__btn svg {
    height: 10px;
    right: 22px;
    top: 9px
  }

  .where-buy .__btn a:hover svg {
    right: 18px;
  }
}
</style>
