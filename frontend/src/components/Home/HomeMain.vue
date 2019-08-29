<template>
  <div>
    <h1>Home Main</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
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