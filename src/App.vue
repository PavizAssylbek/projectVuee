<template>
  <div id="app">
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
    <div class="wrapper-content wrapper-content--fixed">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" }
      ]
    };
  }
};
</script>
