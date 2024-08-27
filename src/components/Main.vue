<script>
import { store } from '../store';
import Movie from './partials/Movie.vue';
import Tv from './partials/Tv.vue';

export default {
    components: {
        Movie,
        Tv
    },

    data() {
        return {
            store
        }
    },

    props: {
        movie: Object,
        series: Array
    },
}
</script>
<template>
    <div class="container ps-5 text-white">
        <div class="row">
            <h2>Movies</h2>
                <Movie v-for="movie, index in store.movieArray" :movie="movie" :key="index" />
        </div>
        <div class="row">
            <h2>Tv Series</h2>
            <Tv v-for="serie in series" :serie="serie" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
</style>