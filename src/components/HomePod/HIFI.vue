<script setup>
import {onMounted, onUnmounted} from "vue";

gsap.registerPlugin(ScrollTrigger);

const rightToLeft = (item) => {
  const top =  document.querySelector('#' + item).getBoundingClientRect().y;
  if (top + 100 <= window.innerHeight && top + 100 >= 0) {
    document.getElementById(item).classList.add('grow');
    switch (item) {
      case 'hr':
        window.removeEventListener('scroll', hrOnViewport);
        break;
      case 'hr2':
        window.removeEventListener('scroll', hr2OnViewport);
        break;
      case 'hr3':
        window.removeEventListener('scroll', hr3OnViewport);
        break;
      case 'hr4':
        window.removeEventListener('scroll', hr4OnViewport);
        break;
      case 'hr5':
        window.removeEventListener('scroll', hr5OnViewport);
        break;
      case 'hr6':
        window.removeEventListener('scroll', hr6OnViewport);
        break;
      case 'hr7':
        window.removeEventListener('scroll', hr7OnViewport);
        break;
      case 'hr8':
        window.removeEventListener('scroll', hr8OnViewport);
        break;
      case 'hr9':
        window.removeEventListener('scroll', hr9OnViewport);
        break;
    }
  }
}

function hrOnViewport() {
  rightToLeft('hr');
}
function hr2OnViewport() {
  rightToLeft('hr2');
}
function hr3OnViewport() {
  rightToLeft('hr3');
}
function hr4OnViewport() {
  rightToLeft('hr4');
}
function hr5OnViewport() {
  rightToLeft('hr5');
}
function hr6OnViewport() {
  rightToLeft('hr6');
}
function hr7OnViewport() {
  rightToLeft('hr7');
}
function hr8OnViewport() {
  rightToLeft('hr8');
}
function hr9OnViewport() {
  rightToLeft('hr9');
}

