<template>
  <div class="home">
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <img class="logo" src="https://vuejs.org/images/logo.png" alt />
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link
                class="navbar-link"
                :class="link.class"
                :title="link.title"
                :to="link.url"
              >
                <span class="link-text">{{ link.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <form @submit.prevent="enterSearch">
          <input class="input-search" type="text" placeholder="Поиск" v-model="search" />
          <hr />
        </form>
        <ul class="list-history">
          <li v-for="item in getHistory" :key="item.id">{{item}}</li>
        </ul>
      </div>
    </header>
    <div class="container">
      <h1>Главная страница</h1>
      <div class="choise-btns">
        <button @click="changeView" class>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="10" :class="{white: view, black: !view}" />
            <rect y="13" width="10" height="10" :class="{white: view, black: !view}" />
            <rect x="13" width="10" height="10" :class="{white: view, black: !view}" />
            <rect x="13" y="13" width="10" height="10" :class="{white: view, black: !view}" />
          </svg>
        </button>
        <button @click="changeView" class>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="23" height="10" :class="{white: !view,black: view}" />
            <rect y="13" width="23" height="10" :class="{white: !view,black: view}" />
          </svg>
        </button>
      </div>
      <div class="home__content" :class="{list: view}">
        <PhotoCard v-for="item in getPhotosGetters" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PhotoCard from "@/components/PhotoCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    PhotoCard
  },
  data() {
    return {
      search: "",
      view: false,
      links: [
        {
          title: "История поиска",
          url: "/about",
          class: "history"
        },
        {
          title: "Избранное",
          url: "/like",
          class: "like"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getPhotosGetters", "getHistory", "getMySearchGetters"])
  },
  methods: {
    ...mapActions(["MySearchActions"]),
    changeView() {
      this.view = !this.view;
    },
    enterSearch() {
      this.$store.dispatch("getPhotos", this.search);
      this.MySearchActions(this.search);
      this.$store.dispatch("pushHistory", this.search);
      this.search = "";
    }
  },
  beforeMount() {
    this.$store.dispatch("getPhotos", "random");
  }
};
</script>

<style lang="scss" scopped>
.home {
  &__content {
    margin-top: 80px;
    min-height: 90vh;
    column-count: 3;
    column-gap: 20px;
    column-width: 33.33333333333333%;
    &.list {
      column-count: 1;
    }
  }
}
</style>
