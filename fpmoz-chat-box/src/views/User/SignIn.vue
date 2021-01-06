<template>
<div>
  <v-container>
    <v-layout row>
      <v-flex xs10 sm6 offset-sm3 offset-xs1  mt-10 >
        <v-card  tile >
          <v-card-text class="shadow">
            <v-container class="cyan--text">
              <v-layout row wrap >
                <v-flex class="text-center">
                  <h3 class="text-h3 font-weight-thin mb-4  " >Sign in  <br> form</h3>
                </v-flex>
              </v-layout>
              <form >
                <v-layout row >
                  <v-flex xs12 >
                    <v-text-field
                      name="email"
                      label="E-mail adress"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 class="text-center">
                    <v-btn class="cyan white--text" type="button" v-on:click="signin()">Sign in</v-btn>
                  </v-flex>
                </v-layout>
              </form>
              <br>
                <v-layout row wrap>
                  <v-flex class="text-center">
                    <p class="text-p font-weight-500 mb-2  " >If you doesnt have account , you can make it <router-link to="/signup" class="text">here</router-link></p>
                  </v-flex>
                </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
import firebase from "@/services/firebase"
import Vue from 'vue';

export default {
  app: "Signin",
  data(){
    return{
      email:"",
      password:""
    };
  },
  methods: {
    signin(){
      const auth = firebase.auth();
      auth.signInWithEmailAndPassword(this.email, this.password).then(async res =>{
        console.log(res);
        if(res.user){
          //Provjera korisnika da li postoji u firebase bazi
          await firebase
          .firestore()
          .collection("users")
          .where("id", "==", res.user.uid)
          .get()
          .then(querySnapshot =>{
            //console.log("query", querySnapshot);
            querySnapshot.forEach(doc => {
              let userData = doc.data();
              localStorage.setItem("id",  userData.uid);
              localStorage.setItem("firstName",  userData.uid);
              localStorage.setItem("firstName", userData.firstName);
              localStorage.setItem("lastName", userData.lastName);
              localStorage.setItem("email", userData.email);
              localStorage.setItem("password", userData.password);
              localStorage.setItem("description",  userData.description);
              localStorage.setItem("college", userData.college);
              localStorage.setItem("FirebaseDocumentId", doc.id);
              localStorage.setItem("typeOfUser",userData.typeOfUser);
              
            });
          });
          
        }
      }).catch(err =>{
        let errorCode = err.code;
        let errormessage = err.message;
        if(errorCode == "auth/weak-password"){
          alert("week password")
        }else{
          alert("Incorrect e-mail")
        }
      });
    }
  },
}
</script>


<style >
.shadow{
box-shadow: -1px 2px 32px -12px rgba(0,0,0,1);
-webkit-box-shadow: -1px 2px 32px -12px rgba(0,0,0,1);
-moz-box-shadow: -1px 2px 32px -12px rgba(0,0,0,1);
}
  
</style>