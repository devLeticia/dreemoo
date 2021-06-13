<template>
    <div>
      <v-navigation-drawer absolute app class="fixed" permanent width="70" color="primary">
        <v-layout column fill-height>
        <v-list>
          <v-list-item-group v-model="selectedItem">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="title">
              <!-- Dreemoo -->
            </v-list-item-title>
            <v-list-item-subtitle>
              <!-- Keep track of your dreams -->
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
<div  v-for="item in mainMenuItems" :key="item.index" @click="goTo(item.path)">
  <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
<v-list-item v-bind="attrs" v-on="on">
          <v-list-item-icon>
            <v-icon class='material-icons-round' color="white" size="30px" >{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text text-left">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </template>
        <span>{{item.title}}</span>
         </v-tooltip>
</div>


        </v-list-item-group>
          </v-list>
           <v-spacer></v-spacer>
        <v-list>

           <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
        <v-list-item @click="goToBlog()" v-bind="attrs" v-on="on">
          <v-list-item-icon>
            <v-icon size="30px" color="white">auto_awesome</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text text-left">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         </template>
        <span>Blog de interpretações</span>
         </v-tooltip>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item @click="dialog=true" v-bind="attrs" v-on="on">
          <v-list-item-icon>
            <v-icon size="30px" color="white">logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text text-left">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </template>
        <span>Sair</span>
         </v-tooltip>

        </v-list>
        </v-layout>
      </v-navigation-drawer>
      <logout-confirmation
       :dialog.sync="dialog"
      />
    </div>
</template>

<script>
import logoutConfirmation from './logoutConfirmation'

export default {
  components: {
    logoutConfirmation,
  },
  data() {
    return {
      dialog: false,
      dreemooBlogUrl: 'https://blog.dreemoo.com.br/',
      selectedItem: 1,
      mainMenuItems: [
        { title: 'Meu sonhos', icon: 'home', path: '/sonhos' },
        { title: 'Estatísticas', icon: 'insights', path: '/estatisticas' },
        { title: 'Configurações', icon: 'settings', path: '/configurações' },
      ],
      right: null,
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$router, this.$route)
  },
  methods: {
    goTo(path) {
      this.$router.push(path, () => {})
    },
    goToBlog() {
      window.open(this.dreemooBlogUrl, '_blank')
    },
  },
}
</script>

<style>
.fixed {
  position: fixed !important;
}
</style>
