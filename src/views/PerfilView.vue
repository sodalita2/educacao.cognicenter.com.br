<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { LoadingPinia } from "../stores/LoadingPinia";
import DashboardHeader from '../components/DashboardHeader.vue';
import CadastroDivPinia from '../stores/CadastroOpen';
import SessionPinia from '../stores/ProfileSession';


const router = useRouter();


const Loading = LoadingPinia();
//Loading.isLoading = true;
// Ja vem true

// PINIAS
const cadastroDiv = CadastroDivPinia();
const ProfileSession = SessionPinia();

const cadastroPrimeiroNome = ref(null);
const cadastroSobrenome = ref(null);
const cadastroIdade = ref(null);

function cadastrarPerfil() {

    Loading.isLoading = true;

    axios.put(`https://api.cognicenter.com.br/Auth.php?educacao=1&target=createprofile`, {          
    data: {
        PRIMEIRO_NOME: cadastroPrimeiroNome.value.value,
        SOBRENOME: cadastroSobrenome.value.value,
        IDADE: cadastroIdade.value.value,
    },                      
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin': '*' }
    }).then( (response) => {

        setup();

        cadastroDiv.isOpen = false;

    })

}

function loginProfile(e) {

    Loading.isLoading = true;

    ProfileSession.profileID = e.currentTarget.id;

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
    <div class="h-full w-full flex flex-col relative">
        <!-- Pagina Cadastro Absolute -->
        <div v-if="cadastroDiv.isOpen" class="w-full h-full absolute flex flex-col bg-white z-30">
            <!-- Barra com botao fechar -->
            <div class="w-full h-[100px] flex flex-row">
                <span @click="cadastroDiv.isOpen = false" class="w-[80px] h-2/3 flex items-center
                justify-center font-[900] text-[44px] text-white bg-[#4EEE90] m-4 rounded-lg cursor-pointer"> &#60; </span>
            </div>
            <!-- Container Formulario -->
            <div class="flex flex-1 flex-col items-center justify-center">
                <form class="p-8 flex flex-col w-[800px] h-[500px] bg-[#4EEE90]">
                    <span> Cadastrar Perfil </span>
                    <span> Primeiro Nome: </span>
                    <input ref="cadastroPrimeiroNome" type="text">
                    <span> Sobrenome: </span>
                    <input ref="cadastroSobrenome" type="text">
                    <span> Idade: </span>
                    <input ref="cadastroIdade" type="text">
                    <div @click="cadastrarPerfil" class="w-[90px] h-[30px] flex items-center justify-center bg-[pink] cursor-pointer"> Criar </div>
                </form>
            </div>
        </div>

        <DashboardHeader/>
        <!-- Perfis Container -->
        <div class="flex flex-1 flex-row mt-14">
            <!-- Profile Box -->
            <div v-for="profile in Profiles" class="w-auto h-[120px] flex flex-col bg-[#4EEE90] rounded-lg m-12 font-nunito tracking-tight">
                <span class="h-1/2 w-auto flex flex-wrap items-center justify-center p-2
                text-[whitesmoke] font-[700] text-[22px]"> {{ profile.PRIMEIRO_NOME+" "+profile.SOBRENOME }} </span>
                <span class="h-1/2 w-full flex items-center justify-center">
                    <span :id="profile.PROFILE_ID" @click="loginProfile" class="h-[40px] w-[130px] flex justify-center items-center bg-[#FF4365] text-white text-[19px] font-[600]
                    cursor-pointer"> Entrar </span>
                </span>
            </div>
        </div>
    </div>    

</template>