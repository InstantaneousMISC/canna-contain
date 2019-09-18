<template>
  <div>
    <section class="addStrainFormContaier">
      <section class="title-header-1">
        <h1>Add a new strain</h1>
      </section>
      <div class="error-notification">{{errors.msg}}</div>
      <p
        class="notification"
      >Here you can describe the strain you'd like to enter. Try to be as specific as possible.</p>
      <form class="form-1" id="addStrainForm" autocomplete="on">
        <div>
          <input
            type="text"
            placeholder="Enter Strain Name"
            v-model="strain.name"
            autocomplete="on"
            required
          />
          <input
            type="text"
            placeholder="Enter Strain Provider"
            v-model="strain.provider"
            autocomplete="on"
            required
          />
          <input
            type="text"
            placeholder="Enter Strain Providers URL"
            v-model="strain.providerURL"
            autocomplete="on"
            required
          />
          <textarea
            class="strain-notes-textarea"
            placeholder="Enter Strain Notes"
            v-model="strain.description"
            autocomplete="on"
            required
          />
          <div>
            <input
              type="number"
              min="0"
              max="10"
              placeholder="Appearance rating?"
              v-model="strain.appearance"
              autocomplete="on"
              required
            />
            <input
              type="number"
              min="0"
              max="10"
              placeholder="Strain Smell Rating?"
              v-model="strain.smell"
              autocomplete="on"
              required
            />
          </div>
          <input
            type="number"
            min="0"
            max="10"
            placeholder="Strain Touch Rating?"
            v-model="strain.feel"
            autocomplete="on"
            required
          />
          <input
            type="number"
            min="0"
            max="10"
            placeholder="Strain Total Rating"
            v-model="strain.rating"
            autocomplete="on"
            required
          />
          <textArea
            class="strain-image-textarea"
            placeholder="Enter strain image names?"
            v-model="strain.images"
            autocomplete="on"
            required
          />
          <p
            class="input-message form-message"
          >enter image names seperated by commas (ex imageName.jpg , imageName2.jpg , ...)</p>
          <input type="submit" value="Save Strain" class="submit-btn-green" v-on:click="addStrain" />
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
      strain: {
        name: "",
        provider: "",
        providerURL: "",
        description: "",
        rating: "",
        appearance: "",
        smell: "",
        taste: "",
        feel: "",
        images: ""
      },
      errors: [{}]
    };
  },
  methods: {
    async addStrain() {
      //Get messages from backend
      const addedStrain = await axios.post(
        "http://localhost:3000/api/strains/addStrain",
        {
          name: this.strain.name,
          provider: this.strain.provider,
          providerURL: this.strain.providerURL,
          description: this.strain.description,
          rating: this.strain.rating,
          appearance: this.strain.appearance,
          smell: this.strain.smell,
          taste: this.strain.taste,
          feel: this.strain.feel,
          images: this.strain.images
        }
      );
      addedStrain.error
        ? console.log(addedStrain.error)
        : console.log(addedStrain);
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
.strain-notes-textarea {
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