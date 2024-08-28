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

        getposterPath(path) {
            if(path == null ){
                return `https://placehold.co/300x450?text=Copertina%20non%20trovata`
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
        <div class="card bg-dark text-white my-2">
            <div class="movie-image rounded-3">
                <img :src="getposterPath(movie.poster_path)" alt="Poster Image" class="rounded-3"/>
                <div class="card-img-overlay movie-description">
                    <ul class="list-unstyled">
                        <li><strong>Title:</strong> {{ movie.title }} </li>
                        <li><strong>Original title:</strong> {{ movie.original_title }} </li>
                        <li><strong>Language:</strong> <i :class="flags(movie.original_language)"></i></li>
                        <li><strong>Voto:</strong> 
                            <i v-for="star in stars(movie.vote_average)" :key="`star-full-${star}`" class="fa-solid fa-star"></i> 
                            <i v-for="star in (5 - stars(movie.vote_average))" :key="`star-empty-${star}`" class="fa-regular fa-star"></i>
                        </li>
                        <li><strong>Overview:</strong> {{ movie.overview }} </li>
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
    display: flex;
    
    .movie-image {
        position: relative;
        cursor: pointer;
        border: 2px solid black;
        height: 400px;
        width: 300px;

        img{
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
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
        max-height: 100%; 
        overflow-y: auto;
    }

    .movie-image:hover .movie-description {
        opacity: 1;
        visibility: visible;
    }
}
</style>