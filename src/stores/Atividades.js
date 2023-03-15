import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const AtividadesPinia = defineStore("AtividadesPinia", () => {

    const getAtividades = ref([
        {
            id:"1",
            nome:"Sequência Matemática",
            folder:"/SEQMAT",
            cover_file:"/cover.png",
            descricao:"Preencha a sequência matemática com o termo faltando.",
            router_path:"/dashboard/seqmat",
        },
        {
            id:"2",
            nome:"Jogo da Memória",
            folder:"/MEMORIA",
            cover_file:"/cover.jpg",
            descricao:"Jogo da Memória",
            router_path:"/dashboard/memoria",
        }
    ]);


    return { getAtividades };
});
