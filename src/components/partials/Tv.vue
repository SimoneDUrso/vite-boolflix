<script>
import { store } from '../../store';

export default {
    data(){
        return{
            store
        }
    },

    props: {
        serie: Object
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
    },
}
</script>

<template>
    <div class="col-3">
        <div class="bg-image my-2 p-2">
        <div class="movie-image">
            <img :src="getBackdropPath(serie.backdrop_path)" alt="Backdrop Image" class="img-fluid"/>
            <div class="movie-description p-2">
                <ul class="list-unstyled">
                    <li>Title: {{ serie.name }} </li>
                    <li>Original title: {{ serie.original_name }} </li>
                    <li>Language: <i :class="flags(serie.original_language)"></i></li>
                    <li>Voto: 
                        <i v-for="star in stars(serie.vote_average)" :key="`star-full-${star}`" class="fa-solid fa-star"></i> 
                        <i v-for="star in (5 - stars(serie.vote_average))" :key="`star-empty-${star}`" class="fa-regular fa-star"></i>
                    </li>
                </ul>
            </div>
        </div>
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
    
    .movie-image {
        position: relative;
        cursor: pointer;
    }

    .movie-description {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .movie-image:hover .movie-description {
        opacity: 1;
        visibility: visible;
    }
}
</style>