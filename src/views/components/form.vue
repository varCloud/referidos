<template>
  <v-form v-if="formCompleto" ref="form" v-model="valid" @submit.prevent="submitFormGeneric(false)">
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
        <v-text-field :loading="loading" v-model="apellidoMaterno" rounded="lg" class="customHolder"
          :placeholder="textApellidoMaterno" variant="outlined" @blur="touchField('apellidoMaterno')"></v-text-field>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textDiaNacimiento }}</span>
        <v-select :items="dias" :loading="loading" v-model="diaNacimiento" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textDiaNacimiento" variant="outlined" required
          @blur="touchField('diaNacimiento')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pl-sm-5">
        <span class="textLabel">{{ textMesNacimiento }}</span>
        <v-select :items="meses" item-title="texto" item-value="valor" :loading="loading" v-model="mesNacimiento"
          :rules="[rules.required]" rounded="lg" class="customHolder" :placeholder="textMesNacimiento"
          variant="outlined" required @blur="touchField('mesNacimiento')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textAnioNacimiento }}</span>
        <v-select :items="anios" :loading="loading" v-model="anioNacimiento" :rules="[rules.required]" rounded="lg"
          class="customHolder" :placeholder="textAnioNacimiento" variant="outlined" required
          @blur="touchField('anioNacimiento')"></v-select>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pl-sm-5">
        <span class="textLabel">{{ textSexo }}</span>
        <v-select :items="sexos" item-title="texto" item-value="valor" :loading="loading" v-model="sexo"
          :rules="[rules.required]" rounded="lg" class="customHolder" :placeholder="textSexo" variant="outlined"
          required @blur="touchField('sexo')" />
      </v-col>
      <v-col cols="10" sm="5" class="pt-0 pr-sm-5">
        <span class="textLabel">{{ textEstado }}</span>
        <v-select :items="estados" item-title="nombre_entidad" item-value="clave_entidad" :loading="loadingEstados"
          v-model="estado" :rules="[rules.required]" rounded="lg" class="customHolder" :placeholder="textEstado"
          variant="outlined" required @blur="touchField('estado')"></v-select>
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
  <v-form v-else ref="form" v-model="valid" @submit.prevent="submitFormGeneric(true)">
    <v-row class="d-flex justify-center mt-0 mt-sm-10" no-gutters>
      <v-col cols="10">
        <span class="textLabel">{{ textCurp }}</span>
        <v-text-field :loading="loading" v-model="curp" :rules="[rules.required, rules.curp]" maxlength="18"
          rounded="lg" class="customHolder" :placeholder="textCurp" variant="outlined" required
          @blur="touchField('curp')" @input="curp = curp.toUpperCase()"
          style="text-transform: uppercase"></v-text-field>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col cols="10" class="text-right">
          <v-row no-gutters justify="start">
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
const loadingEstados = ref(false)

const textCurp = ref("CURP")
const textNombre = ref("Nombre(s)*");
const textTelCel = ref("Teléfono celular*");
const textEmail = ref("Email*");
const textCR = ref("Código referido*");
const textApellidoPaterno = ref("Apellido Paterno*")
const textApellidoMaterno = ref("Apellido Materno")
const textDiaNacimiento = ref("Día de Nacimiento*")
const textMesNacimiento = ref("Mes de Nacimiento*")
const textAnioNacimiento = ref("Año de Nacimiento*")
const textSexo = ref("Sexo*")
const textEstado = ref("Estado*")

const valid = ref(true);
const validCurp = ref(true);
const form = ref(null);
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

