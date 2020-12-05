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
      src="@/assets/navbarPhoto.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>FPMOZChatBox</v-toolbar-title>

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
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/ ' },
          { title: 'Profile', icon: 'mdi-image', to: '/profile' },
          { title: 'Sign in', icon: 'mdi-help-box', to: '/signin' },
          { title: 'Sign up', icon: 'mdi-help-box', to: '/signup' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' },
        ],
      }),
  }
</script>
