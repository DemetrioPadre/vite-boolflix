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
      axios.get(store.apiUri + this.searchGeneral).then((response) => {
        console.log(response.data.results);
        store.movies = response.data.results;
      });
    }
  }
};
</script>

<template>
  <div class="container mt-3">
    <input type="text" class="form-control" v-model="searchGeneral" @keyup.enter="pippoSearch()">
    <button class="btn btn-primary " @click="pippoSearch()">schiacciami</button>
  </div>
  <div>
    <ul v-for="movie in store.movies">
      <li>titolo: {{ movie.title }}</li>
      <li>titolo originale: {{ movie.original_title }}</li>
      <li> lingua: {{ movie.original_language }}</li>
      <li> voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/style/general.scss';
</style>
