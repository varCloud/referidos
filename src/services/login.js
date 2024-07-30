import apiConstructor from "./apiConstructor";

export default {
  IniciarSesion: (request) =>
    apiConstructor.postCall("login/auth", "", request),
};