onMounted(() => {
  window.addEventListener('scroll', hrOnViewport);
  window.addEventListener('scroll', hr2OnViewport);
  window.addEventListener('scroll', hr3OnViewport);
  window.addEventListener('scroll', hr4OnViewport);
  window.addEventListener('scroll', hr5OnViewport);
  window.addEventListener('scroll', hr6OnViewport);
  window.addEventListener('scroll', hr7OnViewport);
  window.addEventListener('scroll', hr8OnViewport);
  window.addEventListener('scroll', hr9OnViewport);

  gsap.to("#img_2", {
    opacity: 0,
    scrollTrigger: {
      trigger: '#img_1',
      start: 'top 42%',
      end: 'top 0%',
      toggleActions: "restart none none none",
      scrub: 4,
    },
  })
  gsap.to("#img_1", {
    opacity: 1,
    scrollTrigger: {
      trigger: '#img_2',
      start: 'top 42%',
      end: 'top 0%',
      toggleActions: "restart none none none",
      scrub: 4,
    },
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', hrOnViewport);
  window.removeEventListener('scroll', hr2OnViewport);
  window.removeEventListener('scroll', hr3OnViewport);
  window.removeEventListener('scroll', hr4OnViewport);
  window.removeEventListener('scroll', hr5OnViewport);
  window.removeEventListener('scroll', hr6OnViewport);
  window.removeEventListener('scroll', hr7OnViewport);
  window.removeEventListener('scroll', hr8OnViewport);
  window.removeEventListener('scroll', hr9OnViewport);
})
</script>

<template>
  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="__title title-xl">
        9 ФАКТОВ о Домашней Hi-Fi стереосистеме <br> RAINBO TECHNICS Bass Expert
      </h2>
    </div>
  </div>

  <div class="hifi row flex-lg-row-reverse d-flex justify-content-center mt-4 mt-lg-0">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3">
      <hr id="hr" class='_hr-right my-0'>

      <h3 class="mid-title">1. Настоящий трёхполосный стерео-звук</h3>
      <p class="__info text-md">
        RT Bass Expert используются специально разработанные динамики, каждый для своего диапазона. За высокие
        частоты отвечают шёлковые купольные твитеры с неодимовым магнитом, которые пользуются популярностью у
        ведущих мировых производителей аудио и любителей музыки и обеспечивают сверхчистую высокочастотную
        переходную характеристику. Средние частоты отыгрывает пара 3-х дюймовых динамиков с бумажными диффузорами,
        что даёт насыщенный мягкий звук, а за впечатляющий бас отвечает сабвуфер в конструкции Bandpass, которая
        является одной из самых эффективных для низких частот.
      </p>
      <p class="__info text-md">
        Они порадуют вас невероятным звуком, который выходит за рамки того, что вы слышите, и продолжает проникать в
        вашу душу – независимо от того, расслабляетесь ли вы дома или устроили мега-вечеринку в своём загородном
        доме.
      </p>
    </div>

    <div class="col-12 col-lg-6 d-flex p-0 pe-lg-4 pe-xxl-5 mt-3 mt-lg-0 d-flex position-relative">
      <img id="img_1" class="__img my-auto" src="../../assets/images/HomePod/img_4.png" alt="#" style="opacity: 0">
      <img id="img_2" class="__img my-auto pe-lg-4 pe-xxl-5" src="../../assets/images/HomePod/img_5.png" alt="#">
    </div>
  </div>

  <div class="hifi row d-flex justify-content-center my-5">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3 mt-lg-5 m-left-auto">
      <hr id="hr2" class='_hr-left my-0'>
      <h3 class="mid-title">2. Обширная звуковая сцена и настройка звука.</h3>
      <p class="__info text-md">
        Большинство колонок в монокорпусе размывают инструменты и заставляют все звучать так, как будто они были взяты
        из одного и того же места. Некоторые заходят так далеко, что требуется покупка двух колонок, чтобы создать
        стерео-пару.
      </p>
      <p class="__info text-md">
        Но когда вы слушаете оркестр или смотрите свой любимый фильм, можете ли вы закрыть глаза и поместить каждый звук
        в то трехмерное пространство, которому он принадлежит? Вы слышите скрипки рядом с вами слева? Альты в центре?
        Тромбоны там, сзади, рядом с перкуссией?
      </p>
      <p class="__info text-md">
        С обширной звуковой стерео-сценой RT Bass Expert вы это сделаете. Захватывающая объемная звуковая сцена обладает
        невиданной ранее глубиной, позволяя вам почувствовать, что вы находитесь на сцене, на концерте, вживую, прямо
        там, где происходит действие.
      </p>
      <p class="__info text-md">
        Встроенный эквалайзер призван настроить звучание под конкретные условия воспроизведения. Диапазон и мощность
        системы такова, что позволит озвучить помещение до 50 м2 и отрегулировать звук под любой темперамент и
        настроение слушателя.
      </p>
    </div>

    <div class="col-12 col-lg-6 d-flex p-0 ps-lg-4 mt-3 mt-lg-5 ps-xxl-5">
      <img class="__img d-flex mb-auto" src="../../assets/images/HomePod/player-btn.png" alt="#" width="810">
    </div>
  </div>

  <div class="hifi row flex-lg-row-reverse d-flex justify-content-center">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3 mt-lg-5">
      <hr id="hr3" class='_hr-right my-0'>
      <h3 class="mid-title">3. Частотная характеристика и детализированный отклик.</h3>
      <p class="__info text-md">
        Благодаря широкому диапазону частот Система способна воспроизводить звуки точно, до мельчайших деталей.
        Наслаждайтесь превосходным качеством звука и слышьте каждую деталь — от плавных минимумов до сбалансированных
        средних и резких максимумов.
      </p>
      <p class="__info text-md">
        Уникальный дизайн системы и сочетание твитеров, динамиков и сабвуфера создают звуковой профиль во всем диапазоне
        человеческого слуха. И это идеально соответствует фактическому уровню звука, который вы бы услышали вживую.
      </p>
    </div>

    <div class="col-12 col-lg-6 d-flex p-0 pe-lg-4 pe-xxl-5 mt-3 mt-lg-5">
      <video src="../../assets/videos/rainbo.mp4" class="mb-auto __img" autoplay loop muted></video>
    </div>
  </div>

  <div class="hifi row d-flex justify-content-center mt-5">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3 m-left-auto mt-lg-5">
      <hr id="hr4" class='_hr-left my-0'>
      <h3 class="mid-title">4. Взрывной бас</h3>
      <p class="__info text-md">
        Независимо от того, слушаете ли вы хард-рок или классическую музыку, правильно сбалансированные басы необходимы
        для оптимального прослушивания, при котором вы услышите каждую деталь.
      </p>
      <p class="__info text-md">
        Акустическое оформление сабвуфера типа Bandpass позволило максимально повысить отдачу вуфера для передачи мощных
        басов без искажений. Уникальная форма акустической камеры позволяет оптимально настраивать басы, балансируя
        чувствительность и мощность, и создает расширенное звуковое поле, позволяющее ощутить всю мощь басовых нот
      </p>
      <p class="__info text-md">
        Для усиления басовой компоненты использован отдельный мощный усилитель, обеспечивая первозданный звук, который
        наполняет любую комнату и ваше тело потрясающими вибрациями. Этот по-настоящему «взрослый» звук не оставит
        равнодушным никого.
      </p>
    </div>

    <div class="col-12 col-lg-6 d-flex p-0 ps-lg-4 ps-xxl-5 mt-3 mt-lg-5 mb-5">
      <img class="__img d-flex mb-auto" src="../../assets/images/HomePod/player-4.png" alt="#" width="802">
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <hr id="hr5" class='_hr mt-5'>
      <h3 class="mid-title pb-0 mb-0">5. Универсальное подключение</h3>
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row mt-lg-3">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="__box">
            <div class="__logo" data-aos="flip-right-full" data-aos-offset="100">
              <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="65" cy="65" r="65" fill="url(#paint0_linear_1592_852)"/>
                <path d="M41.5938 40.4667L83.1937 82.5L63.6937 102V24L83.1937 43.0667L41.5938 83.8" stroke="black" stroke-width="4.5" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_1592_852" x1="65" y1="0" x2="65" y2="130" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B6BDF8"/>
                    <stop offset="1" stop-color="#99D0FB"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <p class="text-md">
              <b class="_bold">Чип Qualcomm Bluetooth 5.1 с кодеком AptX HD</b> – последнее слово в беспроводном
              подключении. Позволяет проигрывать музыку в максимально высоком качестве, что недоступно подавляющему
              большинству колонок с блютуз («по воздуху, как по проводу»). Теперь вы можете воспроизводить свои
              подкасты, любимые джемы или новый альбом из любых других музыкальных онлайн-сервисов, не беспокоясь о
              проводах или низком качестве воспроизведения звука.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-start justify-content-md-center">
          <div class="__box">
            <div class="__logo" data-aos="flip-right-full" data-aos-offset="100" data-aos-delay="200">
              <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65Z" fill="url(#paint0_linear_1592_856)"/>
                <path d="M39.4417 36.2666V46.1333C39.4417 47.7901 38.0985 49.1333 36.4417 49.1333H27.875C27.3227 49.1333 26.875 49.581 26.875 50.1333V74.9999C26.875 75.5522 27.3227 75.9999 27.875 75.9999H36.4417C38.0985 75.9999 39.4417 77.3431 39.4417 78.9999V89.7333C39.4417 90.2856 39.8894 90.7333 40.4417 90.7333H90.4417C90.9939 90.7333 91.4417 90.2856 91.4417 89.7333V78.9999C91.4417 77.3431 92.7848 75.9999 94.4417 75.9999H102.142C102.694 75.9999 103.142 75.5522 103.142 74.9999V50.1333C103.142 49.581 102.694 49.1333 102.142 49.1333H94.4417C92.7848 49.1333 91.4417 47.7901 91.4417 46.1333V36.2666C91.4417 35.7143 90.9939 35.2666 90.4417 35.2666H40.4417C39.8894 35.2666 39.4417 35.7143 39.4417 36.2666Z" stroke="black" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M80.6166 57.2001H50.6959C50.0426 57.2001 49.5647 57.8164 49.7274 58.4491L53.1131 71.6158C53.2268 72.0578 53.6253 72.3668 54.0816 72.3668H77.2309C77.6872 72.3668 78.0857 72.0578 78.1994 71.6158L81.5851 58.4491C81.7478 57.8164 81.2699 57.2001 80.6166 57.2001Z" stroke="black" stroke-width="4.5" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_1592_856" x1="65" y1="0" x2="65" y2="130" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D0ABF4"/>
                    <stop offset="1" stop-color="#E694FA"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p class="text-md">
              <b class="_bold">RT Bass Expert</b>
              - это универсальная и мощная акустическая система. Он может обеспечить потрясающее качество звука в любой
              точке вашего дома. Подключите его к любому телевизору (рекомендуется оптический кабель), компьютеру,
              проектору или другим аудиоустройствам с помощью подключения Bluetooth 5.1, оптического порта или AUX, и
              она с лёгкостью заменит домашний кинотеатр
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-lg-end">
          <div class="__box">
            <div class="__logo" data-aos="flip-right-full" data-aos-offset="100" data-aos-delay="400">
              <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="65" cy="64.9995" r="65" fill="url(#paint0_linear_1592_848)"/>
                <path d="M99.0497 28.0432L94.3353 29.0416C93.1271 29.2967 92.023 29.8165 91.1376 30.547L80.6991 39.1652L78.7082 37.5098C78.4148 37.2663 78.0174 37.1295 77.6031 37.1295C77.1888 37.1295 76.7915 37.2663 76.4981 37.5098L46.6885 62.2759C46.5428 62.397 46.4271 62.5408 46.3482 62.6992C46.2693 62.8575 46.2287 63.0273 46.2287 63.1987C46.2287 63.3702 46.2693 63.5399 46.3482 63.6983C46.4271 63.8566 46.5428 64.0005 46.6885 64.1215L47.1456 64.5021L41.9803 68.7929C41.8347 68.9141 41.7192 69.058 41.6404 69.2164C41.5616 69.3748 41.5211 69.5446 41.5213 69.716C41.5214 69.8875 41.5622 70.0572 41.6412 70.2155C41.7203 70.3738 41.836 70.5176 41.9819 70.6386L44.8963 73.0603L32.168 84.864C30.1348 86.6413 29.0005 89.0019 29 91.4566C29 99.2184 39.5433 103.675 47.0454 99.2458L73.0452 83.9425C79.0087 80.4141 87.0789 85.1807 85.0567 91.0434L82.2737 99.3461C81.7181 101.021 84.7374 101.703 85.2915 100.041C88.0009 91.6078 88.4782 91.3041 88.4782 89.2669C88.4782 81.844 78.3873 77.5805 71.2358 81.8153L45.2376 97.1173C39.7781 100.342 32.1304 97.0886 32.1304 91.4566C32.1304 89.6722 32.9506 87.9674 34.411 86.6835L47.1127 74.9046L49.8221 77.1569C50.1155 77.4005 50.5129 77.5372 50.9271 77.5372C51.3414 77.5372 51.7388 77.4005 52.0322 77.1569L57.2021 72.8609L57.6669 73.2467C57.9603 73.4902 58.3577 73.627 58.772 73.627C59.1863 73.627 59.5836 73.4902 59.877 73.2467L89.6835 48.4819C89.8292 48.3609 89.9449 48.217 90.0238 48.0587C90.1027 47.9003 90.1433 47.7306 90.1433 47.5591C90.1433 47.3877 90.1027 47.2179 90.0238 47.0596C89.9449 46.9012 89.8292 46.7574 89.6835 46.6363L87.6158 44.9171C92.6699 40.8153 93.8313 39.7908 97.9728 36.372C98.9108 35.5986 99.5663 34.6197 99.8636 33.5488L100.958 29.6008C101.227 28.6428 100.166 27.7969 99.0497 28.0432ZM90.1217 39.1782L87.6346 37.111L90.1327 35.049L92.6214 37.1162L90.1217 39.1782ZM63.4786 66.5719L54.7165 59.2898L57.2083 57.22L65.9689 64.5021L63.4786 66.5719ZM50.9287 74.3911L45.3033 69.7158L49.3635 66.3438L54.9873 71.0179L50.9287 74.3911ZM58.772 70.4809L50.0099 63.1987L52.4986 61.1302L61.2607 68.4123L58.772 70.4809ZM68.1836 62.6617L59.4231 55.3796L77.6031 40.2757L86.3621 47.5578L68.1836 62.6617ZM82.9155 41.0082L85.412 38.9462L87.8975 41.0121L85.3995 43.0728L82.9155 41.0082ZM95.7706 34.5185L94.8455 35.2823L92.3553 33.2138L93.3429 32.3992C94.4683 31.4699 95.625 31.535 97.3327 31.0971C96.8396 32.5126 96.957 33.5423 95.7706 34.5185Z" fill="black"/>
                <defs>
                  <linearGradient id="paint0_linear_1592_848" x1="65" y1="-0.000488281" x2="65" y2="130" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#86BAF7"/>
                    <stop offset="1" stop-color="#58DCDB"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p class="text-md">
              <b class="_bold">Дополнительные оптический и вспомогательный порт 3,5 мм (AUX)</b>
              для стационарного проводного подключения.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-lg-5">
        <div class="col-12 col-lg-6">
          <hr id="hr6" class='_hr-left my-0 mt-5'>
          <h3 class="mid-title">6. Звук от профессионалов Hi-End индустрии</h3>
          <p class="__info text-md limitation">
            В разработке акустической системы и электроники RAINBO TECHNICS принимал самое непосредственное участие Олег
            Миронов – сооснователь ACC Lab, многократный участник выставок «Российский Hi-End». Настройка системы
            производилась в два этапа: замеры и расчеты, объективная оценка приборами, затем живое прослушивание и
            подстройка.
          </p>
        </div>

        <div class="col-12 p-0 mb-5 d-lg-none">
          <img class="pe-md-2 __img" src="../../assets/images/HomePod/slide-3.png" width="1188" alt="#">
        </div>

        <div class="col-12 col-lg-6 mt-md-5">
          <hr id="hr7" class='_hr-right my-0'>
          <h3 class="mid-title">7. Звуки анимации</h3>
          <p class="__info text-md limitation">
            «Озвучил» колонку молодой московский диджей Никита Авдошин ака «НЕКИЙ ТЫ». Было написано и переработано
            более
            двадцати различных саундпаков для озвучания колонки, прежде чем попасть на боевую сборку.
          </p>
        </div>

        <div class="col-12 d-lg-none p-0">
          <img class="ps-md-2 __img" src="../../assets/images/HomePod/slide-4.png" width="1188" alt="#">
        </div>
      </div>
    </div>
  </div>

  <div class="row d-none d-lg-flex hifi mt-4">
    <div class="col-12 col-md-6 ps-0 pe-0 pe-md-1">
      <img class="pe-md-2 __img" src="../../assets/images/HomePod/slide-3.png" width="1188" alt="#">
    </div>
    <div class="col-12 col-md-6 pe-0 ps-0 ps-md-1">
      <img class="ps-md-2 __img" src="../../assets/images/HomePod/slide-4.png" width="1188" alt="#">
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row">
        <div class="col-12 col-lg-6">
          <hr id="hr8" class='_hr-left my-0 mt-5'>
          <h3 class="mid-title">8. Деревянный корпус</h3>
          <p class="__info text-md limitation">
            Корпус акустических систем RAINBO TECHNICS изготовлен из МДФ и фанеры. Это обеспечивает достаточную
            жёсткость, отсутствие лишних вибраций и прекрасные акустические свойства системы.
          </p>
          <p class="__info text-md limitation mb-5">
            Каждая колонка проходит 12 этапов промежуточного контроля в процессе производства. На выходе каждая колонка
            играет безостановочно трое суток, после чего проходит ещё 4 финальных общих теста и только после этого
            упаковывается и отправляется в продажу.
          </p>
        </div>

        <div class="col-12 col-lg-6 mt-lg-5">
          <hr id="hr9" class='_hr-right my-0'>
          <h3 class="mid-title">9. Наше производство</h3>
          <p class="__info text-md limitation">
            Наше производство находится в г. Москве.
          </p>
          <p class="__info text-md limitation">
            Перед запуском серийного производства кофемашин мы более 5 лет проводили лабораторные испытания всех систем,
            чтобы предоставить Вам многофункциональное, высокопроизводительное, надёжное, долговечное оборудование.
          </p>
          <p class="__info text-md limitation">
            Все детали изготовлены из высококачественных сертифицированных материалов.Наше производство отличается тем,
            что все наши кофемашины – ручной сборки. Это позволяет добиться максимального контроля качества в
            производственном процессе.Мы не перепродаём, мы производим!
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
#img_2 {
  position: absolute;
  vertical-align: center;
  align-self: center;
  top: 0;
  bottom: 0;
}

.hifi .__title {
  margin: 150px 0 60px 0;
  max-width: 1100px;
}

.hifi .__img {
  width: 100%;
}

.hifi ._hr {
  border-bottom: 1px solid #A5A5A5;
}

.hifi .mid-title {
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  padding: 50px 0 15px 0;
}

.hifi .__info {
  margin: 30px 0 30px 0;
}

.hifi .__box {
  max-width: 403px;
}

.hifi .__box .__logo {
  width: 130px;
  margin: 20px 0;
}

.hifi ._bold {
  font-weight: 700;
}

.limitation {
  max-width: 700px;
}

._hr-right, ._hr-left, ._hr {
  height: 1px;
  border: 0;
  -webkit-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  background: #A5A5A5;
  width: 0;
}

._hr-right {
  margin-right: 0;
}

._hr-left {
  margin-left: 0;
}

.grow {
  width: 100%;
}

[data-aos="flip-right-full"] {
  -webkit-transform: perspective(2500px) rotateY(360deg);
  transform: perspective(2500px) rotateY(360deg)
}
[data-aos="flip-right-full"].aos-animate {
  -webkit-transform: perspective(2500px) rotateY(0);
  transform: perspective(2500px) rotateY(0)
}

@media screen and (max-width: 1199px) {
  .hifi .__title {
    margin: 75px 0 50px 0;
  }

  .hifi .__info {
    margin: 20px 0 15px 0;
  }
}

@media screen and (max-width: 991px) {
  .hifi .mid-title {
    font-size: 21px;
    font-weight: 500;
    padding: 20px 0 15px 0;
  }

  .hifi .__box {
    max-width: 700px;
  }

  .hifi .__info {
    margin: 0 0 15px 0;
  }

  .hifi .__box .__logo {
    margin: 20px 0 10px 0;
    width: 115px;
    height: 115px;
  }
}

@media screen and (max-width: 575px) {
  .hifi .__title {
    margin: 50px 0 0 0;
  }

  .hifi .mid-title {
    font-size: 18px;
  }

  .hifi .__box .__logo {
    margin: 20px 0 5px 0;
    width: 100px;
    height: 100px;
  }
}

@media screen and (min-width: 1515px) {
  .d-xxxl-block {
    display: block !important;
  }
}

@media only screen and (max-width: 1515px) and (min-width: 1399px) {
  .m-left-auto {
    padding-left: 5.222222% !important;
  }
}
</style>
