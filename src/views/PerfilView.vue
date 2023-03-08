<script setup>
import { ref } from 'vue';
import axios from "axios";
import { LoadingPinia } from "../stores/LoadingPinia";
import DashboardHeader from '../components/DashboardHeader.vue';


const Loading = LoadingPinia();
//Loading.isLoading = true;
// Ja vem true

const Profiles = ref([]);

function setup() {

    axios.get(`https://api.cognicenter.com.br/Auth.php?educacao=1&target=getprofiles`, {          
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then( (response) => {

        if ( Profiles.value.length > 0 ) {

            Profiles.value = [];

        }

        if ( response.data.length > 0 ) {

            response.data.forEach(profile => {
                Profiles.value.push(profile);
            });

        }

        Loading.isLoading = false;

    })

}


setup();
</script>

<template>

    <div class="h-full w-full flex flex-col">
        <DashboardHeader/>
    </div>    

</template>