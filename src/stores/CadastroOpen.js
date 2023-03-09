import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const CadastroDivPinia = defineStore("CadastroDivPinia", () => {

    const isOpen = ref(false);


    return { isOpen };
});

export default CadastroDivPinia;