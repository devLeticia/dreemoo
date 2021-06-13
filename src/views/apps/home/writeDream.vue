<template>
    <div>
      <div class="d-flex justify-space-between">
        <v-btn icon><v-icon>arrow_back</v-icon></v-btn>
        <secondary-dream-form @click="openSecondaryDreamForm()" :disabled="(title.length < 3 || description.length < 3)" />
      </div>
        <div  class="border d-flex justify-space-between mt-3">
          <v-text-field v-model="title" label="Título do sonho" outlined clearable class="font-weight-bold"></v-text-field>
        </div>
        <v-textarea v-model="description" rows="26" label="Descrição do sonho." outlined></v-textarea>
        </div>
</template>

<script>
import secondaryDreamForm from './secondaryDreamForm'

export default {
  components: { secondaryDreamForm },
  methods: {
    openDreamEditor() {
      // eslint-disable-next-line no-console
      console.log('Clicou em abrir modal de escrever sonho')
    },
  },
  data() {
    return {
      title: '',
      description: '',
    }
  },
}
</script>
