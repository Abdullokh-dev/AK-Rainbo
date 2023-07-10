<script setup>
defineProps({
  background: {
    type: String,
    default: "none"
  },
  showLists: {
    type: String,
    default: "true"
  }
})
</script>

<template>
  <header class="row d-flex justify-content-center">
    <div class="col-12 col-xxl-11 col-xxxl-10 fixed-top">
      <nav class="navbar navbar-expand-xl row py-4" :style="{backgroundColor: background}">
        <div class="container-fluid">
          <!-- Logo -->
          <div @click="$router.push('/')"
            class="col-12 col-xl-auto d-flex justify-content-center justify-content-xl-end justify-content-xxl-start">
            <div class="d-flex">
              <svg class="header__svg" width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_53_475" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="112"
                      height="24">
                  <path
                    d="M12.2088 22.7051L7.7251 14.9794H4.38021V22.7051H0V0.446135H8.90178C9.87737 0.429276 10.8461 0.612294 11.7483 0.983927C12.6506 1.35556 13.4672 1.90795 14.1481 2.6071C14.845 3.28306 15.3961 4.09456 15.7676 4.99164C16.1392 5.88873 16.3232 6.85239 16.3083 7.82329C16.3109 9.19003 15.9008 10.5257 15.1316 11.6553C14.3657 12.8171 13.2859 13.7377 12.0177 14.3102L16.9454 22.7051H12.2088ZM4.38021 4.54699V11.1315H8.90178C9.30613 11.1327 9.70593 11.0462 10.0737 10.8781C10.4415 10.71 10.7684 10.4642 11.0322 10.1575C11.6208 9.52314 11.9399 8.6847 11.9221 7.81931C11.9413 6.95844 11.6217 6.12448 11.0322 5.49702C10.7658 5.19495 10.4379 4.9535 10.0704 4.78893C9.70289 4.62437 9.30441 4.54051 8.90178 4.54301L4.38021 4.54699ZM33.8252 22.7051L32.4912 18.6978H23.6213L22.2853 22.7051H17.5487L25.3375 0.446135H30.775L38.5956 22.7051H33.8252ZM25.019 14.597H31.1234L28.0732 5.501L25.019 14.597ZM40.7479 0.446135H45.1281V22.7051H40.7479V0.446135ZM62.1432 0.446135H66.5235V22.7051H63.2005L53.6636 9.09398V22.7051H49.2833V0.446135H52.6203L62.1572 14.0254L62.1432 0.446135ZM84.1199 11.1633C86.0698 12.2866 87.0447 13.9822 87.0447 16.2501C87.0447 18.1382 86.3771 19.6864 85.0418 20.8946C83.7065 22.1029 82.0639 22.7064 80.1141 22.7051H70.6807V0.446135H79.4411C81.3485 0.446135 82.9539 1.03434 84.2573 2.21076C85.5608 3.38717 86.2118 4.8869 86.2105 6.70995C86.2105 8.55424 85.5137 10.0387 84.1199 11.1633ZM79.4411 4.54699H75.0609V9.44452H79.4411C79.7575 9.4522 80.072 9.39403 80.3647 9.27368C80.6574 9.15334 80.9219 8.97345 81.1414 8.74544C81.368 8.51532 81.5457 8.24184 81.6641 7.94136C81.7825 7.64088 81.839 7.3196 81.8303 6.99675C81.8399 6.67568 81.7859 6.35588 81.6714 6.05576C81.5569 5.75565 81.3843 5.48115 81.1633 5.24806C80.9419 5.0163 80.674 4.83402 80.3772 4.7132C80.0804 4.59237 79.7614 4.53573 79.4411 4.54699ZM80.1081 18.6042C80.4503 18.6141 80.7909 18.5528 81.1082 18.4242C81.4256 18.2957 81.7128 18.1026 81.9517 17.8573C82.1946 17.6074 82.3845 17.311 82.51 16.9859C82.6356 16.6607 82.6942 16.3136 82.6824 15.9653C82.6922 15.6219 82.6325 15.2802 82.5069 14.9605C82.3814 14.6409 82.1925 14.3499 81.9517 14.105C81.7129 13.8595 81.4257 13.6661 81.1084 13.5372C80.7911 13.4083 80.4504 13.3467 80.1081 13.3562H75.0609V18.6042H80.1081ZM108.625 19.7992C106.378 22.0352 103.644 23.1532 100.422 23.1532C97.2009 23.1532 94.4738 22.0345 92.2413 19.7972C90.0047 17.5613 88.8871 14.8207 88.8884 11.5756C88.8897 8.33051 90.0074 5.59063 92.2413 3.35597C94.4778 1.11866 97.2068 0 100.428 0C103.65 0 106.384 1.11866 108.631 3.35597C110.877 5.59196 112 8.33183 112 11.5756C112 14.8194 110.877 17.5599 108.631 19.7972L108.625 19.7992ZM95.3034 16.8117C96.6812 18.178 98.3875 18.8618 100.422 18.8631C102.457 18.8645 104.163 18.1807 105.541 16.8117C106.923 15.4401 107.614 13.6947 107.614 11.5756C107.614 9.45647 106.925 7.70778 105.547 6.32954C104.169 4.9513 102.463 4.26218 100.428 4.26218C98.3935 4.26218 96.6872 4.9513 95.3094 6.32954C93.9316 7.70778 93.2427 9.45647 93.2427 11.5756C93.2427 13.6947 93.9316 15.4388 95.3094 16.8077L95.3034 16.8117Z"
                    fill="white"/>
                </mask>
                <g mask="url(#mask0_53_475)">
                  <rect width="112" height="23" fill="white"/>
                </g>
              </svg>

              <svg class="header__svg mx-3" width="2" height="23" viewBox="0 0 2 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0L1 23" stroke="white" stroke-width="1.5"/>
              </svg>

              <span class="text-white logo-text">
               Shop
              </span>
            </div>
          </div>

          <!-- Mobile menu toggle -->
          <div class="col-12 d-xl-none text-center mt-3">
            <div class="text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobile" aria-expanded="false" aria-controls="collapseExample">
              <span class="menu-toggle-text">
                Меню
              </span>
              <svg class="header__svg" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3357 -2.90376e-08L11 0.646597L5.5 6L-2.82636e-08 0.646596L0.664305 -4.51788e-07L5.5 4.70635L10.3357 -2.90376e-08Z" fill="white"/>
              </svg>
            </div>
          </div>

          <!-- Lists Desktop -->
          <div class="col-12 col-xl-9 col-xxl-8 text-center d-xl-none">
            <div class="collapse d-xl-flex justify-content-center navbar-collapse" id="navbarMobile">
              <ul class="navbar-nav mb-2 mb-xl-0">
                <li class="nav-item mt-2 mt-xl-0">
                  <a href="#" class="navbar__list d-none d-xl-block">Стереосистема</a>
                  <a href="#" class="list header__item d-xl-none">Стереосистема RAINBO TECHNICS </a>
                </li>
                <li class="nav-item mt-4 mt-xl-0 px-4">
                  <a href="#" class="list header__item">Sony Playstation</a>
                </li>
                <li class="nav-item mt-4 mt-xl-0">
                  <a href="#" class="list header__item">Яндекс.Станции</a>
                </li>
                <li class="nav-item mt-4 mt-xl-0 px-4">
                  <a href="#" class="list header__item">Накладки на стики</a>
                </li>
                <li class="nav-item mt-4 mt-xl-0">
                  <a href="#" class="list header__item">Геймпады</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Unlisted page -->
          <div class="col-12 col-xl-9 col-xxl-8 text-center d-none d-xl-block" v-if="showLists === 'true'">
            <div class="collapse d-flex justify-content-center navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="#" class="list header__item">Стереосистема</a>
                </li>
                <li class="nav-item px-4">
                  <a href="#" class="list header__item">Sony Playstation</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="list header__item">Яндекс.Станции</a>
                </li>
                <li class="nav-item px-4">
                  <a href="#" class="list header__item">Накладки на стики</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="list header__item">Геймпады</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact Toggle -->
          <div class="d-none d-xl-block col-1 col-xxl-auto">
            <div class="dropdown d-flex justify-content-end justify-content-xxl-end">
              <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg class="header__svg" width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 0H30.9733V2.32155H0V0ZM0 10.447H30.9733V12.7685H0V10.447ZM0 20.8939H30.9733V23.2155H0V20.8939Z"
                    fill="white"/>
                  </svg>
              </div>
              <div class="dropdown-menu text-center">
                <a class="text-white dropdown__item d-block" href="tel:+74951976668">+7 (495) 197-66-68</a>
                <a class="text-white dropdown__item d-block mt-2" href="tel:+79639706328">+7 (963) 970-63-28</a>

                <div class="d-flex justify-content-center dropdown__svg-group">
                  <a href="https://google.com">
                    <svg class="mt-3 dropdown__svg" width="30" height="30" viewBox="0 0 30 30" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_178_43)">
                        <path
                          d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                          fill="#039BE5"/>
                        <path
                          d="M6.86383 14.675L21.3263 9.09877C21.9976 8.85627 22.5838 9.26252 22.3663 10.2775L22.3676 10.2763L19.9051 21.8775C19.7226 22.7 19.2338 22.9 18.5501 22.5125L14.8001 19.7488L12.9913 21.4913C12.7913 21.6913 12.6226 21.86 12.2351 21.86L12.5013 18.0438L19.4513 11.765C19.7538 11.4988 19.3838 11.3488 18.9851 11.6138L10.3963 17.0213L6.69383 15.8663C5.89008 15.6113 5.87258 15.0625 6.86383 14.675Z"
                          fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_178_43">
                          <rect width="30" height="30" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                  <a href="https://google.com">
                    <svg class="mt-3 dropdown__svg" width="30" height="30" viewBox="0 0 30 30" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_178_47)">
                        <path
                          d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                          fill="#29A71A"/>
                        <path
                          d="M21.6137 8.3863C20.0531 6.81011 17.9806 5.84348 15.7701 5.66077C13.5595 5.47807 11.3564 6.09131 9.55818 7.3899C7.75996 8.68848 6.48496 10.5869 5.96319 12.7428C5.44141 14.8986 5.70719 17.17 6.7126 19.1471L5.72567 23.9386C5.71543 23.9863 5.71514 24.0356 5.72481 24.0834C5.73449 24.1312 5.75393 24.1765 5.78192 24.2164C5.82291 24.2771 5.88143 24.3237 5.94965 24.3502C6.01788 24.3767 6.09256 24.3818 6.16373 24.3647L10.8598 23.2516C12.8313 24.2316 15.0867 24.4803 17.2244 23.9535C19.3621 23.4267 21.2436 22.1585 22.5341 20.3747C23.8246 18.5908 24.4403 16.407 24.2718 14.2117C24.1033 12.0165 23.1614 9.95226 21.6137 8.3863ZM20.1495 20.0727C19.0697 21.1494 17.6793 21.8602 16.1741 22.1048C14.669 22.3495 13.125 22.1157 11.7598 21.4363L11.1052 21.1124L8.22623 21.7943L8.23476 21.7585L8.83135 18.8607L8.51089 18.2284C7.81333 16.8584 7.56725 15.3027 7.80792 13.7843C8.04858 12.2659 8.76364 10.8626 9.85067 9.77551C11.2165 8.41007 13.0688 7.64301 15.0001 7.64301C16.9314 7.64301 18.7837 8.41007 20.1495 9.77551C20.1612 9.78885 20.1737 9.80138 20.187 9.81301C21.536 11.182 22.289 13.0287 22.282 14.9506C22.2749 16.8724 21.5084 18.7136 20.1495 20.0727Z"
                          fill="white"/>
                        <path
                          d="M19.8939 17.9471C19.5411 18.5028 18.9837 19.1829 18.2831 19.3517C17.0559 19.6483 15.1724 19.3619 12.8286 17.1767L12.7996 17.1511C10.7388 15.2403 10.2036 13.65 10.3331 12.3886C10.4047 11.6727 11.0013 11.025 11.5042 10.6022C11.5837 10.5344 11.6779 10.4861 11.7794 10.4612C11.881 10.4363 11.9869 10.4355 12.0887 10.4588C12.1906 10.4822 12.2856 10.5291 12.3661 10.5957C12.4467 10.6623 12.5105 10.7469 12.5525 10.8426L13.311 12.5471C13.3603 12.6577 13.3785 12.7795 13.3638 12.8996C13.3491 13.0197 13.302 13.1336 13.2275 13.2289L12.8439 13.7267C12.7616 13.8294 12.712 13.9545 12.7014 14.0857C12.6907 14.217 12.7196 14.3484 12.7843 14.463C12.9991 14.8397 13.5138 15.3937 14.0849 15.9068C14.7258 16.4863 15.4366 17.0164 15.8866 17.1971C16.007 17.2463 16.1394 17.2583 16.2666 17.2316C16.3939 17.2049 16.5103 17.1406 16.6008 17.0471L17.0456 16.5988C17.1315 16.5142 17.2382 16.4538 17.355 16.4239C17.4718 16.3939 17.5944 16.3955 17.7104 16.4284L19.5121 16.9397C19.6115 16.9702 19.7026 17.023 19.7785 17.0941C19.8543 17.1652 19.9129 17.2527 19.9497 17.3499C19.9866 17.4471 20.0007 17.5515 19.991 17.655C19.9814 17.7585 19.9482 17.8584 19.8939 17.9471Z"
                          fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_178_47">
                          <rect width="30" height="30" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.logo-text {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}

