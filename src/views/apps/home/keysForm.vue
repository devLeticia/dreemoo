<template>
    <div>
        <v-icon class="float-right" @click="opfer()">info</v-icon>
            <h3 class="text-center mt-6 mb-12">Quais as <span class="primary--text">palavras-chave</span> desse sonho?</h3>
            <div class="text-center">
                <v-text-field
                prepend-inner-icon="tag"
            v-model="message4"
            label="Palavra-chave"
            outlined
            clearable
          ></v-text-field>
           <p>Escreva a palavra-chave e pressione ENTER</p>
            </div>
            <div class="d-flex justify-space-between mt-12">
              <v-btn  class="primary--text font-weight-bold" elevation="0" large text @click="dialog.value = false">Voltar</v-btn>
              <v-btn  elevation="0" large color="primary" class="font-weight-bold">Pronto</v-btn>
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
