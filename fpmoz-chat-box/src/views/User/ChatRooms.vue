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
                    <v-flex xs10 sm10 md8 offset-md-2 offset-1>
                        <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            >
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
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
            items: [
            {
            text: 'Inbox',
            },

        ],
        }

    },
  }
</script>

<style scoped>
.addRoom, a{
    text-decoration: none;
}
</style>