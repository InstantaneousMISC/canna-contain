<template>
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
            <div class="slider-input">
            <label for="reviewRating">Smell</label>
            <article>
                <input type="number" value="1" id="smellNum" v-model="review.smellRating"/>
                <input type="range" min="1" max="10" value="10" class="slider" id="smellRange" v-modelmodel="review.smellRating"/>
            </article>
            </div>
            <div class="slider-input">
            <label for="reviewRating">Taste</label>
            <article>
                <input type="number" value="1" id="smellNum" v-model="review.smellRating"/>
                <input type="range" min="1" max="10" value="10" class="slider" id="smellRange" v-modelmodel="review.smellRating"/>
            </article>
            </div>
            <div class="slider-input">
            <label for="reviewRating">Appearance</label>
            <article>
                <input type="number" value="1" id="smellNum" v-model="review.smellRating"/>
                <input type="range" min="1" max="10" value="10" class="slider" id="smellRange" v-modelmodel="review.smellRating"/>
            </article>
            </div>
            <div class="slider-input">
            <label for="reviewRating">Feel</label>
            <article>
                <input type="number" value="1" id="smellNum" v-model="review.smellRating"/>
                <input type="range" min="1" max="10" value="10" class="slider" id="smellRange" v-modelmodel="review.smellRating"/>
            </article>
            </div>
        </div>
        <label for="reviewRating">Total Rating</label>
        <input type="number" value="Rate" class="short-num-input" :model="review.rating" />
        <label v-on:click="addReview()" class="gray-btn">Add Review</label>
        <div v-if="message.length > 0">{{message}}</div>
        <div v-if="errors.msg > 0">{{errors.msg}}</div>
    </form>
</section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        providersArray: [],
        review: {
            description: "",
            rating: "",
            smellRating: null,
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
    };
  },
  props: {
      strain: Object,
      providers:Array
  },
  async mounted() {

    this.initialize()
    
  },
  methods: {
    async initialize(){
        console.log("strain: " + Array.from(this.strain.providers))
        await this.getProviders();
    },
    async getProviders() {
        if(this.strain){
            this.providers.map(async searchProvider => {
            await this.providersArray.push(
            await axios.post("http://localhost:3000/api/providers/findProvider", {
                providerID: searchProvider.providerID
            })
            );
        });
      }
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
</style>