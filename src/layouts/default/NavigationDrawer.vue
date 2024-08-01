<template>
  <v-app-bar color="primary" prominent>
    <v-row class="position-relative d-flex d-sm-none" no-gutters>
      <v-col cols="1">
        <v-app-bar-nav-icon height="24px" style="padding-left: 20px;" width="24px" variant="text"
          @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-col>
      <v-col cols="7">
        <v-img src="/src/assets/images/logoCMVNombre.svg" class="position-absolute center-image" height="26px"
          width="117px"></v-img>
      </v-col>
      <v-col cols="4">
        <socialNetWork TypeIcons="Green"></socialNetWork>
      </v-col>
    </v-row>


    <v-row class="d-none d-sm-flex" noGutters>
      <v-col cols="2">
        <v-app-bar-nav-icon height="50px" width="50px" @click.stop="drawer = !drawer"
          style="padding-left: 20px;"></v-app-bar-nav-icon>
      </v-col>
      <v-col cols="7" class="d-flex justify-center">
        <v-img src="/src/assets/images/logoCMVNombre.svg" height="40px" width="150px"></v-img>
      </v-col>
      <v-col cols="2">
        <socialNetWork TypeIcons="GreenLarge"></socialNetWork>
      </v-col>
    </v-row>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<script setup>
// IMPORTS _______________________________________________________
import socialNetWork from "@/components/socialNetwork.vue"
import { ref, computed } from "vue";

// DATA __________________________________________________________
const drawer = ref(false)

</script>
<style scoped>
.center-image {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
