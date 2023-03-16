<script setup>
import { RouterLink, RouterView } from "vue-router";
import SessionPinia from '../../stores/ProfileSession';
import { AtividadesPinia } from "../../stores/Atividades";
import { LoadingPinia } from "../../stores/LoadingPinia";
import AtividadeBox from "../../components/AtividadeBox.vue";


// PINIAS
const ProfileSession = SessionPinia();

const Atividades = AtividadesPinia();

const Loading = LoadingPinia();
Loading.isLoading = false;




</script>

<template>

    <!-- Container do RouterView -->
    <div class="h-auto w-full flex flex-row">
        
        <!-- Left Side (Menu com Secoes) -->
        <div class="h-[1000px] w-[70%] flex flex-col items-center">
            <!-- Barra Atividades -->
            <div class="h-[700px] w-[95%] flex flex-col items-center">
                <!-- Titulo da Secao -->
                <span class="p-6 h-[60px] w-full flex flex-row items-center text-[30px] font-[600] text-white bg-[#4EEE90] font-lexend tracking-tight
                rounded-tl-md rounded-tr-md">
                    Atividades
                </span>
                <!-- Conteudo da Secao -->
                <div class="w-full flex flex-1 border-[1px] border-[rgba(0,0,0,0.1)] border-t-0">
                    <AtividadeBox v-for="atividade in Atividades.getAtividades" v-bind="atividade">
                        
                    </AtividadeBox>
                </div>
            </div>
        </div>

        <!-- Right Side (Menu com estatisticas do perfil) -->
        <div class="h-auto w-[30%]">
            <!-- Secao Estatisticas -->
            <div class="h-[700px] w-full bg-[pink]">

            </div>
        </div>


    </div>

</template>