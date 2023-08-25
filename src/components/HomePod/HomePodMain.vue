<script setup>
import {onMounted, ref} from "vue";

const scrollElement = (id) => {
  try {
    document.getElementById(id).scrollIntoView({behavior: "smooth",'top':'top'})
  } catch (e) {
    router.push('/' + id)
  }
}

const showMouse = ref(false)

onMounted(() => {
  setTimeout(() => {
    showMouse.value = true
  }, 7000)
})
</script>

<template>
  <div class="row position-relative overflow-none">
    <div class="h-100 video-content"></div>
    <div class="mouse d-none d-lg-inline-block">
      <svg width="23" height="57" viewBox="0 0 23 57" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="zoom-in" v-if="showMouse" @click="scrollElement('acquaint')" class="pointer">
        <path opacity="0.5" d="M8.40623 0H14.5561C16.7929 0.00574622 18.9365 0.906793 20.5187 2.50629C22.1008 4.10579 22.9929 6.27372 23 8.53646V31.2205C22.9929 33.4842 22.1012 35.6533 20.5193 37.2545C18.9375 38.8557 16.7939 39.7592 14.5561 39.7678H12.2889V54.4383L16.3386 50.3472C16.4131 50.2715 16.5016 50.2116 16.5991 50.1706C16.6966 50.1297 16.8011 50.1086 16.9067 50.1086C17.0122 50.1086 17.1168 50.1297 17.2143 50.1706C17.3117 50.2116 17.4003 50.2715 17.4748 50.3472C17.6248 50.5011 17.7089 50.7085 17.7089 50.9246C17.7089 51.1407 17.6248 51.3481 17.4748 51.5021L12.0897 56.9497H12.0627H12.0304H11.8366C11.6632 57.0168 11.4714 57.0168 11.2981 56.9497H11.0019H10.9749L10.9373 56.9116L5.51978 51.4857C5.44482 51.4095 5.38543 51.3191 5.345 51.2197C5.30456 51.1203 5.28388 51.0138 5.28413 50.9063C5.28438 50.7988 5.30556 50.6924 5.34645 50.5932C5.38735 50.494 5.44716 50.4039 5.52248 50.3281C5.59779 50.2523 5.68714 50.1922 5.78541 50.1513C5.88367 50.1104 5.98895 50.0894 6.09521 50.0897C6.20147 50.0899 6.30664 50.1114 6.40472 50.1527C6.5028 50.1941 6.59186 50.2546 6.66682 50.3308L10.7326 54.422V39.7678H8.44392C6.20615 39.7592 4.06253 38.8557 2.48068 37.2545C0.898824 35.6533 0.0070924 33.4842 0 31.2205V8.53646C0.00710728 6.27372 0.899185 4.10579 2.48134 2.50629C4.0635 0.906793 6.20713 0.00574622 8.44392 0L8.40623 0ZM10.6734 18.631C10.6734 18.4142 10.7585 18.2064 10.91 18.0531C11.0615 17.8999 11.2669 17.8138 11.4812 17.8138C11.6954 17.8138 11.9008 17.8999 12.0523 18.0531C12.2038 18.2064 12.2889 18.4142 12.2889 18.631V38.1335H14.5561C16.3654 38.1249 18.0981 37.3936 19.377 36.0989C20.6559 34.8042 21.3774 33.0508 21.3845 31.2205V8.53646C21.3774 6.70716 20.6555 4.95491 19.3763 3.6619C18.0971 2.36889 16.3644 1.64003 14.5561 1.63429H8.40623C6.59791 1.64003 4.86519 2.36889 3.586 3.6619C2.30682 4.95491 1.58495 6.70716 1.57785 8.53646V31.2205C1.58493 33.0508 2.30645 34.8042 3.58534 36.0989C4.86422 37.3936 6.59692 38.1249 8.40623 38.1335H10.6734V18.631ZM10.6734 6.27569V12.5841C10.6734 12.8008 10.7585 13.0086 10.91 13.1619C11.0615 13.3151 11.2669 13.4012 11.4812 13.4012C11.6954 13.4012 11.9008 13.3151 12.0523 13.1619C12.2038 13.0086 12.2889 12.8008 12.2889 12.5841V6.26479C12.2889 6.04807 12.2038 5.84023 12.0523 5.68698C11.9008 5.53374 11.6954 5.44765 11.4812 5.44765C11.2669 5.44765 11.0615 5.53374 10.91 5.68698C10.7585 5.84023 10.6734 6.04807 10.6734 6.26479V6.27569Z" fill="white"/>
      </svg>
    </div>

    <div class="col-12 col-xxl-11 col-xxxl-10">

      <div class="homepod position-absolute">
        <div class="row mainPodSection">
          <div class="col-12 text-center">
            <p class="homePod__info title-xl"><span class="uppercase">Rainbo Technics</span> Bass Expert</p>
          </div>

          <div class="col-12 text-center">
            <h1 class="homePod__title text-md mx-auto mt-2 pt-2">
              Услышать звук так, как задумал артист
            </h1>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.video-content {
  background: url("../../assets/images/HomePod/img.png") no-repeat center center fixed;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
  -webkit-animation: zoomin 7s linear;
  animation: zoomin 7s linear;
  animation-fill-mode: forwards;
  position: relative;
}

.mouse {
  position: absolute;
  left: calc(50% - 23px);
  bottom: 30px;
  margin: 0 auto;
}

@-webkit-keyframes zoomin {
  0% {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -o-transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
  }
}

.homepod {
  margin-top: 280px;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.mainPodSection {
  line-height: normal;
}

.homePod__title {
  font-weight: 500;
}

.homePod__info {
  font-weight: 700;
  line-height: normal;
}


@media screen and (max-width: 766px) {
  .video-content {
    background: url("../../assets/images/HomePod/img_4.png") no-repeat center fixed;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    height: 120vw !important;
    max-height: 100vh;
  }

  .homepod {
    margin-top: 150px;
  }
}

@media screen and (max-width: 991px) {
  .homePod__info {
    margin-top: 10px;
  }
}

@media screen and (max-width: 575px) {
  .homePod__info {
    font-size: 20px;
    max-width: 300px;
    margin:  0 auto;
  }
}
</style>