const dias = ref(
  [...Array(31).keys()].map(i => (i + 1).toString().padStart(2, '0'))
);
const meses = ref(
  [
    { texto: "Enero", valor: "01" },
    { texto: "Febrero", valor: "02" },
    { texto: "Marzo", valor: "03" },
    { texto: "Abril", valor: "04" },
    { texto: "Mayo", valor: "05" },
    { texto: "Junio", valor: "06" },
    { texto: "Julio", valor: "07" },
    { texto: "Agosto", valor: "08" },
    { texto: "Septiembre", valor: "09" },
    { texto: "Octubre", valor: "10" },
    { texto: "Noviembre", valor: "11" },
    { texto: "Diciembre", valor: "12" }
  ]
);
const anios = ref([...Array(100).keys()].map(i => new Date().getFullYear() - i));
const sexos = ref([
  { texto: "Masculino", valor: "H" },
  { texto: "Femenino", valor: "M" }])
const estados = ref([]);

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

const obtenerEstados = () => {
  loadingEstados.value = true;
  referidosService.getEntidadesRenapo().then(response => {
    loadingEstados.value = false;
    if (response.status == 200 && response.data.Codigo == 200) {
      estados.value = response.data.Entidad.response.clave_entidad
    }
    else {
      snackBarDanger.value = true
      errorMensaje.value = response.data.Mensaje
    }
  }).catch(error => {
    snackBarDanger.value = true
    loadingEstados.value = false;
  });
}

const setTouchedFields = (fields) => {
  fields.forEach(field => {
    field.value = true;
  });
};

const handleResponse = (response) => {
  console.log(response, response.data.AltaRegistroReferidoResult.Codigo)
  loading.value = false;
  if (response.status == 200 && response.data.AltaRegistroReferidoResult.Codigo == 200) {
    initForm();
    snackBarSuccess.value = true;
  } else {
    snackBarDanger.value = true;
    errorMensaje.value = response.data.AltaRegistroReferidoResult.Mensaje;
  }
};

const submitFormGeneric = (isCurpForm = false) => {
  loading.value = true;
  if (isCurpForm) {
    setTouchedFields([curpTouched, telCelTouched, emailTouched, crTouched]);
  } else {
    setTouchedFields([
      nombreTouched,
      telCelTouched,
      emailTouched,
      crTouched,
      apellidoPaternoTouched,
      apellidoMaternoTouched,
      diaNacimientoTouched,
      mesNacimientoTouched,
      anioNacimientoTouched,
      sexoTouched,
      estadoTouched
    ]);
  }
  if (valid) {
    const formData = isCurpForm
      ? {
        CodigoReferido: cr.value,
        Mail: email.value,
        Telefono: telCel.value,
        Curp: curp.value,
      }
      : {
        AnioNacimiento: anioNacimiento.value,
        ApellidoMaterno: apellidoMaterno.value,
        ApellidoPaterno: apellidoPaterno.value,
        CodigoReferido: cr.value,
        EstadoNacimiento: estado.value,
        DiaNacimiento: diaNacimiento.value,
        Mail: email.value,
        MesNacimiento: mesNacimiento.value,
        Nombre: nombre.value,
        Sexo: sexo.value,
        Telefono: telCel.value,
      };
    referidosService.altaRegistroReferido(formData)
      .then(handleResponse)
      .catch(error => {
        console.log(error);

        loading.value = false;
        snackBarDanger.value = true;
      });
  }
};

const resetFields = (fields, value = '') => {
  fields.forEach(field => {
    field.value = value;
  });
};

const resetTouched = (touchedFields, value = false) => {
  touchedFields.forEach(field => {
    field.value = value;
  });
};

const initForm = () => {
  form.value.reset();
  resetFields([
    nombre, telCel, curp, email,
    apellidoPaterno, apellidoMaterno,
    diaNacimiento, mesNacimiento, anioNacimiento,
    sexo, estado, cr
  ]);
  resetTouched([
    nombreTouched, telCelTouched, curpTouched, emailTouched, crTouched,
    apellidoPaternoTouched, apellidoMaternoTouched,
    diaNacimientoTouched, mesNacimientoTouched, anioNacimientoTouched,
    sexoTouched, estadoTouched
  ]);
  cr.value = route.query.codigoReferido || '';
};

const handleClick = () => {
  formCompleto.value = !formCompleto.value
  if (formCompleto.value == true && estados.value.length == 0) {
    obtenerEstados()
  }
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
