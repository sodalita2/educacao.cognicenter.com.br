<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue';
import $ from 'jquery';
import axios from "axios";
import { LoadingPinia } from "../../../stores/LoadingPinia";
import LoadingLayer from "../../../components/LoadingLayer.vue";
import { DashboardHeaderPinia } from "../../../stores/DashboardHeaderVisible";
import SessionPinia from '../../../stores/ProfileSession';



// PINIAS
const Loading = LoadingPinia();
Loading.isLoading = false;

const DashboardHeader = DashboardHeaderPinia();
DashboardHeader.isVisible = false;

const Session = SessionPinia();
console.log(Session.profileID)


const Atividade_ID = 1;

const TimerObj = ref();

function Reset(){
    clearInterval(TimerObj.value);
    LastTime.value = "";
    TimerRef.value = "00:00";
    Seconds.value = 0;
    Minutes.value = 0;
    Acertos.value = 0;
    LastAcertos.value = 0;
    //BrokeRecord.value = false;
}

//const BrokeRecord = ref(false);
var BestTime = ref("");
const LastPlayed = ref("");
//var BestAcertos = ref(0);
var LastTime = ref("");
var LastAcertos = ref(0);
var ActualState = ref("Start");



// FUNCTIONS

function RegistraJogatina() {

    LastTime.value = TimerRef.value;
    LastAcertos.value = Acertos.value;

    let timerSplit = LastTime.value.split(":");
    let mins = timerSplit[0];
    let secs = timerSplit[1];

    let timer = (parseInt(mins)*60)+parseInt(secs);
    console.log(timer)


    axios.put(`https://api.cognicenter.com.br/Atividades.php?educacao=1&target=putAtividade`, {          
    data: {
        PROFILE_ID: Session.profileID,
        ATIVIDADE_ID: Atividade_ID,
        SCORE: timer,
        IS_SCORE_TIMER: "S",
    },                      
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin': '*' }
    })
    
}

