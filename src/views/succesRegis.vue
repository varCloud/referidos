<template>
  <div class="container-sucess-main">
    <img src="src/assets/images/successRegis/Isolation_Mode.svg" class="d-none d-flex isolation-mode" />
    <img src="src/assets/images/successRegis/Isolation_Mode-1.svg" class="d-none d-flex isolation-mode-1" alt="Isolation_Mode-1">
    <img src="src/assets/images/successRegis/Isolation_Mode-2.svg"  class="d-none  d-flex isolation-mode-2" alt="Isolation_Mode-2.svg">
    <img src="src/assets/images/successRegis/Frame.svg" class="d-none d-flex frame" alt="Frame">
    <v-row justify="center">
      <v-col cols="11" md="9">
        <v-img src="../assets/images/successRegis/Group 8965.svg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col cols="10" class="text-center">
        <span class="text1">Ahora acude a tu sucursal más cercana<br>
          para convertirte en socio y gozar de<br>
          todos los beneficios.
        </span>
      </v-col>
      <v-col cols="10" class="text-center">
        <span class="text1">Recuerda llevar contigo:</span>
      </v-col>
      <v-col lg="3" xl="3" md="5" sm="6" xs="10" cols="10">
        <span class="text2">
          1. INE<br>
          2. Comprobante de domicilio vigente<br>
          3. Y tu aportación Social
        </span>
      </v-col>
    </v-row>
    <v-row class="padding" justify="center">
      <v-col class="text-center">
        <span class="text2">
          Al unirte como socio en nuestra<br>Cooperativa tendrás la oportunidad de<br>ganar increíbles premios.
        </span>
      </v-col>
    </v-row>
    <v-row justify="center" class="pt-10">
      <v-col lg="10" xl="10" md="11" sm="12" xs="12" cols="12">
        <premios :showText="false"></premios>
      </v-col>
    </v-row>
    <template class="d-flex d-sm-none pt-4">
      <v-row justify="center" class="pb-10">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="10" class="d-flex flex-column align-center">
              <v-img src="/src/assets/images/successRegis/interrogacion.svg" width="127px" height="215px"></v-img>
            </v-col>
            <v-col cols="10" align-self="center">
              <span class="text2">Para más información llama a nuestro Centro de atención: 800 3000 268 o escríbenos
                por WhatsApp</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
    <template class="d-none d-sm-flex">
      <v-row justify="center" class="pb-10">
        <v-col cols="2" class="d-flex flex-column align-end">
          <v-img src="/src/assets/images/successRegis/interrogacion.svg" width="127px" height="215px"></v-img>
        </v-col>
        <v-col cols="8" align-self="center">
          <span class="text2">Para más información llama a nuestro Centro de atención: 800 3000 268 o escríbenos
            por WhatsApp</span>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script setup>
import premios from "./components/premios.vue";
</script>
<style scoped>

.text1 {
  text-align: center;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
}

.text2 {
  text-align: start;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
}

.padding {
  padding-top: 100px;
}

.inline-content {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 40px;
}
.container-sucess-main{
  position: relative;
  display: flex;
  flex-direction: column;
}

.isolation-mode{
  position: absolute;
  top: 50%;
  left:15%;
}

.isolation-mode-1{
  position: absolute;
  top: 40%;
  right:20%;
}

.isolation-mode-2{
  position: absolute;
  top: 55%;
  right:13%;
}

.frame{
  position: absolute;
  top: 34%;
  left:19%;
}

</style>
