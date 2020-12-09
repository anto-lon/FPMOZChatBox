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
                    <v-btn type="button" class="cyan--text" v-on:click="signup">Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
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
      auth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log("res", res);
      });
      
    }
  }
};


</script>



<style >
.shadow{
  -webkit-box-shadow: 0px 0px 21px 5px rgba(38,198,218,0.38); 
  box-shadow: 0px 0px 21px 5px rgba(38,198,218,0.38);
}
  
</style>