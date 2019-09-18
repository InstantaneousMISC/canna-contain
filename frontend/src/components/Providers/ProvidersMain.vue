<template>
  <div class="main-content-contain">
    <div class="grid-container">
      <div class="main-content">
        <Providers />
      </div>
    </div>
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
.grid-container {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "main-content side-content";
}

.main-content {
  grid-area: main-content;
}

.side-content {
  grid-area: side-content;
}
</style>