import Vue from "vue";
// import { directive } from "vue/types/umd";

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
    /*
      el --> reference to the dom element where the directive was attached/associated
      binding --> receives data provided when attached as html attribute. For Example v-my-transform="15"
        then, to catch the value, all we would have to do is this: binding.value;
      vnode -->
    */
    console.log('binding:')
    console.log(binding)
    let current = 0;

    el.addEventListener("click", function() {
      let increment = binding.value || 90;
      let reverse =  binding.modifiers.reverse || false 

      current += increment
      el.style.transform = `rotate(${reverse ? '-' : null}${current}deg)`;
      if(binding.modifiers.animate) el.style.transition = 'transform 0.25s'
    });
  },
});
