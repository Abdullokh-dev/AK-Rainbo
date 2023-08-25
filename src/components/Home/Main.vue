<script setup>
const scrollElement = (id) => {
  document.getElementById(id).scrollIntoView({behavior: "smooth",'top':'top'})
}
</script>

<template>
  <div class="row main-section">
    <div class="col-6 background-left"></div>
    <div class="col-6 background-right p-0"><img src="../../assets/images/Home/main_2.png" alt="#"></div>
    <div class="mouse d-none d-lg-inline-block">
      <svg width="23" height="57" viewBox="0 0 23 57" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer" @click="scrollElement('yandex')">
        <path opacity="0.5" d="M8.40623 0H14.5561C16.7929 0.00574622 18.9365 0.906793 20.5187 2.50629C22.1008 4.10579 22.9929 6.27372 23 8.53646V31.2205C22.9929 33.4842 22.1012 35.6533 20.5193 37.2545C18.9375 38.8557 16.7939 39.7592 14.5561 39.7678H12.2889V54.4383L16.3386 50.3472C16.4131 50.2715 16.5016 50.2116 16.5991 50.1706C16.6966 50.1297 16.8011 50.1086 16.9067 50.1086C17.0122 50.1086 17.1168 50.1297 17.2143 50.1706C17.3117 50.2116 17.4003 50.2715 17.4748 50.3472C17.6248 50.5011 17.7089 50.7085 17.7089 50.9246C17.7089 51.1407 17.6248 51.3481 17.4748 51.5021L12.0897 56.9497H12.0627H12.0304H11.8366C11.6632 57.0168 11.4714 57.0168 11.2981 56.9497H11.0019H10.9749L10.9373 56.9116L5.51978 51.4857C5.44482 51.4095 5.38543 51.3191 5.345 51.2197C5.30456 51.1203 5.28388 51.0138 5.28413 50.9063C5.28438 50.7988 5.30556 50.6924 5.34645 50.5932C5.38735 50.494 5.44716 50.4039 5.52248 50.3281C5.59779 50.2523 5.68714 50.1922 5.78541 50.1513C5.88367 50.1104 5.98895 50.0894 6.09521 50.0897C6.20147 50.0899 6.30664 50.1114 6.40472 50.1527C6.5028 50.1941 6.59186 50.2546 6.66682 50.3308L10.7326 54.422V39.7678H8.44392C6.20615 39.7592 4.06253 38.8557 2.48068 37.2545C0.898824 35.6533 0.0070924 33.4842 0 31.2205V8.53646C0.00710728 6.27372 0.899185 4.10579 2.48134 2.50629C4.0635 0.906793 6.20713 0.00574622 8.44392 0L8.40623 0ZM10.6734 18.631C10.6734 18.4142 10.7585 18.2064 10.91 18.0531C11.0615 17.8999 11.2669 17.8138 11.4812 17.8138C11.6954 17.8138 11.9008 17.8999 12.0523 18.0531C12.2038 18.2064 12.2889 18.4142 12.2889 18.631V38.1335H14.5561C16.3654 38.1249 18.0981 37.3936 19.377 36.0989C20.6559 34.8042 21.3774 33.0508 21.3845 31.2205V8.53646C21.3774 6.70716 20.6555 4.95491 19.3763 3.6619C18.0971 2.36889 16.3644 1.64003 14.5561 1.63429H8.40623C6.59791 1.64003 4.86519 2.36889 3.586 3.6619C2.30682 4.95491 1.58495 6.70716 1.57785 8.53646V31.2205C1.58493 33.0508 2.30645 34.8042 3.58534 36.0989C4.86422 37.3936 6.59692 38.1249 8.40623 38.1335H10.6734V18.631ZM10.6734 6.27569V12.5841C10.6734 12.8008 10.7585 13.0086 10.91 13.1619C11.0615 13.3151 11.2669 13.4012 11.4812 13.4012C11.6954 13.4012 11.9008 13.3151 12.0523 13.1619C12.2038 13.0086 12.2889 12.8008 12.2889 12.5841V6.26479C12.2889 6.04807 12.2038 5.84023 12.0523 5.68698C11.9008 5.53374 11.6954 5.44765 11.4812 5.44765C11.2669 5.44765 11.0615 5.53374 10.91 5.68698C10.7585 5.84023 10.6734 6.04807 10.6734 6.26479V6.27569Z" fill="white"/>
      </svg>
    </div>

    <div class="__content col-xxl-11 col-xxxl-10 mx-auto">
      <div class="col-12 col-lg-6 content-left px-3 mt-lg-3 mt-xl-5 px-xxl-0">
        <h1 class="__title title-xl uppercase pt-3 mt-lg-0">
          Стереосистема <br> Rainbo Technics
        </h1>
        <p class="text-md __info mt-3 mt-lg-3">
          Слышать звук так, как он звучит.
        </p>
        <div class="pb-2 mt-lg-4 pt-lg-3">
          <a href="#/home-pod" class="__button shining text-md mt-4 mb-4">
            Узнать больше
            <span>
            <svg class="main-section__svg" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.785086L0.785086 0L7.28509 6.5L0.785086 13L0 12.2149L5.71436 6.5L0 0.785086Z" fill="white"/>
            </svg>
          </span>
          </a>
        </div>
      </div>
      <div class="col-12 col-lg-6 content-right">
        <div class="__right-box">
          <img class="content-right__img d-lg-none" src="../../assets/images/Home/img_1.png" alt="#">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mouse {
  bottom: 0;
}

.main-section .__button {
  color: white;
  background-color: #757D62;
  padding: 13px 71px 13px 53px;
  border-radius: 50rem;
  text-decoration: none;
}

.main-section {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
}

.background-left {
  background: #161616;
  border-radius: 0 0 375px 0;
  z-index: 0;
  margin-right: -120px;
  width: calc(50% + 120px);
}

.background-right img {
  max-height: 767px;
  min-height: 550px;
  width: 100%;
  border-radius: 0 0 0 364px;
}

.background-right {
  z-index: 0;
  margin-left: -120px;
  width: calc(50% + 120px);
}

.main-section .__content {
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
}

.main-section .__title {
  font-weight: 700;
  line-height: normal;
  width: 600px;
}

.main-section__svg {
  position: absolute;
  right: 45px;
  top: 20px;
  transition: right 0.3s;
}

.main-section .__button:hover .main-section__svg {
  right: 35px;
}

.content-right__img {
  width: 100%;
}

@media screen and (max-width: 1400px) {
  .main-section .__content {
    width: 100%;
    padding: 0;
  }
}

@media screen and (max-width: 1199px) {
  .main-section .__button {
    padding: 10.4px 43px 10.4px 25px;
  }

  .main-section__svg {
    right: 23px;
    top: 15px;
    height: 10.4px;
  }

  .main-section .__button:hover .main-section__svg {
    right: 18px;
  }

  .background-right img {
    border-radius: 0 0 0 364px;
  }
}

@media screen and (min-width: 992px) {
  .main-section .__content {
    position: absolute;
  }
}

@media screen and (max-width: 991px) {
  .content-left {
    border-radius: 0 0 100px 0;
    background-color: black;
    position: relative;
    margin-bottom: -20%;
    text-align: center;
  }

  .background-left, .background-right {
    display: none;
  }

  .main-section .__content {
    display: block;
  }

  .main-section .__title {
    margin: 0 auto;
    width: 100%;
  }
}

@media screen and (max-width: 574px) {
  .main-section .__info {
    font-size: 16px !important;
  }
}
</style>
