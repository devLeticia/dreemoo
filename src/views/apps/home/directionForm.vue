<template>
    <div>
        <v-icon class="float-right" @click="opfer()">info</v-icon>
            <h3 class="text-center mt-6 mb-12">Sobre qual <span class="primary--text">momento</span> seu sonho fala?</h3>
            <div class="d-flex text-center" >
                <v-card :key="index" v-for="(item,index) in moment" outlined style="background: #E1E7FC" class="pointer text--grey pa-5 container mr-2">
                    <v-icon x-large color="primary" class="mt-5">{{item.icon}}</v-icon>
                  <h3 class="mt-6 font-weight-bold">{{item.type}}</h3>
                  <p class="mt-8">{{item.description}}</p>
                </v-card>
            </div>
            <div class="d-flex justify-space-between mt-12">
              <v-btn  class="primary--text font-weight-bold" elevation="0" large text @click="dialog.value = false">Voltar</v-btn>
              <v-btn  elevation="0" large color="primary" class="font-weight-bold">AINDA NÃO SEI</v-btn>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      moment: [
        {
          icon: 'west',
          type: 'Passado',
          description: 'Coisas que já aconteceram',
        },
        {
          icon: 'south',
          type: 'Presente',
          description: 'acontecimentos do momento',
        },
        {
          icon: 'east',
          type: 'Futuro',
          description: 'provalmente sobre o futuro',
        },
      ],
    }
  },
}
</script>
