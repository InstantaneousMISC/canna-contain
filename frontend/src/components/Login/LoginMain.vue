<template>
  <div class="main-content-contain">
    <h1>Login</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: "defaultLayout"
    };
  },
  components: {},
  async created() {
    await this.$store.commit("addLayout", this.layout);
    console.log("layout added");
    console.log("Layout set to " + this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
  h1{
    text-align:center;
  }
</style>