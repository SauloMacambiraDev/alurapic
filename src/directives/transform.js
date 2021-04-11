import Vue from "vue";
import { directive } from "vue/types/umd";

/*
    Once a declare a new Directive, everytime i call into a component
    i have to provide the prefix 'v-' befor the name of the directive.
    In this example, the name of directive is 'my-transform'. When i try 
    to modify the DOM into a component, like <button>, the result would be
    like this:
    <button v-my-transform="someData"></button>
*/
Vue.directive("my-transform", {
  // bind() is called everytime the directive is attached to a DOM element
  bind(el, binding, vnode) {
    // el --> reference to the dom element where the directive was attached/associated
    // binding -->
    let current = 0;

    el.addEventListener("dbclick", function() {
      current += 90;
    });

    console.log('Associated directive: "my-transform"');
    console.log("el parameter:");
    console.log(el);

    // console.log("binding parameter:");
    // console.log(this.binding);

    // console.log("vnode parameter:");
    // console.log(this.vnode);
  },
});
