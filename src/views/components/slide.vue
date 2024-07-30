<template>
  <swiper class="swiper " :modules="modules" :space-between="0" :slides-per-view="1"
    :centered-slides="props.isLarge == true ? false : true" :pagination="{ clickable: true, }" :style="{
      '--swiper-navigation-color': '#84BD00',
      '--swiper-pagination-color': '#84BD00',
      '--swiper-pagination-bullet-inactive-color': '#009878',
      '--swiper-pagination-bullet-width': '31px',
      '--swiper-pagination-bullet-height': '31px'
    }" :autoplay="{
      delay: 25000,
      disableOnInteraction: false
    }">
    <swiper-slide v-for="dataCard in dataCards" class="slides" :style="props.isLarge == true ? {
      'padding-left': '5px'
    } : {
      'transform': 'translate3d(-50px, 0, 0)'
    }">
      <v-card class="my-card elevation-4 rounded-lg">
        <!-- Imagen -->
        <div class="image-overlay">
          <v-img :src="dataCard.img" class="overlay-image mx-auto"></v-img>
        </div>
        <!-- Texto -->
        <v-card-text class="text-card">
          <v-row justify="center" no-gutters class="text-center">
            <v-col cols="12">
              <span class="text-title">{{ dataCard.title }}</span>
            </v-col>
            <v-col cols="10">
              <span class="text-subTitle" v-html="dataCard.text"></span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { ref } from "vue";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Módulos a utilizar
const modules = ref([Pagination, Navigation, Autoplay])
const dataCards = ref([{
  img: '/src/assets/images/slides/oxxo.svg',
  title: 'Paga y retira en OXXO',
  text: 'Deposita a tu cuenta de débito y realiza abonos a tus créditos desde cualquier tienda'
}, {
  img: '/src/assets/images/slides/savingsAccount.svg',
  title: 'Cuenta de ahorro',
  text: 'Gana intereses por guardar tu dinero en esta cuenta y úsalo cuando quieras'
}, {
  img: '/src/assets/images/slides/investments.svg',
  title: 'Inversiones',
  text: 'Haz que tu dinero crezca más con nuestras inversiones con grandes <span class="color-green">rendimientos</span>'
}, {
  img: '/src/assets/images/slides/spei.svg',
  title: 'Transferencias SPEI',
  text: 'Transfiere de manera segura desde la app CMV+ a cualquier otro banco'
},])

const props = defineProps(['isLarge'])

</script>
<style lang="scss" scoped>
.slides {
  padding-top: 60px;
  padding-bottom: 15%;
  width: 260px !important;
}

.my-card {
  width: 240px;
  height: 240px;
  position: relative;
  overflow: visible;

}

.image-overlay {
  position: absolute;
  top: -25%;
  width: 100%;
}

.overlay-image {
  width: 140px;
  height: 112px;
}

.text-card {
  padding-top: 25%;
}

.text-title {
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  font-family: Montserrat;
}

.text-subTitle {
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  font-family: Montserrat;

  .color-green {
    color: #84bd00;
  }
}

.swiper-slide {
   width: 100% !important;
   display: flex;
   justify-content: center;
  }


</style>
