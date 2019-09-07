<template>
  <div class="main-content-contain">
    <br />
    <loginForm />
  </div>
</template>

<script>
import loginForm from "../Forms/Login";
export default {
  data() {
    return {
      layout: "HomeLayout"
    };
  },
  components: {
    loginForm
  },
  async created() {
    await this.$store.commit("addLayout", this.layout);
    console.log("layout added");
    console.log("Layout set to " + this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>