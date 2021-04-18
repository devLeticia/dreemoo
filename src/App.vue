<template>
<!--adicionei a tag v-app pra encapsular toda a aplicação, assim funciona todas os atributos dentro das tags do vuetify-->
   <v-app>
  <div id="app">
    <router-view/>
  </div>
  </v-app>
</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f2f2f;
  margin-top: 60px;
}
</style>
