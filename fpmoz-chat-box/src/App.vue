<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    app
    v-model="drawer"
    class="cyan lighten-1"
    dark
    
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Ime studneta
          </v-list-item-title>
          <v-list-item-subtitle>
            Smjer studneta 
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="cyan lighten-1"
      dark
      elevate-on-scroll
    >

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>FPMOZChatBox</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-logout <span>Signout</span></v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null ,
      items: [
          { title: 'Home', icon: 'mdi-home', to: '/' },
          { title: 'Profile', icon: 'mdi-account', to: '/profile' },
          { title: 'ChatBox', icon: 'mdi-forum', to: '/chatbox' },
          { title: 'Sign in', icon: 'mdi-login', to: '/signin' },
          { title: 'Sign up', icon: 'mdi-account-plus', to: '/signup' },
          { title: 'About', icon: 'mdi-information-outline', to: '/about' },
        ],
      }),
  }
</script>
