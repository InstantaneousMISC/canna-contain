<template>
  <div>
    <section class="addStrainFormContaier">
      <section class="title-header-1">
        <h1>Add a new strain</h1>
      </section>
      <section class="form-content-contain">
        <div class="error-notification">{{errors.msg}}</div>
        <p
          class="notification"
        >Here you can describe the strain you'd like to enter. Try to be as specific as possible.</p>
        <div v-for="error in errors" v-bind:key="error" class="error-msg-red">
          <i class="fa fa-exclamation-circle"></i>
          {{error.msg}}
        </div>
        <form class="form-1" id="addStrainForm" autocomplete="on">
          <div class="main-input-container">
            <div class="full">
              <label for="strainName">Strain Name</label>
              <input
                id="strainName"
                type="text"
                placeholder="Enter Strain Name"
                v-model="strain.name"
                autocomplete="on"
                required
              />
            </div>
            <div class="full">
              <label for="strainDescription">Description</label>
              <textarea
                id="strainDescription"
                class="strain-notes-textarea"
                placeholder="Enter Strain Notes"
                v-model="strain.description"
                autocomplete="on"
                required
              />
            </div>
            <div class="full sl-height note-w-rating">
              <div class="rating">
                <label for="strainAppearanceRating">Appearance Rating</label>
                <input
                  id="strainAppearanceRating"
                  type="number"
                  min="0"
                  max="10"
                  placeholder="Appearance rating?"
                  v-model="strain.appearance"
                  autocomplete="on"
                  required
                />
              </div>
              <div class="note">
                <label for="strainAppearance">Appearance</label>
                <input
                  id="strainAppearance"
                  type="text"
                  min="0"
                  max="10"
                  placeholder="Enter notes regarding the strains appearance"
                  autocomplete="on"
                  required
                />
              </div>
            </div>
            <div class="full sl-height note-w-rating">
              <div class="rating">
                <label for="strainSmellRate">Smell Rating</label>
                <input
                  id="strainSmellRate"
                  type="number"
                  min="0"
                  max="10"
                  placeholder="Strain Smell Rating?"
                  v-model="strain.smell"
                  autocomplete="on"
                  required
                />
              </div>
              <div class="note">
                <label for="strainSmell">Smell</label>
                <input
                  id="strainSmell"
                  type="text"
                  min="0"
                  max="10"
                  placeholder="Strain Smell notes?"
                  autocomplete="on"
                  required
                />
              </div>
            </div>
            <div class="full sl-height note-w-rating">
              <div class="rating">
                <label for="strainTouchRate">Touch Rating</label>
                <input
                  id="strainTouchRate"
                  type="number"
                  min="0"
                  max="10"
                  placeholder="Strain Touch Rating?"
                  v-model="strain.feel"
                  autocomplete="on"
                  required
                />
              </div>
              <div class="note">
                <label for="strainTouch">Touch</label>
                <input
                  id="strainTouch"
                  type="text"
                  min="0"
                  max="10"
                  placeholder="Describe how the strain feels"
                  autocomplete="on"
                  required
                />
              </div>
            </div>
            <div class="full sl-height">
              <div class="rating">
                <label for="strainTotalRate">Total Rating</label>
                <input
                  id="strainTotalRate"
                  type="number"
                  min="0"
                  max="10"
                  placeholder="Strain Total Rating"
                  v-model="strain.rating"
                  autocomplete="on"
                  required
                />
              </div>
            </div>
            <div class="half">
              <label for="select-providers">Select Providers</label>
              <select
                placeholder="Enter Strain Providers URL"
                class="select-all"
                id="select-providers"
              >
                <option value="Select a provider">Select Providers</option>
                <option
                  v-for="providers in this.retrievedProviders"
                  v-bind:key="providers._id"
                  value="Select a provider"
                  v-on:click="addProvider(providers.name, providers._id)"
                >{{providers.name}}</option>
              </select>
            </div>
            <ul class="full" v-if="addedProviders">
              <li v-for="addedProvider in addedProviders" v-bind:key="addedProvider.providerID">
                {{addedProvider.providerName}}
                <i
                  class="fa fa-times-circle"
                  v-on:click="removeProvider(addedProvider.providerID)"
                ></i>
              </li>
            </ul>
            <div class="full">
              <label for="strainImagesText">Images</label>
              <textarea
                class="strain-image-textarea"
                id="strainImagesText"
                placeholder="Enter strain image names?"
                v-model="strain.images"
              />
              <p
                class="input-message form-message"
              >enter image names seperated by commas (ex imageName.jpg , imageName2.jpg , ...)</p>
            </div>
            <input
              type="submit"
              value="Save Strain"
              class="submit-btn-green"
              v-on:click="addStrain"
            />
          </div>
        </form>
      </section>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      strain: {
        name: "",
        description: "",
        notes: "",
        rating: "",
        appearance: "",
        smell: "",
        taste: "",
        type: "",
        feel: "",
        burn: "",
        smoke: "",
        images: "",
        terpenes: [],
        providers: [],
        reviews: []
      },
      retrievedProviders: [],
      addedProviders: [],
      errors: []
    };
  },
  async created() {
    this.getProviders();
  },
  computed: {
    addedProviderNames() {
      return this.addedProviders;
    }
  },
  methods: {
    async addStrain() {
      if (this.strain.name.length == 0 || this.strain.description.length == 0) {
        this.errors.push({ msg: "Missing required information" });
        return console.log("Required Info Missing");
      }
      //Change load state to loading
      this.$store.commit("toggleLoadState");

      //Post strain info to create new strain API
      const addedStrain = await axios.post(
        "http://localhost:3000/api/strains/addStrain",
        this.strain
      );
      //If the server responds with an error
      if (addedStrain.data.errors) {
        this.errors.push({ msg: addedStrain.data.errors.msg });
        await this.$store.commit("toggleLoadState");
        await this.errors.push({
          msg: "Something went wrong when we tried to add your strain"
        });
        return;
      }
      //If no error returned from the server
      this.$store.commit("toggleLoadState"); //turn load state off
      this.$router.push({ path: "/strains" }); //push user to strains page
    },
    async addStrainProvider() {},
    async getProviders() {
      //Import Providers
      const providersObject = await axios.get(
        "http://localhost:3000/api/providers/"
      );
      if (!providersObject) {
        return (this.errors.msg = "Error retrieving providers");
      }
      this.retrievedProviders = await providersObject.data;
      return true;
    },
    async addProvider(name, id) {
      //Check if provider has already been added
      for (var i = 0; i <= this.addedProviders.length - 1; ++i) {
        if (this.addedProviders[i].providerID == id) {
          this.errors = [];
          this.errors.push({ msg: "Can't Add the same provider twice" });
          setTimeout(() => (this.errors = []), 4000);
          return false;
          break;
        }
      }
      //add selected providerid to strain object
      await this.strain.providers.push({ providerID: id });
      //Add selected provider name to addedproviders list
      this.addedProviders.push({ providerName: name, providerID: id });
      return;
    },
    async removeProvider(id) {
      console.log(id);
      console.log(this.addedProviders);
      for (var i = 0; i <= this.addedProviders.length - 1; ++i) {
        if (this.addedProviders[i].providerID == id) {
          this.addedProviders.splice(i, 1);
          break;
        }
      }
      console.log(this.addedProviders);
    }
  }
};
</script>

<style scoped>
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
.addStrainFormContaier {
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
  margin: auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
}

.form-content-contain {
  padding: 20px;
}

.form-1 input {
  width: 100%;
  border-bottom: solid 1px black;
  margin: 0px 0 10px 0;
  padding: 8px;
  float: left;
  border-radius: 0 0 0 0;
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
  width: 100%;
  border: solid 1px black;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  margin: 0px 0 10px 0;
}
.strain-image-textarea {
  height: 77px;
  margin-bottom: 0px;
}
.strain-notes-textarea {
  height: 177px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notification {
  width: calc(100% - 40px);
  margin: 10px 0;
}

.main-input-container ul {
  margin: 10px 0px 15px 0px;
  padding-left: 20px;
}
</style>