<template>
  <v-app>
    <component :is="getLayout"></component>

    <!--/*Hidden so that router can be used in router child components */
          router-view used in layout files
    -->
    <router-view class="hide" />
    <div v-if="isLoading" class="loading cover"></div>
  </v-app>
</template>

<script>
import DefaultLayout from "./layouts/default";
import DashLayout from "./layouts/Dash";
import HomeLayout from "./layouts/DefaultEnhanced";
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
    DefaultLayout,
    DashLayout,
    HomeLayout
  },
  computed: {
    getLayout() {
      return this.$store.getters.LAYOUT;
    },
    isLoading() {
      return this.$store.getters.ISLOADING;
    }
  },
  created() {
    console.log(this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
@import "../src/assets/stylesheets/styles.css";
.hide {
  display: none;
}
</style>