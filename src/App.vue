<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
//
</script>
<style>
.v-text-field .v-field--no-label input,
.v-text-field .v-field--active input {
  background: white !important;
  border-radius: 10px;
}

.v-select input {
  background-color: white !important;
  border-radius: 10px !important;
}

.v-select .v-field__input {
  background-color: white !important;
  border-radius: 10px !important;
}

.v-select .v-input__control {
  background-color: white !important;
  border-radius: 10px !important;
}

html,
body {
  overflow-x: hidden;
}
</style>
