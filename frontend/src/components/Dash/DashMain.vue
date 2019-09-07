<template>
  <div>
    <h3>Welcome User:{{user.name}}</h3>
    <h5>Your Username is: {{user.userName}}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.getters.USER,
      layout: "DashLayout"
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
</style>