<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';
import $ from 'jquery';
import SessionPinia from '../stores/ProfileSession';
import { LoadingPinia } from "../stores/LoadingPinia";


// PINIAS
const Loading = LoadingPinia();
//Loading.isLoading = true;
// Ja vem true
const ProfileSession = SessionPinia();




Loading.isLoading = false;

// REFS
const RightMenu = ref(null);

// STATES
const RightMenuOpen = ref(false);


function RightMenuToggle(e) {

    console.log($(RightMenu));

    if ( RightMenuOpen.value ) {

        $(RightMenu.value).css("animation","RightMenuHide 0.3s");
        setTimeout(() => {
            $(RightMenu.value).css("right","-33%");
            RightMenuOpen.value = false;
        }, 285);


    } else {

        $(RightMenu.value).css("animation","RightMenuShow 0.3s");
        setTimeout(() => {
            $(RightMenu.value).css("right","0%");
            RightMenuOpen.value = true;
        }, 285);

    }

}


</script>

<template>

    <div class="h-full w-full bg-white relative">
        <!-- Menu Nav Slide from Right -->
        <div ref="RightMenu" class="fixed right-[-33%] h-full w-[33%] flex flex-col bg-white z-30">
            <!-- Barra com botao Close -->
            <div class="h-[50px] w-full flex flex-row">
                <span @click="RightMenuToggle" class="ml-auto mr-6 h-auto w-auto font-[800] font-lexend text-[35px] text-[#4EEE90] cursor-pointer"> X </span>
            </div>
        </div>

        <!-- Dashboard Header -->
        <div class="h-[120px] w-full flex flex-row items-center">
            <RouterLink to="/dashboard" class="h-auto w-auto">
                <img src="/dashboard_logo.png" class="w-[200px] h-[70px] ml-6">
            </RouterLink>
            <div @click="RightMenuToggle" class="ml-auto mr-6 h-[55px] w-[150px] flex justify-center items-center bg-[#4EEE90] text-[#FFFFFF] text-[24px] font-[700] font-lexend tracking-tight
            cursor-pointer">
                Menu
            </div>
        </div>
        <RouterView/>
    </div>

</template>