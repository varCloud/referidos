<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
    <v-row justify="center" no-gutters class="mt-0 mt-sm-10">
      <v-col cols="10">
        <span class="textLabel">{{ textNombre }}</span>
        <v-text-field :loading="loading" v-model="nombre" :rules="[rules.required]" rounded="lg" class="customHolder"
          :placeholder="textNombre" variant="outlined" required @blur="touchField('nombre')"></v-text-field>
      </v-col>
      <v-col cols="10">
        <span class="textLabel">{{ textTelCel }}</span>
        <v-text-field :loading="loading" v-model="telCel" :rules="[rules.required, rules.phone]" maxlength="10"
          rounded="lg" class="customHolder" type="tel" :placeholder="textTelCel" variant="outlined" required
          @blur="touchField('telCel')" @input="telCel = telCel.replace(/[^0-9]/g, '')"></v-text-field>
      </v-col>
      <v-col cols="10">
        <span class="textLabel">{{ textCurp }}</span>
        <v-text-field :loading="loading" v-model="curp" :rules="[rules.required, rules.curp]" maxlength="18"
          rounded="lg" class="customHolder" :placeholder="textCurp" variant="outlined" required
          @blur="touchField('curp')" @input="curp = curp.toUpperCase()"
          style="text-transform: uppercase"></v-text-field>
      </v-col>
      <v-col cols="10">
        <span class="textLabel">{{ textEmail }}</span>
        <v-text-field :loading="loading" v-model="email" :rules="[rules.required, rules.email]" maxlength="40"
          rounded="lg" type="email" class="customHolder" :placeholder="textEmail" variant="outlined" required
          @blur="touchField('email')"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-0">
      <v-col cols="10" sm="5" class="pt-0">
        <span class="textLabel">{{ textCP }}</span>
        <v-text-field :loading="loading" v-model="cp" :rules="[rules.required, rules.numeric]" type="number"
          rounded="lg" class="customHolder" :placeholder="textCP" variant="outlined" required @blur="touchField('cp')"
          @input="cp = cp.replace(/[^0-9]/g, '')" />
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <span class="textLabel">{{ textCR }}</span>
        <v-text-field :loading="loading" v-model="cr" :rules="[rules.required]" rounded="lg" class="customHolder"
          :placeholder="textCR" variant="outlined" required @blur="touchField('cr')"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none" justify="center">
      <v-col cols="8">
        <v-btn rounded="pill" :loading="loading" class="text-center text-btn" :disabled="!valid" color="black"
          type="submit" block>¡Quiero
          ser socio!</v-btn>
      </v-col>
    </v-row>
    <v-row class="d-none d-sm-flex" justify="end">
      <v-col cols="6" class="margin-btn pr-10">
        <v-btn rounded="pill" :loading="loading" class="text-center text-btn" :disabled="!valid" color="black"
          type="submit" block>¡Quiero
          ser socio!</v-btn>
      </v-col>
    </v-row>
  </v-form>
  <v-snackbar :timeout="2000" color="success" v-model="snackBarSuccess" rounded="pill">
    Te has registrado de manera exitosa!!!
  </v-snackbar>
  <v-snackbar :timeout="2000" color="error" v-model="snackBarDanger" rounded="pill">
    {{ errorMensaje }}
  </v-snackbar>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import referidosService from "@/services/referidosService"
import { useRoute } from 'vue-router';

const loading = ref(false);

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
  required: value => !!value || 'ESTE CAMPO ES OBLIGATORIO',
  email: value => /.+@.+\..+/.test(value) || 'INTRODUCE UN EMAIL VÁLIDO',
  phone: value => /^\d{10}$/.test(value) || 'INTRODUCE UN NÚMERO DE TELÉFONO VÁLIDO',
  curp: value => /^([A-Z]{1}[AEIOU]{1}[A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[MH]{1}[A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z\d]{1}\d{1})$/.test(value) || 'INTRODUCE UN CURP VÁLIDO',
  numeric: value => /^\d+$/.test(value) || 'DEBE SER UN VALOR NUMÉRICO'
};


const snackBarSuccess = ref(false);
const snackBarDanger = ref(false);
const errorMensaje = ref("Ocurrió un error")

const route = useRoute();

onMounted(() => {
  if (route.query.codigoReferido) {
    cr.value = route.query.codigoReferido
  }
})

const submitForm = async () => {
  loading.value = true;
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
      loading.value = false;
      console.log(response.status == 200, response.data.AltaRegistroReferidoResult.Codigo == 200);

      if (response.status == 200 && response.data.AltaRegistroReferidoResult.Codigo == 200) {
        initForm()
        snackBarSuccess.value = true
      }
      else {
        snackBarDanger.value = true
        errorMensaje.value = response.data.AltaRegistroReferidoResult.Mensaje
      }
    }).catch(error => {
      snackBarDanger.value = true
    });
  }
};

const initForm = () => {
  form.value.reset()
  nombre.value = ''
  telCel.value = ''
  curp.value = ''
  email.value = ''
  if (route.query.codigoReferido) {
    cr.value = route.query.codigoReferido
  }
  else {
    cr.value = ''
  }
  cp.value = ''
  loading.value = false;
  nombreTouched.value = false;
  telCelTouched.value = false;
  curpTouched.value = false;
  emailTouched.value = false;
  cpTouched.value = false;
  crTouched.value = false;
}
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
