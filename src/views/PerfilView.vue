<script setup>
import { ref, onMounted, watch } from 'vue';
import $ from 'jquery';
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { LoadingPinia } from "../stores/LoadingPinia";
import DashboardHeader from '../components/DashboardHeader.vue';
import SessionPinia from '../stores/ProfileSession';




const router = useRouter();


const Loading = LoadingPinia();
//Loading.isLoading = true;
// Ja vem true

// PINIAS
const ProfileSession = SessionPinia();






function loginProfile(e) {

    Loading.isLoading = true;

    //console.log($(e.currentTarget).attr('profile_id'));

    
    ProfileSession.profileID = $(e.currentTarget).attr('profile_id');
    ProfileSession.primeiroNome = $(e.currentTarget).attr('primeiro_nome');
    ProfileSession.sobrenome = $(e.currentTarget).attr('sobrenome');
    ProfileSession.idade = $(e.currentTarget).attr('idade');


    router.push({path: '/dashboard'});

}

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

    <!-- Main Container -->
    <div class="h-[100vh] w-full flex flex-col relative">

        <DashboardHeader/>
        <!-- Perfis Container -->
        <div class="flex flex-1 flex-row flex-wrap mt-8 overflow-y-auto">
            <!-- Profile Box -->
            <div v-for="profile in Profiles" class="w-[200px] h-[120px] flex flex-col bg-[#4EEE90] rounded-lg ml-8 mt-6 font-nunito tracking-tight">
                <span class="h-1/2 w-full flex flex-wrap items-center justify-center p-2
                text-[whitesmoke] font-[700] text-[22px]"> {{ profile.PRIMEIRO_NOME+" "+(profile.SOBRENOME).slice(0,1)+"." }} </span>
                <span class="h-1/2 w-full flex items-center justify-center">
                    <span v-bind="profile" @click="loginProfile" class="h-[40px] w-[165px] flex justify-center items-center bg-[#FF4365] text-white text-[19px] font-[600]
                    cursor-pointer"> Entrar </span>
                </span>
            </div>
        </div>

    </div>    

</template>