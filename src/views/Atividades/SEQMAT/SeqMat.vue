<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { LoadingPinia } from "../../../stores/LoadingPinia";
import LoadingLayer from "../../../components/LoadingLayer.vue";
import { DashboardHeaderPinia } from "../../../stores/DashboardHeaderVisible";



// PINIAS
const Loading = LoadingPinia();
Loading.isLoading = false;

const DashboardHeader = DashboardHeaderPinia();
DashboardHeader.isVisible = false;



const questoes = ref([
    {
        id: 1,
        body: ["3","6","9","12","x"],
        question: "Qual o último número desta sequência?",
        answer: "15",
    },
]);


</script>



<template>
    <!-- Game Container -->
    <div class="h-[100vh] w-full flex bg-[pink]">


    </div>

</template>





