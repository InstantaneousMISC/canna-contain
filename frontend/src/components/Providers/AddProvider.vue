<template>
  <div>
    <section class="addProviderFormContaier">
      <section class="title-header-1">
        <h1>Add a new Provider</h1>
      </section>
      <div class="error-notification">{{errors.msg}}</div>
      <form class="form-1" id="addProviderForm" autocomplete="on">
        <div>
          <input
            type="text"
            placeholder="Enter Provider Name"
            v-model="provider.name"
            autocomplete="on"
            required
          />
          <input
            type="text"
            placeholder="Enter Provider URL"
            v-model="provider.url"
            autocomplete="on"
            required
          />
          <textarea
            class="provider-notes-textarea"
            placeholder="Enter Provider Description"
            v-model="provider.description"
            autocomplete="on"
            required
          />
          <select v-model="providerStrain">
            <option v-if="strains" value="select strains" selected disabled>Select Provider Strains</option>
            <option v-else value="No Strains Available" selected disabled>No Strains Available</option>
            <option
              v-for="strain in strains"
              v-bind:key="strain.id"
              :value="strain.name"
              v-on:click="pushStrains(strain._id)"
            >{{strain.name}}</option>
          </select>
          <button>Click Here To add a new strain</button>
          <ul>
            <li
              v-for="addedStrains in provider.strains"
              v-bind:key="addedStrains._id"
            >{{addedStrains.name}}</li>
          </ul>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      provider: {
        name: "",
        url: "",
        description: "",
        strains: []
      },
      strains: [],
      providerStrain: "Select a Strain to add to the list", //This variable will hold the current value of the strain input. when "add" button is clicked the value here should be pushed to the "strains" array of objects
      errors: [{}]
    };
  },
  async created() {
    this.getStrains();
    console.log(this.strains);
  },
  methods: {
    async pushStrains(id) {
      const incomingStrain = {
        strainID: id,
        name: this.providerStrain
      };
      await this.provider.strains.push(incomingStrain);
      console.log(this.provider.strains[0]);
    },
    async addProvider() {
      //Get messages from backend
      const addedProvider = await axios.post(
        "http://localhost:3000/api/strains/addProvider",
        this.provider
      );
      addedProvider.error
        ? console.log(addedProvider.error)
        : console.log(addedProvider);
    },
    //Get strains
    async getStrains() {
      //Get messages from backend
      this.strains = (await axios.get(
        "http://localhost:3000/api/strains/"
      )).data;
    }
  }
};
</script>

<style scoped>
select {
  box-shadow: 1px 2px 2px 1px lightgray;
  border-radius: 3px;
  padding: 2px 30px;
  border: #cecece solid 1px;
  margin: 10px;
}
.title-header-1 {
  background: black;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 43px;
}
.title-header-1 h1 {
  font-size: 18px;
  margin-left: 20px;
}
.addProviderFormContaier {
  box-shadow: 0px 2px 10px gray;
  width: 52%;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
}
h1 {
  text-align: center;
}
.form-message {
  padding: 0px 20px 0 10px;
  font-size: 12px;
}
.form-1 {
  width: 100%;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
}

.form-1 input {
  width: calc(50% - 20px);
  border-bottom: solid 1px black;
  margin: 10px 10px;
  padding: 8px;
  float: left;
}
.form-1 input:nth-child(3) {
  width: calc(100% - 20px);
}
.form-1 input:focus {
  border-bottom: 1px solid #da9c05;
}
.form-1 input.submit-btn-green {
  color: white;
  background-color: green;
  border: solid 3px green;
  border-bottom: solid 3px green;
  border-radius: 5px;
  width: 200px;
  box-shadow: 0px 2px 5px gray;
}
.form-1 input.submit-btn-green:hover {
  cursor: pointer;
  color: green;
  background-color: white;
}
.error-notification {
  color: red;
  display: block;
  width: 100%;
}
textarea {
  height: 184px;
  display: block;
  width: calc(100% - 20px);
  border: solid 1px black;
  padding: 10px;
  margin: 10px;
}
.strain-image-textarea {
  height: 77px;
  margin-bottom: 0px;
}
.provider-notes-textarea {
  height: 177px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notification {
  padding: 0px 20px 0 10px;
  width: calc(100% - 40px);
  margin: 10px 20px 0 20px;
}
</style>