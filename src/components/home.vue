<template>
    <v-container class="hero">
      
        <v-row class="justify-space-between mt-5">
            <v-col cols="12" class="text-center">
                <v-btn width="15vw" color="blue" @click="changeComponent">NEW GAME</v-btn>
            </v-col>
            <!-- <v-col cols="12" class="text-center">
                <v-btn width="15vw" color="blue">LOAD GAME</v-btn>
            </v-col> -->
        </v-row>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'home',
  
      data: () => ({

      }),
      methods: {
        changeComponent() {
            this.$emit('changeComponent', 'mainHub')
        }
      }
    }
  </script>

<style scoped>
    /* .hero {
        max-width: 100% !important;
        background: url('../assets/staticBack.png');
        background-size: cover;
        height: 100vh;
    } */
</style>