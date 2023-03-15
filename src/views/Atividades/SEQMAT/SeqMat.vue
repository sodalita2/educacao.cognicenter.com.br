<script setup>
import { RouterLink, RouterView } from "vue-router";
import { LoadingPinia } from "../../../stores/LoadingPinia";
import LoadingLayer from "../../../components/LoadingLayer.vue";




const Loading = LoadingPinia();
Loading.isLoading = false;


</script>



<template>
  
    <div class="h-full w-full flex bg-black">

    </div>

</template>





