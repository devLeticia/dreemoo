<template>
    <div>
        <v-icon class="float-right" @click="opfer()">info</v-icon>
            <h3 class="text-center mt-6 mb-12">Qual a <span class="primary--text">fonte</span> do sonho?</h3>
            <div class="d-flex text-center" >
                <v-card :key="index" v-for="(item,index) in sources" outlined style="background: #E1E7FC" class="pointer text--grey pa-5 container mr-2">
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
      sources: [
        {
          icon: 'category',
          type: 'Lixo do dia',
          description: 'Resquícios de pensamentos e situações do dia-a-dia no subconsciente',
        },
        {
          icon: 'volunteer_activism',
          type: 'Alma',
          description: 'Revelam seu estado emocional e situações que ainda não se resolveram',
        },
        {
          icon: 'air',
          type: 'Espírito',
          description: 'Existe uma mensagem a ser decifrada que revela direções',
        },
      ],
    }
  },
}
</script>
