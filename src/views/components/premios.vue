<template>
  <template class="d-flex d-sm-none">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-saving-title">
          <span>Premios</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <slidePremios :fullPage="false" :dataCards="dataCards"></slidePremios>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <template class="d-none d-sm-flex">
    <v-row>
      <v-col cols="2">
        <div class="inline-content">
          <v-img src="/src/assets/images/Home/rectangleGreenLarge.svg" width="20px" height="116px"></v-img>
          <span class="text-saving-title-large pl-8">Premios</span>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <slidePremios :fullPage="true" :dataCards="dataCards"></slidePremios>
      </v-col>
    </v-row>
  </template>
</template>
<script setup>
import slidePremios from "./slidePremios.vue"
import { ref } from "vue";
const dataCards = ref([{
  img: './src/assets/images/slides/Iphone13.png',
  title: 'Iphone 13 128gb',
  text: ''
}, {
  img: './src/assets/images/slides/SmartWach.jpg',
  title: 'SmartWatch',
  text: ''
}, {
  img: './src/assets/images/slides/bocinaJbl.png',
  title: 'Bocina JBL',
  text: ''
}, {
  img: './src/assets/images/slides/audifonosSony.jpg',
  title: 'Audífonos Sony',
  text: ''
},])
</script>
<style scoped>
.text-saving-title {
  font-size: 26px;
  text-align: center;
  font-weight: 700;
  font-family: Montserrat;
  text-transform: uppercase;

  .color-green {
    color: #84bd00;
  }
}

.text-saving-title-large {
  font-size: 36px;
  font-weight: 700;
  font-family: Montserrat;
  text-transform: uppercase;

  .color-green {
    color: #84bd00;
  }
}

.text-saving-subtitle {
  font-size: 16px;
  text-align: center;
  font-weight: 800;
  font-family: Montserrat;
  text-transform: uppercase;
  margin: 0 1px;

  .inline-content {
    display: flex;
    align-items: start;
  }
}

.text-saving-subtitle-large {
  color: white;
  font-size: 36px;
  text-align: right;
  font-weight: 800;
  font-family: Montserrat;
  text-transform: uppercase;
  margin: 0 -5px;

  .inline-content {
    display: flex;
    align-items: center;
  }
}

.text-saving {
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  font-family: Montserrat;
  text-transform: lowercase;

  .bold {
    font-weight: bold;
  }
}

.text-saving-large {
  font-size: 22px;
  text-align: right;
  font-family: Montserrat;

  .bold {
    font-weight: bold;
  }
}

.inline-content {
  display: flex;
  align-items: center;
}
</style>
