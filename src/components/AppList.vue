<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        };
    }
}

</script>


<template>
    <div class="results">
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
    </div>
</template>

<style lang="scss scoped"></style>