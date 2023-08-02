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
      start: 'top 60%',
      end: 'top 5%',
      toggleActions: "restart none none none",
      scrub: true,
    },
  })
  gsap.to("#img_1", {
    opacity: 1,
    scrollTrigger: {
      trigger: '#img_2',
      start: 'top 60%',
      end: 'top 5%',
      toggleActions: "restart none none none",
      scrub: true,
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

    <div class="col-12 col-lg-6 d-flex p-0 ps-lg-4 ps-xxl-5 mt-3 mt-lg-5">
      <img class="__img d-flex mb-auto" src="../../assets/images/HomePod/player-4.png" alt="#" width="802">
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <hr id="hr5" class='_hr my-0'>
      <h3 class="mid-title pb-0 mb-0">5. Универсальное подключение</h3>
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row mt-lg-3">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="__box">
            <img src="../../assets/images/HomePod/img_6.png" class="__logo" alt="#" data-aos="flip-right"
                 data-aos-offset="100">

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
            <img src="../../assets/images/HomePod/img_7.png" class="__logo" alt="#" data-aos="flip-right"
                 data-aos-offset="100" data-aos-delay="100">
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
            <img src="../../assets/images/HomePod/img_8.png" class="__logo" alt="#" data-aos="flip-right"
                 data-aos-offset="100" data-aos-delay="200">
            <p class="text-md">
              <b class="_bold">Дополнительные оптический и вспомогательный порт 3,5 мм (AUX)</b>
              для стационарного проводного подключения.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-lg-5">
        <div class="col-12 col-lg-6">
          <hr id="hr6" class='_hr my-0 mt-5'>
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
          <hr id="hr7" class='_hr my-0'>
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
          <hr id="hr8" class='_hr my-0 mt-5'>
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
          <hr id="hr9" class='_hr my-0'>
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
