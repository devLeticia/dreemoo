<template>
    <div>
      <v-navigation-drawer  app fixed permanent expand-on-hover style="z-index:9999" color="primary">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Dreemoo
            </v-list-item-title>
            <v-list-item-subtitle>
              Keep track of your dreams
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list dense nav></v-list>
        <v-list-item v-for="item in mainMenuItems" :key="item.index" link>
          <v-list-item-icon>
            <v-icon color="white">{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text text-left">
              {{item.title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="item in secondaryMenuItems" :key="item.index" link>
          <v-list-item-icon>
            <v-icon color="white">{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text text-left">
              {{item.title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mainMenuItems: [
        { title: 'Home', icon: 'home' },
        { title: 'Estatísticas', icon: 'insights' },
        { title: 'Configurações', icon: 'settings' },
        { title: 'Tema claro', icon: 'light_mode' },
      ],
      secondaryMenuItems: [
        { title: 'Blog', icon: 'auto_awesome' },
        { title: 'Sair', icon: 'logout' },
      ],
      right: null,
    }
  },
}
</script>
