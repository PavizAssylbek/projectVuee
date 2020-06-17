<template>
  <div class="like">
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
      view: false
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

<style>
</style>