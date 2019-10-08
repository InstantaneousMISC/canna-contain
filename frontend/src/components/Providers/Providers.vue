<template>
  <div>
    <section>
      <h1 class="section-title">Farms and Providers</h1>
      <div
        class="provider-detail-contain container-1"
        v-for="provider in providers"
        v-bind:key="provider.id"
      >
        <div class="content-contain">
          <span class="provider-name">
            <a :href="provider.url">
              <strong>{{provider.name}}</strong>
            </a>
          </span>
          <p>{{provider.description}}</p>
        </div>
        <a class="button" role="button">
          Visit
          <br />
          {{provider.name}}
        </a>
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
      console.log(Providers);
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
  flex-flow: row nowrap;
  margin: 5px 5px 15px 0px;
  align-items: center;
}
.provider-detail-contain:hover {
  background: rgb(234, 234, 234);
}
.button {
  display: block;
  min-width: 205px;
  padding: 10px;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  float: right;
}
</style>