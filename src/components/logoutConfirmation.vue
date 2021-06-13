<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title class="headline text-align-center">
          Tem certeza?
        </v-card-title>
        <v-card-text>Hey, lembre de guardar sua senha pra quando voltar!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="font-weight-bold" large elevation="0" text @click.native="close">Sair</v-btn>
          <v-btn color="primary" class="font-weight-bold" large elevation="0" @click.native="close">Voltar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      default: false,
    },
  },
  watch: {
    openLogOutConfirmation() {
      if (this.openLogOutConfirmation) this.dialog = true
    },
  },
  data() {
    return {
    }
  },
  methods: {
    close() {
      this.$emit('update:dialog', false)
    },
  },
}
</script>
