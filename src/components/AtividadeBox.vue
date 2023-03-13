<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, defineProps } from 'vue';
import $ from 'jquery';
import SessionPinia from '../stores/ProfileSession';
import { LoadingPinia } from "../stores/LoadingPinia";


defineProps({
    nome: String,
    descricao: String,
    folder: String,
    cover_file: String,
    router_path: String,
});


</script>

<template>

    <!-- Atividade Box -->
    <RouterLink :to="router_path" class="h-[250px] w-[300px] flex flex-col m-4 rounded-lg bg-[#FF4365] text-[22px] text-white font-lexend font-[700] tracking-tight">
        <!-- Atividade Title -->
        <span class="h-[55px] w-full flex items-center pl-2">
            {{ nome }}
        </span>
        <span class="w-full flex flex-1">
            <img :src="folder+cover_file" class="h-full w-full rounded-b-lg">
        </span>
    </RouterLink>

</template>