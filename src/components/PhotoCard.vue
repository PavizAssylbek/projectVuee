<template>
  <router-link class="photo-card" :to="`/photo/${data.id}`">
    <img :src="data.urls.small" :alt="data.alt_description" />
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["getPhotoStore"])
  }
};
</script>

<style lang="scss">
.photo-card {
  width: 400px;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>