function GetMelhorJogatina() {

    axios.get(`https://api.cognicenter.com.br/Atividades.php?educacao=1&target=getAtividadeLastPlayed&id_atividade=${Atividade_ID}&id_profile=${Session.profileID}`, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then( (response) => {

        BestTime.value = response.data["SCORE"];
        LastPlayed.value = response.data["LAST_PLAYED"];

    });

}

function StartGame(){
    Reset();
    ActualState.value = "Jogando";
    TimerObj.value = Timer();
}

function StopGame(){

    clearInterval(TimerObj.value);

    Loading.isLoading = true;

    RegistraJogatina();

    GetMelhorJogatina();

    ActualState.value = "Fim";

    Loading.isLoading = false;
    
}
function RestartGame(){
    Reset();
    ActualState.value = "Jogando";
    TimerObj.value = Timer();
}




const Bichos = ['burro','cachorro','cervo','elefante','esquilo','girafa','guaxinim','leao','macaco','zebra'];

const BichosPath = {
    "burro":"burro.png",
    "cachorro":"cachorro.png",
    "cervo":"cervo.png",
    "elefante":"elefante.png",
    "esquilo":"esquilo.png",
    "girafa":"girafa.png",
    "guaxinim":"guaxinim.png",
    "leao":"leao.png",
    "macaco":"macaco.png",
    "zebra":"zebra.png"
};

var Width = 5;
var Height = 4;
var CardsArray = [];

for (let i=0;i<Height;i++){
    CardsArray.push(['x','x','x','x','x'])
}


function GeneratePosition(){
    let xpos = Math.floor(Math.random()*5);
    let ypos = Math.floor(Math.random()*4);
    if (CardsArray[ypos][xpos] == 'x'){
        return [ypos,xpos];
    }else{
        return GeneratePosition();
    }
}



for (let i=0;i<Bichos.length;i++){
    let Position = GeneratePosition();
    CardsArray[Position[0]][Position[1]] = Bichos[i];
}
for (let i=0;i<Bichos.length;i++){
    let PositionMirror = GeneratePosition();
    CardsArray[PositionMirror[0]][PositionMirror[1]] = Bichos[i];
}


const IsTimerRunning = ref(false);
const TimerRef = ref("00:00");
const Seconds = ref(0);
const Minutes = ref(0);
function Timer(){
    var TimerInterval = setInterval(() => {
        Seconds.value += 1;
        if (Seconds.value == 60){
            Minutes.value += 1;
            Seconds.value = 0;
        }

        if (Minutes.value < 10 && Seconds.value < 10){
            TimerRef.value = `0${Minutes.value}:0${Seconds.value}`;
        }else if (Minutes.value < 10){
            TimerRef.value = `0${Minutes.value}:${Seconds.value}`;
        }else if (Seconds.value < 10){
            TimerRef.value = `${Minutes.value}:0${Seconds.value}`;
        }
    }, 1000);
    return TimerInterval;
}




//console.log(CardsArray);

var Acertos = ref(0);
var ClickedOnce = false;
var ClickedList = [];
function ShowCard(e){
    if (!ClickedOnce && $(e.currentTarget.nodeName) !== "img"){
        $(e.currentTarget).css("display","none");
        ClickedList.push($(e.currentTarget).siblings()[0]);
        ClickedOnce = !ClickedOnce;
    }else if (ClickedOnce){
        $(e.currentTarget).css("display","none");
        let SecondDiv = $(e.currentTarget);
        let FirstDiv = ClickedList[0];
        if ($(e.currentTarget).siblings()[0].id == ClickedList[0].id){
            Acertos.value += 1;
        }else{
            setTimeout(function() {
                SecondDiv.css("display","block");
                $(FirstDiv).siblings().eq(0).css("display","block");
            },600);
        }
        ClickedList = [];
        ClickedOnce = !ClickedOnce;
    }
    if (Acertos.value == 10){
        StopGame();
    }
}


</script>



<template>
  
    <div class="h-[100vh] w-full flex flex-col bg-white">

        <!-- Game Stats -->
        <div class="h-[70px] w-full bg-[#4EEE90] flex flex-row justify-center items-center">
            <button v-if="ActualState == `Start`" @click="StartGame" class="h-[45px] w-[220px] sm:w-[150px] ml-4 sm:ml-12 bg-[#F9F9F9] font-bold border-2 text-[5vw] sm:text-[23px]">Iniciar Jogo</button>
            <button v-if="ActualState == `Jogando`" class="h-[45px] w-[220px] sm:w-[150px] ml-4 sm:ml-12 bg-[#F9F9F9] font-bold border-2 text-[5vw] sm:text-[23px]">Jogando</button>
            <button v-if="ActualState == `Fim`" @click="RestartGame" class="h-[45px] w-[220px] sm:w-[150px] ml-4 sm:ml-12 bg-[#F9F9F9] font-bold border-2 text-[5vw] sm:text-[23px]">Recomeçar</button>
            <div class="h-[70px] flex flex-row w-[400px] items-center ml-8 sm:ml-12">
                <!-- Timer Container -->
                <div class="text-2xl sm:text-3xl">
                    <span v-if="ActualState == `Start`">00:00</span>
                    <span v-else-if="ActualState == `Jogando`">{{TimerRef}}</span>
                    <span v-else-if="ActualState == `Fim`">{{LastTime}}</span>
                </div>
                <!-- Score Container -->
                <div class="text-xl sm:text-2xl ml-8 sm:ml-24">
                    <span v-if="ActualState == `Start`">Acertos: 0 de 10</span>
                    <span v-else-if="ActualState == `Jogando`">Acertos: {{Acertos}} de 10</span>
                    <span v-else-if="ActualState == `Fim`">Acertos: {{LastAcertos}} de 10</span>
                </div>
            </div>
        </div>
        <div class="flex-1 w-full flex flex-col justify-center items-center">
            <!-- Condicao Parar o jogo em 10 acertos -->
            <!--<div v-if="(ActualState == `Fim` || Acertos == 10) ? StopGame() : ``"></div>-->
            <!-- Jogo Container -->
            <!-- Jogando -->
            <div v-show="ActualState == `Jogando`" class="h-[750px] w-full xl:w-[80%] flex flex-col justify-center items-center">
                <div v-for="item in CardsArray" class="h-1/4 w-full flex flex-row justify-center items-center">
                    <div v-for="y in item" class="h-[180px] w-[360px] lg:w-[260px] flex items-center justify-center m-[2px] sm:m-1 lg:m-4 cursor-pointer">
                        <img :id="y" class="h-[95%] w-[95%] rounded-xl" :src="`/MEMORIA/${BichosPath[y]}`">
                        <img @click="ShowCard" class="h-full w-full absolute top-0 left-0" src="/MEMORIA/CartaBack.png">
                    </div>
                </div>
            </div>
            <div v-if="ActualState == `Fim`" class="h-[80%] w-[70%] bg-[#91f58c] flex flex-col">
                <span class="ml-12 mt-12 text-4xl font-[400]">Tempo Atual: {{LastTime}}</span>
                <span class="ml-12 mt-12 text-4xl font-[400]">Melhor Resultado: {{ BestTime }} em {{ LastPlayed }} </span>
            </div>
        </div>

    </div>

</template>





