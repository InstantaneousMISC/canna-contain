<template>
  <div>
    <div class="grid-container">
      <section class="main-content">
        <article class="strain-image-contain">
          <img
            v-if="mainImage"
            :src="require('../../assets/images/' + mainImage)"
            :alt="`Image of ${strain.name}`"
            :title="`Image of ${strain.name}`"
            class="strain-image main-image"
          />
        </article>
        <div class="strain-image-options-contain">
          <img
            v-for="image in images"
            :src="require('../../assets/images/' + image)"
            v-bind:key="image"
            :alt="`Image of ${strain.name}`"
            :title="`Image of ${strain.name}`"
            v-on:click="setMainImage(image)"
            class="strain-image main-image"
          />
        </div>
        <article>
          <h4>Select a provider</h4>
          <a
            v-for="provider in providers"
            v-bind:key="provider.data._id"
            :href="provider.data.url"
            target="_blank"
          >{{provider.data.name}}</a>
        </article>
      </section>
      <section class="side-content strain-detail-contain">
        <h2>{{strain.name}}</h2>
        <p>
          <strong>Description:</strong>
          {{strain.description}}
        </p>
        <article class="strain-property-contain">
          <p>Cbd</p>
          <span>18%</span>
        </article>
          <article class="strain-property-contain">
          <p>Terpene profile</p>
          <span>18%</span>
        </article>
        <br />
        <br />
      </section>

          <section class="strain-review-contain" v-if="isUserLoggedIn">
          <div class="review-heading">
            <h2>Add a Review</h2>
            <p></p>
          </div>
          <form class="flex-column-nowrap">
            <label for="strain-provider-select">Provider</label>
            <select
              class="select-all"
              name="strain-providers"
              id="strain-provider-select"
              value="Select a provider to review"
            >
              <option
                value="Select A Provider To Review"
                disabled
                selected
              >Select A Provider To Review</option>
              <option
                v-for="reviewProvider in providers"
                :value="reviewProvider.data.name"
                v-bind:key="reviewProvider.data.id"
                v-on:click="setReviewsProvider(reviewProvider.data.name, reviewProvider.data._id)"
              >{{reviewProvider.data.name}}</option>
            </select>
            <label for="review-TA">Review</label>
            <textarea
              name="strain-review"
              id="review-TA"
              cols="30"
              rows="10"
              v-model="review.description"
            ></textarea>
            <div>
            <h2>Choose Ratings</h2>
            <p>Rate the flower by its particular properties.</p>
            <hr>
              <div class="col-2-inputs">
                <div class="slider-input">
                  <label for="reviewRating">Smell</label>
                  <article>
                    <input type="number" value="1" id="smellNum" v-model="review.smellRating"/>
                    <input type="range" min="1" max="10" value="10" class="slider" id="smellRange" v-model:model="review.smellRating" @change="consoleLog()"/>
                  </article>
                </div>
                <div class="slider-input">
                  <label for="reviewRating">Taste</label>
                  <article>
                    <input type="number" value="1" id="tasteNum" v-model="review.tasteRating"/>
                    <input type="range" min="1" max="10" value="10" class="slider" id="tasteRange" v-model:model="review.tasteRating"/>
                  </article>
                </div>
                <div class="slider-input">
                  <label for="reviewRating">Appearance</label>
                  <article>
                    <input type="number" value="1" id="appearanceNum" v-model="review.appearanceRating"/>
                    <input type="range" min="1" max="10" value="10" class="slider" id="appearanceRange" v-model:model="review.appearanceRating"/>
                  </article>
                </div>
                <div class="slider-input">
                  <label for="reviewRating">Feel</label>
                  <article>
                    <input type="number" value="1" id="feelNum" v-model="review.feelRating"/>
                    <input type="range" min="1" max="10" value="10" class="slider" id="feelRange" v-model:model="review.feelRating"/>
                  </article>
                </div>
              </div>
            </div>
            <label for="reviewRating">Total Rating</label>
            <input type="number" value="Rate" class="short-num-input" :model="review.rating" />
            <label v-on:click="addReview()" class="gray-btn">Add Review</label>
            <div v-if="message.length > 0">{{message}}</div>
            <div v-if="errors.msg > 0">{{errors.msg}}</div>
          </form>
        </section>

      <Filters></Filters>
        <section class="show-reviews-container">
          <h3>Reviews ({{numberOfReviews}})</h3>
          <article
            v-for="review in RetrievedReviews"
            v-bind:key="review._id"
            class="review-contain"
          >
            <div class="provider-title">
              <span class="title">Purchased from &nbsp</span>
              <a>{{review.provider.name}}</a>
            </div>
            <div class="review-description">{{review.description}}</div>
            <div class="review-rating-background">
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
              <i class="fa fa-star rating-star"></i>
            </div>
            <div class="review-rating-contain">
              <i v-for="rating in review.rating" class="fa fa-star rating-star" v-bind:key="rating"></i>
            </div>
          </article>
        </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Filters from '../Reviews/Filters'
