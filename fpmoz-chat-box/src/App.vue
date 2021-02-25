<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    app 
    fixed
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
  <!-- Chat Rooms -->
        <div v-if="store.currentUser">
        <v-list-item
          v-on:click='pushToChatRooms()'
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Chat Room's</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
  <!-- Create Event -->
        <div v-if="store.currentUser && typeOfUser == 'Admin'">
        <v-list-item
          to="/CreateEvent"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title>Create Event</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </div>
        <!--Forum -->
        <div v-if="store.currentUser">
        <v-list-item
          to="/Forum"
          link>
          
          <v-list-item-icon>
            <v-icon>mdi-bulletin-board</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Forum</v-list-item-title>
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
      <div class="mr-5" v-if="store.currentUser" >
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
import {firebase, db} from "@/services/firebase";
import Vue from 'vue';
import store from '@/store';
import router from '@/router';

firebase.auth().onAuthStateChanged(function(user) {
  const currentRoute = router.currentRoute;
  console.log("current route", currentRoute.name)
  if (user) {
    // User is signed in.
    console.log("+++", user.email);
    store.currentUser = user.email;
    if( !currentRoute.meta.needsUser){
      //router.replace('/profile');
      if( currentRoute.name == "SignIn" || currentRoute.name == "SignUp"){
        router.replace('/profile');
      }else if(currentRoute.name == "Profile" || currentRoute.name == "ChatRooms" || currentRoute.name == "Calendar"){
        router.push(currentRoute);
      }
    };
    

  }else {
    // User is not signed in.
    console.log("No user");
    store.currentUser = null;
    store.nickname = null;
    if( currentRoute.meta.needsUser){
      router.replace('/');
    }
  }
});

  export default {
    data(){ 
      return {
        drawer: false,
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
        typeOfUser:localStorage.hasOwnProperty("typeOfUser")? localStorage.getItem("typeOfUser")
        :"",
        nickname: '', 
        }
      },
      mounted(){
        this.nickname = this.firstName + this.lastName;
        console.log("niknejm", this.nickname)
        
    },
      methods:{
        signout(){
          firebase.auth().signOut().then(()=>{
            this.$router.push('/signin');
          });
        },
        pushToChatRooms(){
          	router.push({
              name: 'ChatRooms',
              params: {nickname: this.nickname}
            })
        }
      },

  }
</script>



<style>

  
</style>