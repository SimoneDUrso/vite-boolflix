<script>
export default {
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
        }
    }
}
</script>

<template>
    <div>
        <ul>
            <li> {{ movie.title }} </li>
            <li> {{ movie.original_title }} </li>
            <li> <i :class="flags(movie.original_language)"></i></li>
            <li> {{ movie.vote_average }} </li>
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