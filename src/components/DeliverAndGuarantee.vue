<script setup>
defineProps({
  color: {
    type: String,
    default: "black"
  }
})

const toggle = () => {
  document.getElementById('toggle-btn').classList.toggle("down")
}

const toggleSecond = () => {
  document.getElementById('toggle-btn-second').classList.toggle("down")
}
</script>

<template>
  <div class="row d-flex justify-content-center" :style="{color: color}">
    <div class="col-12 col-xxl-11 col-xxxl-10 deliver-guarantee">

      <div class="row">
        <div class="col-12 text-center">
          <h2 class="__title title-lg">Доставка и гарантия</h2>
        </div>

        <div class="col-12 col-lg-6 panel">
          <div class="d-flex justify-content-between pointer" @click="toggle" data-bs-toggle="collapse" data-bs-target="#deliver" aria-expanded="false" aria-controls="collapseExample">
            <h3 class="title-xs mt-1">Доставка</h3>
            <button class="p-0 me-lg-4" type="button">
              <svg id="toggle-btn" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.067 18.2179L31.9863 18.2483C32.1439 18.2495 32.3003 18.2193 32.4462 18.1595C32.5921 18.0997 32.7247 18.0114 32.8363 17.8999C32.9478 17.7884 33.0361 17.6558 33.0959 17.5098C33.1557 17.3639 33.1859 17.2076 33.1847 17.0499C33.1825 16.385 32.6407 15.8432 31.9758 15.841L18.0684 15.8107L18.0771 1.7355C18.0783 1.06719 17.5366 0.52542 16.8682 0.52664C16.1991 0.528704 15.6559 1.07193 15.6546 1.74024L15.6459 15.8053L1.56993 15.7741C0.904994 15.772 0.368533 16.3084 0.371542 16.9725C0.373703 17.6375 0.915472 18.1792 1.58041 18.1814L15.6445 18.2125L15.6358 32.2317C15.6346 32.9 16.1763 33.4418 16.8447 33.4406C17.5138 33.4385 18.057 32.8953 18.0583 32.227L18.067 18.2179Z" :fill="color"/>
              </svg>
            </button>
          </div>
          <div class="collapse toggle-box pe-4 pe-lg-5" id="deliver">
            <div class="text-md me-lg-4">
              <p class="__info">Доставка по Москве осуществляется компанией СДЭК.</p>
              <p class="__info">Самовывоз – бесплатно. Пункт выдачи заказов находится по адресу: г.Подольск, ул. Комсомольская д.1</p>
              <p class="__info">График работы Пн-Пт - с 10:00 до 17:00. Доставка по России осуществляется компанией СДЭК, либо по адресу, либо в пункт самовывоза, при полной оплате любого товара</p>
              <p class="__info">Стоимость и срок доставки по России, согласно тарифам СДЭК, автоматически определяется при формировании заказа.</p>
              <p class="__info pb-4">Доставка в страны СНГ осуществляется Почтой России или СДЭК при полной оплате любого товара.</p>
            </div>
          </div>
          <div class="my_hr my-3" :style="{borderBottomColor: color}"></div>
        </div>

        <div class="col-12 col-lg-6 panel">
          <div class="d-flex justify-content-between pointer panel-body" @click="toggleSecond" data-bs-toggle="collapse" data-bs-target="#guarantee" aria-expanded="false" aria-controls="collapseExample">
            <h3 class="title-xs mt-1">Гарантия</h3>
            <button class="p-0 me-lg-4" type="button">
              <svg id="toggle-btn-second" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.067 18.2179L31.9863 18.2483C32.1439 18.2495 32.3003 18.2193 32.4462 18.1595C32.5921 18.0997 32.7247 18.0114 32.8363 17.8999C32.9478 17.7884 33.0361 17.6558 33.0959 17.5098C33.1557 17.3639 33.1859 17.2076 33.1847 17.0499C33.1825 16.385 32.6407 15.8432 31.9758 15.841L18.0684 15.8107L18.0771 1.7355C18.0783 1.06719 17.5366 0.52542 16.8682 0.52664C16.1991 0.528704 15.6559 1.07193 15.6546 1.74024L15.6459 15.8053L1.56993 15.7741C0.904994 15.772 0.368533 16.3084 0.371542 16.9725C0.373703 17.6375 0.915472 18.1792 1.58041 18.1814L15.6445 18.2125L15.6358 32.2317C15.6346 32.9 16.1763 33.4418 16.8447 33.4406C17.5138 33.4385 18.057 32.8953 18.0583 32.227L18.067 18.2179Z" :fill="color"/>
              </svg>
            </button>
          </div>
          <div class="collapse toggle-box pe-4 pe-lg-5" id="guarantee">
            <div class="text-md me-lg-4">
              <p class="__info">Вся продукция Рейнбо покрывается гарантией (1 год на электронику и 3 месяца на лакокрасочное покрытие).</p>
              <p class="__info">
                Приобретая продукцию компании RAINBO, вы приобретаете абсолютно новую продукцию с гарантией. Вся продукция
                торговой марки RAINBO, имеет свой срок гарантийного обслуживания, установленный производителем, в течение
                которого все работы по ремонту и обслуживанию изделий проводятся бесплатно при условии правильной эксплуатации
                изделия в соответствии с требованиями производителя.
              </p>
              <p class="__info">
                Гарантийный срок на изделие указан в инструкции по эксплуатации. При возникновении гарантийного случая
                Вам необходимо связаться по т.
                <a href="tel:+74951976668" class="_underline" :style="{color: color}">7 (495) 197-66-68</a>
                или e-mail:
                <a class="_underline" href="mailto:hello@rainboskin.me" :style="{color: color}">hello@rainboskin.me</a>
              </p>
              <div class="py-2 py-sm-3 py-md-4 mt-3 pt-lg-4 pb-lg-4">
                <a class="__btn text-md shining" href="https://rainboskin.me/faq/garantiynoe-obsluzhivanie/" target="_blank">
                  Сервисный центр
                </a>
              </div>
            </div>
          </div>
          <div class="my_hr my-3"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.deliver-guarantee {
  margin-bottom: 140px;
}

.deliver-guarantee .__title {
  margin: 120px 0 95px 0;
}

.my_hr {
  border-bottom: 1px solid;
}

.toggle-box .__info {
  line-height: normal;
  margin-top: 20px;
}

.deliver-guarantee .__btn {
  background-color: #6337FF;
  transition: background-color 0.3s;
  color: white;
  border-radius: 50rem;
  padding: 13px 49px;
}

.deliver-guarantee .__btn:hover {
  background-color: rgba(99, 55, 255, 0.8);
}

#toggle-btn, #toggle-btn-second {
  -moz-transition: all .2s linear;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}

#toggle-btn.down, #toggle-btn-second.down {
  -moz-transform:rotate(45deg);
  -webkit-transform:rotate(45deg);
  transform:rotate(45deg);
}

@media screen and (max-width:1199px) {
  .deliver-guarantee {
    margin-bottom: 40px;
  }

  .deliver-guarantee .__title {
    margin: 50px 0 30px 0;
  }
}

@media screen and (max-width:991px) {
  .toggle-box .__info {
    margin-top: 10px;
  }

  .deliver-guarantee {
    margin-bottom: 40px;
  }

  #toggle-btn, #toggle-btn-second {
    width: 21px;
  }
}

@media screen and (max-width:575px) {
  .deliver-guarantee .__btn {
    padding: 11px 35px;
  }

  #toggle-btn, #toggle-btn-second {
    width: 19px;
  }
}
</style>
