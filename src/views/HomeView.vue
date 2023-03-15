<script setup>
import { ref } from 'vue';
import { LoadingPinia } from "../stores/LoadingPinia";



const Loading = LoadingPinia();
Loading.isLoading = false;

</script>

<template>

    <div class="w-full h-full flex flex-col items-center justify-center xl:justify-start">
        <img class="w-[470px] xl:w-[600px] h-[140px] xl:h-[200px] mt-0 xl:mt-10" src="/Logo.png">
        <RouterLink @click="Loading.isLoading = true" to="/perfil" class="mt-6 xl:mt-[10vh] h-[80px] w-[400px] flex justify-center items-center bg-[#4EEE90] text-[#FFFFFF] text-[24px] font-[700] font-lexend tracking-tight">
            Entrar com perfil
        </RouterLink>
    </div>

</template>
