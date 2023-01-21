<template>
    <v-container>
      <v-row class="justify-space-around">
        <v-col cols="12" class="text-center">
          <h1>{{ points }} points available</h1>
        </v-col>
        <v-col class="text-center" cols="3" v-if="purchasedCards.length == 0">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="require('@/assets/icons/varientPackCover.png')" height="200px"></v-img>
            <v-card-subtitle class="justify-center"> Purchase alternate arts for various cards </v-card-subtitle>
            <v-card-subtitle class="justify-center"> {{ availableVarientsRemaining > 0 ?  availableVarientsRemaining + " varients left to unlock" : "SOLD OUT"}} </v-card-subtitle>
            <v-card-subtitle class="justify-center"> (Up to 3 cards per pack) </v-card-subtitle>
            <v-card-actions>
              <v-btn color="green lighten-2" text @click="purchaseVarients()" :disabled="availableVarientsRemaining == 0 || points < 1"> Purchase </v-btn>
              <v-spacer></v-spacer>
              <h4>1 Point</h4>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="text-center" cols="3" v-if="purchasedCards.length == 0">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="require('@/assets/icons/newCardPackCover.png')" height="200px"></v-img>
            <v-card-subtitle class="justify-center"> Purchase new cards to use in future runs </v-card-subtitle>
            <v-card-subtitle class="justify-center"> {{ unlockableCardsRemianing > 0 ?  unlockableCardsRemianing + " cards left to unlock" : "SOLD OUT"}} </v-card-subtitle>
            <v-card-subtitle class="justify-center"> (Up to 3 cards per pack) </v-card-subtitle>
            <v-card-actions>
              <v-btn color="pink lighten-2" text @click="purchaseNewCards()" :disabled="unlockableCardsRemianing == 0 || points < 5"> Purchase </v-btn>
              <v-spacer></v-spacer>
              <h4>5 Points</h4>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" class="text-center" v-if="purchasedCards.length > 0">
          <h1>Unlocked the following</h1>
        </v-col>
        <v-col cols="12" v-if="purchasedCards.length > 0">
          <v-row class="justify-space-around">
            <v-col cols="2" class="text-center" v-for="(card, i) in purchasedCards" :key="i">
              <v-img :src="card.image"></v-img>
              <h3>{{ camelCaseToWords(card.name) }}</h3>
              <h3>{{ formatVarientName(card.varientName) }}</h3>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="text-center" v-if="purchasedCards.length > 0">
          <v-btn width="15vw" color="blue" @click="purchasedCards = []">Purchase More</v-btn>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn width="15vw" color="blue" @click="changeComponent('mainHub')">Return to Main</v-btn>
        </v-col>
        <v-col cols="12" class="text-center" v-if="points < 50">
          <v-btn width="15vw" color="red" @click="cheatPoints()">Cheat points</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
    export default {
        data: () => ({
          purchasedCards: []
        }),
        methods: {
        changeComponent(component) {
            this.$emit('changeComponent', component)
        },
        purchaseVarients(){
          let unlockedCards = this.$store.state.cards.filter(card => card.unlocked == true);
          let penaltyCards = this.$store.state.penaltyCards;
          let allCards = penaltyCards.concat(unlockedCards)
          this.purchasedCards = []
          let purchasedVarients = new Array;
          let remainingVarients = 0;
          allCards.forEach(card => {
            remainingVarients += card.potentialVarients.filter(varient => !varient.includes('rainbow')).filter(varient => !card.unlockedVarients.includes(varient)).length;
          })
          if(remainingVarients >= 3){
            while (this.purchasedCards.length < 3) {
              let purchasedCard = new Object
              let card = allCards[Math.floor(Math.random()*allCards.length)];
              let availableVarients = card.potentialVarients.filter(varient => !varient.includes('rainbow')).filter(varient => !card.unlockedVarients.includes(varient));
              if(availableVarients.length > 0){
                let newVarient = availableVarients[Math.floor(Math.random()*availableVarients.length)]
                if(!purchasedVarients.includes(card.name + newVarient)){
                  purchasedCard.image = card[newVarient];
                  purchasedCard.name = card.name;
                  purchasedCard.varientName = newVarient
                  this.purchasedCards.push(purchasedCard);
                  purchasedVarients.push(card.name + newVarient)
                }
              }
            }
          } else {
            while (this.purchasedCards.length < remainingVarients) {
              let purchasedCard = new Object
              let card = allCards[Math.floor(Math.random()*allCards.length)];
              let availableVarients = card.potentialVarients.filter(varient => !varient.includes('rainbow')).filter(varient => !card.unlockedVarients.includes(varient));
              if(availableVarients.length > 0){
                let newVarient = availableVarients[Math.floor(Math.random()*availableVarients.length)]
                if(!purchasedVarients.includes(card.name + newVarient)){
                  purchasedCard.image = card[newVarient];
                  purchasedCard.name = card.name;
                  purchasedCard.varientName = newVarient
                  this.purchasedCards.push(purchasedCard);
                  purchasedVarients.push(card.name + newVarient)
                }
              }
            }
          }
          this.$store.dispatch('purchaseVarientPack', this.purchasedCards)
        },
        purchaseNewCards(){
          let lockedCards = this.$store.state.cards.filter(card => card.unlocked == false);
          this.purchasedCards = []
          if(lockedCards.length >= 3){
            while (this.purchasedCards.length < 3) {
              let purchasedCard = new Object
              console.log("purchasing card")
              let card = lockedCards[Math.floor(Math.random()*lockedCards.length)];
              console.log(this.purchasedCards.map(card => card.name))
              if(!this.purchasedCards.map(card => card.name).includes(card.name)){
                purchasedCard.image = card[card.activeImage];
                purchasedCard.name = card.name;
                purchasedCard.varientName = card.activeImage
                this.purchasedCards.push(purchasedCard);
              }
            }
          } else {
            while (this.purchasedCards.length < lockedCards) {
              let purchasedCard = new Object
              let card = lockedCards[Math.floor(Math.random()*lockedCards.length)];
              if(!this.purchasedCards.map(card => card.name).includes(card.name)){
                purchasedCard.image = card[card.activeImage];
                purchasedCard.name = card.name;
                purchasedCard.varientName = card.activeImage
                this.purchasedCards.push(purchasedCard);
              }
            }
          }
          this.$store.dispatch('purchaseNewCardPack', this.purchasedCards)
        },
        camelCaseToWords(str){
            return str.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x){
                return x[0].toUpperCase() + x.substr(1).toLowerCase();
            }).join(' ');
        },
        formatVarientName(str){
          let firstLetterCaps = str.charAt(0).toUpperCase() + str.slice(1);
          return [firstLetterCaps.slice(0, firstLetterCaps.length-1),' ', firstLetterCaps.slice(firstLetterCaps.length-1)].join('')
        },
        cheatPoints(){
          this.$store.dispatch('cheatPoints')
        }
      },
        computed: {
            points(){
                return this.$store.state.upgradePoints
            },
            availableVarientsRemaining(){
              let unlockedCards = this.$store.state.cards.filter(card => card.unlocked == true);
              let penaltyCards = this.$store.state.penaltyCards;
              let allCards = penaltyCards.concat(unlockedCards)
              let remainingVarients = 0;
              allCards.forEach(card => {
                remainingVarients += card.potentialVarients.filter(varient => !varient.includes('rainbow')).filter(varient => !card.unlockedVarients.includes(varient)).length;
              });
              return remainingVarients;
            },
            unlockableCardsRemianing(){
              return this.$store.state.cards.filter(card => card.unlocked == false).length
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>