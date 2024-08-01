<template>
  <template class="d-flex d-sm-none">
    <v-row justify="center" class="">
      <v-col cols="11" class="text-saving-title">
        <span><span class="color-green">Cuenta de Ahorros</span> y Transferencias electrónicas ilimitadas</span>
      </v-col>
      <v-col cols="12" class="text-saving-subtitle">
        <span class="welcome-text">Te damos </span>
        <img src="/src/assets/images/Home/plus.svg">
        <span class="thank-you-text"> una cuenta</span>
      </v-col>
      <v-col cols="11" class=text-saving>
        <span>para que ahorres, ganes intereses y transfieras dinero cuando quieras desde nuestra <span class="bold">app
            CMV+</span></span>
      </v-col>
    </v-row>
  </template>
  <template class="d-none d-sm-flex">
    <v-container>
      <v-row>
        <v-col cols="6" class="v-col-lg-6 v-col-sm-12">
          <div class="inline-content">
            <v-img src="/src/assets/images/Home/rectangleGreenSlit.svg" width="10px" height="231px"></v-img>
            <span class="text-saving-title-large pl-8"><span class="color-green">Cuenta de Ahorros</span> <br>y
              Transferencias
              electrónicas ilimitadas</span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-row justify="end">
            <v-row justify="end" style="background-color: #84bd00;" noGutters>
              <v-col cols="10" class="text-saving-subtitle-large">
                <span class="welcome-text">Te damos </span><br>
                <span class="thank-you-text"> una cuenta</span>
              </v-col>
              <v-col cols="1" alignSelf="center">
                <img src="/src/assets/images/Home/plusLarge.svg">
              </v-col>
            </v-row>
            <v-col cols="12" class="text-saving-large">
              <span>para que ahorres, ganes<br> intereses y transfieras dinero<br> cuando quieras
                desde<br> nuestra <span class="bold">app CMV+</span></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5">
          <slide :isLarge="true"></slide>
        </v-col>
      </v-row>
    </v-container>
  </template>
</template>
<script setup>
import slide from "./slide.vue"
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
    align-items: center;
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
