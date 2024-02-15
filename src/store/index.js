import { reactive } from 'vue';
export const store = reactive({
    apiUriMovie: 'https://api.themoviedb.org/3/search/movie?api_key=6b67ac9052f72f32a1135373465f12ea&query=',
    apiUriTv: ' https://api.themoviedb.org/3/search/tv?api_key=6b67ac9052f72f32a1135373465f12ea&query=',
    apiKey: '6b67ac9052f72f32a1135373465f12ea',
    moviesList: [],
    tvSeries: [],
});