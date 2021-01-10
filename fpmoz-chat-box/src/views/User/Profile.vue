<template>
    <div >
        <div class=" cyan lighten-1" >
            <v-flex  xs12 sm12 md12 class="text-center text-sm-center pa-4">
                <img src="https://i.ibb.co/PMRVRV7/logo.png" height="120px" alt="">
            </v-flex>
        </div>
        <br>
        <div>
            <v-card
                class="mx-auto profileCard ml-5 mr-5"
            >
                <v-img
                class="white--text align-end"
                height="300px"
                width="auto"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                <div class="text-center">
                    <img :src=photo  class="profilePhoto">
                </div>
                </v-img>
                <v-card-text class="text--primary text-center">
                <h2>{{firstName}}  {{lastName}}</h2> <br>
                <div class="font-weight-500 mb-4">
                    <div>Studij : {{college}}</div>
                    <div>Student id: {{userId}} </div>
                    <div>E-mail: {{email}} </div>
                    <div>Vrsta korisnika : {{typeOfUser}}</div>
                </div>
                </v-card-text>
                <!-- Ovo je button komponenta
                <div> 
                    <div>
                        <v-row justify="center">
                    <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                    
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="green"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        <pre>E &nbsp; d &nbsp; i &nbsp; t</pre> 
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">Edit Profile</span>
                        </v-card-title>
                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                label="New name"
                                required
                                v-model="newName"
                                ></v-text-field>
                            </v-col>
                            </v-row>
                            <v-row>
                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                label="New last name"
                                required
                                v-model="newLastName"
                                ></v-text-field>
                            </v-col>
                            </v-row>
                            <v-row>
                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                label="URL photo upolad"
                                required
                                v-model="newPhoto"
                                ></v-text-field>
                            </v-col>
                            </v-row>
                            <v-row>
                            <v-col
                            cols="12"
                            >
                                <v-text-field
                                label="College"
                                required
                                v-model="newName"
                                ></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Save
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
                    </div>
                    <br>
                </div> -->
            </v-card>
        </div>
    </div>
    
    
</template>

<script>
import {firebase, db} from "@/services/firebase";
import Vue from 'vue';
import store from '@/store';
import router from '@/router';

export default {
    data(){
        return{
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
            photoURL:localStorage.getItem("photoURL"),
            newPhoto:null,
            dialog: false,
            photo: "https://www.w3schools.com/howto/img_avatar.png"
        }
    }
}
</script>
<style >
.blueLine2{
    height: 150px;
    max-width: 100%;
}
.profilePhoto{
    border-radius: 50%;
    width: 150px;
    height: 150px;
    box-shadow: -1px 1px 42px -5px rgba(0,0,0,0.69);
    -webkit-box-shadow: -1px 1px 42px -5px rgba(0,0,0,0.69);
    -moz-box-shadow: -1px 1px 42px -5px rgba(0,0,0,0.69);
}


</style>