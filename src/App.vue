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
        <form @submit.prevent="enterSearch">
          <input class="input-search" type="text" placeholder="Поиск" v-model="search" />
          <hr />
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
}
hr {
  border-bottom: 1px solid;

  border-image: linear-gradient(
      to left,
      #000000 0%,
      rgba(224, 218, 218, 0.747) 50%,
      #000000 100%
    )
    0 0 100% 0/0 0 1px 0 stretch;
}
ul {
  li {
    color: #fff;
  }
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
import { mapGetters } from "vuex";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "История поиска", url: "/about" },
        { title: "Избранное", url: "/like" }
      ],
      search: "",
      formFlag: false,
      modalFlag: false
    };
  },
  computed: {
    ...mapGetters(["getPhotosGetters"])
  },
  methods: {
    enterSearch() {
      this.$store.dispatch("getPhotos", this.search);
      this.$store.dispatch("pushHistory", this.search);
      this.search = "";
    }
  }
};
</script>
