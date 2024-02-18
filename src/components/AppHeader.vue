<script>
import axios from 'axios';
import { store } from '../store';
import AppSearch from './AppSearch.vue';
import AppSeries from './AppSeries.vue';



export default {
    data() {
        return {
            store,
            searchGeneral: ''
        };
    },
    components: { AppSearch, AppSeries },
};
</script>

<template>
    <div class="container ">
        <div class="filmLink"><button class="film btn btn-danger"><a href="AppSearch.vue">
                    <p>Lista Film</p>
                </a></button></div>
        <div>
            <h1>BENVENUTI IN DEMETRIOTV<br>cosa guardiamo oggi</h1>

        </div>
        <div class="tvLink"><button class="serie btn btn-danger"><a href="AppSeries.vue">
                    <p>Serie v</p>
                </a></button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    background-color: black;
    display: flex;
    height: 100px;
    justify-content: space-between;
    border-radius: 10px;

    h1 {
        color: red;
    }

    p {
        color: white;
    }

    .film,
    .serie {
        margin-top: 20px;
        list-style-type: none;
        color: white;
    }


}
</style>