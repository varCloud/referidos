<template>
  <div class="background pt-5 d-flex d-lg-none">
    <v-row justify="center" no-gutters>
      <v-col cols="7">
        <v-img class="mx-auto" src="/src/assets/images/CmvLogoHeaders.svg" width="188px" height="43px"></v-img>
      </v-col>
      <v-col cols="10" class="text">
        <span style="text-transform: uppercase;">#El <span class="color-green">respaldo</span> que <span
            class="color-green">necesitas</span>
        </span>
      </v-col>
      <v-col cols="9" class="text">
        <span>Acatita de bajan 222, Morelia, Mich.
          Tel. 800 3000 268
          conatcto@cajamorelia.com.mx</span>
      </v-col>
      <v-col cols="6">
        <socialNetWork TypeIcons="Dark"></socialNetWork>
      </v-col>

      <v-col cols="10" class="text">
        <span>Consulta costos y comisiones en
          <a class="color-green" href="https://www.cajamorelia.com.mx/">www.cajamorelia.com.mx</a></span>
      </v-col>
      <v-col cols="10" class="text">
        <span class="text-small">Valladolid Servicios Financieros pertenece al grupo Caja Morelia Valladolid S.C. de
          A.P. de R.L. de C.V.</span>
      </v-col>
    </v-row>
  </div>
  <div class="background-black pt-5 d-none d-lg-flex">
    <v-row no-gutters justify="start">
      <v-col cols="11">
        <v-img class="ml-10" src="/src/assets/images/CmvLogoHeaders.svg" width="306px" height="69px"></v-img>
      </v-col>
      <v-col cols="10" class="text-large ml-10">
        <span style="text-transform: uppercase;">#El <span class="color-green">respaldo</span> que <span
            class="color-green">necesitas</span>
        </span>
      </v-col>
      <v-col cols="10" class="text-large ml-10">
        <span class="text-dom">Acatita de bajan 222, Morelia, Mich.<br>
          Tel. 800 3000 268<br>
          conatcto@cajamorelia.com.mx</span>
      </v-col>
      <v-col cols="1" align-self="end">
        <socialNetWork TypeIcons="White"></socialNetWork>
      </v-col>
      <v-col cols="12" class="text-large ml-10 text-center mt-10">
        <span class="text-small ">Valladolid Servicios Financieros pertenece al grupo Caja Morelia Valladolid
          S.C. de
          A.P. de R.L. de C.V.</span>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import socialNetWork from "@/components/socialNetwork.vue"

</script>
<style scoped>
.text {
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  font-family: Quicksand;
  color: white;

  .color-green {
    color: #84bd00;
  }

  .text-small {
    font-size: 14px;
  }
}

.text-large {
  font-size: 32px;
  font-weight: 700;
  font-family: Quicksand;
  color: white;

  .color-green {
    color: #84bd00;
  }

  .text-dom {
    font-weight: 400;
  }

  .text-small {
    font-size: 24px;
    font-weight: 400;
  }
}

.background {
  background-color: #343A40;
  color: #343A40;
}

.background-black {
  background-color: #1D1D1B;
}
</style>
