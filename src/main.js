import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { registerLicense } from "@syncfusion/ej2-base";
import { provide } from "vue";
// import { setLicenseKey } from "@syncfusion/ej2-base";
// setLicenseKey("your-license-key");
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
const hostName = "http://127.0.0.1:8001";
provide("hostName", hostName);
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");

registerLicense("OR");
