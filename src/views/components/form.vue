<template>
  <v-form v-if="formCompleto" ref="form" v-model="valid" @submit.prevent="submitForm">
    <v-row justify="center" no-gutters class="mt-0 mt-sm-10">
      <v-col cols="10">
        <span class="textLabel">{{ textNombre }}</span>
        <v-text-field :loading="loading" v-model="nombre" :rules="[rules.required]" rounded="lg" class="customHolder"
          :placeholder="textNombre" variant="outlined" required @blur="touchField('nombre')"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center pt-0" no-gutters>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textApellidoPaterno }}</span>
        <v-text-field :loading="loading" v-model="apellidoPaterno" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textApellidoPaterno" variant="outlined" required
          @blur="touchField('apellidoPaterno')"></v-text-field>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pl-sm-5">
        <span class="textLabel">{{ textApellidoMaterno }}</span>
        <v-text-field :loading="loading" v-model="apellidoMaterno" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textApellidoMaterno" variant="outlined" required
          @blur="touchField('apellidoMaterno')"></v-text-field>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textDiaNacimiento }}</span>
        <v-select :items="dias" :loading="loading" v-model="diaNacimiento" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textDiaNacimiento" variant="outlined" required
          @blur="touchField('diaNacimiento')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pl-sm-5">
        <span class="textLabel">{{ textMesNacimiento }}</span>
        <v-select :items="meses" :loading="loading" v-model="mesNacimiento" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textMesNacimiento" variant="outlined" required
          @blur="touchField('mesNacimiento')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textAnioNacimiento }}</span>
        <v-select :items="anios" :loading="loading" v-model="anioNacimiento" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textAnioNacimiento" variant="outlined" required
          @blur="touchField('anioNacimiento')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pl-sm-5">
        <span class="textLabel">{{ textSexo }}</span>
        <v-select :items="sexos" :loading="loading" v-model="sexo" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textSexo" variant="outlined" required
          @blur="touchField('sexo')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textEstado }}</span>
        <v-select :items="estados" :loading="loading" v-model="estado" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textEstado" variant="outlined" required
          @blur="touchField('estado')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pl-sm-5">
        <span class="textLabel">{{ textTelCel }}</span>
        <v-text-field :loading="loading" v-model="telCel" :rules="[rules.required, rules.phone]" maxlength="10"
          rounded="lg" class="customHolder" type="tel" :placeholder="textTelCel" variant="outlined" required
          @blur="touchField('telCel')" @input="telCel = telCel.replace(/[^0-9]/g, '')"></v-text-field>
      </v-col>
      <v-col cols="10" class="pt-0">
        <span class="textLabel">{{ textEmail }}</span>
        <v-text-field :loading="loading" v-model="email" :rules="[rules.required, rules.email]" maxlength="40"
          rounded="lg" type="email" class="customHolder" :placeholder="textEmail" variant="outlined" required
          @blur="touchField('email')"></v-text-field>
      </v-col>
      <v-col cols="10" class="pt-0">
        <span class="textLabel">{{ textCR }}</span>
        <v-text-field :loading="loading" v-model="cr" :rules="[rules.required]" rounded="lg" class="customHolder"
          :placeholder="textCR" variant="outlined" required @blur="touchField('cr')"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none" no-gutters justify="center">
      <v-col cols="10">
        <div class="icon-text-container" @click="handleClick">
          <img src="../../assets/images/iconInfoGreen.svg" alt="Icono" class="icon" />
          <span class="text">Registrarme con mi CURP</span>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-none d-sm-flex" no-gutters justify="center">
      <v-col cols="10" class="text-right">
        <v-row class="d-none d-sm-flex" no-gutters justify="end">
          <div class="icon-text-container" @click="handleClick">
            <img src="../../assets/images/iconInfoGreen.svg" alt="Icono" class="icon" />
            <span class="text">Registrarme con mi CURP</span>
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none" justify="center">
      <v-col cols="8">
        <v-btn rounded="pill" :loading="loading" class="text-center text-btn" :disabled="!valid" color="black"
          type="submit" block>¡Quiero
          ser socio!</v-btn>
      </v-col>
    </v-row>
    <v-row class="d-none d-sm-flex" justify="center">
      <v-col cols="10" class="text-right">
        <v-row class="d-none d-sm-flex" justify="end">
          <v-col cols="7">
            <v-btn rounded="pill" :loading="loading" class="text-center text-btn" :disabled="!valid" color="black"
              type="submit" block>¡Quiero
              ser socio!</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
  <v-form v-else ref="formCurp" v-model="validCurp" @submit.prevent="submitFormCurp">
    <v-row class="d-flex justify-center mt-0 mt-sm-10" no-gutters>
      <v-col cols="10">
        <span class="textLabel">{{ textCurp }}</span>
        <v-text-field :loading="loading" v-model="curp" :rules="[rules.required, rules.curp]" maxlength="18"
          rounded="lg" class="customHolder" :placeholder="textCurp" variant="outlined" required
          @blur="touchField('curp')" @input="curp = curp.toUpperCase()"
          style="text-transform: uppercase"></v-text-field>
      </v-col>
      <v-row class="d-none d-sm-flex" no-gutters justify="center">
        <v-col cols="10" class="text-right">
          <v-row class="d-none d-sm-flex" no-gutters justify="start">
            <div class="icon-text-container" @click="handleClick">
              <img src="../../assets/images/iconInfoGreen.svg" alt="Icono" class="icon" />
              <span class="text">No recuerdo mi CURP</span>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <v-col cols="10" class="pt-2">
        <span class="textLabel">{{ textEmail }}</span>
        <v-text-field :loading="loading" v-model="email" :rules="[rules.required, rules.email]" maxlength="40"
          rounded="lg" type="email" class="customHolder" :placeholder="textEmail" variant="outlined" required
          @blur="touchField('email')"></v-text-field>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textTelCel }}</span>
        <v-text-field :loading="loading" v-model="telCel" :rules="[rules.required, rules.phone]" maxlength="10"
          rounded="lg" class="customHolder" type="tel" :placeholder="textTelCel" variant="outlined" required
          @blur="touchField('telCel')" @input="telCel = telCel.replace(/[^0-9]/g, '')"></v-text-field>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pl-sm-5">
        <span class="textLabel">{{ textCR }}</span>
        <v-text-field :loading="loading" v-model="cr" :rules="[rules.required]" rounded="lg" class="customHolder"
          :placeholder="textCR" variant="outlined" required @blur="touchField('cr')"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none" no-gutters justify="center">
      <v-col cols="10">
        <div class="icon-text-container" @click="handleClick">
          <img src="../../assets/images/iconInfoGreen.svg" alt="Icono" class="icon" />
          <span class="text">Registrarme con mi CURP</span>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none" justify="center">
      <v-col cols="8">
        <v-btn rounded="pill" :loading="loading" class="text-center text-btn" :disabled="!validCurp" color="black"
          type="submit" block>¡Quiero
          ser socio!</v-btn>
      </v-col>
    </v-row>
    <v-row class="d-none d-sm-flex" justify="center">
      <v-col cols="10" class="text-right">
        <v-row class="d-none d-sm-flex" justify="end">
          <v-col cols="7">
            <v-btn rounded="pill" :loading="loading" class="text-center text-btn" :disabled="!validCurp" color="black"
              type="submit" block>¡Quiero
              ser socio!</v-btn>
          </v-col>
        </v-row>
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
import { ref, onMounted } from "vue";
import referidosService from "@/services/referidosService"
import { useRoute } from 'vue-router';

