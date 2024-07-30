import { reactive } from "vue";

// by convention, composable function names start with "use"
export function useAlert() {
  const alert = reactive({
    mensaje: "",
    tiempo: 0,
    ver: false,
  });

  function showAlert(payload, isError = false) {
    !isError || console.log(payload);
    alert.mensaje = isError ? "Ocurrio un error, intentalo más tarde" : payload;
    alert.ver = true;
  }

  return { alert, showAlert };
}
