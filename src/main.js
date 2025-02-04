import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Vue3Tour from "vue3-tour";
import "vue3-tour/dist/vue3-tour.css";

const app = createApp(App);
app.use(Vue3Tour);
app.mount("#app");
