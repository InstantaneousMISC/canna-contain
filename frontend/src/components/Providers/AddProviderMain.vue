<template>
  <div class="main-content-contain">
    <br />
    <AddProvider />
  </div>
</template>

<script>
import AddProvider from "./AddProvider";
export default {
  data() {
    return {
      layout: "HomeLayout"
    };
  },
  components: {
    AddProvider
  },
  async created() {
    await this.$store.commit("addLayout", this.layout);
    console.log("Layout set to " + this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>