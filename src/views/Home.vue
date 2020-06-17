<template>
  <div class="home">
    <button @click="changeView" class="btn">
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
    <button @click="changeView" class="btn">
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
    <div class="home__content" :class="{list: !view}">
      <PhotoCard v-for="item in getPhotosGetters" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PhotoCard from "@/components/PhotoCard";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    PhotoCard
  },
  data() {
    return {
      view: false
    };
  },
  computed: {
    ...mapGetters(["getPhotosGetters"])
  },
  methods: {
    changeView() {
      this.view = !this.view;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  &__content {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    &.list {
      grid-template-columns: repeat(2, 1fr);
    }
    img {
      height: 267px;
      width: 400px;
      object-fit: cover;
    }
  }
  .white {
    fill: #bdbdbd;
  }
  .black {
    fill: #000000;
  }
}
</style>
