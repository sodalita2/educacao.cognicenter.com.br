<script setup>
import { ref, onMounted, watch } from 'vue';
import $ from 'jquery';
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { LoadingPinia } from "../stores/LoadingPinia";
import DashboardHeader from '../components/DashboardHeader.vue';
import SessionPinia from '../stores/ProfileSession';



// PINIAS
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

        setup();

        cadastroDiv.isOpen = false;

    })

}

</script>


<template>

    <!-- Main Container -->
    <div class="h-[100vh] w-full flex flex-col relative">
        <!-- Pagina Cadastro Absolute -->
        <div class="w-full h-full absolute flex flex-col bg-white z-30">
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
    </div>

</template>