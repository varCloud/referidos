<template>
  <v-dialog v-model="open" width="500" persistent>
    <v-card>
      <v-card-title class="headline lighten-2"> Acerca de </v-card-title>
      <v-card-text>
        <v-btn icon flat x-small @click="EE">
          <v-icon>mdi-semantic-web</v-icon>
        </v-btn>
        TDC VDE v1.0.0
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" text @click="cerrar"> Aceptar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
// IMPORTS __________________________________________________________
import { ref, watch } from "vue";
import { useTheme } from "vuetify";

// DATA _____________________________________________________________
const theme = useTheme();
const contador = ref(0);
const open = ref(false);
const props = defineProps(["show"]);
const emit = defineEmits(["cerrar"]);

// WATHCERS _________________________________________________________
watch(
  () => props.show,
  async (newVal) => {
    open.value = newVal;
  }
);

// METHODS __________________________________________________________
const cerrar = () => {
  emit("cerrar");
};
const EE = () => {
  if (contador.value == 5) {
    theme.global.name.value = theme.global.current.value.dark
      ? "lightTheme"
      : "darkTheme";
    contador.value = 0;
  } else contador.value++;
};
</script>
