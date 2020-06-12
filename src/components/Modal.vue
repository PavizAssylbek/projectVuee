<template>
  <div v-if="show" class="modal__wrapper" @click="closeModal()">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <span class="modal-title"></span>
        <span class="button-close" @click="closeModal()">x</span>
      </div>

      <div class="modal-body" @submit="closeModal">
        <form @submit.prevent="login">
          <input type="email" v-model="mail" placeholder="Just write any email" required />
          <input type="password" v-model="password" placeholder="Just write any password " required />
          <button class="btn">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      mail: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    login() {
      this.$store.dispatch("getLogin", {
        mail: this.mail,
        password: this.password
      });
      this.$store.dispatch("changeFlag", true);
      this.mail = "";
      this.password = "";
    },
    closeModal() {
      this.show = true;
      this.$emit("update:show", false);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}

.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.48);
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
}
</style>