<template>
    <!-- v-if="typeOfUser === 'Admin'" Edit button form -->
  <div>
        <v-container>
            <v-layout row wrap>
                <v-flex  xs10 sm10 md8 offset-md-2 offset-1 class="text-center">
                    <v-app-bar
                    color="white"
                    >
                    <v-toolbar-title>Room list</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <div class="addRoom mr-4" v-if="typeOfUser == 'Admin'">
                        <v-btn icon to="/addroom" link>
                            <v-icon>mdi-plus</v-icon>
                            Room 
                        </v-btn>
                    </div>
                    </v-app-bar>
                    <v-flex >
                        <v-list>
                        <v-list-item-group >
                            <v-list-item
                            class=" mb-2 "
                            v-for="room in rooms" 
                            :key="room.key" 
                            :to="{name: 'Chat', params: {nickname: nickname, roomid: room.key, roomname: room.roomName}}" action
                            >
                            <v-hover >
                                <v-list-item-content>
                                    <v-list-item-title v-text="room.roomName"></v-list-item-title>
                                </v-list-item-content>
                            </v-hover>
                            </v-list-item>
                        </v-list-item-group>
                        </v-list>
                    </v-flex>
                </v-flex>
            </v-layout>
      </v-container>

  </div>
</template>
<script>
import {firebase, db} from "@/services/firebase";

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
            photo: "https://www.w3schools.com/howto/img_avatar.png",
            nickname: this.$route.params.nickname,
            rooms: [],
            errors: [],
            ref: firebase.database().ref('chatrooms/')
        }
    },
    created(){
        this.ref.on('value', (snapshot) => {
        this.rooms = [];
        snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        this.rooms.push(item)
      });
    });
    }

  }
</script>

<style scoped>
.addRoom, a{
    text-decoration: none;
}
</style>