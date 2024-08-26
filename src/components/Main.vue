<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    props: {
        movie: Object
    },

}
</script>
<template>
    <div>
        <ul v-for="movie, index in store.movieArray" :key="index">
            <li> {{ movie.title }} </li>
            <li> {{ movie.original_title }} </li>
            <li> <i :class="flags(movie.original_language)"></i></li>
            <li> {{ movie.vote_average }} </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped></style>