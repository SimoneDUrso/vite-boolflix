<script>
import { store } from '../micco.js'

export default {
    data() {
        return {
            store
        }
    },

    methods: {
        requestMovie(movie) {
            this.$emit('getMovie', movie)
        }
    },
}
</script>
<template>
    <div class="d-flex container">
        <input type="text" class="form-control" v-model="store.movieInput">
        <button @click="requestMovie(store.movieInput)" class="btn btn-lg btn-primary">Cerca</button>
    </div>
</template>
<style lang="scss" scoped></style>