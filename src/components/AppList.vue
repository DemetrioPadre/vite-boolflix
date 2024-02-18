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
    <div class="container">
        <div class="results mt-5 d-flex">
            <div class="col-3">
                <div class="row films d-flex ">
                    <div class="card mt-5 mb-5  d-flex" v-for="movie in store.moviesList">
                        <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                        <div class="card-body">
                            <h5 class="card-title"> {{ movie.title }} </h5>
                            <p class="card-text">{{ movie.original_title }}</p>
                            <p><span> <img :src="flags(movie.original_language)">{{ movie.original_language }}</span></p>
                            <p>voto: <i class="fa-solid fa-star" style="color: #FFD43B;"
                                    v-for="star in (Math.ceil(movie.vote_average / 2))"></i>
                                <i class="fa-regular fa-star" style="color: #FFD43B;"
                                    v-for="star in 5 - (Math.ceil(movie.vote_average / 2))"></i>
                            </p>

                        </div>
                    </div>
                </div>



            </div>


            <div class="col-3 mx-5">
                <div class="row serietv  d-flex ">
                    <div class="card mt-5 mb-5 d-flex " v-for="serie in store.tvSeries">
                        <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ serie.name }}</h5>
                            <p class="card-text">{{ serie.original_name }}</p>
                            <p><span> <img :src="flags(serie.original_language)">{{ serie.original_language }}</span></p>
                            <p>voto: {{ Math.ceil(serie.vote_average / 2) }}</p>

                        </div>
                    </div>
                </div>



            </div>


        </div>
    </div>
</template>

<style lang="scss scoped">
/* .card:hover{
    cursor:pointer;
} */


</style>
