<template>
  <div>
    <section class="signUpFormContaier">
      <section class="title-header-1">
        <h1>Sign Up</h1>
      </section>
      <form class="form-1" id="signUpForm" autocomplete="on">
        <div v-for="error in errors" class="error-notification">{{error.msg}}</div>
        <input type="text" placeholder="Enter Full Name (Optional)" v-model="user.name" />
        <input type="text" placeholder="Enter UserName" v-model="user.userName" />
        <input type="text" placeholder="Enter Email" v-model="user.email" />
        <input type="password" placeholder="Enter Password" v-model="user.password" />
        <input type="password" placeholder="Verify Password" />
        <input type="submit" value="Submit" class="submit-btn-green" v-on:click="register" />
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
        name: "",
        userName: "",
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    //Register user
    async register() {
      let registered = await axios.post(
        "http://localhost:3000/api/users/signup",
        this.user
      );
      //if registration returns with errors
      if (registered.data.errors) this.errors = registered.data.errors;
      //if registration passes store returned token payload in state
      await this.$store.commit("login", registered.data);
      console.log(this.$store.state.token);
      console.log(this.$store.state.user.id);
      this.$router.push({ path: "/dash" });
    }
  }
};
</script>

<style scoped>
.title-header-1 {
  background: black;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 65px;
}
.title-header-1 h1 {
  font-size: 21px;
  margin-left: 20px;
}
.signUpFormContaier {
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