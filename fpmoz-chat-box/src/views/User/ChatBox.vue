<template>
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
          Edit
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
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>