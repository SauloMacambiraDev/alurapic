<template>
  <button id="create-dog-float-btn">
    +
  </button>
</template>
<script>
export default {
  name: "CreateDogBtn",
};
</script>

<style scoped>
#create-dog-float-btn {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  color: #fff;
  background-color: #034078;
  border-radius: 50px;
  padding: 16px 30px;
  font: 700 32px Poppins;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  transition: all 0.4s;
}
#create-dog-float-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
}
</style>
