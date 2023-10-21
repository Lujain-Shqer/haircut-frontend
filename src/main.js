import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { registerLicense } from "@syncfusion/ej2-base";

library.add(fas);

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import jQuery from "jquery";
// global.jQuery = jQuery;

import "bootstrap/dist/css/bootstrap.css";
import "popper.js";

import "normalize.css";
import "bootstrap/dist/js/bootstrap.js";
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");

registerLicense("OR");
