<template>
  <div class="home">
    <h1>Home</h1>
    <div class="content">
      <PhotoCard v-for="item in getPhotos" :key="item.id" :data="item" />
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
  computed: {
    ...mapGetters(["getPhotos"])
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  img {
    height: 267px;
    width: 400px;
    object-fit: cover;
  }
}
</style>
