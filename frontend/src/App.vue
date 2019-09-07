<template>
  <v-app>
    <component :is="getLayout"></component>

    <!--/*Hidden so that router can be used in router child components */
          router-view used in layout files
    -->
    <router-view class="hide" />
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
    }
  },
  created() {
    console.log(this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>