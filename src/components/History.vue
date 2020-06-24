<template>
  <li @click.prevent="getDataForHistory">{{data}}</li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    data: {
      type: String
    }
  },
  methods: {
    ...mapActions(["getHistoryActions"]),
    getDataForHistory() {
      this.getHistoryActions(this.data);
    }
  }
};
</script>

<style lang="scss">
</style>