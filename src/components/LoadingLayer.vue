<script setup>
import $ from 'jquery';
import { watchEffect, watch } from 'vue';
import ClipLoader from "vue-spinner/src/ClipLoader.vue"
import { LoadingPinia } from '../stores/LoadingPinia';


// AQUI CONTROLA O LAYER, QUANDO ESTIVER CARREGANDO PROIBE SCROLL DA TELA
const Loading = LoadingPinia();

watch( () => Loading.isLoading, (value) => {

    if ( value ) {
        $("body").css("overflow","hidden");
    } else {
        $("body").css("overflow","visible");
    }

});


</script>

<template>
    <div class="absolute top-0 left-0 h-[100vh] w-full bg-[#FF4365] z-20 flex justify-center items-center opacity-40">
        <clip-loader color="#4EEE90" size="300px"></clip-loader>
    </div>
</template>