import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_KEY =
  "11f2ff5a50fcce4df43aa4c897d132d3f5ad4a84ed0aec7be67718deb5120192";

export default new Vuex.Store({
  state: {
    data: [],
    likeData: [],
    historySearch: [],
    mail: "",
    password: "",
    photo: {},
  },
  mutations: {
    fetchPhotos(state, data) {
      state.data = data;
    },
    fetchLogin(state, mail, password) {
      (state.mail = mail), (state.password = password);
    },
    setPhoto(state, data) {
      state.photo = data;
    },
    newLike(state, object) {
      state.likeData.unshift(object);
    },
    newHistory(state, payload) {
      state.historySearch.unshift(payload);
    },
  },
  actions: {
    async getPhotos({ commit }, payload) {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=9&orientation=landscape&query=${payload}}`
        );
        const data = await response.json();
        console.log("getPhotos -> data", data);
        commit("fetchPhotos", data.results);
      } catch (e) {
        console.error(e.message);
      }
    },
    getLogin({ commit }, mail, password) {
      commit("fetchLogin", mail, password);
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
    pushForLike({ commit }, object) {
      commit("newLike", object);
    },
    pushHistory({ commit }, payload) {
      commit("newHistory", payload);
    },
  },
  getters: {
    getPhotosGetters: (state) => state.data,
    getPhotoLike: (state) => state.likeData,
    getPhotoStore: (state) => state.photo,
    getHistory: (state) => state.historySearch,
  },
  modules: {},
});
