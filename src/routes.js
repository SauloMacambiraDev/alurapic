import Home from "@/components/Home.vue";
import CreateDog from "@/components/CreateDog.vue";

export const routes = [
  {
    // path: '' --> same thing as localhost:8080/#/
    path: "",
    component: Home,
  },
  {
    // path: '/cadastrar-dog' --> same thing as localhost:8080/#/cadastrar-dog
    path: "/cadastrar-dog",
    component: CreateDog,
  },
];
