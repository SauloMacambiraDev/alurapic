<template>
  <div>
    {{ dogId ? dogId : null }}
    <h2>Cadastrar Dogo</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dogId: this.$route.params.id,
    };
  },
};
</script>

<style></style>
