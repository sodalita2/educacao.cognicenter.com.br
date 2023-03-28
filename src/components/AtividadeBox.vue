<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, defineProps } from 'vue';
import $ from 'jquery';
import SessionPinia from '../stores/ProfileSession';
import { LoadingPinia } from "../stores/LoadingPinia";


defineProps({
    ID: Number,
    NOME: String,
    DESCRICAO: String,
    FOLDER: String,
    COVER_FILE: String,
    ROUTER_PATH: String,
});


// PINIAS
const Loading = LoadingPinia();

</script>

<template>

    <!-- Atividade Box -->
    <RouterLink :to="ROUTER_PATH" @click="Loading.isLoading = true" class="h-[250px] w-[300px] flex flex-col m-4 rounded-md
    bg-[#FF4365] text-[22px] text-white font-lexend font-[700] tracking-tight">
        <!-- Atividade Title -->
        <span class="h-[55px] w-full flex items-center pl-2">
            {{ NOME }}
        </span>
        <span class="h-[195px] w-full bg-[whitesmoke] rounded-b-md">
            <img :src="FOLDER+COVER_FILE" class="h-full w-full rounded-b-md">
        </span>
    </RouterLink>

</template>