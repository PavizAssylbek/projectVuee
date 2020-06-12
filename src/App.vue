<template>
  <div id="app">
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <img class="logo" src="https://vuejs.org/images/logo.png" alt />
          <form v-if="!searchFlag" @submit.prevent="thisClick">
            <input
              class="input-search"
              type="text"
              placeholder="what photo are you looking for?"
              v-model="search"
            />
          </form>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
            </li>
            <button @click="modalFlag = true" class="btn">Login in</button>
          </ul>
        </div>
      </div>
    </header>
    <div class="wrapper-content wrapper-content--fixed">
      <div class="container">
        <modals :show.sync="modalFlag" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scopped>
.input-search {
  margin-bottom: 0;
  height: 25px;
}
.btn {
  height: 25px;
  font-size: 14px;
  padding: 0.2em 1em !important;
  transition: 0.3s;
  &:hover {
    color: #ffffff;
    border: 1px solid #494ce8;
    background-color: #494ce8;
  }
}
form {
  width: 25%;
}
</style>


<script>
import modals from "@/components/Modal.vue";

export default {
  components: {
    modals
  },
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" }
      ],
      search: "",
      formFlag: false,
      modalFlag: false
    };
  },
  computed: {
    searchFlag() {
      return this.$store.getters.search;
    }
  },
  methods: {
    thisClick() {
      this.$store.dispatch("getPhotos", this.search);
      this.search = "";
    }
  }
};
</script>
