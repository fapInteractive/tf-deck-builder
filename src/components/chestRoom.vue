<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center">
                <h1>Chest Discovered</h1>
            </v-col>
            <v-col cols="12" class="text-center">
                <h3 v-if="selectedCards.length < 2">Select one card for free, or two cards at the cost of a negative card added to the deck as well</h3>
                <h3 v-if="selectedCards.length == 2">Cards added to deck, the following penalty card has been added as well</h3>
            </v-col>
            <v-col cols="12">
                <v-row class="justify-space-around" v-if="selectedCards.length < 2">
                    <v-col cols="3" v-for="card, i in cards" :key="i" class="text-center">
                        <v-img :src="selectedCards.includes(card.id) ? require('@/assets/cards/blankBack.png') : card[card.activeImage]" contain @mouseover="selectedCards.includes(card.id) ? '' : (activeItem = card[card.activeImage])" @mouseleave="activeItem = require(`@/assets/merchant/merchant.png`)" @click="selectedCards.includes(card.id) ? '' : addCard(card)">
                            <div
                                v-if="card.description.length > 0"
                                class="d-flex v-card--reveal"
                                style="height: 100%;"
                            >
                                {{ card.description }}
                            </div>
                        </v-img>
                    </v-col>
                </v-row>
                <v-row class="justify-space-around" v-if="selectedCards.length == 2">
                    <v-col cols="3" class="text-center">
                        <v-img :src="penaltyCard[penaltyCard.activeImage]" contain></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-btn color="pink" @click="ascendStage">Continue</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
      name: 'merchantRoom',
  
      data: () => ({
        activeItem: require(`@/assets/merchant/merchant.png`),
        selectedCards: [],
        penaltyCard: null
      }),
      methods: {
        ascendStage(){
            this.$emit('leaveShop');
        },
        addCard(card){
            this.$store.dispatch('addCard', card);
            this.selectedCards.push(card.id);
            if(this.selectedCards.length == 2){
                let penaltyCard = this.penaltyCards[Math.floor(Math.random()*this.penaltyCards.length)]
                penaltyCard.id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
                this.penaltyCard = penaltyCard;
                this.$store.dispatch('addCard', penaltyCard)
            }
        }
      },
      computed: {
        perks: function() {
            return this.$store.state.perks.sort(() => .5 - Math.random()).slice(0,4)
        },
        cards: function() {
            var returnCards = JSON.parse(JSON.stringify(this.$store.state.cards.sort(() => .5 - Math.random()).slice(0,3)))
            returnCards.forEach(card => {
                card.id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
            })
            return returnCards
        },
        penaltyCards: function() {
            return this.$store.state.penaltyCards
        },
        coins: function(){
            return this.$store.state.coin
        }
      }
    }
  </script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0);
  padding-left: 10%;
  padding-right: 10%;
  transition:.4s ease;
  text-align: center;
}

.v-card--reveal:hover {
	background-color: rgba(0, 0, 0, 0.8);
	color: rgba(255, 255, 255, 1);
}
</style>