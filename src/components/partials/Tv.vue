<script>
import { store } from '../../Store';

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
    <div>
        <ul class="list-unstyled">
            <li> <img :src="getBackdropPath(serie.backdrop_path)" alt="Backdrop Image" /></li>
            <li> {{ serie.name }} </li>
            <li> {{ serie.original_name }} </li>
            <li> <i :class="flags(serie.original_language)"></i></li>
            <li>Voto: <i v-for="star in stars(serie.vote_average)" :key="serie.id" class="fa-solid fa-star" >
            </i> 
            <i v-for="star in (5 - stars(serie.vote_average))" :key="serie.id" class="fa-regular fa-star"></i>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.other {
    width: 21px;
    height: 16px;
    border: 1px solid black;
    display: flex;
}
</style>