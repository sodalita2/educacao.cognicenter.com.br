<script setup>
import { RouterLink, RouterView } from "vue-router";
import { LoadingPinia } from "./stores/LoadingPinia";
import LoadingLayer from "./components/LoadingLayer.vue";




const Loading = LoadingPinia();
Loading.isLoading = true;


</script>



<template>
  <!-- Loading Layer -->
  <LoadingLayer v-show="Loading.isLoading" />
  <RouterView />
</template>





