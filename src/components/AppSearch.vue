<script>
import axios from 'axios';
import { store } from '../store';


export default {
    data() {
        return {
            store,
            searchGeneral: '',



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
        allSearch() {
            this.pippoSearch();
            this.plutoSearch();
        },

        //chiedere perchè o come devo fare per legarlo ad applist
        //     flags(idioma) {
        //         if (idioma == 'en') return "https://flagsapi.com/GB/flat/24.png";
        //         if (idioma == 'fr') return "https://flagsapi.com/FR/flat/16.png";
        //         if (idioma == 'it') return "https://flagsapi.com/IT/flat/16.png";
        //         if (idioma == 'de') return "https://flagsapi.com/DE/flat/16.png";
        //         if (idioma == 'es') return "https://flagsapi.com/ES/flat/16.png";


        //     },
    }

};
</script>

<template>
    <div class="container mt-3 d-flex">
        <input type="text" class="form-control" v-model="searchGeneral" @keyup.enter="allSearch()"
            placeholder="come ti posso aiutare">
        <button class="btn btn-danger mt-4" @click="allSearch()">schiacciami</button>
    </div>
</template>

<style lang="scss" scoped>
.ul {
    list-style-type: none;
}
</style>
