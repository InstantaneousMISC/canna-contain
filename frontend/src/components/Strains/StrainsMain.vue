<template>
  <div class="main-grid">
    <Strains class="strains-container" />
  </div>
</template>

<script>
import Strains from "./Strains";
export default {
  data() {
    return {
      layout: "HomeLayout"
    };
  },
  components: {
    Strains
  },
  async created() {
    await this.$store.commit("addLayout", this.layout);
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.strains-container {
  grid-row: 1 / row-end;
  grid-column: 3/15;
}
</style>