<template>
  <div class="main-content-contain">
    <br />
    <h1>Add Strains</h1>
    <AddStrainForm />
  </div>
</template>

<script>
import AddStrainForm from "../Forms/AddStrainForm";
export default {
  data() {
    return {
      layout: "HomeLayout"
    };
  },
  components: {
    AddStrainForm
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