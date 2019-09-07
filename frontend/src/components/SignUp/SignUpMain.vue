<template>
  <div>
    <br />
    <SignUpForm></SignUpForm>
  </div>
</template>

<script>
import SignUpForm from "../Forms/SignUp";

export default {
  data() {
    return {
      layout: "HomeLayout"
    };
  },
  components: {
    SignUpForm
  },
  async created() {
    await this.$store.commit("addLayout", this.layout);
    console.log("layout added");
    console.log("Layout set to " + this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
</style>