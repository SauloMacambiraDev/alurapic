<template>
  <div>
    <!-- @click.native will use the js event from the native element inside CreateDogBtn, which is <button> -->
    <CreateDogBtn @click.native="goToRegisterDogPage()" />
    <div class="search-content">
      <img src="@/assets/icons/search-icon.png" alt="search dog" />
      <input
        type="text"
        placeholder="Procure por um cachorro"
        @input="dogFilterValue = $event.target.value"
      />
    </div>

    <div class="dog-list">
      <DogCard
        v-for="dog in dogsWithFilter"
        :key="dog.id"
        :dog="dog"
        @dispatchRemoveDogo="removeDogo(dog, $event)"
      />
    </div>
  </div>
</template>

<script>
import DogCard from "./DogCard.vue";
import CreateDogBtn from "./CreateDogBtn";

export default {
  data() {
    return {
      dogFilterValue: "",
    };
  },
  computed: {
    dogsWithFilter() {
      if (this.dogFilterValue && this.dogFilterValue.length > 0) {
        let regex = new RegExp(this.dogFilterValue);
        return this.dogs.filter((dog) => regex.test(dog.name));
      }

      return this.dogs;
    },
  },
  methods: {
    goToRegisterDogPage() {
      this.$router.push(`/cadastrar-dog`);
    },
    // $event contains data passed from DogCard Component once the provided event 'dispatchRemoveDogo' is triggered
    removeDogo(dogo, $event) {
      dogo.removedAt = typeof $event == "object" ? $event : new Date();
      if (dogo.id) {
        let regex = new RegExp(dogo.id);
        setTimeout(() => {
          this.dogs = this.dogs.filter((dog) => !regex.test(dog.id));
        }, 1600);
      }
    },
  },
  components: {
    DogCard,
    CreateDogBtn,
  },
  props: {
    dogs: Array,
  },
};
</script>

<style>
/* Search Content */
.search-content {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6f6f6;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  padding: 2rem;
  width: 450px;
  max-width: 35%;
  margin: 0 auto 2rem auto;

  transition: all 0.4s;
}

.search-content:focus-within {
  transform: translateY(-3px);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
}

.search-content img {
  height: 2.4rem;
  width: 2.4rem;
  object-fit: cover;
  margin-right: 1.6rem;
}
.search-content input[type="text"] {
  border: none;
  outline: none;
  font: 500 1.6rem Poppins;
  color: #034078;
  width: 100%;
}

.dog-list {
  width: 80%;
  max-width: 1100px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
}
</style>
