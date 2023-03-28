<script setup>
import { RouterLink } from "vue-router";
import { ref, defineExpose } from 'vue';




</script>

<template>

    <div class="h-[120px] w-full flex flex-row items-center">
        <img src="/Logo.png" class="w-[300px] h-[100px]">
        <RouterLink to="/cadastro" class="cursor-pointer ml-auto mr-10 h-[60px] w-[400px] flex justify-center items-center bg-[#4EEE90] text-[#FFFFFF] text-[24px] font-[700] font-lexend tracking-tight">
            Cadastrar Perfil
        </RouterLink>
    </div>

</template>