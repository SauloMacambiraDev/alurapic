// Global Vue Module
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueRouter from "vue-router";
import storeProvider from "./store/provider";

import { routes } from "./routes";
import mainApi from "@/services/mainApi";

// Loading globally our custom directives
import "./directives/transform";
import "./directives/shakeDogCard";

Vue.config.productionTip = false;

// Register VueRouter Vue plugin
Vue.use(VueRouter);
Vue.use(Vuex); // Vuex

const vuexinstance = new Vuex.Store(storeProvider)

// Register a global main api property to Vue
Vue.prototype.$mainApi = mainApi;

// Configure the mapping of routes for the application
const router = new VueRouter({
  routes,
  /*
    'mode' property will mix the history of your browser api navigation with the 
     Vue configuration router behavior (like putting '#' in the url)
  */
  mode: "history",
});

// Configure a middleware in case User is not logged in
router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.authenticated && !storeProvider.getters.getToken) {
    return next({ path: "Login" });
  } else {
    return next();
  }
});

new Vue({
  render: (h) => h(App),
  store: vuexinstance,
  router, // router: [ {path: '..', component: 'Home'}, etc]
}).$mount("#app");
