<template>
  <div class="about">
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
    <div class="container">
      <h1>History my search</h1>
      <ul>
        <History class="history-list" v-for="item in getHistory" :key="item.id" :data="item" />
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
        { title: "Поиск", url: "/", class: "search" },
        { title: "История поиска", url: "/about", class: "history" },
        { title: "Избранное", url: "/like", class: "like" }
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
  display: flex;
  li.history-list {
    margin-right: 10px;
    cursor: pointer;
    color: #000;
    text-transform: capitalize;
  }
}
button {
  text-transform: capitalize;
}
</style>
