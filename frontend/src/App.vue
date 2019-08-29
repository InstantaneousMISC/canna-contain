<template>
  <v-app>
    <component v-bind:is="getLayout"></component>

    <!--/*Hidden so that router can be used in router child components */
          router-view used in layout files
    -->

    <router-view class="hide" />
  </v-app>
</template>

<script>
import DefaultLayout from "./layouts/default";
import DashLayout from "./layouts/Dash";
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
    DefaultLayout,
    DashLayout
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