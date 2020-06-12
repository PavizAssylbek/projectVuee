import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_KEY =
  "11f2ff5a50fcce4df43aa4c897d132d3f5ad4a84ed0aec7be67718deb5120192";

export default new Vuex.Store({
  state: {
    data: [],
    mail: "",
    password: "",
    formFlag: false,
    photo: {},
  },
  mutations: {
    fetchPhotos(state, data) {
      state.data = data;
    },
    fetchLogin(state, mail, password) {
      (state.mail = mail), (state.password = password);
    },
    fetchFlag(state, payload) {
      state.formFlag = payload;
    },
    changePhotoStore(state, payload) {
      state.photoStore = payload;
    },
    setPhoto(state, data) {
      state.photo = data;
    },
  },
  actions: {
    async getPhotos({ commit }, payload) {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=15&orientation=landscape&query=${payload}}`
        );
        const data = await response.json();
        commit("fetchPhotos", data.results);
      } catch (e) {
        console.error(e.message);
      }
    },
    getLogin({ commit }, mail, password) {
      commit("fetchLogin", mail, password);
    },
    changeFlag({ commit }, payload) {
      commit("fetchFlag", payload);
    },
    async getPhoto({ commit }, id) {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`
        );
        const data = await res.json();
        commit("setPhoto", data);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
  getters: {
    getPhotos: (state) => state.data,
    search: (state) => state.formFlag,
    getPhotoStore: (state) => state.photo,
  },
  modules: {},
});
