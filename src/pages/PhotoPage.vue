<template>
  <div class="photoPage">
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
      </div>
    </header>
    <div class="content">
      <img class="gg-photo" :src="getPhotoStore.urls && getPhotoStore.urls.full" alt="description" />
      <div class="container">
        <div class="photoPage--content">
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
                <img src="../assets/greendown.png" alt="#" />
                <span class="download-text">Downloand</span>
              </a>
            </div>
          </div>
          <img class="small-photo" :src="getPhotoStore.urls && getPhotoStore.urls.full" alt />
          <h6>Похожие теги</h6>
          <ul class="list-history">
            <li class="history" v-for="item in getPhotoStore.tags" :key="item.id">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class>
        <h2>Похожие фотографий</h2>
        <div class="home__content">
          <PhotoCard v-for="item in getPhotosGetters" :key="item.id" :data="item" />
        </div>
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
        { title: "Поиск", url: "/", class: "search" },
        { title: "История поиска", url: "/about", class: "history" },
        { title: "Избранное", url: "/like", class: "like" }
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
    await this.getPhoto(this.$route.params.id);
    await this.getPhotos(this.getPhotoStore.tags[0].title);
  }
};
</script>

<style lang="scss" scoped>
.photoPage {
  &--content {
    position: relative;
  }
  h6 {
    color: #fff;
  }
  &--header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    .left {
      display: flex;
      &-logo {
        margin-right: 10px;
        width: 54.42px;
        height: 54.42px;
        object-fit: cover;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 8px;
      }
      &--content {
        color: #fff;
      }
    }
    .right {
      display: flex;
      align-items: center;
      button {
        padding: 0;
        height: 55px;
      }
      a.btn--downloand {
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        color: #fff;
        width: 206px;
        background: #219653;
        padding: 12px;
        border: 1px solid #219653;
        box-sizing: border-box;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        @media (max-width: 480px) {
          width: 55px;
          .download-text {
            display: none;
          }
        }
      }
    }
  }
  ul.list-history {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
  li.history {
    flex: 0 0 auto;
    background: #ffffff;
    border-radius: 8px;
    color: #828282;
    padding: 5px 10px;
  }
  .small-photo {
    width: 100%;
    height: 70vh;
    margin-bottom: 20px;
  }
  .content {
    margin-bottom: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .gg-photo {
      width: 100%;
      height: 100%;
      position: absolute;
      height: 100%;
      background: rgba(40, 36, 22, 0.01);
      filter: blur(3px) brightness(50%);
    }
  }
}
</style>