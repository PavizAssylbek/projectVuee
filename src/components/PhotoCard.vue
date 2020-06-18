<template>
  <div class="photo-card">
    <img class="main-photo" :src="data.urls.small" :alt="data.alt_description" />
    <div class="photo-card--content">
      <figure>
        <img :src="data.user.profile_image.small" alt />
        <figcaption>
          {{data.user.name}}
          <br />
          @{{data.user.instagram_username}}
        </figcaption>
      </figure>
      <div class="links">
        <button @click.prevent="pushObjectForLike">
          <img src="../assets/tick.svg" alt="#" />
        </button>
        <router-link :to="`/photo/${data.id}`">
          <img src="../assets/loop.svg" alt="#" />
        </router-link>
        <a download :href="data.links.download" target="_blank">
          <img src="../assets/down.svg" alt="#" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    data: {
      type: Object
    },
    click: {
      type: Function
    }
  },
  computed: {},
  methods: {
    ...mapActions(["getPhoto", "pushForLike"]),
    pushObjectForLike() {
      this.pushForLike(this.data);
    }
  }
};
</script>

<style lang="scss">
.photo-card {
  position: relative;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.5);
    .main-photo {
      filter: blur(3px) brightness(50%);
    }
    .photo-card--content {
      opacity: 1;
      z-index: 1;
    }
  }
  .main-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }
  figure {
    text-align: center;
  }
  figcaption {
    color: #fff;
  }
  &--content {
    transition: 0.3s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(5, 5, 5, 0.3);
  }
  .links {
    display: flex;
    align-items: flex-end;
    &-logo {
      width: 34px;
      height: 34px;
    }
    a {
      margin: 0 20px;
      margin-top: 20px;
    }
  }
}
</style>