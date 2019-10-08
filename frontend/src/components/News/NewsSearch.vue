<template>
  <div>
    <h1>Hemp News</h1>
    <!-- <form class="newsSearchForm">
      <br />
      <div class="text-btn-combo" hide>
        <input
          type="text"
          name="searchString"
          id="NewsSearchString"
          placeholder="Enter A Search Value"
          class="text-input"
        />
        <button class="green-btn1">SEARCH</button>
      </div>
      <br />
    </form>-->
  </div>
</template>

<script>
import states from "../../assets/scripts/states.json";
export default {
  data() {
    return {
      states: states,
      filterState: ""
    };
  },
  created() {
    console.log(states);
  },
  methods: {}
};
</script>

<style scoped>
.newsSearchForm {
  border: solid 1px #e4e4e4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 13px lightgray;
}
.states-list {
  display: flex;
  flex-flow: wrap column;
  height: 241px;
}
.states-list li {
  padding-right: 10px;
}
.states-list li:hover {
  background-color: rgb(234, 234, 234);
}

.states-container {
  padding: 20px 20px;
}

.states-container .states-list {
  padding: 10px 20px;
}
.states-container .states-list .state {
  font-size: 12px;
  color: rgb(0, 90, 144);
  cursor: pointer;
  list-style-type: none;
}
</style>