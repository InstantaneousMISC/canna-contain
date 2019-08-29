<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>New Message</v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field label="message" required v-model="messageBody"></v-text-field>
              <v-btn class="mr-4" @click.prevent="submit">submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messageBody: ""
    };
  },
  methods: {
    async submit() {
      try {
        //Send input text to be stored in db
        const messageSent = await axios.post(
          "http://localhost:3000/api/messages/",
          {
            message: this.messageBody
          }
        );

        console.log("message sent is " + messageSent.data);
        this.$store.commit("addNewMessage", messageSent.data);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>