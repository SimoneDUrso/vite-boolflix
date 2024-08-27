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
        
    },
}
</script>

<template>
    <div>
        <ul>
            <li> {{ serie.name }} </li>
            <li> {{ serie.original_name }} </li>
            <li> <i :class="flags(serie.original_language)"></i></li>
            <li> {{ serie.vote_average }} </li>
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