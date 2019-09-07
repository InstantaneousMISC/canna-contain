<template>
  <div>
    <nav class="user-options-nav">
      <img
        v-on:click="pushTo('home')"
        class="icon-seperator-home"
        src="../assets/images/gold-canna-leaf.svg"
        alt="Gold cannabis leaf/seperator"
      />
      <section class="nav-account-options nav-options-contain">
        <!-- Login/logout buttons -->
        <a v-if="isLoggedIn === false" class="sign-in" v-on:click="pushTo('login')">Sign In</a>
        <a v-else class="sign-out" v-on:click="logOut">Sign Out</a>
        <!-- -->
        <!-- Sign Up Link -->
        <a v-on:click="pushTo('signUp')" class="create-acount">Create Account</a>
      </section>
      <div class="seperator"></div>
      <section class="nav-social-icons nav-options-contain">
        <a href="#" class="facebook">
          <i class="fa fa-facebook-f"></i>
        </a>
        <a href="#" class="twitter">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#" class="instagram">
          <i class="fa fa-instagram"></i>
        </a>
      </section>
      <section class="nav-site-options nav-options-contain">
        <a href="#" class="my-cart">My Cart</a>
        <a href="#" class="account-support">Account Support</a>
      </section>
      <section class="searchbar-contain">
        <form class="search-form">
          <i class="fa fa-search search-icon"></i>
          <input type="text" class="search-input" />
        </form>
      </section>
    </nav>
    <header styles="height:200px" class="display-header">
      <div class="top-logo">
        <a v-on:click="pushTo('home')">
          <img
            src="../assets/images/Top shelf Hemp Reserve logo 1 - short.png"
            alt="Top Shelf Hemp COmpany White logo with whiye text and a gold box with top shelf directly above it and hemp reserve running through the center of it "
          />
        </a>
      </div>
    </header>
    <header class="top-nav-header">
      <input type="checkbox" id="top-bar-toggle" />
      <label class="sandwhichBtn" for="top-bar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <!-- Use to split containers<div class="seperator"></div> -->
      <nav class="top-nav-links" id="top-vav-bar">
        <a class="top-nav-link">Learning</a>
        <a class="top-nav-link">Reviews</a>
        <a class="top-nav-link">Blog</a>
        <a class="top-nav-link">Instrsty</a>
        <a class="top-nav-link">Shop</a>
      </nav>
    </header>
    <nav class="secondary-nav-header">
      <a>Best Of</a>
      <a>Hempery Tour</a>
      <a>Blogs</a>
      <a>Events</a>
      <a>Contests</a>
      <a>Directory</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.LOGGED;
    }
  },
  methods: {
    //logout user
    async logOut() {
      await this.$store.commit("logOut");
      console.log(
        "Logged out - loggedIn variable from state: " +
          this.$store.state.loggedIn +
          "token: " +
          this.$store.state.token +
          "user: " +
          this.$store.state.user
      );
    },
    pushTo(route) {
      this.$router.push({ path: route });
    }
  }
};
</script>

<style scoped>
.user-options-nav {
  min-height: 25px;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  padding: 0 25px;
}
.user-options-nav > * {
  padding: 10px;
}
.user-options-nav .subscribe {
  color: black;
  text-transform: uppercase;
}
.user-options-nav .icon-seperator-home {
  height: 44px;
}
.user-options-nav .icon-seperator-home:hover {
  cursor: pointer;
}
.user-options-nav .nav-options-contain {
  padding: inherit 20px;
}
.user-options-nav .nav-options-contain a {
  color: #242424;
  text-decoration: none;
  padding: 0 15px 0;
  font-size: 14px;
  padding: 0 10px;
}
.user-options-nav .nav-options-contain a:hover {
  color: #800020;
}
.user-options-nav .nav-options-contain a:nth-child(1) {
  border-right: 2px solid black;
}
.user-options-nav .searchbar-contain .search-form {
  position: relative;
}
.user-options-nav .searchbar-contain .search-form .search-input {
  border: solid 1px #878787;
  height: 29px;
  padding-left: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  border-radius: 3px;
}
.user-options-nav .searchbar-contain .search-form .search-input:focus {
  border: 1px transparent;
  border-bottom: #800020 solid 1px;
  border-radius: 0px;
}
.user-options-nav .searchbar-contain .search-form .search-icon {
  position: absolute;
  top: 0;
  left: 7px;
  top: 50%;
  transform: translate(0px, -50%);
  color: #6c6c6c;
}
.user-options-nav .searchbar-contain .search-form .search-icon:hover {
  cursor: pointer;
}
.nav-social-icons {
  border-right: 0;
  padding-right: 0px;
}
.nav-social-icons a i {
  color: #800020;
}
.nav-social-icons a i:hover {
  color: black;
}
.user-options-nav .nav-social-icons a:nth-child(1) {
  border-right: 0;
}
.display-header {
  height: 150px;
  display: flex;
  background-image: url(/img/Gold-banner.03655fc4.png);
  background-size: cover;
  flex-flow: nowrap row;
  justify-content: center;
}
.top-nav-header {
  justify-content: center;
  height: 65px;
  background: #f2f2f2;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.secondary-nav-header {
  justify-content: center;
  height: 34px;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.secondary-nav-header a {
  padding: 5px 25px;
  color: #4e4e4e;
}
.secondary-nav-header a:hover {
  color: #800020;
  background: #eee;
}
.display-header .top-logo {
  display: inline-block;
  width: auto;
}

.display-header .top-logo a {
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
}
.display-header .top-logo:hover {
}

.display-header .top-logo img {
  display: block;
  width: 245px;
  margin: 0 30px;
}
.top-nav-header .seperator {
  flex-grow: 1;
  flex-shrink: 0;
}
.top-nav-links {
  display: flex;
  flex-flow: nowrap row;
}
.top-nav-header .top-nav-link {
  height: 65px;
  width: 87px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: black;
}
.top-nav-header .top-nav-link:hover {
  background: #eee;
  color: #800020;
}

.sandwhichBtn {
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-evenly;
  align-items: center;
  height: 57px;
  width: 50px;
  display: none;
  margin: 0 5px;
  padding: 10px;
}

.sandwhichBtn:hover {
  background-color: #eee;
  border-radius: 5px;
}

.sandwhichBtn span {
  height: 3px;
  width: calc(100% - 5px);
  border-radius: 10px;
  background-color: black;
}

#top-bar-toggle {
  display: none;
}

.seperator {
  flex-grow: 1;
}
@media (max-width: 777px) {
  .sandwhichBtn {
    display: inline-flex;
  }
  .top-nav-header .top-logo {
    position: absolute;
    left: 50%;
    margin-left: -80px;
  }
  .top-nav-links {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    flex-flow: nowrap column;
    background-color: #da9c05;
    width: 177px;
    height: calc(100vh - 65px);
    padding-top: 20px;
  }
  .top-nav-header a.top-nav-link {
    color: white;
    width: 100%;
    height: 40px;
  }
  .top-nav-header a.top-nav-link:hover {
    color: #da9c05;
    width: 100%;
    height: 40px;
    border-right: black 4px solid;
    background-color: white;
  }
  #top-bar-toggle[type="checkbox"]:checked ~ .top-nav-links {
    display: inherit;
    width: 177px;
    transition: 1s width;
  }
  #top-bar-toggle[type="checkbox"]:checked + .sandwhichBtn {
    background-color: #eee;
  }
}
</style>