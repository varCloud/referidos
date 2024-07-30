const TOKEN = "TOKEN";
const USER = "USUARIO";

const obtieneToken = () =>
  JSON.parse(sessionStorage.getItem(TOKEN)) != null
    ? `Bearer ${JSON.parse(sessionStorage.getItem(TOKEN)).Token}`
    : `Bearer ${JSON.parse(sessionStorage.getItem(TOKEN))}`;

const obtieneUsuario = () => JSON.parse(sessionStorage.getItem(USER));

const obtieneTokenObject = () => JSON.parse(sessionStorage.getItem(TOKEN));

const agregaToken = (token) =>
  sessionStorage.setItem(TOKEN, JSON.stringify(token));
const agregaUsuario = (user) =>
  sessionStorage.setItem(USER, JSON.stringify(user));

const eliminaToken = () => sessionStorage.removeItem(TOKEN);

const eliminaUsuario = () => sessionStorage.removeItem(USER);

const agregaCredenciales = (token, user) => {
  agregaToken(token);
  agregaUsuario(user);
};

const eliminaCredenciales = () => {
  eliminaToken();
  eliminaUsuario();
};

export {
  obtieneToken,
  agregaToken,
  eliminaToken,
  agregaCredenciales,
  eliminaCredenciales,
  obtieneUsuario,
  agregaUsuario,
  eliminaUsuario,
  obtieneTokenObject,
};
