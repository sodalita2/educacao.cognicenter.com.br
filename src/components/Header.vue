<script setup>
import { BIconList, BIconXLg } from 'bootstrap-icons-vue';
import { ref } from 'vue';
import $ from 'jquery';

// Pages in which Header will be shown
const HeaderOnPages = ["Home","Sobre","Social","Contato"];


const MobileMenuOpen = ref(false);
function MobileMenuToggle(e){
    //$(e.currentTarget).children().eq(1).css("display","flex");
    //$(e.currentTarget).children().eq(0).css("display","none");
    if (MobileMenuOpen.value){
        $("#body").css("overflow","auto");
        $("#MobileMenu").css("animation","MobileMenuHide 0.4s");
        setTimeout(() => {
            $("#MobileMenu").css("left","100%");
            $("#MobileMenu").css("display","none");
        }, 380);
        MobileMenuOpen.value = !MobileMenuOpen.value;
    }else{
        $("#body").css("overflow","hidden");
        $("#body").css("block-size","100%");
        //$("#body").css("touch-action","none");
        $("#MobileMenu").css("animation","MobileMenuShow 0.4s");
        setTimeout(() => {
            $("#MobileMenu").css("left","0%");
            $("#MobileMenu").css("display","flex");
        }, 380);
        MobileMenuOpen.value = !MobileMenuOpen.value;
    }
}

function ResetMobileMenu(){
    if (MobileMenuOpen.value){
        $("#body").css("overflow","auto");
        $("#MobileMenu").css("animation","MobileMenuHide 0.4s");
        setTimeout(() => {
            $("#MobileMenu").css("left","100%");
            $("#MobileMenu").css("display","none");
        }, 380);
        MobileMenuOpen.value = !MobileMenuOpen.value;
    }
}

// 768px- break header to mobile
</script>


<template>
    <div v-if="HeaderOnPages.indexOf($route.name) > -1" id="header" class="mt-6 h-[68px] w-full relative text-4xl font-[500] flex items-center justify-center z-20">
        <!-- Logo -->
        <RouterLink to="/" @click="ResetMobileMenu" class="h-full flex justify-center items-center w-[200px] sm:w-[270px] md:w-[30%]">
            <img class="w-[65%] h-[50%] sm:h-[80px]" src="../assets/Home/Logo.png">
        </RouterLink>
        <!-- Header Nav -->
        <div class="flex flex-1 h-full justify-end items-center md:justify-center">
            <RouterLink to="Sobre" class="hidden relative group italic text-[30px] tracking-tighter min-w-content m-[4vw] md:flex">Sobre
                <div class="transition-all absolute bottom-0 h-[2px] w-0 group-hover:animate-NavHoverShow group-hover:w-full delay-400 bg-[#D6A66B]"></div>
            </RouterLink>
            <RouterLink to="Social" class="hidden relative group italic text-[30px] tracking-tighter min-w-content m-[4vw] md:flex">Impacto Social
                <div class="transition-all absolute bottom-0 h-[2px] w-0 group-hover:animate-NavHoverShow group-hover:w-full delay-400 bg-[#D6A66B]"></div>
            </RouterLink>
            <RouterLink to="Contato" class="hidden relative group italic text-[30px] tracking-tighter min-w-content m-[4vw] md:flex">Contato
                <div class="transition-all absolute bottom-0 h-[2px] w-0 group-hover:animate-NavHoverShow group-hover:w-full delay-400 bg-[#D6A66B]"></div>
            </RouterLink>

            <!-- Mobile Menu Hamburguer -->
            <div class="h-full w-[150px] flex justify-center items-center md:hidden" @click="MobileMenuToggle">
                <BIconList class="text-6xl"/>
            </div>
        </div>
        <!-- Mobile Menu Slide From Right -->
        <div id="MobileMenu" class="h-[100vh] w-full fixed top-[102px] sm:top-[108px] left-[100%] z-30 bg-white hidden flex-col items-center border-t-[2px] border-orange-rgba">
            <!-- Mobile Menus List -->
            <RouterLink to="Sobre" class="h-[100px] w-full flex justify-center items-center mt-12 italic text-[40px]" @click="MobileMenuToggle">Sobre</RouterLink>
            <RouterLink to="Social" class="h-[100px] w-full flex justify-center items-center mt-12 italic text-[40px]" @click="MobileMenuToggle">Impacto Social</RouterLink>
            <RouterLink to="Contato" class="h-[100px] w-full flex justify-center items-center mt-12 italic text-[40px]" @click="MobileMenuToggle">Contato</RouterLink>
        </div>
    </div>


    <div v-else="" class="h-[50px] w-full text-4xl font-[500] flex items-center justify-center">
        {{$route.name}}
    </div>
</template>