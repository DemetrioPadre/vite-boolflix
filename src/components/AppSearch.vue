<script>
import axios from 'axios';
import { store } from '../store';


export default {
    data() {
        return {
            store,
            searchGeneral: '',
            img: '',

        };
    },

    methods: {
        pippoSearch() {
            axios.get(store.apiUriMovie + this.searchGeneral).then((response) => {
                console.log(response.data.results);
                store.moviesList = response.data.results;
            });
        },
        plutoSearch() {
            axios.get(store.apiUriTv + this.searchGeneral).then((response) => {
                console.log(response.data.results);
                store.tvSeries = response.data.results;
            });
        },
        imgSearch() {

        }
    }
};
</script>

<template>
    <div class="container mt-3 d-flex">
        <input type="text" class="form-control" v-model="searchGeneral" @keyup.enter="pippoSearch(), plutoSearch()"
            placeholder="come ti posso aiutare">
        <button class="btn btn-danger mt-4" @click="pippoSearch(), plutoSearch()">schiacciami</button>
    </div>
    <!-- <div class="results">
        <div class="films ">
            <ul v-for="movie in store.moviesList">
                <li>titolo: {{ movie.title }}</li>
                <li>titolo originale: {{ movie.original_title }}</li>
                <li> lingua: {{ movie.original_language }}</li>
                <li> voto: {{ movie.vote_average / 2 }}</li>
            </ul>
        </div>

        <div class="serietv">
            <ul v-for="serie in store.tvSeries">
                <li>titolo: {{ serie.title }}</li>
                <li>titolo originale: {{ serie.original_title }}</li>
                <li> lingua: {{ serie.original_language }}</li>
                <li> voto: {{ serie.vote_average / 2 }}</li>
            </ul>
        </div>
    </div> -->
</template>

<style lang="scss" scoped>
.ul {
    list-style-type: none;
}
</style>
