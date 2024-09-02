<template>
  <v-row justify="center" v-if="fullPage">
    <v-col cols="auto" v-for="dataCard in props.dataCards" class="slides-full-page">
      <v-card class="my-card elevation-4 rounded-lg">
        <div class="image-overlay">
          <v-img :src="dataCard.img" class="overlay-image mx-auto"></v-img>
        </div>
        <v-card-text class="text-card">
          <v-row justify="center" no-gutters class="text-center">
            <v-col cols="12">
              <span class="text-title">{{ dataCard.title }}</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <swiper v-else class="swiper" :modules="modules" :space-between="0" :slides-per-view="1"
    :pagination="{ clickable: true, }" :style="{
      '--swiper-navigation-color': '#84BD00',
      '--swiper-pagination-color': '#84BD00',
      '--swiper-pagination-bullet-inactive-color': '#009878',
      '--swiper-pagination-bullet-width': '31px',
      '--swiper-pagination-bullet-height': '31px'
    }" :autoplay="{
      delay: 25000,
      disableOnInteraction: false
    }">
    <swiper-slide v-for="dataCard in props.dataCards" class="slides swiper-slide-custom">
      <v-card class="my-card elevation-4 rounded-lg">
        <div class="image-overlay">
          <v-img :src="dataCard.img" class="overlay-image mx-auto"></v-img>
        </div>
        <v-card-text class="text-card">
          <v-row justify="center" no-gutters class="text-center">
            <v-col cols="12">
              <span class="text-title">{{ dataCard.title }}</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from "vue";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = ref([Pagination, Navigation, Autoplay])
const props = defineProps(['dataCards', 'fullPage'])

</script>
<style lang="scss" scoped>
.slides {
  padding-bottom: 20%;
}

.slides-full-page {
  padding-bottom: 50px;
  width: 260px !important;
}

.my-card {
  width: 240px;
  position: relative;
  overflow: visible;
}

.image-overlay {
  width: 100%;
  padding-top: 25px;
}

.overlay-image {
  width: 140px;
  height: 112px;
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

.swiper-slide-custom {
  width: 100% !important;
  display: flex;
  justify-content: center;
}
</style>