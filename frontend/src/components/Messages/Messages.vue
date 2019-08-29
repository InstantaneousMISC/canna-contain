<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>Messages</v-toolbar>
      <v-list>
        <v-list-item v-for="message in messages" @click v-bind:key="message._id">
          <v-list-item-content>
            <v-list-item-title v-text="message.message"></v-list-item-title>
            <a @click="deleteMessage(message._id)" class="delet-msg-btn">Delete</a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages:
        this.$store.state.messages.length > 0
          ? this.$store.state.messages
          : "No Messages To Displa",
      note: ""
    };
  },
  async created() {
    this.retrieveMessages();
  },
  methods: {
    //Delete messages
    async deleteMessage(message) {
      console.log("Message deleted with an id of " + message);
      let isRemoved = await axios.delete(
        `http://localhost:3000/api/messages/${message}`
      );
      this.note = isRemoved;
      this.retrieveMessages();
      await this.$store.commit("removeMessage", message);
    },

    //Retrieve messages
    async retrieveMessages() {
      //Get messages from backend
      const retrievedMessages = (await axios.get(
        "http://localhost:3000/api/messages"
      )).data;
      //Store messages in state
      await this.$store.commit("addMessages", retrievedMessages);
      //store messages in data
      this.messages = this.$store.state.messages;
      console.log(this.messages);
    }
  }
};
</script>

<style scoped>
.delet-msg-btn {
  position: absolute;
  right: 20px;
}
</style>