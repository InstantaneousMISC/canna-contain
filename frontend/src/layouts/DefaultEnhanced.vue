<template>
  <div>
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
          <a v-if="isLoggedIn === false" class="sign-in" v-on:click="pushTo('/login')">Sign In</a>
          <a v-else class="sign-out" v-on:click="logOut">Sign Out</a>
          <!-- -->
          <!-- Sign Up Link -->
          <a
            v-if="isLoggedIn === false"
            class="create-account"
            v-on:click="pushTo('/signUp')"
          >Create Account</a>
          <a v-else class="user-account" v-on:click="pushTo('/account')">Account</a>
        </section>
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
        <div class="seperator"></div>
        <section class="searchbar-contain">
          <form class="search-form">
            <i class="fa fa-search search-icon"></i>
            <input type="text" class="search-input" />
          </form>
        </section>
        <section class="nav-site-options nav-options-contain">
          <a href="#" class="my-cart">My Cart</a>
          <a href="#" class="account-support">Account Support</a>
        </section>
      </nav>
      <!-- <header styles="height:200px" class="display-header">
        <div class="top-logo">
          <a v-on:click="pushTo('home')">
            <img
              src="../assets/images/Top shelf Hemp Reserve logo 1 - short.png"
              alt="Top Shelf Hemp COmpany White logo with whiye text and a gold box with top shelf directly above it and hemp reserve running through the center of it "
            />
          </a>
        </div>
      </header>-->
      <header class="top-nav-header">
        <input type="checkbox" id="top-bar-toggle" />
        <label class="sandwhichBtn" for="top-bar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <!-- Use to split containers<div class="seperator"></div> -->
        <nav class="top-nav-links" id="top-vav-bar">
          <a class="top-nav-link" v-on:click="pushTo('/strains')">Strains</a>
          <a class="top-nav-link" v-on:click="pushTo('/providers')">Providers</a>
          <a class="top-nav-link">Reviews</a>
          <a class="top-nav-link">Learning</a>
          <a class="top-nav-link">Shop</a>
        </nav>
      </header>
      <!-- <nav class="secondary-nav-header">
        <a>Blogs</a>
        <a>Events</a>
        <a>Contests</a>
        <a>Directory</a>
        <a class="top-nav-link">Blog</a>
        <a class="top-nav-link">Industry</a>
      </nav>-->
      <router-view />
    </div>
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
      this.$router.push({ path: "/home" });
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
  flex-flow: wrap row;
  align-items: center;
  padding: 0 25px;
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  z-index: 999;
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
  order: 1;
}
.user-options-nav .icon-seperator-home:hover {
  cursor: pointer;
}
.nav-account-options.nav-options-contain {
  order: 2;
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
  border-right: 1px solid black;
}
.user-options-nav .nav-options-contain .account-support {
  padding-right: 0px;
}
.user-options-nav .searchbar-contain .search-form {
  position: relative;
}
.user-options-nav .searchbar-contain .search-form .search-input {
  border: 1px transparent;
  border-bottom: #878787 solid 1px;
  height: 29px;
  padding-left: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  border-radius: 0px;
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
  order: 3;
}
.user-options-nav .seperator {
  order: 4;
}
.nav-site-options.nav-options-contain {
  order: 5;
}
.searchbar-contain {
  order: 6;
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
  margin-top: 49px;
}
.top-nav-header {
  justify-content: center;
  height: 47px;
  background: #e3e3e3;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: fixed;
  top: 45px;
  z-index: 999;
  width: 100%;
}
.secondary-nav-header {
  justify-content: center;
  height: 34px;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: sticky;
  top: 105px;
  position: sticky;
  top: 105px;
  z-index: 999;
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
  width: 87px;
  text-align: center;
  vertical-align: middle;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  color: #4e4e4e;
  padding: 2px;
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

.seperator,
.seperate-items {
  flex-grow: 1;
}
@media (max-width: 896px) {
  .display-header {
    margin-top: 93px;
  }
  .searchbar-contain {
    width: calc(100% - 107px);
    order: 1;
  }
  .user-options-nav .searchbar-contain .search-form .search-input {
    width: 60%;
  }
  .user-options-nav .icon-seperator-home {
    order: 3;
  }
  .nav-account-options.nav-options-contain {
    order: 6;
  }
  .nav-account-options.nav-options-contain {
    order: 4;
  }
  .nav-social-icons {
    order: 2;
  }
  .user-options-nav .seperator {
    order: 5;
  }
  .user-options-nav {
    /* height: 92px;
    align-items: flex-end; */
  }
  .searchbar-contain {
    /* position: absolute;
    top: 0px;
    width: 100%;
    left: 0;
    background: white; */
  }
  .user-options-nav .searchbar-contain .search-form {
    /* width: 93%;
    margin: auto; */
  }
  nav.top-nav-links {
    top: 225px;
  }
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
    top: 93px;
    left: 0;
    flex-flow: nowrap column;
    background-color: #da9c05;
    width: 177px;
    height: calc(100vh - 65px);
    padding-top: 20px;
    text-transform: uppercase;
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
@media (max-width: 529px) {
  .user-options-nav {
    flex-flow: column;
  }
  .display-header {
    margin-top: 226px;
  }
  .searchbar-contain {
    width: 100%;
    order: 5;
  }
  .user-options-nav .searchbar-contain .search-form .search-input {
    width: 100%;
  }
  .user-options-nav .icon-seperator-home {
    order: 1;
  }
  .nav-account-options.nav-options-contain {
    order: 3;
    display: flex;
    width: 100%;
    text-align: center;
    padding: 0;
  }
  .nav-account-options.nav-options-contain a:hover,
  .nav-site-options.nav-options-contain a:hover {
    background: floralwhite;
  }

  .nav-account-options.nav-options-contain a,
  .nav-site-options.nav-options-contain a {
    width: 50%;
    padding: 10px;
  }
  .nav-site-options.nav-options-contain {
    order: 4;
    display: flex;
    width: 100%;
    text-align: center;
    padding: 0;
  }
  .nav-social-icons {
    order: 2;
  }
  .user-options-nav .seperator {
    display: none;
  }
}
</style>