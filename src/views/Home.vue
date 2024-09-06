<template>
  <div>
    <v-row class="color" justify="center">
      <v-col lg="5" xl="5" md="12" sm="12" xs="12" cols="12">
        <imageFriend></imageFriend>
      </v-col>
      <v-col lg="5" xl="5" md="12" sm="12" xs="12" cols="12">
        <formCMV></formCMV>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="10" xl="10" md="12" sm="12" xs="12" cols="12">
        <premios :showText="true"></premios>
      </v-col>
    </v-row>
    <v-row justify="center" class="wrapper-container-imgs">
      <div class="container-imgs d-none d-sm-flex">
        <div class="container-benefits">
          <img src="../assets/images/benefits/benefits.svg">
        </div>
        <div class="container-woman">
          <img src="../assets/images/Home/woman.png" class="woman">
        </div>

      </div>
      <v-col class="pb-10" lg="10" xl="10" md="12" sm="12" xs="12" cols="12" style="z-index: 3;">
        <benefits></benefits>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="10" xl="10" md="12" sm="12" xs="12" cols="12">
        <savingAccount></savingAccount>
      </v-col>
      <v-col lg="10" xl="10" md="12" sm="12" xs="12" cols="12">
        <template class="d-flex d-sm-none pt-15">
          <slide :dataCards="dataCards" :isLarge="true"></slide>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import imageFriend from "@/views/components/imageFriends.vue"
import formCMV from "@/views/components/form.vue"
import benefits from "./components/benefits.vue";
import savingAccount from "./components/savingAccount.vue"
import slide from "./components/slide.vue"
import premios from "./components/premios.vue";
import { ref } from "vue";

const dataCards = ref([{
  img: './src/assets/images/slides/oxxo.svg',
  title: 'Paga y retira en OXXO',
  text: 'Deposita a tu cuenta de débito y realiza abonos a tus créditos desde cualquier tienda'
}, {
  img: './src/assets/images/slides/savingsAccount.svg',
  title: 'Cuenta de ahorro',
  text: 'Gana intereses por guardar tu dinero en esta cuenta y úsalo cuando quieras'
}, {
  img: './src/assets/images/slides/investments.svg',
  title: 'Inversiones',
  text: 'Haz que tu dinero crezca más con nuestras inversiones con grandes <span class="color-green">rendimientos</span>'
}, {
  img: './src/assets/images/slides/spei.svg',
  title: 'Transferencias SPEI',
  text: 'Transfiere de manera segura desde la app CMV+ a cualquier otro banco'
},])
</script>
<style scoped>
.color {
  background-color: #f2f2f2;
}


@media (max-width: 500px) {
  body {
    overflow: hidden;
  }

  .wrapper-container-imgs {
    height: max-content;
  }
}

.wrapper-container-imgs {
  height: 628px;
}


.container-imgs {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 1;
  overflow: hidden;

  .container-benefits {
    width: 40%;
  }

  .container-woman {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

}
</style>
