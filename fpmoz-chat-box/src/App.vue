<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    app 
    v-model="drawer"
    class="cyan lighten-1"
    dark>
      <div v-if="store.currentUser">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{firstName}} {{lastName}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{college}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </div>
      <v-divider></v-divider>
  <!-- Home -->
      <v-list
        dense
        nav>
        <div >
        <v-list-item
          to="/"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
  <!-- Sign in -->
        <div v-if="!store.currentUser" >
        <v-list-item

          to="/signin"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Sign in</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
  <!-- Sign up -->
        <div v-if="!store.currentUser"> 
        <v-list-item
          to="/signup"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Sign up</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
  <!-- Profile -->
        <div v-if="store.currentUser">
        <v-list-item
          to="/profile"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
  <!-- Chat Box -->
        <div v-if="store.currentUser">
        <v-list-item
          to="/chatbox"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>ChatBox</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
  <!-- Calendar -->
        <div v-if="store.currentUser">
        <v-list-item
          to="/calendar"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Calenadar</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
  <!-- About us -->
        <div>
        <v-list-item
          to="/about"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      color="cyan lighten-1"
      dark
      elevate-on-scroll
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>FPMOZChatBox</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="signOutbtn" v-if="store.currentUser" >
        <v-btn icon v-on:click="signout()">
          <v-icon>mdi-logout </v-icon><span>Sign out</span>
        </v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>


<script>
import firebase from "@/services/firebase";
import Vue from 'vue';
import store from '@/store';
import router from '@/router';

firebase.auth().onAuthStateChanged(function(user) {
  const currentRoute = router.currentRoute;
  //console.log("current rpoute", currentRoute)
  if (user) {
    // User is signed in.
    console.log("+++", user.email);
    store.currentUser = user.email;
    if( !currentRoute.meta.needsUser){
      router.push('/profile');
    }
  }else {
    // User is not signed in.
    console.log("No user");
    store.currentUser = null;
    if( currentRoute.meta.needsUser){
      router.push('/signin');
      router.replace(currentRoute);
    }
  }
});

  export default {
    data(){ 
      return {
        drawer:null,
        store,
        firebaseDocId: localStorage.getItem("FIrebaseDocumentId"),
        userId:localStorage.getItem("id"),
        firstName:localStorage.hasOwnProperty("firstName")? localStorage.getItem("firstName")
        :"",
        lastName:localStorage.hasOwnProperty("lastName")? localStorage.getItem("lastName")
        :"",
        college:localStorage.hasOwnProperty("college")? localStorage.getItem("college")
        :"",
        description:localStorage.hasOwnProperty("description")? localStorage.getItem("description")
        :"",
        email:localStorage.hasOwnProperty("email")? localStorage.getItem("email")
        :"",  
        }
      },
      methods:{
        signout(){
          firebase.auth().signOut().then(()=>{
            this.$router.push('/signin');
          });
        },
      },

  }
</script>



<style>
.signOutbtn{
  padding-right:15px ;
}
  
</style>