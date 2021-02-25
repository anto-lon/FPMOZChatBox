<template>
<div>
  <v-container>
    <v-layout row>
      <v-flex xs10 sm6 offset-sm3 offset-xs1  mt-10 class="shadow" >
        <v-card  >
          <v-card-text>
            <v-container class="cyan--text">
              <v-layout row wrap>
                <v-flex class="text-center">
                  <h3 class="text-h3 font-weight-thin mb-4  " >Sign up  <br> form</h3>
                </v-flex>
              </v-layout>
              <form >
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="firstName"
                      label="First Name"
                      id="name"
                      v-model="firstName"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="lastName"
                      label="Last name"
                      id="lastName"
                      v-model="lastName"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                 <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="college"
                      label="College"
                      id="college"
                      v-model="college"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
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
                    <v-btn type="button" class="cyan white--text" v-on:click="signup()">Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
              <br>
                <v-layout row wrap>
                  <v-flex class="text-center">
                    <p class="text-p font-weight-500 mb-2  " >If you have alreaday account ,you can sign in <router-link to="/signin" class="text">here</router-link></p>
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
import {firebase, db} from "@/services/firebase";
import Vue from 'vue';

export default {
  app: "Signup",
  data(){
    return{
      firstName:"",
      lastName:"",
      college:"",
      email:"",
      password:""
    }
  },
  methods:{
      signup(){
      const auth = firebase.auth();
      const firstName = this.firstName;
      const lastName = this.lastName;
      const college = this.college;
      const email = this.email;
      const password = this.password;
      const typeOfUser = "Student"
      auth.createUserWithEmailAndPassword(email, password).then(async res => {
        console.log("res", res);

        await firebase
        .firestore()
        .collection("users")
        .add({
          firstName,
          lastName,
          id: res.user.uid,
          email,
          password,
          description:"",
          college,
          typeOfUser,
        }).then(ref =>{
          localStorage.setItem("id", res.user.uid);
          localStorage.setItem("firstName", firstName);
          localStorage.setItem("lastName", lastName);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("description", "");
          localStorage.setItem("typeOfUser", typeOfUser);
          localStorage.setItem("college", college);
          localStorage.setItem("FirebaseDocumentId", ref.id);

          this.firstName = "";
          this.lastName = "";
          this.college = "";
          this.email = "";
          this.password = "";

          
        }).catch(err => console.log("ne valja sifra"));
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
};


</script>



<style >
.shadow{
box-shadow: -1px 2px 32px -12px rgba(0,0,0,1);
-webkit-box-shadow: -1px 2px 32px -12px rgba(0,0,0,1);
-moz-box-shadow: -1px 2px 32px -12px rgba(0,0,0,1);
}
  
</style>