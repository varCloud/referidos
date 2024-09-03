import axios from "axios";
var cmvServices = axios.create({
  baseURL: import.meta.env.VITE_MAIN_SERVICE,
  headers: {
    "Content-Type": "application/json",
  },
});

var cmvServicesOnboarding = axios.create({
  baseURL: import.meta.env.VITE_MAIN_SERVICE_ONBOARDING,
  headers: {
    "Content-Type": "application/json",
  },
});

export { cmvServices, cmvServicesOnboarding };
