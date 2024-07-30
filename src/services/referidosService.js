import apiConstructor from "./apiConstructor";

export default {
  altaRegistroReferido: (request) =>
    apiConstructor.postCall("socio/AltaRegistroReferido", "", {request: request}),
};
