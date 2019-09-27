<template>
  <section>
    <h1 class="section-title">Popular Strains</h1>
    <article v-for="strain in strains" v-bind:key="strain._id" v-on:click="strainPage(strain._id)">
      <img
        v-if="strain.images"
        :src="require('../../assets/images/' + strain.images.split(',')[0].trim())"
        :alt="`Image of ${strain.name}`"
        :title="`Image of ${strain.name}`"
      />
      <div class="strain-detail-contain">
        <span class="strain-name">
          <strong>{{strain.name}}</strong>
        </span>
        <p>{{strain.description}}</p>
      </div>
    </article>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      strains: []
    };
  },
  async created() {
    this.retrieveStrains();
  },
  methods: {
    //Retrieve strains
    async retrieveStrains() {
      //Get messages from backend
      const retrievedStrains = (await axios.get(
        "http://localhost:3000/api/strains/"
      )).data;
      //Store messages in state
      await this.$store.commit("addStrains", retrievedStrains);

      //store messages in data
      this.strains = await this.$store.state.strains;
    },
    async strainPage(id) {
      this.$router.push({ path: `/strains/${id}` });
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  justify-content: flex-start;
}
h1.section-title {
  display: block;
  font-size: 24px;
  flex-basis: 100%;
  align-items: safe;
  text-align: left;
  padding-left: 70px;
}
section img {
  border-style: none;
  width: 142px;
  -webkit-box-shadow: 1px 1px 3px gray;
  box-shadow: 1px 1px 3px gray;
  height: 100px;
  object-fit: cover;
}
.strain-detail-contain {
  padding: 0 0 0 10px;
}
span.strain-name {
  text-align: center;
  padding: 5px 0;
  margin: auto;
  display: block;
}
article {
  -webkit-box-flex: 0;

  flex: 0 1 20%;
  min-width: 177px;

  padding: 20px;

  margin: 0;

  cursor: pointer;

  display: flex;

  justify-content: flex-start;
  align-items: center;
  flex-flow: nowrap column;
}
article p {
  margin-bottom: 0px;
  max-height: 170px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}
article p:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 1.2em;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 50%
  );
}
article:hover {
  background-color: #e9e9e9;
}
</style>