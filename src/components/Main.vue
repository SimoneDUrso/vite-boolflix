<script>
import { store } from '../store';
import Movie from './partials/Movie.vue';
import Tv from './partials/Tv.vue';
import topRated from './partials/topRated.vue';

export default {
    components: {
        Movie,
        Tv,
        topRated
    },

    data() {
        return {
            store
        }
    },

    props: {
        movie: Object,
        series: Array,
        topRated: Array,
        showTopRated: Boolean
    },
}
</script>
<template>
    <div class="container ps-5 text-white">
        <div class="row mt-5">
            <h2>Movies</h2>
                <topRated v-if="showTopRated" v-for="(topFilm, index) in topRated" :topFilm="topFilm" :key="index"/>
                <Movie v-for="movie, index in store.movieArray" :movie="movie" :key="index" />
        </div>
        <div class="row mt-5">
            <h2>Tv Series</h2>
            <Tv v-for="serie in series" :serie="serie" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
h2{
    color: #dc1a28;
}
</style>