import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

// const API_KEY = "11f2ff5a50fcce4df43aa4c897d132d3f5ad4a84ed0aec7be67718deb5120192";

export default new Vuex.Store({
  state: {
    data: [],
    likeData: [],
    historySearch: [],
    historyStore: [],
    photo: {},
    search: "",
    page: 1,
  },
  mutations: {
    fetchPhotos(state, data) {
      const newArr = _.uniqBy([...state.data, ...data], "id");
      state.data = newArr;
    },
    fetchHistory(state, data) {
      const newArr = _.uniqBy([...state.data, ...data], "id");
      state.historyStore = newArr;
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
    upPage(state, payload) {
      state.page = payload;
    },
    MySearchMutations(state, payload) {
      state.search = payload;
    },
  },
  actions: {
    async getPhotos({ commit }, search) {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4&page=${this.state.page}&per_page=9&query=${search}`
        );
        const data = await response.json();
        commit("fetchPhotos", data.photos.results);
      } catch (e) {
        console.error(e.message);
      }
    },
    async getHistoryActions({ commit }, search) {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4&page=${this.state.page}&per_page=9&query=${search}`
        );
        const data = await response.json();
        commit("fetchHistory", data.photos.results);
      } catch (e) {
        console.error(e.message);
      }
    },
    async getPhoto({ commit }, id) {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/${id}?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4`
        );
        const data = await res.json();
        console.log("getPhoto -> data", data);
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
    MySearchActions({ commit }, payload) {
      commit("MySearchMutations", payload);
    },
    pageUp({ commit }, payload) {
      commit("upPage", payload);
    },
  },
  getters: {
    getPhotosGetters: (state) => state.data,
    getPhotoLike: (state) => state.likeData,
    getPhotoStore: (state) => state.photo,
    getHistory: (state) => state.historySearch,
    getPage: (state) => state.page,
    getMySearchGetters: (state) => state.search,
    getHistoryStoreGetters: state => state.historyStore
  },
  modules: {},
});
