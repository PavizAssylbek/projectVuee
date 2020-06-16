<template>
  <div class="photoPage">
    <h1>Photo page</h1>
    <div class="content">
      <img :src="getPhotoStore.urls && getPhotoStore.urls.full" alt="description" />
      <p>author: {{ getPhotoStore.user && getPhotoStore.user.name }}</p>
      <span>likes: {{ getPhotoStore.likes }}</span>
    </div>
    <div class="content">
      <h2>Похожие фотографий</h2>
      <div class="another-content">
        <PhotoCard v-for="item in getPhotosGetters" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PhotoCard from "@/components/PhotoCard";

export default {
  name: "PhotoPage",
  components: {
    PhotoCard
  },
  computed: {
    ...mapGetters(["getPhotoStore", "getPhotosGetters"])
  },
  methods: {
    ...mapActions(["getPhoto", "getPhotos"])
  },
  async mounted() {
    await this.getPhoto(this.$route.params.id);
    await this.getPhotos(this.getPhotoStore.tags[0].title);
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;

  .another-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
</style>