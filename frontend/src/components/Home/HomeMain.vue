<template>
  <div class="main-grid">
    <section class="top-banner flex-columns">
      <div class="top-banner-contain banner-1">
        <img src="../../assets/images/canna-cover-1.jpg" alt class="fade" />
        <div class="carousel-content">
          <h2>Find the perfect strain for your needs and liking</h2>
          <form class="select-input-combo-contain">
            <select class="select-input-combo">
              <option value>All</option>
              <option value>Type</option>
              <option value>Smell</option>
            </select>
            <input class="select-input-combo" type="text" placeholder="SEARCH" />
          </form>
        </div>
        <article class="carousel-indicators">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </article>
      </div>
      <div class="top-banner-contain banner-2">
        <img src="../../assets/images/canna-cover-2.jpg" alt class="fade" />
        <div class="carousel-content">
          <h2>Explore strains by their unique terpene profiles</h2>
        </div>
      </div>
      <div class="top-banner-contain banner-3">
        <img src alt class="fade" />
        <div class="carousel-content">
          <h2>Third Banner, no photo yet</h2>
        </div>
      </div>
      <div></div>
    </section>

    <section class="use-all-col options-section-1 flex-col-center-top">
      <header>
        <h3>Currated Hemp Flower Resources</h3>
        <p>Explore a diverse collection of some of the highest quality hemp strains and resources.</p>
        <hr />
      </header>
      <section class="display-strain-categories-contain flex-row-center-wrap">
        <article class="home-card" v-on:click="pushTo('strains')">
          <div class="card-image">
            <picture>
              <img src="../../assets/images/bliss-2-flw.jpg" alt />
            </picture>
          </div>
          <div class="card-detail">
            <h3>Explore Strains</h3>
            <p>Explore our reserve of modern hemp flower strains</p>
          </div>
        </article>
        <article class="home-card" v-on:click="pushTo('providers')">
          <div class="card-image">
            <picture>
              <img src="../../assets/images/canna-shop.jpg" alt />
            </picture>
          </div>
          <div class="card-detail">
            <h3>Find Providers</h3>
            <p>Learn more about some of the most reliable and reputable hemp flower providers available</p>
          </div>
        </article>
        <article class="home-card" v-on:click="pushTo('products')">
          <div class="card-image">
            <picture>
              <img src="../../assets/images/products-1.jpg" alt />
            </picture>
          </div>
          <div class="card-detail">
            <h3>Shop Products</h3>
            <p>Quality hemp products from CBD supplements to top shelf hemp flower</p>
          </div>
        </article>
        <article class="home-card" v-on:click="pushTo('farms')">
          <div class="card-image">
            <picture>
              <img src="../../assets/images/canna-farm.jpg" alt />
            </picture>
          </div>
          <div class="card-detail">
            <h3>Visit Farms</h3>
            <p>Take a tour of the farms and see wha't going on behind the scenes in the hemp flower world.</p>
          </div>
        </article>
        <article class="home-card" v-on:click="pushTo('news')">
          <div class="card-image">
            <picture>
              <img src="../../assets/images/news.jpg" alt />
            </picture>
          </div>
          <div class="card-detail">
            <h3>Read News</h3>
            <p>Don't miss out on what's happening with hemp flower in the US</p>
          </div>
        </article>
        <article class="home-card" v-on:click="pushTo('learning')">
          <div class="card-image">
            <picture>
              <img src="../../assets/images/canna-book-1.jpg" alt />
            </picture>
          </div>
          <div class="card-detail">
            <h3>Learn Hemp</h3>
            <p>Learn about many fascets of the hemp plant. From science to cooking with hepm flower.</p>
          </div>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: "HomeLayout"
    };
  },
  methods: {
    pushTo(to) {
      this.$router.push({ path: to });
    },
    async switchSlides() {
      //counter to hold current slide
      var counter = 0;
      //collect banners by class name
      const banners = document.getElementsByClassName("top-banner-contain");
      //every 4 seconds change banners
      setInterval(async function() {
        //Set all banners to display:none
        for (var x = 0; x < 3; ++x) {
          banners[x].setAttribute("style", "display:none");
        }
        //set currrent banner to display
        banners[counter].setAttribute("style", "display:block");
        ++counter;
        counter == 3 ? (counter = 0) : "";
        console.log(counter);
      }, 6000);
    }
  },
  components: {},
  async created() {
    this.switchSlides();
    await this.$store.commit("addLayout", this.layout);
    console.log("layout added");
    console.log("Layout set to " + this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
.top-banner {
  grid-row: 1 / span 4;
  grid-column: 1 / 17;
  background-size: cover;
  position: relative;
}
.top-banner::before {
  content: "";
  width: 100%;
  height: 100%;
  position: relative;
  color: black;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.top-banner > div {
  min-height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
}

.top-banner > div:nth-child(2) {
  display: none;
}

.top-banner > div:nth-child(3) {
  display: none;
}

.top-banner > div img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top-banner h2 {
  color: white;
  text-align: center;
  font-size: 47px;
  font-weight: 300;
  padding: 0 0 40px 0;
  z-index: 2;
  position: relative;
}
.top-banner form {
  z-index: 2;
  position: relative;
}

.top-banner .carousel-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
}

.options-section-1 {
  grid-row: 5 / 12;
  grid-column: 3/15;
  position: relative;
  background-color: #f5f5f5;
}

.options-section-1 header {
  text-align: center;
  padding: 15px;
}

.options-section-1 header h3 {
  color: #494949;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 14px;
  padding: 5px;
}

.options-section-1 header p {
  max-width: 600px;
  text-align: center;
  color: #8e8e8e;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.1;
}

.options-section-1 header hr {
  width: 45%;
  margin: auto;
}

.options-section-1 .display-strain-categories-contain {
  width: 100%;
  max-width: 1222px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 15px;
}

.options-section-1 .display-strain-categories-contain article {
  flex: 1 0 33.3333%;
  padding: 0;
  max-width: 364px;
  box-shadow: 0 2px 6px rgba(112, 112, 112, 0.2);
  margin-bottom: 72px;
}

.options-section-1
  .display-strain-categories-contain
  article
  .card-image
  picture {
  display: block;
  height: 200px;
  width: 100%;
  background-color: green;
  overflow: hidden;
}

.options-section-1 .display-strain-categories-contain article .card-detail {
  display: block;
  height: 150px;
  width: 100%;
  padding: 25px 20px 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, 0%);
}
.carousel-indicators span {
  background: white;
  height: 15px;
  width: 15px;
  display: inline-block;
  z-index: 5;
  border-radius: 10px;
  margin: 5px;
}
.carousel-indicators span:hover {
  cursor: pointer;
  z-index: inherit;
}
</style>