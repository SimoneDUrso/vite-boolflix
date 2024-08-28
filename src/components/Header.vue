<script>
import { store } from '../store.js'

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
    <div class="d-flex container-full bg-dark px-5">
        <div class="w-100 row justify-content-between">
            <div class="col-6">
                <img src="https://boolfix-jdonzelli.netlify.app/img/logo.png" alt="">
            </div>
            <div class="col-6 d-flex align-items-center">
                <input @keyup.enter="requestMovie(store.movieInput)" type="text" class="form-control h-50" v-model="store.movieInput" placeholder="Search">
                <button @click="requestMovie(store.movieInput)" class="btn btn-md btn-primary h-50">Cerca</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>