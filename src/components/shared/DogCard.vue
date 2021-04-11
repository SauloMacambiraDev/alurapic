<template>
  <!-- <img v-for="dogObj in urlDogImgs" :key="dogObj.id" v-bind:src="dogObj.url" v-bind:alt="dogObj.name" /> -->
  <!-- 
      Ways of calling our 'my-transform' directive
      v-my-transform="15"                                   -> binding.value = 15
      v-my-transform="{ increment: 15, animate: true}"      -> binding.value = { increment:15, animate: true }
      v-my-transform.animate="15"                           -> binding.value = 15; binding.modifiers.animate=true
      v-my-transform.animate.reverse="15"                   -> binding.value = 15; binding.modifiers.animate=true; binding.modifiers.reverse=true; 
      v-shake-dogcard:translate.fastAnimation="20"    -> binding.value = 15; binding.modifiers.fastAnimatio = true; binding.arg = "translate"
   -->
  
  <div
    v-shake-dogcard:translate.fastAnimation="2"
    class="dog-card"
    :class="isFadingOut ? 'dog-card-fadding-out' : ''"
  >
    <div class="floated-btns-content">
      <button class="dogo-btn">
        <img src="@/assets/icons/edit-icon.png" alt="Editar Dogo" />
      </button>
      <button class="dogo-btn" @click="deleteDogo()">
        <img src="@/assets/icons/delete-icon.png" alt="Delete Dogo" />
      </button>
    </div>

    <img :src="dogData.url" :alt="dogData.name" />
    <h1>{{ dogData.name }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    dogData: {
      id: "",
      name: "",
      url: "",
    },
    isFadingOut: false,
  }),
  created() {
    if (this.dog) {
      this.dogData = this.dog;
    }
  },
  methods: {
    deleteDogo() {
      this.isFadingOut = true;
      this.$emit("dispatchRemoveDogo", new Date());
    },
  },
  props: {
    dog: Object,
  },
};
</script>

<style>
/* <style scoped> --> scoped keyword indicate that all css implied here would only work for the current component, which
is: DogCard */
.dog-list .dog-card {
  position: relative;
  height: 300px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s;

  animation: showDogCard 1.5s 1;
}

@keyframes showDogCard {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.dog-list .dog-card:hover {
  transform: translateY(-4px);
  box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.7);
}

.dog-list .dog-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  animation: showDogCard 1.5s 1;
}

.dog-list .dog-card h1 {
  position: absolute;
  background-color: var(--var-default-color);
  color: #fff;
  font: 500 2rem Poppins;
  bottom: 25px;
  left: 10%;
  max-width: 75%;
  background-color: rgb(0, 31, 84, 0.8);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  clip-path: polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%);
  padding: 2rem;
  animation: showDogCard 1.8s 1;
}

.dog-card-fadding-out {
  animation: fadeOutCard 1.8s 1 !important;
}
@keyframes fadeOutCard {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
/* Floated Btns */

.dog-card .floated-btns-content {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.dog-card button.dogo-btn {
  border: none;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
}

.dog-card button.dogo-btn img {
  width: 24px;
  height: 24px;
  object-fit: cover;
}
.dog-card button.dogo-btn + button.dogo-btn {
  margin-left: 1rem;
}
</style>
