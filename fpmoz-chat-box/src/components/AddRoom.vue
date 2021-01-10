<template>
  <div>
      <v-container>
        <v-layout row wrap>
          <v-flex xs8 sm8 md6 offset-md-3 offset-2 class="text-center">
                <v-row>
                    <v-text-field
                    color="cyan"
                    label="Name of the room"
                    required
                    ></v-text-field>
                </v-row>
                <div>
                    <div>
                    <v-btn
                    elevation="2"
                    outlined
                    rounded
                    text
                    color="green"
                    >Save</v-btn>
                        <div class="divider"/>
                    <v-btn
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


<style scoped>
.divider{
    width:10px;
    height:auto;
    display:inline-block;
}
</style>