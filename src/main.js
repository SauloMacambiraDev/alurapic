// Global Vue Module
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import { routes } from "./routes";
import "./directives/transform";

Vue.config.productionTip = false;

// Register VueRouter Vue plugin
Vue.use(VueRouter);

// Configure the mapping of routes for the application
const router = new VueRouter({
  routes,
  /*
    'mode' property will mix the history of your browser api navigation with the 
     Vue configuration router behavior (like putting '#' in the url)
  */
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router, // router: [ {path: '..', component: 'Home'}, etc]
}).$mount("#app");
