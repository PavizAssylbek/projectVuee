<template>
  <div class="about">
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
    <div class="container">
      <h1>History my search</h1>
      <ul>
        <History v-for="item in getHistory" :key="item.id" :data="item" />
      </ul>
      <div class="home__content">
        <PhotoCard v-for="item in getHistoryStoreGetters" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import History from "@/components/History";
import PhotoCard from "@/components/PhotoCard";
import { mapGetters } from "vuex";

export default {
  name: "About",
  components: {
    History,
    PhotoCard
  },
  data() {
    return {
      links: [
        { title: "Поиск", url: "/" },
        { title: "История поиска", url: "/about" },
        { title: "Избранное", url: "/like" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getHistory", "getHistoryStoreGetters"])
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    color: #000;
    text-transform: capitalize;
  }
}
button {
  text-transform: capitalize;
}
</style>
