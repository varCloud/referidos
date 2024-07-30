import { defineStore } from "pinia";
import {
  obtieneUsuario,
  agregaCredenciales,
  eliminaCredenciales,
  obtieneTokenObject,
} from "../services/sessionStorage.js";
export const useUserStore = defineStore("user", {
  state: () => ({
    Usuario: obtieneUsuario() || {},
    Token: obtieneTokenObject() || {},
    Permisos: [],
  }),
  actions: {
    Autenticar(payload) {
      this.Usuario = payload.Usuario;
      this.Token = payload.SolicitudToken;
      agregaCredenciales(payload.SolicitudToken, payload.Usuario);
    },
    CerrarSesion() {
      this.Usuario = {};
      this.Token = {};
      eliminaCredenciales();
    },
    ActualizarPermisos(Permisos) {
      this.Permisos = Permisos;
    },
  },
  getters: {
    EstaAutenticado: (state) => !!state.Token.Token,
    ObtenerUsuario: (state) => state.Usuario,
    ObtenerPermisos: (state) => state.Permisos,
  },
});
