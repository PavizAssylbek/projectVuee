<template>
  <div class="photoPage">
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
    <div class="photoPage--header">
      <div class="left">
        <img
          class="left-logo"
          :src="getPhotoStore.user && getPhotoStore.user.profile_image.small"
          alt
        />
        <div class="left--content">
          <h6>{{getPhotoStore.user && getPhotoStore.user.name}}</h6>
          <span>@{{getPhotoStore.user && getPhotoStore.user.instagram_username}}</span>
        </div>
      </div>
      <div class="right">
        <button @click.prevent="pushObjectForLike">
          <img src="../assets/like.png" alt="png" />
        </button>
        <a
          download
          :href="getPhotoStore.links && getPhotoStore.links.download"
          class="btn--downloand"
          target="_blank"
        >
          <img src="../assets/greendown.png" alt="#" /> Downloand
        </a>
      </div>
    </div>
    <div class="content">
      <img class="gg-photo" :src="getPhotoStore.urls && getPhotoStore.urls.full" alt="description" />
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
  data() {
    return {
      photoID: "",
      links: [
        { title: "Search", url: "/" },
        { title: "История поиска", url: "/about" },
        { title: "Избранное", url: "/like" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getPhotoStore", "getPhotosGetters"])
  },
  watch: {
    $route: "test"
  },
  methods: {
    ...mapActions(["getPhoto", "getPhotos", "pushForLike"]),
    pushObjectForLike() {
      this.pushForLike(this.getPhotoStore);
    },
    test() {
      this.photoID = this.$route.params.id;
      this.getPhoto(this.photoID);
    }
  },
  async mounted() {
    // await this.getPhoto(this.$route.params.id);
    // await this.getPhotos(this.getPhotoStore.tags[0].title);
  }
};
</script>

<style lang="scss" scoped>
.photoPage {
  &--header {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      &-logo {
        width: 54.42px;
        height: 54.42px;
        object-fit: cover;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
    .right {
      a.btn--downloand {
        cursor: pointer;
        color: #fff;
        width: 206px;
        background: #219653;
        padding: 12px;
        border: 1px solid #219653;
        box-sizing: border-box;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;

    .another-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
    .gg-photo {
      border-radius: 8px;
    }
  }
}
</style>