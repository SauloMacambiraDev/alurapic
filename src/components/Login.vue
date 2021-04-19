<template>
  <section class="login-content">
    <img src="@/assets/imgs/login-background.jpg" alt="Dog playing" />
    <div class="blur-content"></div>
    <form @submit.prevent="login">
      <div class="input-form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Provide a valid email"
        />
        <span class="input-error-msg"></span>
      </div>

      <div class="input-form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Provide a password"
        />
        <span class="input-e rror-msg"></span>
      </div>

      <button type="submit">Acessar</button>
    </form>
  </section>
</template>

<script>

export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        // const response = await axios.post(
        //   "http://localhost:8000/auth/login",
        //   this.usuario
        // );

        // const response = await this.$mainApi.post('/auth/login', this.usuario)
        // If the serve do not send a header 'Set-Cookie' with some value to the jwt, then store it in localStorage
        // localStorage.setItem("jwt", response.data.access_token);
        // this.$store.dispatch('doLogin', this.usuario) --> Using actions
        // localStorage.setItem("jwt", 'faketoken');
            
        this.$store.commit("SET_USER_LOGGED_IN", {
          token: "faketoken",
          usuario: {
            name: "Saulo de Melo Macambira",
            email: "saulomacdev@gmail.com",
          },
        });

        this.$router.push({ name: "home" });
      } catch (err) {
        console.log(err);
        alert(err);
      }
    },
  },
};
</script>
<style>
section.login-content {
  width: 100vw;
  height: 100vh;
  position: relative;
}
section.login-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
section.login-content .blur-content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #000000, #fff);
  opacity: 0.7;
}

section.login-content form {
  position: absolute;
  min-width: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 4.8rem;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.2s;
}

section.login-content form:focus-within {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -51.5%);
}

form .input-form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

form .input-form-group label {
  display: block;
  font: 500 1.6rem Poppins;
  color: var(--var-default-color);
  margin: 1rem 0 1rem 0;
}

form .input-form-group input {
  padding: 1rem;
  width: 100%;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  font: 500 1.2rem Poppins;
  outline: none;
  transition: all 0.4s;
}

form button {
  margin-top: 2rem;
  background-color: var(--var-default-color);
  outline: none;
  color: #fff;
  padding: 1rem 2.4rem;
  border: none;
  border-radius: 10px;
  font: 500 1.6rem Poppins;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.4s;
}

form button:hover {
  background-color: #01519c;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(-3px);
}

form .input-form-group input:focus {
  border: 1px solid var(--var-default-color);
}
</style>