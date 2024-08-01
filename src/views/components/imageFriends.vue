<template>

  <template class="d-flex d-lg-none">
    <v-row justify="center">
      <v-col cols="12">
        <v-img src="/src/assets/images/Home/friends.svg" height="98%"></v-img>
      </v-col>
      <v-col cols="11" class="text-friends">
        <span>También tus amigos merecen nuestros beneficios</span>
      </v-col>
    </v-row>
  </template>

  <template class="d-none d-lg-flex">
    <v-row no-gutters>
      <v-col cols="12">
        <v-img class="rectangle-green" src="/src/assets/images/Home/rectangleGreen.svg" height="75px"
          width="129px"></v-img>
      </v-col>
      <v-col cols="9" class="text-friends-lg">
        <span>También tus amigos merecen <span class="text-green"> nuestros beneficios</span></span>
      </v-col>
      <v-col cols="12">
        <v-img src="/src/assets/images/Home/friendsCircle.svg" height="350px" width="350px" cover></v-img>
      </v-col>
    </v-row>
  </template>
</template>
<script setup></script>
<style scoped>
.text-friends {
  font-size: 22px;
  text-align: center;
  font-weight: 800;
  font-family: Montserrat;
}

.text-friends-lg {
  font-size: 46px;
  font-weight: 800;
  font-family: Montserrat;
  margin-top: -35px;

  .text-green {
    color: #84bd00 !important;
    text-transform: uppercase;
  }
}

.rectangle-green {
  display: flex;
  transform: translate3d(-35%, -50%, 0);
}
</style>
