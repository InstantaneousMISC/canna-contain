<template>
  <div class="main-grid">
    <section class="top-banner">
      <h2>Explore Popular Hemp Strains</h2>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: "HomeLayout"
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
.top-banner {
  grid-column: col-start/16;
  grid-row: 1;
  padding-top: 75px;
}
.top-banner h2 {
  text-align: center;
}
</style>