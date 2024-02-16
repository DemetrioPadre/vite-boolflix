<script>
// import axios from 'axios';
import { store } from './store';
import AppSearch from './components/AppSearch.vue';
import AppList from './components/AppList.vue';



export default {
  data() {
    return { store };
  },
  components: { AppSearch, AppList },


};
</script>

<template>
  <AppSearch></AppSearch>
  <AppList></AppList>
</template>

<style lang="scss" >
@use './assets/style/general.scss';
</style>
