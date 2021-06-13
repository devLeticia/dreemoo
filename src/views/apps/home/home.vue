<template>
  <div>
      <v-row class="">
        <v-col cols="2">
          <home-stats/>
        </v-col>
        <v-col cols="6" class="px-4">
          <home-dream-cards v-if="!isDreamEditorMode" @isDreamEditor="isDreamEditorMode"/>
          <write-dream v-if="isDreamEditorMode" />
        </v-col>
         <v-col cols="4">
         </v-col>
      </v-row>
    </div>
</template>

<script>
import homeStats from './homeStats'
import homeDreamCards from './homeDreamCards'
import writeDream from './writeDream'

export default {
  components: { homeStats, homeDreamCards, writeDream },
  data() {
    return {
      isDreamEditorMode: true,
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
