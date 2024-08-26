<script>
export default {
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
        }
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
<style lang="">

</style>