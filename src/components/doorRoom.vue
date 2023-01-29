<template>
    <v-container>
        <v-row class="justify-space-around">
          <v-col cols="12" class="text-center">
            <h1>SELECT A DOOR</h1>
          </v-col>
          <v-col cols="12" class="text-center">
                <h3>FLOOR {{floorNumber}}</h3>
            </v-col>
            <v-col cols="12" class="text-center">
                <h5>STAGE {{stageNumber}}</h5>
            </v-col>
            <v-col cols="3" v-for="door, i in doors" :key="i">
                <v-img :src="require(`@/assets/doors/${door.doorName}.png`)" @click="changeComponent(door.componentName)"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
      name: 'doorRoom',
  
      data: () => ({
        doors: [],
        options: [
          {
            doorName: 'enemyDoor',
            componentName: 'battleScreen'
          },
          {
            doorName: 'chestDoor',
            componentName: 'chestRoom'
          },
          {
            doorName: 'merchantDoor',
            componentName: 'merchantRoom'
          },
          // {
          //   doorName: 'question',
          //   componentName: 'merchantRoom'
          // },
        ]
      }),
      methods: {
        changeComponent(component) {
            if(component == 'battleScreen'){
              let payload = new Object;
              if(this.$store.state.floor == 5){
                payload.deckTemplate = this.$store.state.finalBossDecks[this.$store.state.stage-1].deck
                payload.cardPool = this.$store.state.cards
              } else if(this.$store.state.floor == 4){
                payload.deckTemplate = this.$store.state.bossDecks.find(deck => deck.floor == this.$store.state.floor).deck
                payload.cardPool = this.$store.state.cards
              } else if(this.$store.state.stage < 8){
                payload.deckTemplate = this.$store.state.enemyDecks.find(deck => deck.floor == this.$store.state.floor).deck
                payload.cardPool = this.$store.state.cards
              } else {
                payload.deckTemplate = this.$store.state.bossDecks.find(deck => deck.floor == this.$store.state.floor).deck
                payload.cardPool = this.$store.state.cards
              }
              this.$store.dispatch('buildEnemyDeck', payload);
            }
            this.$emit('changeComponent', component)
        }
      },
      mounted(){
        if(this.$store.state.floor == 5){
          let bossDoor = {
            doorName: 'bossDoor',
            componentName: 'battleScreen'
          }
          this.doors.push(bossDoor)
        } else if(this.$store.state.stage != 8 && this.$store.state.floor != 4){
          let doors = Math.floor(Math.random() * 3);
          this.doors.push(this.options[0])
          for (let i = 0; i < doors; i++) {
            let availableOptions = this.options;
            if(this.$store.state.stage < 3 && this.$store.state.floor == 1){
              availableOptions = availableOptions.filter(option => option.doorName != 'chestDoor')
            }
            this.doors.push(availableOptions[Math.floor(Math.random()*availableOptions.length)])
          }
        } else {
          let bossDoor = {
            doorName: 'bossDoor',
            componentName: 'battleScreen'
          }
          this.doors.push(bossDoor)
        }
      },
      computed: {
        floorNumber(){
          return this.$store.state.floor;
        },
        stageNumber(){
          return this.$store.state.stage
        }
      }
    }
  </script>

<style lang="scss" scoped>

</style>