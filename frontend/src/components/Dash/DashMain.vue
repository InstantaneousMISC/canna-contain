<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      name: "James",
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