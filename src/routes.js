// COMPONENTS
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
// import CreateDog from "@/components/CreateDog.vue";
// import Contact from "@/components/Contact.vue";
// import NotFound from "@/components/NotFound.vue";

/**
 * using LAZY LOADING - Code Splitting
 *  - Using Lazy Loading, allow the bundled js file generated by VueJs to split code into multiple files.
 *  The idea here, is to avoid make our bundle.js gets more than 300KBs, making the further requests to the serve
 *  side even slower. Using the native import('somePathToAComponent') function from VueJs, we can separate
 *  non-usually accessed components in order to display the most importante Vue Components faster!
 */
const CreateDog = () => import("./components/CreateDog.vue");
const Contact = () => import("./components/Contact.vue");
const NotFound = () => import("./components/NotFound.vue");

export const routes = [
  {
    name: "home",
    title: "Home",
    // path: '' --> same thing as localhost:8080/#/
    path: "",
    component: Home,
    meta: { authenticated: true },
    menuHeader: true,
  },
  {
    name: "cadastrarDogo",
    title: "Sign Up Dogo",
    // path: '/cadastrar-dog' --> same thing as localhost:8080/#/cadastrar-dog
    path: "/cadastrar-dog",
    component: CreateDog,
    meta: { authenticated: true },
    menuHeader: true,
  },
  {
    name: "updateDogo",
    title: "Update Dogo",
    path: "/cadastrar-dog/:id",
    meta: { authenticated: true },
    component: CreateDog,
  },
  {
    name: "contactAluraPic",
    title: "Contact",
    path: "/contact",
    component: Contact,
    meta: { authenticated: true },
    menuHeader: true,
  },
  {
    name: "Login",
    title: "Login Page",
    path: "/login",
    meta: { hideNavigation: true, authenticated: false },
    component: Login,
  },
  {
    name: "notFound",
    title: "Not Found",
    path: "*",
    component: NotFound,
    authenticated: false,
  },
];
