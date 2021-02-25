<template>
  <div>
      <v-container>
        <v-layout row wrap>
          <v-flex xs8 sm8 md6 offset-md-3 offset-2 class="text-center">
                <v-row>
                    <v-text-field
                    color="cyan"
                    label="Name of the room"
                    id="roomname" 
                    v-model.trim="room.roomName"
                    required
                    autocomplete="off"
                    v-on:keyup.enter="onSubmit"
                    ></v-text-field>
                </v-row>
                <div>
                    <div>
                    <v-btn
                    v-on:click="onSubmit"
                    elevation="2"
                    outlined
                    rounded
                    text
                    color="green"
                    >Save</v-btn>
                        <div class="divider"/>
                    <v-btn
                    @click="$router.go(-1)"
                    elevation="2"
                    outlined
                    rounded
                    color="red"
                    text
                    >Back</v-btn>
                </div>
                </div>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<script>
import {firebase, db} from "@/services/firebase";
import router from '../router'

export default {
  name: 'AddBoard',
  data () {
    return {
      ref: firebase.database().ref('chatrooms/'),
      room: { roomName: '' },
      oneTimeRoom:'',
    }
  },
  methods: {
    onSubmit () {
      console.log("kliknut gumb", this.roomName)
      
      let newData = this.ref.push()
      newData.set({
        roomName: this.room.roomName
      })
      router.go(-1);
    }
  }
}
</script>


<style scoped>
.divider{
    width:10px;
    height:auto;
    display:inline-block;
}
</style>


<style scoped>
.divider{
    width:10px;
    height:auto;
    display:inline-block;
}
</style>