import { cmvServices, cmvServicesOnboarding } from "./clientApi";

export default {
  postCall: (url, params, payload) =>
    cmvServices.post(`${url}${params}`, payload, {
      headers: {
        ...HeaderAPIManager()
      },
    }),

  getCall: (url, params) =>
    cmvServices.get(`${url}&${params}`, {
      headers: {
        ...HeaderAPIManager()
      },
    }),
  postCallOnboarding: (url, params, payload) =>
    cmvServicesOnboarding.post(`${url}${params}`, payload, {
      headers: {
        ...HeaderAPIManagerOnboarding()
      },
    }),
}

const HeaderAPIManager = () => {
  return {
    'Usuario': 'CMVF1nZ4S',
    'Contrasena': '8DED40B6E19F14D1651FDDF063CDD2',
    'X-IBM-Client-Id': `${import.meta.env.VITE_IBM_CLIENT_ID}`,
    'rejectUnauthorized': 'false',
    'TokenAutenticacion': import.meta.env.VITE_TOKEN_AUTENTICACION
  }
};

const HeaderAPIManagerOnboarding = () => {
  return {
    'X-IBM-Client-Id': `${import.meta.env.VITE_IBM_CLIENT_ID_ONBOARDING}`,
  }
};
