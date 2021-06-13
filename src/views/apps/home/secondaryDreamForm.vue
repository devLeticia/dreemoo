<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog persistent transition="dialog-bottom-transition" width="700" height="700">
        <template v-slot:activator="{ on, attrs }">
          <v-btn elevation="0" large color="primary" class="font-weight-bold" v-bind="attrs" v-on="on">Salvar sonho</v-btn>
        </template>
        <template >
          <v-card class="py-10 px-12">
            <intensity-form v-if="isIntensity"/>
            <feelings-form v-if="isFeelings"/>
            <source-form v-if="isSource"/>
            <direction-form v-if="isDirection"/>
            <interpretation-form v-if="isInterpretation"/>
            <keys-form/>
           <!--  -->
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import intensityForm from './intensityForm'
import feelingsForm from './feelingsForm'
import sourceForm from './sourceForm'
import directionForm from './directionForm'
import interpretationForm from './interpretationForm'
import keysForm from './keysForm'

export default {
  components: { intensityForm, feelingsForm, sourceForm, directionForm, interpretationForm, keysForm },
  data() {
    return {
      isIntensity: false,
      isFeelings: false,
      isSource: false,
      isDirection: false,
      isInterpretation: false,
    }
  },
}
</script>

<style>

</style>
