<script>
import { store } from "./store";
import axios from "axios";
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    Header,
    Main
  },

  methods: {
    getMovie(movie) {
      let url = `${store.endPoint}${store.searchMovie}${store.keyApi}`

      axios.get(`${url}&query=${movie}`).then((result) => {
        this.store.movieArray = result.data.results
        console.log(store.movieArray)

      })
    }
  }
}
</script>

<template>
  <div>
    <Header @getMovie="getMovie" />
    <Main :movie="store.movieArray" />
  </div>
</template>
<style lang="scss">
@use "./style/generals.scss";
</style>
