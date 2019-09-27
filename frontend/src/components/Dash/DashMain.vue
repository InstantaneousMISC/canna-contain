<template>
  <div>
    <h3 v-bind="this.user">Welcome User:{{user.name}}</h3>
    <h5>Your Username is: {{user.userName}}</h5>
    <div>
      <button class="gray-btn" v-on:click="routeTo('/addstrain')">Add New Strains</button>
      <button class="gray-btn" v-on:click="routeTo('/addproviders')">Add Providers</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.getters.USER,
      layout: "HomeLayout"
    };
  },
  components: {},
  async created() {
    await this.$store.commit("addLayout", this.layout);
  },
  methods: {
    async routeTo(route) {
      this.$router.push({ path: route });
    }
  }
};
</script>

<style scoped>
</style>