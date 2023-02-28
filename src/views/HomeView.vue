<script setup>

</script>

<template>
  <!-- Wrapper -->
  <div id="body" class="h-auto w-full flex flex-col items-center z-10">
    <!-- Apresentacao -->
    <div class="h-[400px] w-full flex flex-row mt-4">
      <div class="h-full flex-1 bg-orange-rgba flex flex-col justify-center items-center">
        <span class="h-[25%] w-[90%] flex justify-start items-center
        font-[700] italic tracking-tighter flex-nowrap sm:text-[23px] md:text-[24px] md:w-[90%] lg:text-[28px] mt-">
          A Cognicenter é uma plataforma de jogos voltados para exercícios cognitivos.
        </span>
        <span class="h-[350px] w-[90%] mt-4 flex justify-center items-start text-[23px] font-[200] tracking-tighter flex-nowrap
        sm:text-[20px] md:text-[22px] md:w-[90%] lg:text-[24px]">
          Feitos de uma forma divertida e estimulante, ela foi desenvolvida com base teórica e seu objetivo é atingir várias áreas de intervenção cognitiva.
          <RouterLink to="Sobre" class="h-[10%] w-[80%] absolute bottom-4 left-0 text-[#615361] text-[22px] hover:text-[#5e8568] hover:font-[600]
          sm:text-[25px] md:text-[27px]">
            Conheça mais sobre
          </RouterLink>
        </span>
      </div>
      <!-- Banner Foto Desktop / Portrait -->
      <div class="h-full w-[40%] hidden sm:flex">
        <img class="h-full w-full" src="../assets/Home/4057827.jpg">
      </div>
    </div>
    <!-- Banner Foto Mobile -->
    <div class="h-[300px] w-full sm:hidden">
      <img class="h-full w-full" src="../assets/Home/4057827.jpg">
    </div>

    <!-- Catalogo Title -->
    <!-- Wrapper -->
    <div class="h-[50px] w-[98%] sm:w-[95%] lg:w-[92%] flex flex-row mt-6 md:mt-8 lg:mt-20">
      <!-- Linha Left Container -->
      <div class="h-full w-[10%] ml-4 mr-1 sm:mr-2 flex justify-center items-center">
        <span class="h-[2px] w-full bg-black"></span>
      </div>
      <!-- Middle Texto --> 
      <div class="h-full w-[24%] flex justify-center items-center text-[16px] sm:w-[22%] sm:text-[16px] md:text-[19px] lg:text-[23px] xl:text-[28px] 2xl:text-[33px] font-[600] tracking-tighter">Catálogo de Jogos</div>
      <!-- Linha Right Container -->
      <div class="h-full flex flex-1 ml-1 sm:ml-2 justify-center items-center">
        <span class="h-[2px] w-full bg-black"></span>
      </div>
    </div>
    <!-- Jogos Container -->
    <div class="h-auto w-[90%] flex flex-col justify-center items-center">
      <!-- Jogos abaixo, height definido por quantidades de flexbox jogos, template abaixo -->
      <RouterLink to="Memoria" class="h-[500px] lg:h-[300px] w-full mt-16 flex flex-col items-center lg:flex-row rounded-xl hover:bg-orange-rgba-lighter">
        <div class="h-[60%] lg:h-full w-full  flex justify-center items-center md:w-[70%] lg:w-[25%]">
          <img class="h-[90%] w-[90%] border-[0px] border-black rounded-xl" src="../assets/Home/CapaMemoria.jpg">
        </div>
        <!-- Titulo do Jogo + Descricao (opcional) -->
        <div class="h-[40%] w-full lg:h-full flex flex-1 flex-col mt-8 lg:mt-0">
          <!-- Titulo Box -->
          <div class="h-[30%] w-full flex mt-2">
            <span class="italic text-[34px] font-[500] tracking-tighter ml-[6vw]">Jogo da Memória</span>
          </div>
          <div class="flex flex-1 w-full">
            <span class="italic text-[22px] font-[500] tracking-tighter ml-[6vw]">
              Encontre duas figuras iguais no menor tempo possível.
            </span>
          </div>
        </div>
      </RouterLink>

      <div class="h-[2px] w-full bg-black opacity-[8%] mt-16"></div>

      <RouterLink to="Corrida" class="h-[500px] lg:h-[300px] w-full mt-16 flex flex-col items-center lg:flex-row rounded-xl hover:bg-orange-rgba-lighter">
        <div class="h-[60%] lg:h-full w-full flex justify-center items-center md:w-[70%] lg:w-[25%]">
          <img class="h-[90%] w-[90%] border-[0px] border-black rounded-xl" src="../assets/Home/CapaCorrida.jpg">
        </div>
        <!-- Titulo do Jogo + Descricao (opcional) -->
        <div class="h-[40%] w-full lg:h-full flex flex-1 flex-col mt-8 lg:mt-0">
          <!-- Titulo Box -->
          <div class="h-[30%] w-full flex mt-2">
            <span class="italic text-[34px] font-[500] tracking-tighter ml-[6vw]">Jogo da Corrida</span>
          </div>
          <div class="flex flex-1 w-full">
            <span class="italic text-[22px] font-[500] tracking-tighter ml-[6vw]">
              Selecione um carro e escolha dentre os 18 números aleatórios, a cada cor que sair um carro correspondente irá para frente, se sua escolha chegar na Chegada, você sairá vencedor.
            </span>
          </div>
        </div>
      </RouterLink>
    </div>

    <!-- Placeholder espaco -->
    <div class="h-[200px] w-full">

    </div>

  </div>
</template>
