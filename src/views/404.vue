<template>
  <section class="error-page">
    <h1 class="title">PAGE NOT FOUND!</h1>
    <p>
      Go to
      <router-link class="link" to="/">main page?</router-link>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error-page {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>>