.header__item {
  font-weight: 500;
  font-size: 18px;
  color: white;
  position: relative;
}

.header__item:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #757D62;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.header__item:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.nav-item {
  padding: 0 9px;
}

.navbar-nav {
  margin-top: 2px;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-menu[data-bs-popper] {
  animation-name: fade-in;
  animation-duration: .3s;
  width: 205px;
  left: auto;
  margin: 55px -12px 0 0;
  position: absolute;
  top: 0;
  border: none;
  border-radius: 0;
  padding: 20px;
  background-color: black;
}

.dropdown__item {
  font-family: myriad, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
}

.header__svg, .dropdown__svg {
  cursor: pointer;
  transition: opacity .3s;
}

.dropdown__svg-group {
  gap: 20px;
}

.dropdown__svg:hover, .header__svg:hover {
  opacity: 0.6;
}

.menu-toggle-text {
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

@keyframes fade-in {
  from {opacity: 0;}
  to {opacity: 1;}
}

@media screen and (max-width: 1199px) {
  .navbar-expand-xl {
    background-color: black;
  }
}

@media screen and (min-width: 1400px) {
  .dropdown-menu[data-bs-popper] {
    margin-right: -70px;
  }

  .nav-item {
    padding: 0;
  }
}

@media screen and (min-width: 1515px) {
  .dropdown-menu[data-bs-popper] {
    margin-right: -85px;
  }
}

@media screen and (min-width: 1650px) {
  .nav-item {
    padding: 0 12px;
  }
}
</style>
