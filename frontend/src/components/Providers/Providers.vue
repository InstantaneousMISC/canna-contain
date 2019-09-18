<template>
  <div>
    <section>
      <h1 class="section-title">Farms and Providers</h1>
      <div class="provider-detail-contain" v-for="provider in providers" v-bind:key="provider.id">
        <span class="provider-name">
          <strong>{{provider.name}}</strong>
        </span>
        <p>{{provider.description}}</p>
        <a class="button" role="button">Visit {{provider.name}}</a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      providers: []
    };
  },
  async created() {
    this.getProviders();
  },
  methods: {
    async getProviders() {
      const Providers = (await axios.get(
        "http://localhost:3000/api/providers/"
      )).data;
      await this.$store.commit("addProviders", Providers);
      this.providers = this.$store.getters.PROVIDERS;
    }
  }
};
</script>

<style scoped>
.provider-detail-contain {
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  border-left: 3px solid gold;
  margin: 5px 5px 5px 20px;
}
.button {
  background: burlywood;
  display: block;
  width: auto;
  margin: auto;
  padding: 10px;
  color: white;
  border-radius: 4px;
  text-transform: uppercase;
}
</style>