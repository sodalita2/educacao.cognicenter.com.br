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
const greyLayer = ref(null);
const RightMenu = ref(null);

// STATES
const RightMenuOpen = ref(false);


function RightMenuToggle() {
    

    if ( RightMenuOpen.value ) {

        $(RightMenu.value).css("animation","RightMenuHide 0.3s");
        $(greyLayer.value).css("display","none");
        setTimeout(() => {
            $(RightMenu.value).css("right","-60%");
            RightMenuOpen.value = false;
        }, 260);


    } else {

        $(RightMenu.value).css("animation","RightMenuShow 0.3s");
        $(greyLayer.value).css("display","flex");
        setTimeout(() => {
            $(RightMenu.value).css("right","0");
            RightMenuOpen.value = true;
        }, 260);

    }

}


</script>

<template>

    <div class="h-full w-full bg-white relative">
        <!-- Grey Out of Focus (quando clica no Menu) -->
        <div ref="greyLayer" class="absolute h-full w-full bg-black hidden z-20 opacity-40"></div>
        <!-- Menu Nav Slide from Right -->
        <!-- desktop 33% da tela -->
        <div ref="RightMenu" class="fixed right-[-60%] h-full w-[60%] flex flex-col bg-[whitesmoke] z-30">
            <!-- Barra com botao Close -->
            <div class="h-[50px] w-full flex flex-row">
                <span @click="RightMenuToggle" class="ml-auto mr-6 h-auto w-auto font-[800] font-lexend text-[35px] text-[#4EEE90] cursor-pointer"> X </span>
            </div>
        </div>
        



        <!-- Dashboard Header -->
        <div class="h-[120px] w-full flex flex-row items-center">
            <RouterLink to="/dashboard/" @click="Loading.isLoading = true" class="h-auto w-auto">
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