<script>
import axios from 'axios';
import { store } from './store';


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
        store.filmList = response.data.results;
      });
    },
    plutoSearch() {
      axios.get(store.apiUriTv + this.searchGeneral).then((response) => {
        console.log(response.data.results);
        store.tvSeries = response.data.results;
      });
    }
  }
};
</script>

<template>
  <div class="container mt-3">
    <input type="text" class="form-control" v-model="searchGeneral" @keyup.enter="pippoSearch(), plutoSearch()"
      placeholder="come ti posso aiutare">
    <button class="btn btn-primary " @click="pippoSearch(), plutoSearch()">schiacciami</button>
  </div>
  <div>
    <ul v-for="movie in store.filmList">
      <li>titolo: {{ movie.title }}</li>
      <li>titolo originale: {{ movie.original_title }}</li>
      <li> lingua: {{ movie.original_language }}</li>
      <li> voto: {{ movie.vote_average / 2 }}</li>
    </ul>
  </div>

  <div>
    <ul v-for="serie in store.tvSeries">
      <li>titolo: {{ serie.title }}</li>
      <li>titolo originale: {{ serie.original_title }}</li>
      <li> lingua: {{ serie.original_language }}</li>
      <li> voto: {{ serie.vote_average / 2 }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/style/general.scss';
</style>
