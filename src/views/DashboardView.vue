<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';
import $ from 'jquery';
import SessionPinia from '../stores/ProfileSession';
import { LoadingPinia } from "../stores/LoadingPinia";
import { DashboardHeaderPinia } from "../stores/DashboardHeaderVisible";


// PINIAS
const Loading = LoadingPinia();
//Loading.isLoading = true;
// Ja vem true
const ProfileSession = SessionPinia();


const DashboardHeader = DashboardHeaderPinia();
DashboardHeader.isVisible = true;





Loading.isLoading = true;

// REFS
const greyLayer = ref(null);
const RightMenu = ref(null);
const container = ref(null);

// STATES
const RightMenuOpen = ref(false);



function RightMenuToggle() {
    

    if ( RightMenuOpen.value ) {

        $(RightMenu.value).css("animation","RightMenuHide 0.3s");
        $(greyLayer.value).css("display","none");
        $("body").css("overflow","visible");
        setTimeout(() => {
            $(RightMenu.value).css("right","-300px");
            RightMenuOpen.value = false;
        }, 260);


    } else {

        $(RightMenu.value).css("animation","RightMenuShow 0.3s");
        $(greyLayer.value).css("display","flex");
        $("body").css("overflow","hidden");
        setTimeout(() => {
            $(RightMenu.value).css("right","0");
            RightMenuOpen.value = true;
        }, 260);

    }

}


</script>

<template>

    <div ref="container" class="h-[100vh] w-full bg-white relative">
        <!-- Grey Out of Focus (quando clica no Menu) -->
        <div ref="greyLayer" class="absolute h-full w-[100%] left-0 bg-black hidden z-20 opacity-40"></div>
        <!-- Menu Nav Slide from Right -->
        <!-- desktop 33% da tela -->
        <div ref="RightMenu" class="fixed right-[-300px] h-full w-[300px] flex flex-col bg-[whitesmoke] z-30">
            <!-- Barra com Greetings + botao Close -->
            <div class="h-[50px] w-full flex flex-row">
                <div class="h-full flex flex-1 items-center pl-4 pt-1 mr-6 text-black font-[600] font-lexend text-[#4EEE90] text-[25px]">
                    Olá, {{ ProfileSession.primeiroNome }}
                </div>
                <span @click="RightMenuToggle" class="ml-auto mr-6 h-auto w-auto font-[800] font-lexend text-[35px] text-[#4EEE90] cursor-pointer"> X </span>
            </div>
            <!-- Right Menu Nav -->
            <div class="h-full w-full flex flex-col items-center bg-[rgba(255,192,203,0.5)]">
                <RouterLink to="/desempenho" class="mt-8 h-[46px] w-[200px] flex items-center justify-center bg-[#4EEE90] text-[whitesmoke] text-[25px] font-[600] font-lexend"> 
                    Desempenho
                </RouterLink>
                <RouterLink to="/configuracoes" class="mt-5 h-[46px] w-[200px] flex items-center justify-center bg-[#4EEE90] text-[whitesmoke] text-[25px] font-[600] font-lexend"> 
                    Minha Conta
                </RouterLink>
            </div>
        </div>
        



        <!-- Dashboard Header -->
        <div v-if="DashboardHeader.isVisible" class="h-[120px] w-full flex flex-row items-center">
            <RouterLink to="/perfil" @click="Loading.isLoading = true" class="h-auto w-auto">
                <img src="/dashboard_logo.png" class="w-[200px] h-[70px] ml-6">
            </RouterLink>
            <div @click="RightMenuToggle" class="ml-auto mr-6 h-[55px] w-[150px] flex justify-center items-center bg-[#4EEE90] text-[#FFFFFF] text-[24px] font-[700] font-lexend tracking-tight
            cursor-pointer">
                Menu
            </div>
        </div>
        <RouterView class="w-full flex flex-1"/>
    </div>

</template>