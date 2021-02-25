<template>
    <!-- v-if="typeOfUser === 'Admin'" Edit button form -->
  <div>
            
            <v-layout row wrap>
                <v-flex  sm12 md12  >
                    <v-app-bar
                    color="white"
                    
                    >
                    <v-toolbar-title > Chat name: {{roomname}}</v-toolbar-title>
                    
                    <v-spacer></v-spacer>

                    <div class="addRoom mr-6">
                        <v-btn icon @click="$router.go(-1)" link>
                            Get back
                            <div class="divider"/>
                            <v-icon>mdi-location-exit</v-icon>
                        </v-btn>
                    </div>
                    </v-app-bar>
                    </v-flex>  
                    <v-flex xl-12  >
                        <v-list-item class="chat-item ma-2 justify-center" v-for="chat in chats" :key="chat.key" >
                          <div class="chat-status text-center" v-if="chat.type==='join'||chat.type==='exit'">
                            <span class="chat-date">{{chat.sendDate}}</span>
                            <span class="chat-content-center">{{chat.message}}</span>
                          </div>
                          <div v-else >
                              <div  v-if="chat.user === nickname" >
                              <v-flex class="ml-9">
                              <div class="pa-4 text-center teal lighten-3 rounded-bl-xl elevation-10" >
                                <div class="sentInfo pa-4  text-right teal lighten-2 rounded-l-xl">
                                  <span class="msg-name">Me</span><br>
                                  <span class="msg-date font-italic font-weight-thin"> Delivered:{{chat.sendDate}}</span>
                                </div>
                                <p text-wrap class="text-left ma-2 font-weight-bold">{{chat.message}}</p>
                              </div>
                              </v-flex>
                            </div>
                            <div class="ma-2"></div>
                            <div  v-if="chat.user !== nickname" >
                              <v-flex class="mr-9">
                              <div class="pa-4 text-center pink lighten-1 rounded-br-xl elevation-10" >
                                <div class="sentInfo pa-4 text-left pink darken-2 rounded-r-xl">
                                  <span class="msg-name">{{chat.user}}</span><br>
                                  <span class="msg-date font-italic font-weight-thin caption">Delivered: {{chat.sendDate}}</span>
                                </div>
                                <p text-wrap class="text-left ma-2 font-weight-bold ">{{chat.message}}</p>
                              </div>
                              </v-flex>
                            </div>
                            <div class="ma-2"></div>
                          </div>
                        </v-list-item>
                <div class="ma-5 pa-7"></div>
                </v-flex>  
            </v-layout>

            <v-footer fixed class="sticky-footer">
                  <v-text-field v-on:keyup.enter="onSubmit" autocomplete="off" id="message" v-model.trim="data.message" placeholder="Enter your message" class="mr-5"></v-text-field>
                  <v-btn v-on:click="onSubmit" variant="primary" :disabled="!data.message">Send</v-btn>
            </v-footer>           

  </div>
</template>

<script>
var UTCDateString = new Date().toUTCString();
console.log(UTCDateString);

import {firebase, db} from "@/services/firebase";
import router from '@/router';

/* this.$moment */

export default {
  name: 'Chat',
  data () {
    return {
        drawer:false,
        roomid: this.$route.params.roomid,
        roomname: this.$route.params.roomname,
        nickname: this.$route.params.nickname,
        data: { type:'', nickname:'', message:'' },
        chats: [],
        errors: [],
        offStatus: false
    }
  },
  created () {
    var UTCDateString = new Date().toUTCString();
    let joinData = firebase.database().ref('chatrooms/'+this.roomid+'/chats').push();
    joinData.set({
      type: 'join',
      user: this.nickname,
      message: this.nickname+' has joined this room.',
      sendDate: UTCDateString
    });
    this.data.message = '';
    firebase.database().ref('chatrooms/'+this.roomid+'/chats').on('value', (snapshot) => {
      this.chats = [];
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        this.chats.push(item)
      });
    });
  },
  methods: {
    onSubmit (evt) {
        var UTCDateString = new Date().toUTCString();
        evt.preventDefault();
        let newData = firebase.database().ref('chatrooms/'+this.roomid+'/chats').push();
        newData.set({
            type: 'newmsg',
            user: this.nickname,
            message: this.data.message,
            sendDate: UTCDateString
        });
        this.data.message = '';
    },
    exitChat () {
      let exitData = firebase.database().ref('chatrooms/'+this.roomid+'/chats').push()
      exitData.set({
        type: 'exit',
        user: this.nickname,
        message: this.nickname+' has exited this room.',
        sendDate: Date.now()
      })

      this.offStatus = true
      router.go(-1)
    }
  }
}
</script>

<style>
  .chat-box {
    height: 900px;
    width: 100%;
    overflow: scroll;
    
    margin: auto;
    width: 50%;
  }
  .chat-item {
    border: none;
  }
  .chat-status {
    min-height: 49px;
    
    margin: auto;
    width: 100%;

  }
  .chat-status .chat-date {
    display: block;
    font-size: 10px;
    font-style: italic;
    color: #999;
    height: 15px;
    left: 10%;
    right:10%;
  }
  .chat-status .chat-content-center {
    padding: 5px 10px;
    background-color: #E0E0E0;
    border-radius: 6px;
    font-size: 12px;
    color: #555;
    height: 34px;
    left: 10%;
    right:10%;
  }
  .bor{
    border: 1px solid red;
  }
  .msg-name{
    color: white;
  }
  .msg-date{
    color: white;
  }
 
</style>