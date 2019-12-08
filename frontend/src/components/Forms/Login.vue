<template>
  <div>
    <section class="loginFormContaier">
      <section class="title-header-1">
        <h1>Login</h1>
      </section>
      <form class="form-1" id="loginForm" autocomplete="on">
        <div v-for="error in errors" class="error-notification">{{error.msg}}</div>
        <input
          type="email"
          placeholder="Enter Email"
          v-model="user.email"
          autocomplete="on"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          v-model="user.password"
          autocomplete="on"
          required
        />
        <input type="submit" value="Submit" class="submit-btn-green" v-on:click="login" />
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: [{}]
    };
  },
  methods: {
    //Register user
    async login() {
      try {
        let loggedIn = await axios.post(
          "http://localhost:3000/api/users/login",
          this.user
        );
        //if registration returns with errors
        if (loggedIn.data.errors) {
          //clear previous errors and add new validation errors everytime there is new submission
          this.errors = [{}];
          console.log("here");
          this.errors.push(loggedIn.data.errors);
        } else {
          //if registration passes store returned token payload in state
          await this.$store.commit("login", loggedIn.data);
          localStorage.setItem('token', loggedIn.data.token)
          await this.$router.push({ path: "/dash" });
          console.log("signed in", loggedIn.data.token);
        }
      } catch (err) {
        this.errors.push({ msg: err });
      }
    }
  }
};
</script>

<style scoped>
.title-header-1 {
  background: #e3e3e3;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 43px;
}
.title-header-1 h1 {
  font-size: 18px;
  margin-left: 20px;
}
.loginFormContaier {
  box-shadow: 0px 2px 10px gray;
  width: 40%;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
}
h1 {
  text-align: center;
}
.form-1 {
  width: 100%;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
}

.form-1 input {
  width: 100%;
  border-bottom: solid 1px black;
  margin: 10px 0;
  padding: 8px;
}
.form-1 input:focus {
  border-bottom: 1px solid #da9c05;
}
.form-1 input.submit-btn-green {
  color: white;
  background-color: green;
  border: solid 3px green;
  border-bottom: solid 3px green;
  border-radius: 5px;
  width: 200px;
  box-shadow: 0px 2px 5px gray;
}
.form-1 input.submit-btn-green:hover {
  cursor: pointer;
  color: green;
  background-color: white;
}
.error-notification {
  color: red;
  display: block;
  width: 100%;
}
</style>