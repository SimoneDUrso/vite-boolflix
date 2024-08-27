<script>
import { store } from '../../store';

export default {
    data(){
        return{
            store
        }
    },

    props: {
        movie: Object
    },

    methods: {
        flags(lang) {
            switch (lang) {
                case 'it':
                    return "fi fi-it"
                case 'en':
                    return "fi fi-gb"
                case 'us':
                    return "fi fi-us"
                case 'ja':
                    return "fi fi-jp"
                default:
                    return "other"
            }
        },

        getBackdropPath(path) {
            if(path == null ){
                return `https://placehold.co/342x192?text=Copertina%20non%20trovata`
            }
            else{
                return `https://image.tmdb.org/t/p/w342/${path}`;
            }
        },

        stars(vote){
            return Math.round(vote / 2)
        },
        
    }
}
</script>

<template>
            <div class="col-3">
                <div class="bg-image border border-1 my-2 p-2">
                    <ul class="list-unstyled">
                        <li> <img :src="getBackdropPath(movie.backdrop_path)" alt="Backdrop Image" class="img-fluid"/></li>
                        <li>Title: {{ movie.title }} </li>
                        <li>Original title: {{ movie.original_title }} </li>
                        <li>Language: <i :class="flags(movie.original_language)"></i></li>
                        <li>Voto: <i v-for="star in stars(movie.vote_average)" :key="movie.id" class="fa-solid fa-star" >
                        </i> 
                        <i v-for="star in (5 - stars(movie.vote_average))" :key="movie.id" class="fa-regular fa-star"></i>
                        </li>
                    </ul>
                </div>
            </div>
</template>
<style lang="scss" scoped>
.other {
    width: 21px;
    height: 16px;
    border: 1px solid white;
    display: flex;
}

.col-3{
    min-height: 350px;
    display: flex;
}
</style>