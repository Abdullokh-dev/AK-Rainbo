<script setup>
</script>

<template>
  <div class="where-buy row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="__title title-xl">
        Где купить?
      </h2>
      <h3 class="title-md __title-md uppercase">
        Cтереосистема <br> Раинбо Technics
      </h3>
      <p class="__info text-md">Слышать звук так, как он звучит.</p>
      <div class="__btn">
        <a href="https://rainboskin.me" target="_blank" class="text-md"> Купить
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0195312 0.797162L0.810848 0L7.36243 6.59999L0.810848 13.2L0.0195312 12.4028L5.77924 6.59999L0.0195312 0.797162Z" fill="white"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.where-buy {
  background: url("../../assets/images/HomePod/img_2.png") no-repeat center top;
  background-size: cover;
}

.where-buy .__title {
  margin-top: 100px;
}

.where-buy .__title-md {
  margin: 109px 0 30px;
}

.where-buy .__info {
  font-weight: 500;
  line-height: normal;
}

.where-buy .__btn  {
  margin: 65px 0 89px 0;
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
    margin-top: 75px;
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
  .where-buy .__title-md {
    margin: 70px 0 20px;
  }

  .where-buy .__btn  {
    margin: 45px 0 89px 0;
  }
}

@media screen and (max-width:575px) {
  .where-buy .__title {
    margin-top: 12px;
  }

  .where-buy .__title-md {
    margin: 30px 0 20px;
  }

  .where-buy .__btn a {
    padding: 12px 65px 12px 52px;
  }

  .where-buy .__btn svg {
    height: 11px;
    right: 50px;
    top: 18px
  }

  .where-buy .__btn a:hover svg {
    right: 45px;
  }
}
</style>
