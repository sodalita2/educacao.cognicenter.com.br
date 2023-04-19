<script setup>
import { ref, onMounted, watch } from 'vue';
import $ from 'jquery';
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { LoadingPinia } from "../stores/LoadingPinia";
import DashboardHeader from '../components/DashboardHeader.vue';
import SessionPinia from '../stores/ProfileSession';


// ROUTER
const router = useRoute();

// PINIAS
const Loading = LoadingPinia();
Loading.isLoading = false;

const cadastroPrimeiroNome = ref(null);
const cadastroSobrenome = ref(null);
const cadastroIdade = ref(null);


// FUNCTIONS
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

        router.push({path: '/perfil'});

        Loading.isLoading = false;

    })

}

</script>


<template>

    <!-- Main Container -->
    <div class="h-[100vh] w-full flex flex-col justify-center items-center">
        <form class="flex flex-col w-[70%] h-[500px]">
            <span class="pl-2 h-[50px] w-full flex items-center bg-[pink] text-[21px] font-lexend font-[500]"> Cadastrar Perfil </span>
            <span class="pl-2 h-[50px] w-full flex items-end text-[17px] font-lexend font-[400]"> Primeiro Nome: </span>
            <input ref="cadastroPrimeiroNome" type="text" class="h-[33px] w-[70%] flex ml-2">
            <span class="pl-2 h-[35px] w-full flex items-end text-[17px] font-lexend font-[400]"> Sobrenome: </span>
            <input ref="cadastroSobrenome" type="text" class="h-[33px] w-[70%] flex ml-2">
            <span class="pl-2 h-[35px] w-full flex items-end text-[17px] font-lexend font-[400]"> Idade: </span>
            <input ref="cadastroIdade" type="number" class="h-[33px] w-[45px] flex text-center ml-2 text-[20px] font-lexend font-[400]
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">
            <div @click="cadastrarPerfil" class="w-[90px] h-[30px] flex items-center justify-center bg-[pink] cursor-pointer"> Criar </div>
        </form>
    </div>

</template>