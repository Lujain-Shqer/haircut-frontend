import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import jQuery from "jquery";
// global.jQuery = jQuery;

import "bootstrap/dist/css/bootstrap.css";
import "popper.js";

import "normalize.css";

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
import "bootstrap/dist/js/bootstrap.js";
