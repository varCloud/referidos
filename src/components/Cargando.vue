<template>
  <v-dialog v-model="dialog" persistent width="300">
    <v-card color="accent" dark class="pa-3">
      <v-card-text>
        {{ props.text }}
        <v-progress-linear
          indeterminate
          color="accent"
          class="mb-0 mt-2"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup>
// IMPORTS _________________________________________
import { ref, watch } from "vue";

// DATA ____________________________________________
const dialog = ref(false);
const props = defineProps(["show", "text"]);

// WATCHERS ________________________________________
watch(
  () => props.show,
  async (newVal) => {
    dialog.value = newVal;
  }
);
</script>
