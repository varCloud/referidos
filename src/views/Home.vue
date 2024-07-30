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
    <v-row justify="center" class="mt-3 wrapper-container-imgs">
      <div class="container-imgs d-none d-sm-flex">
        <div class="container-benefits">
          <img src="/src/assets/images/benefits/benefits.svg">
        </div>
        <div class="container-woman">
          <img src="/src/assets/images/Home/womanLarge.svg" class="woman">
        </div>

      </div>
      <v-col lg="10" xl="10" md="12" sm="12" xs="12" cols="12" style="z-index: 3;">
        <benefits></benefits>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="10" xl="10" md="12" sm="12" xs="12" cols="12">
        <savingAccount></savingAccount>
      </v-col>
      <v-col lg="10" xl="10" md="12" sm="12" xs="12" cols="12">
        <template class="d-flex d-sm-none pt-15">
          <slide :isLarge="true"></slide>
        </template>
      </v-col>
    </v-row>
    <v-row>
      <headers></headers>
    </v-row>
  </div>
</template>

<script setup>
import imageFriend from "@/views/components/imageFriends.vue"
import formCMV from "@/views/components/form.vue"
import benefits from "./components/benefits.vue";
import savingAccount from "./components/savingAccount.vue"
import headers from "./components/headers.vue"
import slide from "./components/slide.vue"
</script>
<style>
.color {
  background-color: #f2f2f2;
}

/* .background-benefits{
  background-image: url('./../assets/images/benefits/benefits.svg');
  width: 50%;
  height: 30%;
  position: absolute;
  z-index: 1;
  left: 0;
}

.background-woman{
  background-image: url('/src/assets/images/Home/womanLarge.svg');
  width: 50%;
  height: 30%;
  position: absolute;
  z-index: 1;
  right: 0;
} */

@media (max-width: 500px) {
  .wrapper-container-imgs {
    height: auto;
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
