<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, resolveComponent } from 'vue';
import $ from 'jquery';
import axios from 'axios';
import SessionPinia from '../../../stores/ProfileSession';
import { LoadingPinia } from "../../../stores/LoadingPinia";
import { DashboardHeaderPinia } from "../../../stores/DashboardHeaderVisible";


// PINIAS
const Loading = LoadingPinia();
Loading.isLoading = false;
// Ja vem true
const ProfileSession = SessionPinia();


const DashboardHeader = DashboardHeaderPinia();
DashboardHeader.isVisible = false;


// REFS DIVS DAS CORES
const red = ref(null);
const blue = ref(null);
const yellow = ref(null);
const green = ref(null);


const Atividade_ID = 4;

// FUNCTIONS

function RegistraJogatina() {

    Loading.isLoading = true;

    axios.put(`https://api.cognicenter.com.br/Atividades.php?educacao=1&target=putAtividade`, {          
    data: {
        PROFILE_ID: ProfileSession.profileID,
        ATIVIDADE_ID: Atividade_ID,
        SCORE: GameScore.value,
        IS_SCORE_TIMER: "N",
    },                      
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin': '*' }
    }).then( (response) => {
        Loading.isLoading = false;
    })

}

function ResetGame() {

    ActualState.value = "Start";
    ColorsClicked.value = 0;
    GameScore.value = 0;
    Sequencia.value = [];

}


const GameScore = ref(0);


const GameStates = ["Start","Jogando","Fim"];
const ActualState = ref("Start");

async function countBtn(e) {
    console.log($(e.currentTarget).attr('id')+" clicked");

    SaturateAnimation($(e.currentTarget).attr('id'));

    if ( ActualState.value == 'Jogando' ) {

        ColorsClicked.value += 1;
        //SequenciaPlayer.value.push($(e.currentTarget).attr('id'));

        console.log(ColorsClicked.value);
        console.log(Sequencia.value);
        console.log($(e.currentTarget).attr('id'));


        if ( Sequencia.value[ColorsClicked.value-1] !== $(e.currentTarget).attr('id') ) {
            console.log("errou");
            ActualState.value = 'Fim';
            RegistraJogatina();
        }

        if ( ColorsClicked.value == Sequencia.value.length ) {
            console.log("proxima rodada");
            GameScore.value += 1;
            ColorsClicked.value = 0;
            GeraCor();
            await new Promise(r => setTimeout(r, 2000));
            PrintaSequencia();
        }
        

        //console.log($(e.currentTarget).attr('id'));
    }
    
}


const Sequencia = ref([]);
const SequenciaPlayer = ref([]);

const Colors = {
    0: "red",
    1: "blue",
    2: "yellow",
    3: "green",
};
// 0 => red
// 1 => blue
// 2 => yellow
// 3 => green
function GeraCor() {
    let MaxNotInclusive = 4;
    let ChosenColor = Math.floor(Math.random() * MaxNotInclusive);
    Sequencia.value.push(Colors[ChosenColor]);
}


function SaturateAnimation( $cor ) {

    $(`#${$cor}`).css("filter","saturate(1)");
    setTimeout(() => {
        $(`#${$cor}`).css("filter","saturate(.4)");
    }, 750);

}

function PrintaSequencia() {

    var Itr = -1;

    var Interval = setInterval(function x() {
        Itr++;
        if ( Itr >= Sequencia.value.length ) {
            clearInterval(Interval);
        }
        SaturateAnimation(Sequencia.value[Itr]);
        return x;
    }(), 1500);

}


const PlayerMissed = ref(false);
const ColorsClicked = ref(0);

async function StartGame() {

    ActualState.value = 'Jogando';

    await new Promise(r => setTimeout(r, 1000));

    GeraCor();

    PrintaSequencia();


}


</script>

<template>

    <div class="h-[100vh] w-full flex flex-col bg-white">
         <!-- Game Stats -->
         <div class="h-[70px] w-full bg-[#4EEE90] flex flex-row justify-center items-center">
            <button v-if="ActualState == `Start`" @click="StartGame" class="h-[45px] w-[150px] ml-4 sm:ml-12 bg-[#FF4365] text-[whitesmoke] font-lexend
            font-[600] text-[19px] 2xsm:text-[22px] xsm:text-[25px] sm:text-[23px]">Iniciar</button>
            <button v-if="ActualState == `Jogando`" class="h-[45px] w-[150px] ml-4 sm:ml-12 bg-[#FF4365] text-[whitesmoke] font-lexend font-[600]
            text-[19px] 2xsm:text-[22px] xsm:text-[25px] sm:text-[23px]">Jogando</button>
            <button v-if="ActualState == `Fim`" @click="ResetGame" class="h-[45px] w-[150px] ml-4 sm:ml-12 bg-[#FF4365] text-[whitesmoke] font-lexend font-[600]
            text-[19px] 2xsm:text-[22px] xsm:text-[25px] sm:text-[23px]">Reset</button>
            <span class="h-full w-auto flex justify-center items-center font-lexend font-[500] ml-4"> Score: {{ GameScore }} </span>
        </div>

        <!-- Game Container -->
        <div v-if="['Start','Jogando'].includes(ActualState)" class="w-full flex flex-1 justify-center items-center">

            <!-- Middle Square Container -->
            <div class="h-[100%] w-[80%] flex flex-col">
                <!-- 1 half -->
                <div class="h-[50%] w-full flex flex-row justify-center items-end">
                    <span ref="red" id="red" @click="countBtn" class="h-[75%] w-[25%] rounded-tl-[100%] bg-[red] m-1 relative cursor-pointer saturate-[40%]">
                        <div class="absolute right-[-6px] bottom-[-5px] h-[6%] w-[6%] rounded-tl-[100%] bg-black z-10"></div>
                    </span>
                    <span ref="blue" id="blue" @click="countBtn" class="h-[75%] w-[25%] rounded-tr-[100%] bg-[blue] m-1 relative cursor-pointer saturate-[40%]">
                        <div class="absolute left-[-6px] bottom-[-5px] h-[6%] w-[6%] rounded-tr-[100%] bg-black z-10"></div>
                    </span>
                </div>
                <!-- 2 half -->
                <div class="h-[50%] w-full flex flex-row justify-center items-start">
                    <span ref="yellow" id="yellow" @click="countBtn" class="h-[75%] w-[25%] rounded-bl-[100%] bg-[yellow] m-1 relative cursor-pointer saturate-[40%]">
                        <div class="absolute right-[-6px] top-[-5px] h-[6%] w-[6%] rounded-bl-[100%] bg-black z-10 cursor-pointer"></div>
                    </span>
                    <span ref="green" id="green" @click="countBtn" class="h-[75%] w-[25%] rounded-br-[100%] bg-[green] m-1 relative cursor-pointer saturate-[40%]">
                        <div class="absolute left-[-6px] top-[-5px] h-[6%] w-[6%] rounded-br-[100%] bg-black z-10 cursor-pointer"></div>
                    </span>
                </div>
            </div>

        </div>

        <!-- Fim Game -->
        <div v-if="ActualState == `Fim`" class="w-full flex flex-1 justify-center items-center">
            Vc errou kkkk
        </div>

    </div>
    
</template>