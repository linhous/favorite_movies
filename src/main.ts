import { createApp } from "vue";
import App from "./App.vue";
import { Quasar, Notify } from "quasar";
import quasarLang from "quasar/lang/pt-BR";
import router from "./router";
// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

const app = createApp(App);
app.use(Quasar, {
  plugins: {
    Notify,
  }, // import Quasar plugins and add here
  lang: quasarLang,
});
app.use(router);
app.mount("#app");
