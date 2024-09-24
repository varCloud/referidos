<template>
  <div class="container-sucess-main">
    <img src="/src/assets/images/successRegis/Isolation_Mode.svg" class="d-none d-lg-flex isolation-mode" />
    <img src="/src/assets/images/successRegis/Isolation_Mode-1.svg" class="d-none d-lg-flex isolation-mode-1"
      alt="Isolation_Mode-1">
    <img src="/src/assets/images/successRegis/Isolation_Mode-2.svg" class="d-none d-lg-flex isolation-mode-2"
      alt="Isolation_Mode-2.svg">
    <img src="/src/assets/images/successRegis/Frame.svg" class="d-none d-lg-flex frame" alt="Frame">
    <v-row justify="center">
      <v-col cols="11" md="9">
        <v-img src="/src/assets/images/successRegis/Group 8965.svg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col lg="4" xl="4" md="5" sm="6" xs="10" cols="10" class="text-center">
        <span class="text1">Pronto uno de nuestros ejecutivos se pondrá en contacto contigo para asistirte en la
          apertura de tu cuenta.
        </span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="4" xl="4" md="5" sm="6" xs="10" cols="10">
        <div class="inline-content" @click="showAlert()">
          <span class="text2">Consulta los requisitos aquí</span>
          <v-img src="/src/assets/images/Question.svg" width="24px" height="24px"></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" class="text-center">
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
    <div>
    </div>
  </div>
  <dialogRequisitos v-model="isDialogOpen" title="Requisitos">
    <template v-slot>
      A. INE<br>
      B. Comprobante Domicilio<br>
      C. Cubrir Certificado de Aportación
    </template>
  </dialogRequisitos>
</template>

<script setup>
import premios from "./components/premios.vue";
import dialogRequisitos from "./components/dialogRequisitos.vue";
import { ref } from 'vue';

const isDialogOpen = ref(false);

const showAlert = () => {
  isDialogOpen.value = true
}

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

.inline-content {
  display: flex;
  align-items: center;
  padding-bottom: 40px;
}

.container-sucess-main {
  position: relative;
  display: flex;
  flex-direction: column;
}

.isolation-mode {
  position: absolute;
  top: 50%;
  left: 15%;
  z-index: 0;
}

.isolation-mode-1 {
  position: absolute;
  top: 40%;
  z-index: 0;
  right: 20%;
}

.isolation-mode-2 {
  position: absolute;
  top: 55%;
  z-index: 0;
  right: 13%;
}

.frame {
  z-index: 0;
  position: absolute;
  top: 34%;
  left: 19%;
}

.v-row {
  z-index: 1;
}
</style>
