<template>
    <div>
        <v-icon class="float-right" @click="opfer()">info</v-icon>
            <h3 class="text-center mt-6 mb-12">Qual foi a <span class="primary--text">intensidade</span> do seu sonho?</h3>
            <div class="text-center px-10">
              <v-card v-ripple outlined style="background: #E1E7FC" class="pointer text--grey pa-5 mb-5"><span class="font-weight-bold">LEVE:</span> lembro de poucas partes, sem sentido</v-card>
              <v-card v-ripple outlined style="background: #C9D4F9" class="medium pa-5 mb-5"><span class="font-weight-bold">MÉDIO:</span> lembro das partes principais com clareza</v-card>
              <v-card v-ripple outlined style="background: #97ADFB" class=" white--text  strong pa-5 mb-5"><span class="font-weight-bold">FORTE:</span> lembro de tudo e sentimentos eram intensos</v-card>
              <v-card v-ripple outlined style="background: #6787F8" class="white--text vision pa-5 mb-5"><span class="font-weight-bold">VISÃO:</span> parecia realidade, tinha comando  do sonho</v-card>
            </div>
            <div class="d-flex justify-space-between mt-12">
              <v-btn  class="primary--text font-weight-bold" elevation="0" large text @click="dialog.value = false">Voltar</v-btn>
              <v-btn  elevation="0" large color="primary" class="font-weight-bold">Avançar</v-btn>
        </div>
    </div>
</template>
