<template>
  <template class="d-flex d-sm-none pt-4">
    <v-row justify="center">
      <v-col cols="12">
        <v-img class="mx-auto" src="/src/assets/images/Home/benefits.svg" width="229px" height="78px"></v-img>
      </v-col>
      <v-col cols="12">
        <v-img src="/src/assets/images/Home/woman.svg" width="430px" height="273px" cover></v-img>
      </v-col>
      <v-col cols="8" class="text-friends">
        <span>Únete a los más de <span class="color-green">600 mil socios</span> que ya están disfrutando de nuestros
          servicios financieros con beneficios
          exclusivos en <span class="color-green">financiamiento, ahorro e inversión</span>.</span>
      </v-col>
    </v-row>
  </template>
  <template class="d-none d-sm-flex">
    <v-row class="mt-10">
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-row>
              <div class="inline-content">
                <v-col>
                  <v-img src="/src/assets/images/Home/rectangleGreenLarge.svg" width="20px" height="183px"></v-img>
                </v-col>
                <v-col>
                  <v-img class="mx-auto" src="/src/assets/images/Home/benefits.svg" width="415px"
                    height="127px"></v-img>
                </v-col>
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" class="text-friends mt-10">
            <v-row>
              <v-col cols="6" class="v-col-sm-12 v-col-lg-6">
                <span>Únete a los más de <span class="color-green">600 mil socios</span> que ya<br>
                  están disfrutando de nuestros servicios<br>
                  financieros con beneficios exclusivos en<br>
                  <span class="color-green">financiamiento, ahorro e inversión</span>.</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row justify="end">
          <!-- <v-img src="/src/assets/images/Home/womanLarge.svg" height="628px" width="628px"></v-img> -->
        </v-row>
      </v-col>
    </v-row>
  </template>
</template>
<script setup></script>
<style scoped>
.text-friends {
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  font-family: Quicksand;

  .color-green {
    color: #84bd00;
  }
}

.inline-content {
  display: flex;
  align-items: center;
}

.cuadrado-girado {
  width: 776.43px;
  height: 776.43px;
  background-color: #84bd00;
  position: absolute;
}
</style>
