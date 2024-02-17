<script>

import { store } from '../store';


export default {
    data() {
        return {
            store,
        };
    },



    created() {

    },


    methods: {
        flags(idioma) {
            if (idioma == 'en') return "https://flagsapi.com/GB/flat/24.png";
            if (idioma == 'fr') return "https://flagsapi.com/FR/flat/16.png";
            if (idioma == 'it') return "https://flagsapi.com/IT/flat/16.png";
            if (idioma == 'de') return "https://flagsapi.com/DE/flat/16.png";
            if (idioma == 'es') return "https://flagsapi.com/ES/flat/16.png";


        },
    }
}

</script>


<template>
    <div class="results mt-5 mx-5">
        <div class="films ">
            <ul v-for="movie in store.moviesList">
                <li>titolo: {{ movie.title }}</li>
                <li>titolo originale: {{ movie.original_title }}</li>
                <li> lingua: <span> <img :src="flags(movie.original_language)">{{ movie.original_language }}</span>
                </li>
                <li> voto: {{ movie.vote_average / 2 }}</li>
                <li> <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt=""></li>
            </ul>
        </div>

        <div class="serietv">
            <ul v-for="serie in store.tvSeries">
                <li>titolo: {{ serie.title }}</li>
                <li>titolo originale: {{ serie.original_title }}</li>
                <li> lingua: <span> <img :src="flags(serie.original_language)">{{ serie.original_language }}</span>
                </li>
                <li> voto: {{ serie.vote_average / 2 }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss scoped"></style>