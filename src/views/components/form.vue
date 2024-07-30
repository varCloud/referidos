<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
    <v-row justify="center" no-gutters class="mt-0 mt-sm-10">
      <v-col cols="10">
        <span class="textLabel">{{ textNombre }}</span>
        <v-text-field v-model="nombre" :rules="[rules.required]" rounded="lg" class="customHolder"
          :placeholder="textNombre" variant="outlined" required @blur="touchField('nombre')"
          :error-messages="nombreTouched ? nombreErrors : []"></v-text-field>
      </v-col>
      <v-col cols="10">
        <span class="textLabel">{{ textTelCel }}</span>
        <v-text-field v-model="telCel" :rules="[rules.required, rules.phone]" rounded="lg" class="customHolder"
          :placeholder="textTelCel" variant="outlined" required @blur="touchField('telCel')"
          :error-messages="telCelTouched ? telCelErrors : []"></v-text-field>
      </v-col>
      <v-col cols="10">
        <span class="textLabel">{{ textCurp }}</span>
        <v-text-field v-model="curp" :rules="[rules.required, rules.curp]" rounded="lg" class="customHolder"
          :placeholder="textCurp" variant="outlined" required @blur="touchField('curp')"
          :error-messages="curpTouched ? curpErrors : []"></v-text-field>
      </v-col>
      <v-col cols="10">
        <span class="textLabel">{{ textEmail }}</span>
        <v-text-field v-model="email" :rules="[rules.required, rules.email]" rounded="lg" type="email"
          class="customHolder" :placeholder="textEmail" variant="outlined" required @blur="touchField('email')"
          :error-messages="emailTouched ? emailErrors : []"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-0">
      <v-col cols="10" sm="5" class="pt-0">
        <span class="textLabel">{{ textCP }}</span>
        <v-text-field v-model="cp" :rules="[rules.required, rules.numeric]" rounded="lg" class="customHolder"
          :placeholder="textCP" variant="outlined" required @blur="touchField('cp')"
          :error-messages="cpTouched ? cpErrors : []"></v-text-field>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <span class="textLabel">{{ textCR }}</span>
        <v-text-field v-model="cr" :rules="[rules.required]" rounded="lg" class="customHolder" :placeholder="textCR"
          variant="outlined" required @blur="touchField('cr')"
          :error-messages="crTouched ? crErrors : []"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none" justify="center">
      <v-col cols="8">
        <v-btn rounded="pill" class="text-center text-btn" :disabled="!valid" color="black" type="submit" block>¡Quiero
          ser socio!</v-btn>
      </v-col>
    </v-row>
    <v-row class="d-none d-sm-flex" justify="end">
      <v-col cols="6" class="margin-btn pr-10">
        <v-btn rounded="pill" class="text-center text-btn" :disabled="!valid" color="black" type="submit" block>¡Quiero
          ser socio!</v-btn>
      </v-col>
    </v-row>
  </v-form>
  <v-snackbar :timeout="2000" color="success" v-model="snackBarSuccess" rounded="pill">
    Registro Creado Con Éxito!!!
  </v-snackbar>
  <v-snackbar :timeout="2000" color="error" v-model="snackBarDanger" rounded="pill">
    Ocurrió un error
  </v-snackbar>
</template>

<script setup>
import { ref, computed } from "vue";
import referidosService from "@/services/referidosService"

const textNombre = ref("Nombre(s)*");
const textTelCel = ref("Teléfono celular*");
const textCurp = ref("CURP*");
const textEmail = ref("Email*");
const textCP = ref("Código postal*");
const textCR = ref("Código referido*");

const valid = ref(true);
const form = ref(null);

const nombre = ref("");
const telCel = ref("");
const curp = ref("");
const email = ref("");
const cp = ref("");
const cr = ref("");

const nombreTouched = ref(false);
const telCelTouched = ref(false);
const curpTouched = ref(false);
const emailTouched = ref(false);
const cpTouched = ref(false);
const crTouched = ref(false);

const touchField = (field) => {
  switch (field) {
    case 'nombre':
      nombreTouched.value = true;
      break;
    case 'telCel':
      telCelTouched.value = true;
      break;
    case 'curp':
      curpTouched.value = true;
      break;
    case 'email':
      emailTouched.value = true;
      break;
    case 'cp':
      cpTouched.value = true;
      break;
    case 'cr':
      crTouched.value = true;
      break;
  }
};

const rules = {
  required: value => !!value || 'Este campo es obligatorio',
  email: value => /.+@.+\..+/.test(value) || 'Introduce un email válido',
  phone: value => /^\d{10}$/.test(value) || 'Introduce un número de teléfono válido',
  curp: value => /^([A-Z]{1}[AEIOU]{1}[A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[MH]{1}[A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z\d]{1}\d{1})$/.test(value) || 'Introduce un CURP válido',
  numeric: value => /^\d+$/.test(value) || 'Debe ser un valor numérico'
};


const snackBarSuccess = ref(false);
const snackBarDanger = ref(false);

const nombreErrors = computed(() => {
  const errorMessages = [];
  rules.required(nombre.value) !== true && errorMessages.push(rules.required(nombre.value));
  return errorMessages;
});

const telCelErrors = computed(() => {
  const errorMessages = [];
  rules.required(telCel.value) !== true && errorMessages.push(rules.required(telCel.value));
  rules.phone(telCel.value) !== true && errorMessages.push(rules.phone(telCel.value));
  return errorMessages;
});

const curpErrors = computed(() => {
  const errorMessages = [];
  rules.required(curp.value) !== true && errorMessages.push(rules.required(curp.value));
  rules.curp(curp.value) !== true && errorMessages.push(rules.curp(curp.value));
  return errorMessages;
});

const emailErrors = computed(() => {
  const errorMessages = [];
  rules.required(email.value) !== true && errorMessages.push(rules.required(email.value));
  rules.email(email.value) !== true && errorMessages.push(rules.email(email.value));
  return errorMessages;
});

const cpErrors = computed(() => {
  const errorMessages = [];
  rules.required(cp.value) !== true && errorMessages.push(rules.required(cp.value));
  rules.numeric(cp.value) !== true && errorMessages.push(rules.numeric(cp.value));
  return errorMessages;
});

const crErrors = computed(() => {
  const errorMessages = [];
  rules.required(cr.value) !== true && errorMessages.push(rules.required(cr.value));
  return errorMessages;
});

const submitForm = async () => {
  nombreTouched.value = true;
  telCelTouched.value = true;
  curpTouched.value = true;
  emailTouched.value = true;
  cpTouched.value = true;
  crTouched.value = true;
  if (valid) {
    const formData = {
      Nombre: nombre.value,
      Telefono: telCel.value,
      Curp: curp.value,
      Mail: email.value,
      CodigoPostal: cp.value,
      CodigoReferido: cr.value
    };
    referidosService.altaRegistroReferido(formData).then(response => {
      if (response.status == 200 && response.data.AltaRegistroReferidoResult.Codigo == 200) {
        snackBarSuccess.value = true
      }
      else {
        snackBarDanger.value = true
      }
    }).catch(error => {
      snackBarDanger.value = true
    });
  }
};
</script>

<style lang="scss" scoped>
.textLabel {
  font-weight: 600;
  font-family: Montserrat;
  font-size: 16px;
}

.customHolder {
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
}

.text-btn {
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  height: 60px;
  text-transform: unset;
}

.margin-btn {
  margin-right: 70px;
  margin-bottom: 15px;
}
</style>
