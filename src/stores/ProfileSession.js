import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const SessionPinia = defineStore("SessionPinia", () => {

    const profileID = ref('');


    return { profileID };
});
