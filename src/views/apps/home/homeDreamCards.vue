<template>
    <div>
        <div class="d-flex justify-space-between">
            <h4 class="mb-6">MEUS SONHOS</h4>
            <v-btn @click="openDreamEditor" elevation="0" large color="primary" class="font-weight-bold align-right">
                <v-icon left light >add</v-icon>   Novo sonho
            </v-btn>
        </div>
           <v-card v-for="item in userDreams" :key="item.id" outlined  class="mb-6 pa-4">
             <span></span>
             <div class="d-flex justify-space-between">
                <div class="d-flex">
                  <p class="mr-3 mt-1 text-body-2 font-weight-light" color="grey">{{item.date}}</p>
                  <v-btn icon color="grey" class="mt-n1 ml-1"><v-icon>air</v-icon></v-btn>
                  <v-btn icon color="grey" class="mt-n1 ml-1"><v-icon>restore</v-icon></v-btn>
                  <v-btn icon color="grey" class="mt-n1 ml-1"><v-icon>emoji_objects</v-icon></v-btn>
                </div>
                <div class="d-flex">
                  <p class="text-body-2 mr-2">#casa</p>
                  <p class="text-body-2 mr-2">#cobra</p>
                  <p class="text-body-2">#jardim</p>
                </div>
             </div>
             <div class="d-flex justify-space-between">
               <h4>{{item.title}}</h4>
               <div class="d-flex">
                 <div class="mr-3" style="width:30px; height:30px; background-color:#E4E8F6"></div>
                 <div class="mr-3" style="width:30px; height:30px; background-color:#6ED2BF"></div>
                 <div style="width:30px; height:30px; background-color:DarkSeaGreen"></div>
               </div>
             </div>
           </v-card>
    </div>
</template>

<script>
export default {
  methods: {
    openDreamEditor() {
      // eslint-disable-next-line no-console
      console.log('Clicou em abrir modal de escrever sonho')
    },
  },
  data() {
    return {
      userDreams: [
        {
          id: 213123,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Uma cobra me perseguindo, foi horrível!! :(',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
        {
          id: 382923,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Festa na montanha, o que foi aquilo?',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
        {
          id: 312313,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Uma cobra me perseguindo, foi horrível!! :(',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
        {
          id: 3534523,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Uma cobra me perseguindo, foi horrível!! :(',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
        {
          id: 38756752943,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Uma cobra me perseguindo, foi horrível!! :(',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
        {
          id: 3864562423,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Uma cobra me perseguindo, foi horrível!! :(',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
        {
          id: 383422923,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Uma cobra me perseguindo, foi horrível!! :(',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
        {
          id: 842329423,
          date: 'Tue May 18 2021 18:54:42 GMT-0300',
          title: 'Uma cobra me perseguindo, foi horrível!! :(',
          description: '',
          intensity: 1,
          feelings: [1, 2, 3, 4],
          source: [1, 2],
          directionRevelation: 'Uma cobra me perseguindo, foi horrível!! :(',
          lifeContext: 'Uma cobra me perseguindo, foi horrível!! :(',
          interpretation: '',
          tags: ['cobra', 'casa', 'jardim'],
        },
      ],
    }
  },
}
</script>
