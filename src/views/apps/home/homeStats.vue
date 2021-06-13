<template>
    <div>
         <h4 class="mb-6">ESTATÍSTICAS</h4>
            <v-card outlined v-for="item in mainStats" :key="item.id" class="pa-4 align-right mb-6">
                <h1 class="text-right font-weight-bold">{{item.number}}</h1>
                <h4 class="mt-6 text-right">{{item.description}}</h4>
            </v-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mainStats: [
        {
          description: 'Sonhos registrados',
          number: 40,
        },
        {
          description: 'interpretações',
          number: 5,
        },
        {
          description: 'Direções de vida',
          number: 10,
        },
      ],
    }
  },
}
</script>

<style>

</style>
