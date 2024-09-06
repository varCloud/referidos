<template>
  <v-app>
    <!-- <default-bar /> -->
    <default-navigation />
    <default-view />
    <footer>
      <v-row class="pt-5 d-flex d-lg-none" style="margin: 0%; background-color: #343A40;">
        <v-col>
          <footerCMV></footerCMV>
        </v-col>
      </v-row>
      <v-row class="background-black pt-5 d-none d-lg-flex" style="margin: 0%; background-color: #1D1D1B;">
        <v-col>
          <footerCMV></footerCMV>
        </v-col>
      </v-row>
    </footer>
  </v-app>
</template>

<script setup>
// import DefaultBar from "./AppBar.vue";
import DefaultNavigation from "./NavigationDrawer.vue";
import DefaultView from "./View.vue";
import footerCMV from "@/layouts/default/footer.vue"
</script>
