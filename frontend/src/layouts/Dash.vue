<template>
  <div>
    <div class="grid-container">
      <div class="top-nav-header"></div>
      <div class="side-nav-main"></div>
      <div class="mini-side-nav"></div>
      <div class="main-content"></div>
      <header class="main-top-header">
        <button class="btn rounded-btn">
          <i class="fa fa-bullhorn"></i>
          Request a Review
        </button>
        <span class="spaceOut"></span>
        <i class="fa fa-cog"></i>
        <i class="fa fa-question-circle"></i>
        <i class="fa fa-sign-out" v-on:click="logOut"></i>
      </header>
      <nav class="main-mini-nav">
        <a href="#" class="active">
          <i class="fa fa-home"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa fa-balance-scale"></i>
          <span>Reviews</span>
        </a>
        <a href="#">
          <i class="fa fa-shopping-bag"></i>
          <span>Products</span>
        </a>
        <a href="#">
          <i class="fa fa-quote-right"></i>
          <span>Forums</span>
        </a>
        <a href="#">
          <i class="fa fa-book"></i>
          <span>Learning</span>
        </a>
      </nav>
      <nav class="main-side-nav">
        <section class="main-nav-header">
          <span>Related Options</span>
        </section>
        <a href="#" class="option-contain active title">
          <span class="option-title">Fresh Product</span>
          <span class="option-qty">13</span>
        </a>
        <a href="#" class="option-contain">
          <span class="option-title">You'll Like</span>
          <span class="option-qty">3</span>
        </a>
        <a href="#" class="option-contain">
          <span class="option-title">Pending</span>
          <span class="option-qty">3</span>
        </a>
        <a href="#" class="option-contain">
          <span class="option-title">Viewed</span>
          <span class="option-qty">2</span>
        </a>
        <a href="#" class="option-contain">
          <span class="option-title">Unseen</span>
          <span class="option-qty">5</span>
        </a>

        <a href="#" class="option-contain active title">
          <span class="option-title">Recent Reviews</span>
          <span class="option-qty">2</span>
        </a>
        <a href="#" class="option-contain">
          <span class="option-title">Viewed</span>
          <span class="option-qty">0</span>
        </a>
        <a href="#" class="option-contain">
          <span class="option-title">Unseen</span>
          <span class="option-qty">2</span>
        </a>
      </nav>
      <main class="main-contain">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //logout user
    async logOut() {
      await this.$store.commit("logOut");
      this.$router.push({ path: "home" });
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 70px 220px 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas: "mini-side-nav top-nav-header top-nav-header" "mini-side-nav side-nav-main main-content";
}

.side-nav-main {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ".";
  grid-area: side-nav-main;
}

.mini-side-nav {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ".";
  grid-area: mini-side-nav;
  background: rgb(47, 50, 62);
}

.main-content {
  grid-area: main-content;
}

.top-nav-header {
  grid-area: top-nav-header;
  background: white;
}
/*grid styles end*/

main.main-contain {
  grid-area: main-content;
  height: calc(100vh - 55px);
}
header.main-top-header {
  height: 100%;
  grid-area: top-nav-header;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}

header.main-top-header i {
  margin: 0 10px 0 0;
  font-size: 19px;
  color: #24241c;
  padding: 15px;
}

header.main-top-header i:hover {
  background: #ddd;
  cursor: pointer;
}

header.main-top-header .spaceOut {
  flex-grow: 1;
}
nav.main-side-nav {
  display: flex;
  flex-flow: column nowrap;
  grid-area: side-nav-main;
  display: none;
}
nav.main-side-nav a {
  height: 30px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  justify-items: center;
  align-items: center;
  color: lightgray;
  text-decoration: none;
}

nav.main-side-nav section.main-nav-header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #800020;
}

nav.main-side-nav a.option-contain {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0 10px;
  color: gray;
}

nav.main-side-nav a.option-contain.title {
  background-color: black;
  color: white;
  height: 40px;
}

nav.main-side-nav a.option-contain.active {
  background-color: black;
  color: white;
}

nav.main-side-nav .option-title {
  font-weight: 400;
  font-size: 13px;
}

nav.main-side-nav .option-qty {
  font-weight: 700;
  font-size: 16px;
}

nav.main-mini-nav a {
  height: 70px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  justify-items: center;
  align-items: center;
  color: #f7f6e7;
  text-decoration: none;
}

nav.main-mini-nav a:hover {
  background: #24241c;
  color: white;
}

nav.main-mini-nav a:hover > span {
  border-bottom: solid 3px #6b001b;
}

nav.main-mini-nav a.active {
  background-color: #800020;
  color: white;
}

nav.main-mini-nav a.active:hover {
  background-color: #6b001b;
}

nav.main-mini-nav a i {
  font-size: 18px;
  padding: 3px;
}

nav.main-mini-nav a span {
  letter-spacing: 0.4px;
  font-size: 11px;
  padding-top: 3px;
}

nav.main-mini-nav {
  grid-area: mini-side-nav;
  display: flex;
  flex-flow: column nowrap;
  border-right: solid 1px #6b001b;
}
.btn.rounded-btn {
  color: white;
  border-radius: 25px;
  padding: 0 28px 0 25px;
  margin: 0 0 0 25px;
  height: 62%;
  background-color: #da9c05;
  box-shadow: 0 2px 10px lightgray;
  border: solid 2px #da9c05;
}
.btn.rounded-btn:hover {
  background-color: white;
  color: #da9c05;
}

.btn.rounded-btn i {
  margin: 0 10px 0 0;
  color: white;
  padding: 0;
}

.btn.rounded-btn:hover > i {
  color: #da9c05;
  transform: rotate(-25deg);
  transition: transform 1s;
}
</style>