<template>
  <div id="app">
    <div class="wrapper-content">
      <Modal :show.sync="modalFlag" />
      <router-view />
    </div>
    <div class="checkscroll"></div>
    <button class="btn--top" @click.prevent="clickTop">
      <img src="./assets/button_top.png" alt="#" />
    </button>
  </div>
</template>

<style lang="scss" scopped>
.input-search {
  color: #fff;
  border: none;
  background: transparent;
  margin-bottom: 0;
  font-size: 72px;
  padding: 14px;
  text-align: center;
  text-transform: capitalize;
}
hr {
  border-bottom: 1px solid;

  border-image: linear-gradient(
      to left,
      #000000 0%,
      rgba(224, 218, 218, 0.747) 50%,
      #000000 100%
    )
    0 0 100% 0/0 0 1px 0 stretch;
}
ul {
  li {
    color: #fff;
    text-transform: capitalize;
  }
}
.checkscroll {
  width: 100%;
  height: 2px;
  background: red;
}
.list-history {
  display: flex;
  li {
    margin-right: 10px;
  }
}
.btn {
  height: 25px;
  font-size: 14px;
  padding: 0.2em 1em !important;
  transition: 0.3s;
  &:hover {
    color: #ffffff;
    border: 1px solid #494ce8;
    background-color: #494ce8;
  }
}
.btn--top {
  padding: 0;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 30px;
  right: 5%;
}
</style>


<script>
import { mapGetters, mapActions } from "vuex";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      formFlag: false,
      modalFlag: false,
      number: 1
    };
  },
  computed: {
    ...mapGetters(["getPhotosGetters", "getMySearchGetters"])
  },
  methods: {
    ...mapActions(["getPhotos", "pageUp"]),
    clickTop() {
      const header = document.querySelector("header");
      header.scrollIntoView({ behavior: "smooth" });
    }
  },
  mounted() {
    const checkScroll = document.querySelector(".checkscroll");
    const observer = new IntersectionObserver(entries => {
      const scroll = entries[0];
      if (scroll.isIntersecting) {
        this.number++;
        this.pageUp(this.number);
        this.getPhotos(this.getMySearchGetters);
      }
    });

    observer.observe(checkScroll);
  }
};
</script>
