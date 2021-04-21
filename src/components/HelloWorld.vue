<template>
  <div class="ml-16">
      <v-row>
        <v-col cols="2" style=" background:#FF3565"></v-col>
         <v-col cols="6" style=" background:#3A1C71">
        <v-btn elevation="0" large color="primary" class="font-weight-bold">
            <v-icon left light>add</v-icon>Novo sonho</v-btn>
        </v-col>
      </v-row>

    </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