export default {
  data() {
    return {
      strain: {},
      images: [],
      mainImage: "",
      loggedIn: false,
      layout: "HomeLayout",
      providers: [],
      review: {
        description: "",
        rating: "",
        smellRating: null,
        appearanceRating: null,
        tasteRating: null,
        feelRating: null,
        provider: {
          id: "",
          name: ""
        },
        strain: {
          id: "",
          name: ""
        },
        shortReview: true
      },
      RetrievedReviews: [],
      remainingStars: "",
      numberOfReviews: "",
      errors: {
        msg: ""
      },
      message: ""
    };
  },
  components: {
    Filters
  },
  async created() {
    await this.$store.commit("addLayout", this.layout);
    await this.retrieveStrain();
    await this.getProviders();
    await this.startMainImage();
    await this.isLoggedIn();
    await this.getReviews();
  },
  methods: {
    consoleLog(e)
    {
      console.log(e)
    },
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

      //split comma seperated strain images up into array
      //!!Lets set this up to be processed on the server at a later point
      this.images = await this.strain.images.split(",").map(image => {
        return image.trim();
      });
      //Store strain info from data to state
      await this.$store.commit("addStrain", this.strain);
    },
    //Set main image to first image in strain images array
    async startMainImage() {
      if (this.strain.images) {
        let mainImg = await this.images[0];
        this.mainImage = mainImg;
      }
    },
    //Change main image upon image click <-- Fires when an image is clicked
    async setMainImage(image) {
      this.mainImage = image;
    },
    async getProviders() {
      this.strain.providers.map(async searchProvider => {
        await this.providers.push(
          await axios.post("http://localhost:3000/api/providers/findProvider", {
            providerID: searchProvider.providerID
          })
        );
      });
    },
    async setReviewsProvider(name, id) {
      this.review.provider = {
        id: id,
        name: name
      };
      console.log(this.review.provider);
    },
    async getReviews() {
      const reviews = await axios.get(
        `http://localhost:3000/api/reviews/${this.strain._id}`
      );
      this.RetrievedReviews = reviews.data;
      this.numberOfReviews = this.RetrievedReviews.length;
    },
    async addReview() {
      console.log(this.review);
      this.review.strain.name = this.strain.name;
      this.review.strain.id = this.strain._id;
      const newReview = await axios.post(
        "http://localhost:3000/api/reviews/addreview",
        this.review
      );
      if (!newReview) {
        this.errors.msg = "There was a problem adding the review";
      }
      this.message = "Review Added succesfully! Thank you!";
      this.getReviews();
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
  grid-template-areas: "main-content side-content";
  padding: 25px 200px;
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
  object-fit: contain;
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
  width: 100%;
  justify-content: flex-start;
  flex-flow: column;
  padding: 0 20px;
  grid-column: 2;
}
.strain-review-contain form textarea {
  border: solid 1px black;
  border-radius: 2px;
  height: 150px;
  width: 100%;
}
.show-reviews-container {
  grid-area: 3/2;
  display: block;
}
.show-reviews-container article.review-contain {
  width: 100%;
  border-radius: 0;
  border-bottom: solid 3px #3b342b;
  position: relative;
}

.show-reviews-container .title {
  padding: 0 0 10px;
}

.show-reviews-container .review-rating-contain {
  margin: 25px;
  position: absolute;
  top: 0;
  right: 0;
}

.review-rating-background {
  position: absolute;
  top: 0;
  right: 0;
  margin: 25px;
}

.review-rating-background i {
  color: rgb(225, 225, 225);
}

.slider-input {
    display: flex;
    flex-flow: wrap row;
}

.slider-input label{
  flex-basis: 100%;
}

.slider-input article{
  display:flex;
  padding:0;
  flex-basis:100%;
  align-items: center;
  justify-content:space-between;
  margin:0;
}


.slider-input input[type="number"]{
  padding: 3px;
  background:white;
  text-align: center;
  flex-basis: 55px;
}

.slider-input input[type="range"]{
  flex-basis: calc(100% - 70px);
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
  flex-basis: calc(100% - 70px);
  opacity: .8;
  border-color:transparent;
  border-bottom: solid 1px lightgray;
  border-style: double;
  justify-content: space-between;
}

.slider-input input[type="range"]::-moz-range-thumb, .slider-input input[type="range"]::-webkit-slider-thumb {
 -webkit-appearance: none; /* Override default look */
  appearance: none;
  border-radius:20px;
  border:transparent;
  width: 17px; /* Set a specific slider handle width */
  height: 17px; /* Slider handle height */
  background: #4CAF50; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.col-2-inputs {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
}

.col-2-inputs * {
    flex-flow: wrap;
    justify-content: space-between;
    flex-basis:100%;
}
</style>