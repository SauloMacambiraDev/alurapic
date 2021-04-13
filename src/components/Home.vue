<template>
  <div>
    <DogGrid :dogs="urlDogImgs" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// Domains
import Dogo from "@/domain/dogo/Dogo";

// Services
import api from "./../services/dogApi";

// Components
import DogGrid from "./shared/DogGrid.vue";

export default {
  name: "Home",
  created() {
    if (!this.loadedDogs) {
      this.getDogPhotos();
    }
  },
  components: {
    DogGrid,
  },
  data: () => ({
    loadedDogs: false,
    urlDogImgs: [],
  }),
  methods: {
    async getDogPhotos() {
      // header['x-api-key'] = 61349550-2ee4-4c67-8e76-0f65e7af8003
      // or adding into a query string like: ?api_key=61349550-2ee4-4c67-8e76-0f65e7af8003
      const url = `/images/search`;
      const numberOfImgs = 10;
      const requests = [];

      for (let i = 0; i < numberOfImgs; i++) {
        requests.push(api.get(url));
      }

      const responses = await Promise.all(requests);
      const urlDogImgs = [];

      responses.forEach(({ data }) => {
        const dogData = data && data.length > 0 ? data[0] : null;
        if (dogData) {
          urlDogImgs.push(
            new Dogo(
              dogData.id,
              dogData.url,
              dogData.breeds && dogData.breeds.length > 0
                ? dogData.breeds[0].name
                : "Not Identified Dog"
            )
          );
          // urlDogImgs.push({
          //   id: dogData.id,
          //   url: dogData.url,
          //   name:
          //     dogData.breeds && dogData.breeds.length > 0
          //       ? dogData.breeds[0].name
          //       : "Not identified Dog",
          // });
        }
      });

      this.urlDogImgs = urlDogImgs;
      this.loadedDogs = true;
    },
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
</style>
