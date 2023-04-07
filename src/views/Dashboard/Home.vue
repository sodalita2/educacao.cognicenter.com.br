<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import SessionPinia from '../../stores/ProfileSession';
import { LoadingPinia } from "../../stores/LoadingPinia";
import AtividadeBox from "../../components/AtividadeBox.vue";
import { DashboardHeaderPinia } from "../../stores/DashboardHeaderVisible";
import axios from "axios";
import ClipLoader from "vue-spinner/src/ClipLoader.vue"


//const apikey = import.meta.env;
//console.log(apikey);


// PINIAS
const DashboardHeader = DashboardHeaderPinia();
DashboardHeader.isVisible = true;

const ProfileSession = SessionPinia();


const Loading = LoadingPinia();



// REFS
const TotalAtividadesFeitas = ref([]);
const Atividades = ref([]);
const LastPlayedAtividade = ref({});

// STATE REFS
const EstatiscasLoaded = ref(false);


// FUNCTIONS
function setup() {

    axios.get(`https://api.cognicenter.com.br/Auth.php?educacao=1&target=getatividades`, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then( (response) => {

        response.data.forEach(atividade => {
            
            Atividades.value.push(atividade);

        });
        

    });

    axios.get(`https://api.cognicenter.com.br/Auth.php?educacao=1&target=totalatividadesfeitas&profile_id=${ProfileSession.profileID}`, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then( (response) => {

        //console.log(response.data);

        Loading.isLoading = false;
    });

}

function loadEstatisticas() {
    
    axios.get(`http://localhost:3000/api/LastPlayed/${ProfileSession.profileID}`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }).then( (response) => {

       
        LastPlayedAtividade.value = response.data;

        EstatiscasLoaded.value = true;

    });
    
}

setup();
loadEstatisticas();
console.log(Atividades.value);
console.log(ProfileSession.profileID);
console.log(import.meta.env.VITE_API_KEY);
</script>

<template>

    <!-- Container do RouterView -->
    <div class="w-full flex flex-1 flex-col xl:flex-row overflow-y-auto">
        
        <!-- Left Side (Menu com Secoes) -->
        <div class="h-auto w-full xl:w-[70%] flex flex-col items-center bg-white">
            <!-- Barra Atividades -->
            <div class="h-[700px] w-[95%] flex flex-col items-center">
                <!-- Titulo da Secao -->
                <span class="p-6 h-[60px] w-full flex flex-row items-center text-[30px] font-[600] text-[whitesmoke] bg-[#4EEE90] font-lexend tracking-tight
                rounded-tl-md rounded-tr-md">
                    Atividades
                </span>
                <!-- Conteudo da Secao -->
                <div class="w-full flex flex-1 border-[1px] border-[rgba(0,0,0,0.1)] border-t-0">
                    <AtividadeBox v-for="atividade in Atividades" v-bind="atividade">
                        
                    </AtividadeBox>
                </div>
            </div>
        </div>

        <!-- Right Side (Menu com estatisticas do perfil) -->
        <div class="h-auto w-full xl:w-[30%] flex flex-col items-center">
            <!-- Secao Estatisticas -->
            <div v-if="EstatiscasLoaded" class="mt-12 xl:mt-0 h-[700px] w-[95%] flex flex-col items-center bg-[#FFC0CB]">
                <!-- Title -->
                <span class="h-[60px] w-full flex flex-row items-center p-6 font-lexend font-[600] bg-[#FF4365] text-[whitesmoke] text-[30px] tracking-tight
                rounded-tl-md rounded-tr-md"> Estatísticas </span>
                <!-- Barra Last Played Atividade -->
                <div class="h-auto w-full flex flex-col text-black font-lexend">
                    <span class="h-[50px] w-full p-2">
                        Última Atividade: {{ LastPlayedAtividade.ATIVIDADE }}
                    </span>
                    <span class="flex flex-row h-[50px] w-full p-2"> {{ LastPlayedAtividade.LAST_PLAYED }} , Score: {{ LastPlayedAtividade.SCORE }} </span>
                   
                </div>
            </div>
            <!-- Estatisticas Loading -->
            <div v-show="!EstatiscasLoaded" class="mt-12 xl:mt-0 h-[700px] w-[95%] flex flex-col items-center justify-center bg-[#FFC0CB]">
                <clip-loader color="#4EEE90" size="300px"></clip-loader>
            </div>
        </div>


    </div>

</template>