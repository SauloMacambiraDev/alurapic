import mainApi from "./../services/mainApi";

const state = {
  token: null,
  usuario: {},
};

const getters = {
  getToken: (state) => {
    return state.token;
  },
};

const mutations = {
  SET_USER_LOGGED_IN: (state, { token, usuario }) => {
    state.token = token;
    state.usuario = usuario;
  },
  SET_USER_LOGGED_OUT: (state) => {
      state.token = undefined
      state.usuario = undefined
  }
};

const actions = {
  SET_USER_LOGGED_IN: async (context, credentials) => {
    const response = await mainApi.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });
    const { token, usuario } = response.data;
    context.commit(SET_USER_LOGGED_IN, { token, usuario });
  },
  SET_USER_LOGGED_OUT: (context) => {
      context.commit(SET_USER_LOGGED_OUT)
  }
};

export default {
    state,
    getters,
    mutations,
    actions
  }


