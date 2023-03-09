<script setup>
import { RouterLink } from "vue-router";
import { ref, defineExpose } from 'vue';
import CadastroDivPinia from '../stores/CadastroOpen';


const cadastroDiv = CadastroDivPinia();




</script>

<template>

    <div class="h-[120px] w-full flex flex-row items-center">
        <img src="/Logo.png" class="w-[300px] h-[100px]">
        <div @click="cadastroDiv.isOpen = true" class="cursor-pointer ml-auto mr-10 h-[60px] w-[400px] flex justify-center items-center bg-[#4EEE90] text-[#FFFFFF] text-[24px] font-[700] font-lexend tracking-tight">
            Cadastrar Perfil
        </div>
    </div>

</template>