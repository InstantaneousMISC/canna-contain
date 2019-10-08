<template>
  <div class="main-grid">
    <Providers class="providers-main-contain" />
  </div>
</template>

<script>
import Providers from "./Providers";
export default {
  data() {
    return {
      layout: "HomeLayout"
    };
  },
  components: {
    Providers
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
.providers-main-contain {
  grid-column: 3/15;
}

.main-content {
  grid-area: main-content;
}

.side-content {
  grid-area: side-content;
}
</style>