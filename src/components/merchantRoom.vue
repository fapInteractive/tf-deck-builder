<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center">
                <h1>MERCHANT</h1>
            </v-col>
            <v-col cols="3" class="text-center">
                <v-img :src="activeItem"></v-img>
                <h3>Anything interest you?</h3>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col cols="3" v-for="card, i in cards" :key="i" class="text-center">
                        <v-img :src="purchasedCards.includes(card.id) ? require('@/assets/cards/blankBack.png') : (card.animated ? card.animatedImage : card.image)" contain @mouseover="purchasedCards.includes(card.id) ? '' : (activeItem = card.animated? card.animatedImage : card.image)" @mouseleave="activeItem = require(`@/assets/merchant/merchant.png`)" @click="purchasedCards.includes(card.id) ? '' : buyCard(card)">
                            <div
								v-if="!purchasedCards.includes(card.id) && card.description.length > 0"
								class="d-flex v-card--reveal"
								style="height: 100%;"
								>
								{{ card.description }}
							</div>
                        </v-img>
                        <h3>{{purchasedCards.includes(card.id) ? 'Purchased' : card.value}}</h3>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-row class="jsutify-space-around">
                            <v-col cols="6" v-for="perk, i in perks" :key="i" class="text-center">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-img v-bind="attrs" v-on="on" :src="purchasedPerks.includes(perk.name) ? require('@/assets/icons/perks/purchased.png') : perk.image" height="15vh" contain @click="purchasedPerks.includes(perk.name) ? '' : buyPerk(perk)"></v-img>
                                    </template>
                                    <span>{{purchasedPerks.includes(perk.name) ? 'Purchased' : perk.effect}}</span>
                                </v-tooltip>
                                <h3>{{purchasedPerks.includes(perk.name) ? 'Purchased' : perk.name}}</h3>
                                <h3>{{purchasedPerks.includes(perk.name) ? '' : perk.value}}</h3>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" class="text-center">
                <v-img :src="require('@/assets/merchant/cardRemoval.png')" @click="removeCardDialog = true"></v-img>
                <h3>{{50 * (cardRemovalCount + 1)}}</h3>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-btn color="pink" @click="ascendStage">Continue</v-btn>
            </v-col>
        </v-row>
        <v-dialog
            v-model="removeCardDialog"
            width="75vw"
        >
            <v-card>
                <v-container>
                    <v-row>
                        <v-col cols="3" class="text-center" v-for="card in deck" :key="card.id" @click="cardToRemove = card.id">
                            <v-img :src="card.image" contain class="d-flex align-center">
                                <v-btn v-if="cardToRemove == card.id" color="red" @click="removeCard(card)">Remove card</v-btn>
                            </v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    export default {
      name: 'merchantRoom',
  
      data: () => ({
        activeItem: require(`@/assets/merchant/merchant.png`),
        purchasedCards: [],
        purchasedPerks: [],
        selectedRemovalCard: '',
        removeCardDialog: false,
        cardToRemove: '',
        overlay: false,
        perks: []
      }),
      methods: {
        buyCard(card){
            console.log('Card buy entered')
            if(this.coins >= card.value){
                console.log('Card purchased')
                this.$store.dispatch('buyCard', card)
                this.purchasedCards.push(card.id)
            }  
        },
        buyPerk(perk){
            console.log('Perk buy entered')
            if(this.coins >= perk.value){
                console.log('Perk purchased')
                this.$store.dispatch('buyPerk', perk)
                this.purchasedPerks.push(perk.name)
            }  
        },
        ascendStage(){
            this.$store.dispatch('ascendStage');
            this.$emit('changeComponent', 'doorRoom');
        },
        removeCard(card){
            if(this.coins >= (50 * (this.cardRemovalCount + 1))){
                let payload = {
                    id: card.id,
                    cost: 50 * (this.cardRemovalCount + 1)
                }
                this.$store.dispatch('removeCard', payload);
                this.removeCardDialog = false
            }
        }
      },
      computed: {
        cards: function() {
            var returnCards = JSON.parse(JSON.stringify(this.$store.state.cards.sort(() => .5 - Math.random()).slice(0,6)))
            returnCards.forEach(card => {
                var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
                var valueChange = Math.floor(Math.random() * 10) + 1;
                card.value += (valueChange * plusOrMinus);
                card.animated = false
                card.id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
            })
            returnCards[5].animated = true;
            returnCards[5].value += 50;
            return returnCards
        },
        coins: function(){
            return this.$store.state.coin
        },
        cardRemovalCount: function() {
            return this.$store.state.cardRemovalCount;
        },
        deck: function() {
            return this.$store.state.deck
        }
      },
      mounted: function(){
        let availablePerks = this.$store.state.perks
            if(this.$store.state.playerPerks.map(perk => perk.name).includes('Cash')){
                availablePerks = availablePerks.filter(perk => perk.name != "Cash")
            }
            if(this.$store.state.playerPerks.map(perk => perk.name).includes('Oral Fixation')){
                availablePerks = availablePerks.filter(perk => perk.name != "Oral Fixation")
            }
            this.perks = availablePerks.sort(() => .5 - Math.random()).slice(0,2)
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