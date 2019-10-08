<template>
  <div class="main-grid">
    <section class="main-contain-1">
      <NewsSearch />
      <News />
    </section>
  </div>
</template>

<script>
import News from "./News";
import NewsSearch from "./NewsSearch";
export default {
  data() {
    return {};
  },
  components: {
    News,
    NewsSearch
  }
};
</script>

<style scoped>
.main-contain-1 {
  grid-row: 1;
  grid-column: 3/15;
}
</style>