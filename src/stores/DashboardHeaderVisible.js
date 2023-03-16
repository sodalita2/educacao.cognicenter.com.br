import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const DashboardHeaderPinia = defineStore("DashboardHeaderPinia", () => {

    const isVisible = ref(true);


    return { isVisible };
});
