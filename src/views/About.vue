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
    <h1>History my search</h1>
    <ul>
      <li v-for="item in getHistory" :key="item.id">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "About",
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
    ...mapGetters(["getHistory", "getHistory"])
  },
  mounted() {
    console.log(this.getHistory);
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    color: #000;
  }
}
</style>
