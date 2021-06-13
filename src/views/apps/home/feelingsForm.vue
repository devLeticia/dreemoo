<template>
    <div>
        <v-icon class="float-right" @click="opfer()">info</v-icon>
            <h3 class="text-center mt-6 mb-12">Quais os <span class="primary--text">sentimentos</span> no sonho?</h3>
            <div class="text-center px-10">
            </div>
            <feeling-card/>
            <div class="d-flex justify-space-between mt-12">
              <v-btn  class="primary--text font-weight-bold" elevation="0" large text @click="dialog.value = false">Voltar</v-btn>
              <v-btn  elevation="0" large color="primary" class="font-weight-bold">Avançar</v-btn>
        </div>
    </div>
</template>

<script>
import feelingCard from '../../../components/feelings.vue/feeling-card'

export default {
  components: { feelingCard },
  data() {
    return {

    }
  },
}
</script>
