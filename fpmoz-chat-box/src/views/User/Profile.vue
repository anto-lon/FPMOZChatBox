<template>
    <div class="text-h5  font-weight-500 mb-4 white--text">
        <div class="blueLine2 cyan lighten-1" >
            <v-flex  xs12 sm12 md12 class="text-center text-sm-center pa-4">
                <img src="https://i.ibb.co/PMRVRV7/logo.png" height="120px" alt="">
            </v-flex>
        </div>
        <br><br>
        <div>
            <v-card
                class="mx-auto"
                max-width="800"
            >
                <v-img
                class="white--text align-end"
                height="250px"
                width="auto"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                <div class="text-center">
                    <img src="https://www.pngfind.com/pngs/m/80-804949_profile-icon-for-the-politics-category-circle-hd.png" height="120px">
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
                <div v-if="typeOfUser === 'Admin'">
                    <v-btn
                    color="green"
                    class="ma-2 white--text"
                    >
                    Edit 
                    </v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
import firebase from "@/services/firebase";
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
            newPhoto:null
        }
    }
}
</script>
<style >
.blueLine2{
    height: 150px;
    width: 100%;
}


</style>