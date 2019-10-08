<template>
  <div>
    <section class="states-container container-1">
      <label>Filter By State</label>
      <ul class="states-list">
        <li
          class="state"
          v-for="state in states"
          :key="state.abreviation"
          v-on:click="setStateFilter(state.name)"
        >{{state.name}}</li>
      </ul>
    </section>
    <h1>News Feed</h1>
    <section v-for="article in news" class="list-item-1">
      <a :href="article.url">
        <picture>
          <img :src="article.urlToImage" alt="News image" srcset />
        </picture>
        <article>
          <p>{{article.source.name}}</p>
          <h3>{{article.title}}</h3>
          <p>{{article.description}}</p>
          <span>Author:{{article.author}}</span>
          <br />
          <span class="publish-date">{{article.publishedAt}}</span>
        </article>
      </a>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import states from "../../assets/scripts/states.json";
export default {
  data() {
    return {
      states: states,
      filterState: "",
      searchQuery: "+Hemp Flower, cbd flower",
      news: []
    };
  },
  methods: {
    async getNews() {
      try {
        var api = "6766d90dcc7a4eee8214fcc862085d03";
        var country = "us";
        let url = `https://newsapi.org/v2/everything?q=${this.searchQuery} ${this.filterState}&apiKey=${api}&sortBy=popularity&qInTitle="hemp flower"&sortBy=relevancy`;
        let newsFound = await axios.get(url);
        this.news = await newsFound.data.articles;
        console.log(this.news);
      } catch (err) {
        console.log(err);
      }
    },
    async setStateFilter(state) {
      //Set filterState variable to clicked state
      this.filterState = await state;
      //Retrieve news again
      await this.getNews();
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style scoped>
.list-item-1 {
  padding: 25px;
  margin: 10px;
  height: auto;
  display: inline-block;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 13px lightgray;
  box-shadow: 2px 2px 13px lightgray;
}
.list-item-1 a {
  cursor: pointer;
  text-decoration: none;
}
.list-item-1 img {
  height: 128px;
  float: right;
}
.list-item-1 p {
  margin: 0;
  padding: 0;
  color: #777;
}

.list-item-1 article {
  display: inline-block;
  width: calc(100% - 260px);
}
.list-item-1 span {
  margin: 0;
  padding: 0;
}
.list-item-1:hover {
  background: rgb(234, 234, 234);
  cursor: pointer;
}
.list-item-1 .publish-date {
  color: #888;
  font-style: normal;
  font-size: 12px;
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