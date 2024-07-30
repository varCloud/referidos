/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from "vuetify/lib/util/colors";

// Composables
import { createVuetify } from "vuetify";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#FFFFFF",
    "primary-darken-1": colors.blueGrey.darken1,
    secondary: colors.blueGrey.lighten5,
    "secondary-lighten-1": "#f4f4f4",
    accent: colors.blueGrey.lighten1,
    error: "#FF5252",
    info: colors.teal.darken4,
    success: "#4CAF50",
    warning: "#FFC107",
  },
};
const darkTheme = {
  dark: true,
  colors: {
    primary: colors.blueGrey.darken4,
    "primary-darken-1": colors.blueGrey.darken3,
    secondary: colors.blueGrey.darken3,
    "secondary-lighten-1": "#161616",
    accent: colors.teal.lighten1,
    error: "#FF5252",
    info: colors.teal.lighten1,
    success: "#4CAF50",
    warning: "#FFC107",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
      darkTheme,
    },
  },
});
