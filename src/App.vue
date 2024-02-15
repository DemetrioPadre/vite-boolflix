<script>
import axios from 'axios';
import { store } from './store';
import Appmain from './components/Appmain.vue';


export default {
  data() {
    return {
      store
    };
  },
  components: { Appmain }


};
</script>

<template>
  <Appmain></Appmain>
</template>

<style lang="scss" scoped>
@use './assets/style/general.scss';
</style>
