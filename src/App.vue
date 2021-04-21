<template>
<!--adicionei a tag v-app pra encapsular toda a aplicação, assim funciona todas os atributos dentro das tags do vuetify-->
   <v-app class="red lighten-4">
      <nav>
        <v-app-bar app >
          <v-icon left light>search</v-icon>
        </v-app-bar>
    </nav>
     <main-nav-bar/>
     <router-view class="mt-16"/>
  </v-app>
</template>


<script>

import MainNavBar from './components/navBar'

export default {
  components: { MainNavBar },

}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
/*   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2f2f2f;
}
</style>
