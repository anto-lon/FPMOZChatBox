<template>
  <v-container>
    <v-layout row wrap>
           <v-flex class="text-center">
             <h3 class="text-h3 font-weight-thin mb-4 "  >Create an Event</h3> <br>
            </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateEvent">
          <v-layout row>
            <v-flex xs10 sm6 offset-sm3 offset-xs1>
              <v-text-field
                name="kolegij"
                label="Kolegij"
                id="kolegij"
                multi-line
                v-model="kolegij"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row> 
            <v-flex xs10 sm6 offset-sm3 offset-xs1>   
        <v-select
          :items="items"
          name="typeevent"
          label="Type event"
          id="typeevent"
          dense
          v-model="typeevent"
                required
        ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs10 sm6 offset-sm3 offset-xs1>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap justify-center xs10 offset-xs1>
            <v-date-picker id="date" name="date" v-model="date"></v-date-picker>
              <div style = "margin:10px"></div>
            <v-time-picker id="time" name="time" v-model="time" format="24hr"></v-time-picker>
           
          </v-layout>
                  
            <br>

          <v-layout row>
            <v-flex xs5 sm6 offset-sm3 offset-xs4>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create Event</v-btn>
    
            </v-flex>
    
          </v-layout>
        </form>
     
      </v-flex>
    </v-layout>
  </v-container>


</template>
     



<script>
import firebase from "firebase"
  export default {
    
    data () {
      return {
        kolegij:'',
        typeevent: '',
        description: '',
        date: '',
        time:'',
        items: ['Predavanje', 'Vježbe', 'Kolokvij', 'Ispit'],
      
  }
    },
    computed: {
      formIsValid () {
        return this.kolegij !== '' &&
        this.typeevent !== '' &&
          this.description !== '' &&
          this.date !== '' && this.time !==''
      }
    },
    methods: {
      onCreateEvent () {
        if (this.formIsValid) {
          console.log("proslo")
         let pushKey = firebase.database().ref('events/').push();
         console.log(pushKey.key)
           pushKey.set({
            id:pushKey.key,
            typeevent: this.typeevent,
            description: this.description,
            date: this.date,
            time:this.time,
            kolegij: this.kolegij
          });
        }else{
          console.log("Nešto nije uredu")
        }

        

        this.$router.push('/Forum')
      }
    }
  }
  
</script>