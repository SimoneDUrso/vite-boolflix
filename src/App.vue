<script>
import { store } from "./store";
import axios, { Axios } from "axios";
import Header from "./components/Header.vue";
import Main from './components/Main.vue';

export default {
  data() {
    return {
      store,
      showTopRated: true,
    }
  },

  components: {
    Header,
    Main
  },

  created(){
    this.topRatedMovies();
  },

  methods: {
    getMovie(movie) {
      if(movie === ''){
        this.showTopRated = true;
      }
      else {
        this.showTopRated = false;
      }

      let urlMovie = `${store.endPoint}${store.searchMovie}${store.keyApi}`

      axios.get(`${urlMovie}&query=${movie}`).then((result) => {
        this.store.movieArray = result.data.results
        console.log(store.movieArray)
      })

      let urlTv = `${store.endPoint}${store.searchTv}${store.keyApi}`
      axios.get(`${urlTv}&query=${movie}`).then((result) => {
        store.seriesArray = result.data.results
        console.log(store.seriesArray)
      });
    },

    topRatedMovies() {
      let urlMovie = `https://api.themoviedb.org/3/movie/top_rated${store.keyApi}`;
      axios.get(urlMovie).then((result) => {
      this.store.topRatedArray = result.data.results;
    });

    let urlSeries = `https://api.themoviedb.org/3/serie/top_rated${store.keyApi}`;
      axios.get(urlSeries).then((result) => {
      this.store.topRatedArray = result.data.results;
    });
  }
}
}
</script>

<template>
  <div>
    <Header @getMovie="getMovie" />
    <Main :movie="store.movieArray" :series="store.seriesArray" :topRated="store.topRatedArray" :showTopRated="showTopRated"/>
  </div>
</template>
<style lang="scss">
@use "./style/generals.scss";
</style>
