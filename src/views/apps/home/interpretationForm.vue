<template>
    <div>
        <v-icon class="float-right" @click="opfer()">info</v-icon>
            <h3 class="text-center mt-6 mb-12">Como você <span class="primary--text">interpreta</span> esse sonho?</h3>
            <div class="text-center">
                <v-textarea prepend-inner-icon="auto_awesome" rows="7" outlined label="Interpretação do sonho" value=""></v-textarea>
            </div>
            <div class="d-flex justify-space-between mt-12">
              <v-btn  class="primary--text font-weight-bold" elevation="0" large text @click="dialog.value = false">Voltar</v-btn>
              <v-btn  elevation="0" large color="primary" class="font-weight-bold">Não sei</v-btn>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>
