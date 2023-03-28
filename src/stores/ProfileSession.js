import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const SessionPinia = defineStore("SessionPinia", () => {

    const profileID = ref('');
    const primeiroNome = ref('');
    const sobrenome = ref('');
    const idade = ref('');

    const isProfileIDset = ref(false);


    return { profileID, primeiroNome, sobrenome, idade, isProfileIDset };
});

export default SessionPinia;