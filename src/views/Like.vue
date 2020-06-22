<template>
  <div class="like">
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
      </div>
    </header>
    <h1>Like</h1>
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
    <div class="like__content" :class="{list: !view}">
      <PhotoCard v-for="item in getPhotoLike" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import PhotoCard from "@/components/PhotoCard";
import { mapGetters } from "vuex";
export default {
  name: "Like",
  components: {
    PhotoCard
  },
  data() {
    return {
      view: false,
      links: [
        { title: "Поиск", url: "/" },
        { title: "История поиска", url: "/about" },
        { title: "Избранное", url: "/like" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getPhotoLike"])
  },
  methods: {
    changeView() {
      this.view = !this.view;
    }
  }
};
</script>

<style lang="scss" scoped>
.like {
  &__content {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    &.list {
      grid-template-columns: repeat(2, 1fr);
    }
    .main-photo {
      height: 267px;
      width: 400px;
      object-fit: cover;
    }
  }
}
</style>