const loading = ref(false);

const textCurp = ref("CURP")
const textNombre = ref("Nombre(s)*");
const textTelCel = ref("Teléfono celular*");
const textEmail = ref("Email*");
const textCR = ref("Código referido*");
const textApellidoPaterno = ref("Apellido Paterno*")
const textApellidoMaterno = ref("Apellido Materno*")
const textDiaNacimiento = ref("Día de Nacimiento*")
const textMesNacimiento = ref("Mes de Nacimiento*")
const textAnioNacimiento = ref("Año de Nacimiento*")
const textSexo = ref("Sexo*")
const textEstado = ref("Estado*")

const valid = ref(true);
const validCurp = ref(true);
const form = ref(null);
const formCurp = ref(null);
const formCompleto = ref(false);

const nombre = ref("");
const telCel = ref("");
const curp = ref("");
const email = ref("");
const cr = ref("");
const apellidoPaterno = ref("");
const apellidoMaterno = ref("");
const diaNacimiento = ref();
const mesNacimiento = ref();
const anioNacimiento = ref();
const sexo = ref();
const estado = ref();

const dias = ref([...Array(31).keys()].map(i => i + 1));
const meses = ref(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]);
const anios = ref([...Array(100).keys()].map(i => new Date().getFullYear() - i));
const sexos = ref(["Masculino", "Femenino"])
const estados = ref([
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila",
  "Colima",
  "Durango",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Mexico",
  "Mexico City",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas"
]);

