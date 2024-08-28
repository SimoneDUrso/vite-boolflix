import { reactive } from "vue";

export const store = reactive({
    keyApi: "?api_key=e99307154c6dfb0b4750f6603256716d",
    endPoint: "https://api.themoviedb.org/3",
    searchMovie: "/search/movie",
    searchTv: "/search/tv",
    movieArray: [],
    seriesArray: [],
    movieInput: '',
    topRatedArray: [],
})