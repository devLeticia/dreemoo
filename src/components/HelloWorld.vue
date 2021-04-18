<template>
  <div>
    <h4 class="font-weight-bold">Aqui vai um titulo</h4>
    <v-btn class="font-weight-semibold" medium color="primary">Salvar</v-btn>
    <span class="material-icons">face</span>
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
