<template>
    <v-container>
      <v-row class="justify-space-around">
        <v-col cols="12" class="text-center">
          <h1>{{ points }} points available</h1>
        </v-col>
        <v-col class="text-center" cols="3">
          <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            <v-card-title class="justify-center"> Varient Pack </v-card-title>
            <v-card-subtitle class="justify-center"> Purchase alternate arts for various cards </v-card-subtitle>
            <v-card-subtitle class="justify-center"> (3 cards per pack) </v-card-subtitle>
            <v-card-actions>
              <v-btn color="green lighten-2" text> Purchase </v-btn>
              <v-spacer></v-spacer>
              <h4>1 Point</h4>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="text-center" cols="3">
          <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            <v-card-title class="justify-center"> New Card Pack </v-card-title>
            <v-card-subtitle class="justify-center"> Purchase new cards to use in future runs </v-card-subtitle>
            <v-card-subtitle class="justify-center"> (3 cards per pack) </v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue lighten-2" text> Purchase </v-btn>
              <v-spacer></v-spacer>
              <h4>5 Points</h4>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="text-center" cols="3">
          <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            <v-card-title class="justify-center"> Upgrade Pack </v-card-title>
            <v-card-subtitle class="justify-center"> Purchase upgrades for cards you already own </v-card-subtitle>
            <v-card-subtitle class="justify-center"> (1 card per pack) </v-card-subtitle>
            <v-card-actions>
              <v-btn color="purple lighten-2" text> Purchase </v-btn>
              <v-spacer></v-spacer>
              <h4>2 Points</h4>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" class="text-center">
            <v-btn width="15vw" color="blue" @click="changeComponent('mainHub')">Return to main</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
    export default {
        methods: {
        changeComponent(component) {
            this.$emit('changeComponent', component)
        }
      },
        computed: {
            points(){
                return this.$store.state.upgradePoints
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>