const nombreTouched = ref(false);
const telCelTouched = ref(false);
const curpTouched = ref(false);
const emailTouched = ref(false);
const crTouched = ref(false);
const apellidoPaternoTouched = ref(false);
const apellidoMaternoTouched = ref(false);
const diaNacimientoTouched = ref(false);
const mesNacimientoTouched = ref(false);
const anioNacimientoTouched = ref(false);
const sexoTouched = ref(false);
const estadoTouched = ref(false);

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
    case 'cr':
      crTouched.value = true;
      break;
    case 'apellidoPaterno':
      apellidoPaternoTouched.value = true;
      break;
    case 'apellidoMaterno':
      apellidoMaternoTouched.value = true;
      break;
    case 'diaNacimiento':
      diaNacimientoTouched.value = true;
      break;
    case 'mesNacimiento':
      mesNacimientoTouched.value = true;
      break;
    case 'anioNacimiento':
      anioNacimientoTouched.value = true;
      break;
    case 'sexo':
      sexoTouched.value = true;
      break;
    case 'estado':
      estadoTouched.value = true;
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

const submitForm = () => {
  loading.value = true;
  nombreTouched.value = true;
  telCelTouched.value = true;
  emailTouched.value = true;
  crTouched.value = true;
  apellidoPaternoTouched.value = true;
  apellidoMaternoTouched.value = true;
  diaNacimientoTouched.value = true;
  mesNacimientoTouched.value = true;
  anioNacimientoTouched.value = true;
  sexoTouched.value = true;
  estadoTouched.value = true;
  if (valid) {
    const formData = {
      Nombre: nombre.value,
      Telefono: telCel.value,
      Mail: email.value,
      CodigoReferido: cr.value
    };
    referidosService.altaRegistroReferido(formData).then(response => {
      loading.value = false;
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

const submitFormCurp = () => {
  loading.value = true;
  curpTouched.value = true;
  telCelTouched.value = true;
  emailTouched.value = true;
  crTouched.value = true;
  if (valid) {
    const formData = {
      Telefono: telCel.value,
      Curp: curp.value,
      Mail: email.value,
      CodigoReferido: cr.value
    };
    referidosService.altaRegistroReferido(formData).then(response => {
      loading.value = false;
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
}

const initForm = () => {
  form.value.reset()
  nombre.value = ''
  telCel.value = ''
  curp.value = ''
  email.value = ''
  apellidoPaterno.value = ''
  apellidoMaterno.value = ''
  diaNacimiento.value = ''
  mesNacimiento.value = ''
  anioNacimiento.value = ''
  sexo.value = ''
  estado.value = ''
  if (route.query.codigoReferido) {
    cr.value = route.query.codigoReferido
  }
  else {
    cr.value = ''
  }
  loading.value = false;
  nombreTouched.value = false;
  telCelTouched.value = false;
  curpTouched.value = false;
  emailTouched.value = false;
  crTouched.value = false;
  apellidoPaternoTouched.value = false;
  apellidoMaternoTouched.value = false;
  diaNacimientoTouched.value = false;
  mesNacimientoTouched.value = false;
  anioNacimientoTouched.value = false;
  sexoTouched.value = false;
  estadoTouched.value = false;
}

const handleClick = () => {
  formCompleto.value = !formCompleto.value
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

.icon-text-container {
  display: flex;
  cursor: pointer;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.text {
  font-size: 16px;
  color: #000;
}
</style>
