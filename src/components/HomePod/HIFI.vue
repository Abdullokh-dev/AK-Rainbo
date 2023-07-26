<script setup>
import {onMounted} from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to("#img_1", {
    opacity: 0,
    scrollTrigger: {
      trigger: '#img_1',
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: "restart none none none",
      scrub: true,
    },
  })
  gsap.to("#img_2", {
    opacity: 1,
    scrollTrigger: {
      trigger: '#img_2',
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: "restart none none none",
      scrub: true,
    },
  })
})
</script>

<template>
  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <h2 class="__title title-xl">
        9 ФАКТОВ о Домашней Hi-Fi стереосистеме RAINBO TECHNICS Bass Expert
      </h2>
    </div>
  </div>

  <div class="hifi row flex-lg-row-reverse d-flex justify-content-center mt-4 mt-lg-0">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3">
      <div class="_hr"></div>
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
      <img id="img_1" class="__img my-auto" src="../../assets/images/HomePod/player.png" alt="#" width="1800">
      <img id="img_2" class="__img my-auto pe-lg-4 pe-xxl-5" src="../../assets/images/HomePod/img_3.png" alt="#" width="1800" style="opacity: 0">
    </div>
  </div>

  <div class="hifi row d-flex justify-content-center my-5">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3 mt-lg-5 m-left-auto">
      <div class="_hr"></div>
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
      <img class="__img d-flex my-auto" src="../../assets/images/HomePod/player-btn.png" alt="#" width="1800">
    </div>
  </div>

  <div class="hifi row flex-lg-row-reverse d-flex justify-content-center">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3 mt-lg-5">
      <div class="_hr"></div>
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
      <img class="__img d-flex my-auto" src="../../assets/images/HomePod/player-3.png" alt="#" width="1900">
    </div>
  </div>

  <div class="hifi row d-flex justify-content-center mt-5">
    <div class="col-1 d-none d-xxxl-block"></div>

    <div class="col-12 col-lg-6 col-xxl ps-3 m-left-auto mt-lg-5">
      <div class="_hr"></div>
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
      <img class="__img d-flex my-auto" src="../../assets/images/HomePod/player-4.png" alt="#" width="1800">
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="_hr mt-5"></div>
      <h3 class="mid-title pb-0 mb-0">5. Универсальное подключение</h3>
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="__box">
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="65" cy="65" r="65" fill="url(#paint0_linear_609_250)"/>
              <path d="M41.5938 42.4667L83.1937 84.5L63.6937 104V26L83.1937 45.0667L41.5938 85.8" stroke="black" stroke-width="4.5" stroke-linecap="round"/>
              <defs>
                <linearGradient id="paint0_linear_609_250" x1="65" y1="0" x2="65" y2="130" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#B6BDF8"/>
                  <stop offset="1" stop-color="#99D0FB"/>
                </linearGradient>
              </defs>
            </svg>
            <p class="text-md">
              <b class="_bold">Чип Qualcomm Bluetooth 5.1 с кодеком AptX HD</b> – последнее слово в беспроводном подключении. Позволяет проигрывать музыку в максимально высоком качестве, что недоступно подавляющему большинству колонок с блютуз («по воздуху, как по проводу»). Теперь вы можете воспроизводить свои подкасты, любимые джемы или новый альбом из любых других музыкальных онлайн-сервисов, не беспокоясь о проводах или низком качестве воспроизведения звука.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-start justify-content-md-center">
          <div class="__box">
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65Z" fill="url(#paint0_linear_609_253)"/>
              <path d="M39.4417 38.2666V48.1333C39.4417 49.7901 38.0985 51.1333 36.4417 51.1333H27.875C27.3227 51.1333 26.875 51.581 26.875 52.1333V76.9999C26.875 77.5522 27.3227 77.9999 27.875 77.9999H36.4417C38.0985 77.9999 39.4417 79.3431 39.4417 80.9999V91.7333C39.4417 92.2856 39.8894 92.7333 40.4417 92.7333H90.4417C90.9939 92.7333 91.4417 92.2856 91.4417 91.7333V80.9999C91.4417 79.3431 92.7848 77.9999 94.4417 77.9999H102.142C102.694 77.9999 103.142 77.5522 103.142 76.9999V52.1333C103.142 51.581 102.694 51.1333 102.142 51.1333H94.4417C92.7848 51.1333 91.4417 49.7901 91.4417 48.1333V38.2666C91.4417 37.7143 90.9939 37.2666 90.4417 37.2666H40.4417C39.8894 37.2666 39.4417 37.7143 39.4417 38.2666Z" stroke="black" stroke-width="4.5" stroke-linecap="round"/>
              <path d="M80.6166 57.2002H50.6959C50.0426 57.2002 49.5647 57.8165 49.7274 58.4492L53.1131 71.6159C53.2268 72.0579 53.6253 72.3669 54.0816 72.3669H77.2309C77.6872 72.3669 78.0857 72.0579 78.1994 71.6159L81.5851 58.4492C81.7478 57.8165 81.2699 57.2002 80.6166 57.2002Z" stroke="black" stroke-width="4.5" stroke-linecap="round"/>
              <defs>
                <linearGradient id="paint0_linear_609_253" x1="65" y1="0" x2="65" y2="130" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D0ABF4"/>
                  <stop offset="1" stop-color="#E694FA"/>
                </linearGradient>
              </defs>
            </svg>
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
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="65" cy="64.9995" r="65" fill="url(#paint0_linear_255_372)"/>
              <path d="M97.0497 29.0432L92.3353 30.0416C91.1271 30.2967 90.023 30.8165 89.1375 31.547L78.6991 40.1652L76.7082 38.5098C76.4148 38.2663 76.0174 38.1295 75.6031 38.1295C75.1888 38.1295 74.7915 38.2663 74.4981 38.5098L44.6885 63.2759C44.5428 63.397 44.4271 63.5408 44.3482 63.6992C44.2693 63.8575 44.2287 64.0273 44.2287 64.1987C44.2287 64.3702 44.2693 64.5399 44.3482 64.6983C44.4271 64.8566 44.5428 65.0005 44.6885 65.1215L45.1456 65.5021L39.9803 69.7929C39.8347 69.9141 39.7192 70.058 39.6404 70.2164C39.5616 70.3748 39.5211 70.5446 39.5213 70.716C39.5214 70.8875 39.5622 71.0572 39.6412 71.2155C39.7203 71.3738 39.836 71.5176 39.9819 71.6386L42.8963 74.0603L30.168 85.864C28.1348 87.6413 27.0005 90.0019 27 92.4566C27 100.218 37.5433 104.675 45.0454 100.246L71.0452 84.9425C77.0087 81.4141 85.0789 86.1807 83.0567 92.0434L80.2737 100.346C79.7181 102.021 82.7374 102.703 83.2915 101.041C86.0009 92.6078 86.4782 92.3041 86.4782 90.2669C86.4782 82.844 76.3873 78.5805 69.2358 82.8153L43.2376 98.1173C37.7781 101.342 30.1304 98.0886 30.1304 92.4566C30.1304 90.6722 30.9506 88.9674 32.411 87.6835L45.1127 75.9046L47.8221 78.1569C48.1155 78.4005 48.5129 78.5372 48.9271 78.5372C49.3414 78.5372 49.7388 78.4005 50.0322 78.1569L55.2021 73.8609L55.6669 74.2467C55.9603 74.4902 56.3577 74.627 56.772 74.627C57.1863 74.627 57.5836 74.4902 57.877 74.2467L87.6835 49.4819C87.8292 49.3609 87.9449 49.217 88.0238 49.0587C88.1027 48.9003 88.1433 48.7306 88.1433 48.5591C88.1433 48.3877 88.1027 48.2179 88.0238 48.0596C87.9449 47.9012 87.8292 47.7574 87.6835 47.6363L85.6158 45.9171C90.6699 41.8153 91.8313 40.7908 95.9728 37.372C96.9108 36.5986 97.5663 35.6197 97.8636 34.5488L98.9577 30.6008C99.2269 29.6428 98.1657 28.7969 97.0497 29.0432ZM88.1217 40.1782L85.6346 38.111L88.1327 36.049L90.6214 38.1162L88.1217 40.1782ZM61.4786 67.5719L52.7165 60.2898L55.2083 58.22L63.9689 65.5021L61.4786 67.5719ZM48.9287 75.3911L43.3033 70.7158L47.3635 67.3438L52.9873 72.0179L48.9287 75.3911ZM56.772 71.4809L48.0099 64.1987L50.4986 62.1302L59.2607 69.4123L56.772 71.4809ZM66.1836 63.6617L57.4231 56.3796L75.6031 41.2757L84.3621 48.5578L66.1836 63.6617ZM80.9155 42.0082L83.412 39.9462L85.8975 42.0121L83.3995 44.0728L80.9155 42.0082ZM93.7706 35.5185L92.8455 36.2823L90.3553 34.2138L91.3429 33.3992C92.4683 32.4699 93.625 32.535 95.3327 32.0971C94.8396 33.5126 94.957 34.5423 93.7706 35.5185Z" fill="black"/>
              <defs>
                <linearGradient id="paint0_linear_255_372" x1="65" y1="-0.000488281" x2="65" y2="130" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#86BAF7"/>
                  <stop offset="1" stop-color="#58DCDB"/>
                </linearGradient>
              </defs>
            </svg>
            <p class="text-md">
              <b class="_bold">Дополнительные оптический и вспомогательный порт 3,5 мм (AUX)</b>
              для стационарного проводного подключения.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-lg-5">
        <div class="col-12 col-lg-6">
          <div class="_hr mt-5"></div>
          <h3 class="mid-title">6. Звук от профессионалов Hi-End индустрии</h3>
          <p class="__info text-md limitation">
            В разработке акустической системы и электроники RAINBO TECHNICS принимал самое непосредственное участие Олег
            Миронов – сооснователь ACC Lab, многократный участник выставок «Российский Hi-End». Настройка системы
            производилась в два этапа: замеры и расчеты, объективная оценка приборами, затем живое прослушивание и подстройка.
          </p>
        </div>

        <div class="col-12 p-0 mb-5 d-lg-none">
          <img class="pe-md-2 __img" src="../../assets/images/HomePod/slide-3.png" width="1900" alt="#">
        </div>

        <div class="col-12 col-lg-6 mt-md-5">
          <div class="_hr"></div>
          <h3 class="mid-title">7. Звуки анимации</h3>
          <p class="__info text-md limitation">
            «Озвучил» колонку молодой московский диджей Никита Авдошин ака «НЕКИЙ ТЫ». Было написано и переработано более
            двадцати различных саундпаков для озвучания колонки, прежде чем попасть на боевую сборку.
          </p>
        </div>

        <div class="col-12 d-lg-none p-0">
          <img class="ps-md-2 __img" src="../../assets/images/HomePod/slide-4.png" width="1900" alt="#">
        </div>
      </div>
    </div>
  </div>

  <div class="row d-none d-lg-flex hifi mt-4">
    <div class="col-12 col-md-6 ps-0 pe-0 pe-md-1">
      <img class="pe-md-2 __img" src="../../assets/images/HomePod/slide-3.png" width="1900" alt="#">
    </div>
    <div class="col-12 col-md-6 pe-0 ps-0 ps-md-1">
      <img class="ps-md-2 __img" src="../../assets/images/HomePod/slide-4.png" width="1900" alt="#">
    </div>
  </div>

  <div class="row d-flex justify-content-center hifi">
    <div class="col-12 col-xxl-11 col-xxxl-10">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="_hr mt-5"></div>
          <h3 class="mid-title">8. Деревянный корпус</h3>
          <p class="__info text-md limitation">
            Корпус акустических систем RAINBO TECHNICS изготовлен из МДФ и фанеры. Это обеспечивает достаточную жёсткость, отсутствие лишних вибраций и прекрасные акустические свойства системы.
          </p>
          <p class="__info text-md limitation mb-5">
            Каждая колонка проходит 12 этапов промежуточного контроля в процессе производства. На выходе каждая колонка играет безостановочно трое суток, после чего проходит ещё 4 финальных общих теста и только после этого упаковывается и отправляется в продажу.
          </p>
        </div>

        <div class="col-12 col-lg-6 mt-lg-5">
          <div class="_hr"></div>
          <h3 class="mid-title">9. Наше производство</h3>
          <p class="__info text-md limitation">
            Наше производство находится в г. Москве.
          </p>
          <p class="__info text-md limitation">
            Перед запуском серийного производства кофемашин мы более 5 лет проводили лабораторные испытания всех систем, чтобы предоставить Вам многофункциональное, высокопроизводительное, надёжное, долговечное оборудование.
          </p>
          <p class="__info text-md limitation">
            Все детали изготовлены из высококачественных сертифицированных материалов.Наше производство отличается тем, что все наши кофемашины – ручной сборки. Это позволяет добиться максимального контроля качества в производственном процессе.Мы не перепродаём, мы производим!
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

.hifi .__box svg {
  margin: 20px 0;
}

.hifi ._bold {
  font-weight: 700;
}

.limitation {
  max-width: 700px;
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

  .hifi .__box svg {
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

  .hifi .__box svg {
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
