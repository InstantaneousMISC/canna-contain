<template>
  <div>
    <header class="top-nav-header">
      <div class="top-logo">
        <a v-on:click="pushTo('home')">
          <img
            src="../assets/images/Top shelf Hemp Reserve logo 1 - short.png"
            alt="Top Shelf Hemp COmpany White logo with black text and a gold box with top shelf directly above it and hemp reserve running through the center of it "
          />
        </a>
      </div>
      <input type="checkbox" id="top-bar-toggle" />
      <label class="sandwhichBtn" for="top-bar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div class="seperator"></div>
      <nav class="top-nav-links" id="top-vav-bar">
        <a class="top-nav-link" v-on:click="pushTo('signUp')">Sign Up</a>
        <!-- Login/logout buttons -->
        <a v-if="isLoggedIn === false" class="top-nav-link" v-on:click="pushTo('login')">Login</a>
        <a v-else class="top-nav-link" v-on:click="logOut">Logout</a>
        <!-- -->
      </nav>
    </header>
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
.top-nav-header {
  height: 65px;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.top-nav-header .top-logo {
  height: 65px;
  background: white;
  display: flex;
  align-items: center;
}
.top-nav-header .top-logo:hover {
  background-color: #eee;
}

.top-nav-header .top-logo img {
  display: block;
  width: 100px;
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