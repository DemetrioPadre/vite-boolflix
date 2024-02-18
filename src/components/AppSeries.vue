<script>
import axios from 'axios';
import { store } from '../store';
import AppHeader from './AppHeader.vue';

export default {
    data() {
        return {
            store,
            searchGeneral: '',

        };

    },
    // components: { AppHeader },
    methods: {
        // pippoSearch() {
        //     axios.get(store.apiUriMovie + this.searchGeneral).then((response) => {
        //         console.log(response.data.results);
        //         store.moviesList = response.data.results;
        //     });
        // },
        plutoSearch() {
            axios.get(store.apiUriTv + this.searchGeneral).then((response) => {
                console.log(response.data.results);
                store.tvSeries = response.data.results;
            });
        },
        allSearch() {
            // this.pippoSearch();
            // this.plutoSearch();
        },

    }

};
</script>
<!-- v-if="store.searchShowFalse" -->
<template>
    <div class="container mt-3 d-flex">
        <div class=" col-6">
            <input type="text" class="form-control" v-model="searchGeneral" @keyup.enter="plutoSearch()"
                placeholder="come ti posso aiutare">
            <button class="btn btn-danger" @click="plutoSearch()">DEMETRIOSERIE</button>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>
