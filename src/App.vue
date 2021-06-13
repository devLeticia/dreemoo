<template>
<!--tag v-app pra encapsular toda a aplicação, assim funciona todas os atributos dentro das tags do vuetify-->
   <v-app >
      <nav>
        <v-app-bar  outlined elevation="0">
        </v-app-bar>
    </nav>
     <main-nav-bar/>
     <router-view class="ml-16 mt-6 pl-6"/>
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
  background-color:#E9EBEE;
}
</style>
