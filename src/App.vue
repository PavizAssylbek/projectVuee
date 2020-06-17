<template>
  <div id="app">
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <img class="logo" src="https://vuejs.org/images/logo.png" alt />
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
        <form @submit.prevent="thisClick">
          <input class="input-search" type="text" placeholder="Поиск" v-model="search" />
        </form>
      </div>
    </header>
    <div class="wrapper-content wrapper-content--fixed">
      <div class="container">
        <Modal :show.sync="modalFlag" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scopped>
.input-search {
  color: #fff;
  border: none;
  background: transparent;
  margin-bottom: 0;
  font-size: 72px;
  padding: 14px;
  text-align: center;
  border-bottom: 1px solid #fff;
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
</style>


<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Like", url: "/like" }
      ],
      search: "",
      formFlag: false,
      modalFlag: false
    };
  },
  methods: {
    thisClick() {
      this.$store.dispatch("getPhotos", this.search);
      this.search = "";
    }
  }
};
</script>
