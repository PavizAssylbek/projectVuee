<template>
  <div class="photoPage">
    <h1>Photo page</h1>
    <div class="content">
      <img :src="getPhotoStore.urls.full" alt />
      <p>author: {{getPhotoStore.user.name}}</p>
      <span>likes: {{getPhotoStore.likes}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PhotoPage",
  computed: {
    ...mapGetters(["getPhotoStore"])
  },
  methods: {
    ...mapActions(["getPhoto"])
  },
  async mounted() {
    await this.getPhoto(this.$route.params.id);
  }
};
</script>

<style>
</style>