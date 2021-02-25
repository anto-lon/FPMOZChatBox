<template>
  <v-simple-table id="forumTable">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Kolegij
          </th>
          <th class="text-left">
            Tip
          </th>
           <th class="text-left">
            Opis
          </th>
          <th class="text-left">
            Datum
          </th>
           <th class="text-left">
           Vrijeme
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event,i) in events" v-bind:key="i">
          <td>{{ event.kolegij }}</td>
          <td>{{ event.description }}</td>
          <td>{{ event.typeevent }}</td>
          <td>{{ event.date }}</td>
          <td>{{ event.time }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import firebase from "firebase";
  export default {
    methods:{
  
    },
    data(){
      return {
        events : [],
        event:{
          kolegij:null,
          description:null,
          typeevent:null,
          date:null,
          time:null
        }
      }
    },
    created(){
          
       let query = firebase.database().ref("events");
         query.on("value",(snapshot) =>{
            console.log(snapshot)
             let eventList = []
             this.events = []
            query.once("value",(snapshot) =>{
                snapshot.forEach(childSnapshot => {
               eventList.push(childSnapshot.val())
            })
            })
              this.events = eventList; 
         })
      },
  }



</script>