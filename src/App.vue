<script>
// import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import AppSeries from './components/AppSeries.vue';
import AppList from './components/AppList.vue';




export default {
  data() {
    return { store };
  },
  components: { AppHeader, AppSearch, AppSeries, AppList, },


};
</script>

<template>
  <AppHeader></AppHeader>
  <AppSearch></AppSearch>
  <AppSeries></AppSeries>
  <AppList></AppList>
</template>

<style lang="scss" >
@use './assets/style/general.scss';
</style>
