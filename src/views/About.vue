<template>
  <div class="about">
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
  computed: {
    ...mapGetters(["getHistory"])
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
