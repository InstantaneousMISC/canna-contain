<template>
  <div>
    <br />
    <NewMessage />
    <br />
    <Messages />
  </div>
</template>

<script>
import NewMessage from "./NewMessage";
import Messages from "./Messages";
import DefaultLayout from "../../layouts/default";
export default {
  data() {
    return {
      NewMessageForm: NewMessage,
      MessagesList: Messages,
      layout: "DefaultLayout"
    };
  },
  components: {
    NewMessage,
    Messages
  },
  async created() {
    await this.$store.commit("addLayout", this.layout);
    console.log("layout added");
    console.log("Layout set to " + this.$store.getters.LAYOUT);
  }
};
</script>

<style scoped>
</style>