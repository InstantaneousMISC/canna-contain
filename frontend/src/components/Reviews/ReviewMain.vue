<template>

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
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
        RetrievedReviews: [],
        numberOfReviews: "",
    };
  },
    async created() {
    await this.getReviews();
  },
  components: {
  }
  methods: {
    async getReviews() {
      const reviews = await axios.get(
        `http://localhost:3000/api/reviews/${this.strain._id}`
      );
      this.RetrievedReviews = reviews.data;
      this.numberOfReviews = this.RetrievedReviews.length;
    }
  }
};
</script>

<style scoped>

.strain-review-contain {
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
.show-reviews-container {
  grid-area: 2/2;
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
</style>