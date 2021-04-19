<template>
  <div>
    <Header v-show="!this.$route.meta.hideNavigation" />
    <!-- 
      <transition> html tag is a generated tag html from VueJs that help us developers to
      apply some css transition animation while some sort of data behaves or, for our example,
      when the router changes, generating different pages per endpoints. 

      Remember that 'transition' html tag, adds and removes css classes accordingly with the 
      behavior we want. And the automacally created classes are defined by 'name' property
      For example: name="load-pages" will create:
        - load-pages
        - load-pages-enter
        - load-pages-enter-active
        - load-pages-leave-active
     -->
    <transition name="load-pages">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// Components
import Header from "@/components/shared/Header.vue";
export default {
  // beforeRouteEnter(to, from, next) {
  //   // --> Before the component being executed
  //   console.log("1) beforeRouteEnter being called");
  //   if (!this.$store.getters.getToken && this.$route.meta.authenticated) {
  //     console.log("2) User is not logged in. Pushing to Login PAge");
  //     next({ name: "Login" });
  //   } else {
  //     console.log(`2) User is logged in. Keep going to route: ${to.name}`);
  //     next();
  //   }
  // },
  watch: {
    $route(to, from) {
      // Old approach
      // if (!to.meta.hideNavigation && localStorage.getItem("jwt") == null) {
        // }

      // New approach using vuex
      if(!this.$store.getters.getToken && this.$route.meta.authenticated){
        this.$router.push({ name: "Login" });
      }
    },
  },
  components: {
    Header,
  },
};
</script>

<style>
:root {
  --var-default-color: #034078;
  font-size: 60%;
}

body {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #fefcfb;

  font-family: "Poppins", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}

/* Transition Behavior provided by <transition> html Vue tag helper */
.load-pages-enter,
.load-pages-leave-active {
  opacity: 0;
}

.load-pages-enter-active,
.load-pages-leave-active {
  transition: opacity 0.4s;
}
</style>
