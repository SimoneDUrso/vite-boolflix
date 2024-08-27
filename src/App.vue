<script>
import { store } from "./micco";
import axios from "axios";
import Header from "./components/Header.vue";
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
      let urlMovie = `${store.endPoint}${store.searchMovie}${store.keyApi}`

      axios.get(`${urlMovie}&query=${movie}`).then((result) => {
        this.store.movieArray = result.data.results
        console.log(store.movieArray)
      })

      let urlTv = `${store.endPoint}${store.searchTv}${store.keyApi}`
      axios.get(`${urlTv}&query=${movie}`).then((result) => {
        store.seriesArray = result.data.results
        console.log(store.movieArray)
      })

    }
  }
}
</script>

<template>
  <div>
    <Header @getMovie="getMovie" />
    <Main :movie="store.movieArray" :series="store.seriesArray" />
  </div>
</template>
<style lang="scss">
@use "./style/generals.scss";
</style>
