import apiConstructor from "./apiConstructor";

export default {
  altaRegistroReferido: (request) =>
    apiConstructor.postCall("/socio/AltaRegistroReferido", "", { request: request }),
  getEntidadesRenapo: () =>
    apiConstructor.postCallOnboarding("/onboarding/entidades_renapo", "", {
      usuario: import.meta.env.VITE_USUARIO,
      contrasena: import.meta.env.VITE_CONTRASENA
    })
};
