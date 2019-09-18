<template>
  <div>
    <div class="grid-container">
      <section class="main-content">
        <article class="strain-image-contain">
          <img
            :src="require('../../assets/images/' + mainImage)"
            :alt="`Image of ${strain.name}`"
            :title="`Image of ${strain.name}`"
            class="strain-image main-image"
          />
        </article>
      </section>
      <section class="side-content strain-detail-contain">
        <h2>{{strain.name}}</h2>
        <p>
          <strong>Provider:</strong>
          <a :href="strain.providerURL" target="_blank">{{strain.provider}}</a>
        </p>
        <p>
          <strong>Description:</strong>
          {{strain.description}}
        </p>
        <p>
          <strong>Rating:</strong>
          {{strain.rating}}
        </p>
        <p>
          <strong>Appearance:</strong>
          {{strain.appearance}}
        </p>
        <p>
          <strong>Aroma:</strong>
          {{strain.smell}}
        </p>
        <p>
          <strong>Taste:</strong>
          {{strain.taste}}
        </p>
        <p>
          <strong>Sensation:</strong>
          {{strain.feel}}
        </p>
        <p>
          <strong>Images:</strong>
        </p>
        <div class="strain-image-options-contain">
          <img
            v-if="strain.images[0]"
            :src="require('../../assets/images/' + strain.images[0])"
            :alt="`Image of ${strain.name}`"
            :title="`Image of ${strain.name}`"
            v-on:click="setMainImage(strain.images[0])"
            class="strain-image main-image"
          />
          <img
            v-if="strain.images[1]"
            :src="require('../../assets/images/' + strain.images[1])"
            :alt="`Image of ${strain.name}`"
            :title="`Image of ${strain.name}`"
            v-on:click="setMainImage(strain.images[1])"
            class="strain-image main-image"
          />
          <img
            v-if="strain.images[2]"
            :src="require('../../assets/images/' + strain.images[2])"
            :alt="`Image of ${strain.name}`"
            :title="`Image of ${strain.name}`"
            v-on:click="setMainImage(strain.images[2])"
            class="strain-image main-image"
          />
        </div>
      </section>
      <section class="strain-review-contain" v-if="isUserLoggedIn">
        <div class="review-heading">
          <h2>Add a Review</h2>
          <p></p>
        </div>
        <form action>
          <select
            name="strain-providers"
            id="strain-provider-select"
            value="Select a provider to review"
          ></select>
          <textarea name="strain-review" id cols="30" rows="10"></textarea>
        </form>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      strain: {},
      mainImage: "",
      loggedIn: false,
      layout: "HomeLayout"
    };
  },
  async created() {
    await this.$store.commit("addLayout", this.layout);
    await this.retrieveStrain();
    await this.startMainImage();
    await this.isLoggedIn();
  },
  methods: {
    //Check if user is logged in
    async isLoggedIn() {
      this.loggedIn = await this.$store.getters.LOGGED;
    },
    //Retrieve messages
    async retrieveStrain() {
      //Get messages from backend
      const retrievedStrain = (await axios.get(
        `http://localhost:3000/api/strains/${this.$route.params.id}`
      )).data;
      //Add retrieved strain info to data
      this.strain = await retrievedStrain;

      //Store strain info from data to state
      await this.$store.commit("addStrain", this.strain);
    },
    //Set main image to first image in strain images array
    async startMainImage() {
      this.strain.images = await this.strain.images.split(",").map(image => {
        return image.trim();
      });
      let mainImg = await this.strain.images[0];
      this.mainImage = mainImg;
    },
    //Change main image upon image click <-- Fires when an image is clicked
    async setMainImage(image) {
      this.mainImage = image;
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.LOGGED;
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "main-content side-content";
  padding: 25px;
}

.main-content {
  grid-area: main-content;
}

.side-content {
  grid-area: side-content;
}
section {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
}
article {
  flex: 0 1 40%;
  padding: 20px;
  margin: 10px;
}
.strain-image-contain {
  flex-basis: 100%;
  text-align: center;
}
article img.strain-image {
  width: 100%;
}
.strain-image-options-contain {
  display: flex;
  flex-flow: nowrap row;
}
.strain-image-options-contain > img.main-image {
  width: 82px;
  max-width: unset;
  height: auto;
  cursor: pointer;
  padding: 10px;
}
.strain-image-options-contain > img.main-image:hover {
  opacity: 0.6;
}
.strain-detail-contain {
  display: flex;
  flex-flow: nowrap column;
  justify-content: flex-start;
  padding: 20px;
}
.strain-review-contain {
  grid-area: 2/2;
  width: 100%;
  justify-content: flex-start;
  flex-flow: column;
  padding: 0 20px;
}
.strain-review-contain form textarea {
  border: solid 1px black;
  border-radius: 2px;
  height: 150px;
  width: 100%;
}
</style>