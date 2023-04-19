<script setup>
import { RouterLink } from "vue-router";
import { ref, defineExpose } from 'vue';




</script>

<template>

    <div class="h-[200px] sm:h-[120px] w-full flex flex-col sm:flex-row border-2 justify-center sm:items-center">
        <img src="/Logo.png" class="w-[300px] h-[100px]">
        <RouterLink to="/cadastro" class="cursor-pointer ml-12 sm:ml-0 mt-6 sm:mt-0 sm:ml-auto sm:mr-10 h-[40px] sm:h-[60px] w-[200px]
        sm:w-[400px] flex justify-center items-center bg-[#4EEE90] text-[#FFFFFF] text-[17px] sm:text-[24px] font-[700] font-lexend tracking-tight">
            Cadastrar Perfil
        </RouterLink>
    </div>

</template>