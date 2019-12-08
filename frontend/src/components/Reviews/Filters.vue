<template>
  <div class="flexbox-1 review-filters-contain">
    <section>
        <form class="reviewByVendorContain">
            <label>Reviews By Vendor</label>
            <p>Select a vendor to see reviews or select all Reviews</p>
            <section class="mainTokensContain">
              <article class="tTokenContainer">
                <input type="checkbox" id="vendorToggle1"></input>
                <label for="vendorToggle1" class="toggleToken">View All</label>
              </article>
              <article class="tTokenContainer">
                <input type="checkbox" id="vendorToggle2"></input>
                <label for="vendorToggle2" class="toggleToken">Cascadia Blooms</label>
              </article>
              <article class="tTokenContainer">
                <input type="checkbox" id="vendorToggle3"></input>
                <label for="vendorToggle3" class="toggleToken">Five Leaf Wellness</label>
              </article>
              <article class="tTokenContainer">
                <input type="checkbox" id="vendorToggle4"></input>
                <label for="vendorToggle4" class="toggleToken">Tweedle Farms</label>
              </article>
              <article class="tTokenContainer">
                <input type="checkbox" id="vendorToggle5"></input>
                <label for="vendorToggle5" class="toggleToken">Plane Jane</label>
              </article>
            </section>
        </form>
        <hr>
        <section class="review2">
          <div class="reviewHeading">
            <label class="userName">InstantaneousMisc</label>
            <span class="postedDate">Now 11, 2019</span>
          </div>
          <div class="reviewRatingsContain">
            <br>
            <section class="ratingsMainContain">
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Overall</span>
                  <span>10/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Smell</span>
                  <span>8/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Taste</span>
                  <span>10/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Appearance</span>
                  <span>5/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Smoke</span>
                  <span>7/10</span>  
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
            </section>
          </div>
          <div class="reviewCommentsContain">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <section>
              <a>Reply</a>
            </section>
          </div>
        </section>
        <hr>
        <section class="review2">
          <div class="reviewHeading">
            <span class="userName">InstantaneousMisc</span>
            <span class="postedDate">Now 11, 2019</span>
          </div>
          <div class="reviewRatingsContain">
            <br>
            <section class="ratingsMainContain">
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Overall</span>
                  <span>10/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Smell</span>
                  <span>8/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Taste</span>
                  <span>10/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Appearance</span>
                  <span>5/10</span>
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
              <section class="textRatingContain">
                <article class="textRating">
                  <span>Smoke</span>
                  <span>7/10</span>  
                </article>
                <section class="progressRating">
                  <article></article>
                </section>
              </section>
            </section>
          </div>
          <div class="reviewCommentsContain">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return{};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.flexbox-1{

}

.review-filters-contain{
  grid-area: 2/2;
}



.toggleToken{
  padding: 10px 20px;
  border-radius: 20px;
  background:white;
  color:#800020;
  border:solid 2px #800020;
  box-shadow: 1px 1px 1px 1px lightgray;
}

.review-filters-contain input[type="checkbox"]{
  display:none;
}

.review-filters-contain input[type="checkbox"]:checked + label{
  background:#800020;
  color:white;
}

.mainTokensContain {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    padding: 20px 0;
}
.tTokenContainer {
    padding: 13px 7px 13px 0;
}

.review2{
  padding:30px 15px 20px 15px;
}
.review2:hover{
  background:#f2f2f2;
}
.textRatingContain{
  margin: 5px 0;
}

.textRatingContain, .textRating {
    display: flex;
    flex-flow: nowrap row;
}

.textRatingContain *, .textRating * {
    flex: 1 0 50%;
}

.textRating * {
    justify-content: space-between;
    border-bottom:solid 1px #ececec;
}

.textRating span:nth-child(2) {
    text-align:right;
}

.progressRating article {
    background:green;
    height: 80%;
    border-radius: 10px;
    flex-basis: 90%;
    max-width: 90%
}
.progressRating {
    justify-content: end;
    display: flex;
    align-items: center;
}

.reviewCommentsContain {
    padding: 20px 0px;
}

.reviewHeading {
    display: flex;
    flex-flow: nowrap row;
}
.reviewHeading .userName{
    font-weight:600;
    font-size:16px;
}
.reviewHeading .postedDate{
    text-align:right;
}
.reviewHeading * {
    flex: 1 0 auto;
}
.reviewCommentsContain section {
    text-align: right;
    padding: 20px 0 0px 0;
}
</style>