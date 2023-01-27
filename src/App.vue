<template>
  <v-app>
      <v-card style="background-color: #2c2c2c" height="6vh">
        <v-row>
          <v-col cols="12" class="text-center" v-if="activeComponent == 'home' || activeComponent == 'mainHub' || activeComponent == 'store' || activeComponent == 'cardSettings'">
            <h1>TF DECK BUILDER</h1>
          </v-col>
        </v-row>
        <v-row v-if="activeComponent != 'home' && activeComponent != 'mainHub' && activeComponent != 'store' && activeComponent != 'cardSettings'">
          <v-col cols="1" v-for="(perk, index) in perks" :key="index">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-img v-bind="attrs" v-on="on" contain height="6vh" :src="perk.image" class="text-center">
                  <h1 class="deck-text">{{perk.count}}</h1>
                </v-img>
              </template>
              <span>{{perk.effect}}</span>
            </v-tooltip>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="1">
            <v-img :src="require('@/assets/icons/UIIcons/heart.png')" contain height="6vh" class="text-center">
              <h1 class="deck-text">{{health}}</h1>
            </v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/icons/UIIcons/coin.png')" contain height="6vh" class="text-center">
              <h1 class="deck-text">{{coin}}</h1>
            </v-img>
          </v-col>
          <v-col cols="1">
            <v-img :src="require('@/assets/icons/UIIcons/deck.png')" contain height="6vh" class="text-center">
              <h1 class="deck-text">{{deckSize}}</h1>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    <story v-if="activeComponent == 'story'" v-on:changeComponent="changeComponent"></story>
    <dungeonRoom v-if="activeComponent == 'dungeonRoom'" v-on:changeComponent="changeComponent"></dungeonRoom>
    <character-select v-if="activeComponent == 'characterSelect'" v-on:changeComponent="changeComponent"></character-select>
    <home v-if="activeComponent == 'home'" v-on:changeComponent="changeComponent"></home>
    <rules v-if="activeComponent == 'rules'" v-on:changeComponent="changeComponent"></rules>
    <midGameStories v-if="activeComponent == 'midGameStories'" v-on:changeComponent="changeComponent"></midGameStories>
    <gameOver v-if="activeComponent == 'gameOver'" v-on:changeComponent="changeComponent"></gameOver>
    <endGameStory v-if="activeComponent == 'endGameStory'" v-on:changeComponent="changeComponent"></endGameStory>
    <mainHub v-if="activeComponent == 'mainHub'" v-on:changeComponent="changeComponent"></mainHub>
    <store v-if="activeComponent == 'store'" v-on:changeComponent="changeComponent"></store>
    <cardSettings v-if="activeComponent == 'cardSettings'" v-on:changeComponent="changeComponent"></cardSettings>
    <mapScreen v-if="activeComponent == 'mapScreen'" v-on:changeComponent="changeComponent"></mapScreen>
  </v-app>
</template>


<script>
  import story from './components/story.vue'
  import dungeonRoom from './components/dungeonRoom.vue'
  import characterSelect from './components/characterSelect.vue'
  import home from './components/home.vue'
  import rules from './components/rules.vue'
  import midGameStories from './components/midGameStories.vue'
  import gameOver from './components/gameOver.vue'
  import endGameStory from './components/endGameStory.vue'
  import mainHub from './components/mainHub.vue'
  import store from './components/store.vue'
  import cardSettings from './components/cardSettings.vue'
  import mapScreen from './components/mapScreen.vue'
  export default {
    components: {
    story,
    dungeonRoom,
    characterSelect,
    home,
    rules,
    midGameStories,
    gameOver,
    endGameStory,
    mainHub,
    store,
    cardSettings,
    mapScreen,
},
    data: () => ({
      activeComponent: "home"
    }),
    methods: {
      changeComponent: function(newcomponent) {
        console.log('Change component hit')
        console.log(newcomponent)
        this.activeComponent = newcomponent
      }
    },
    computed: {
      deckSize: function() {
        return this.$store.state.deck.length
      },
      coin: function() {
        return this.$store.state.coin;
      },
      health: function(){
        return this.$store.state.playerHealth;
      },
      perks: function() {
        let availablePerks = [
        {
            name: 'Bubble Butt',
            image: require('@/assets/icons/perks/bubbleButt.png'),
            effect: 'Remove one enemy power every turn after all other modifiers.',
            count: 0
        },
        {
            name: 'Implants',
            image: require('@/assets/icons/perks/implants.png'),
            effect: 'Permanently increase max energy by 2',
            count: 0
        },
        {
            name: 'Strapon',
            image: require('@/assets/icons/perks/strapon.png'),
            effect: 'Add one power every turn after all other modifiers.',
            count: 0
        },
        {
            name: 'Oral Fixation',
            image: require('@/assets/icons/perks/oralFixation.png'),
            effect: 'Unused energy is added to energy next turn',
            count: 0
        },
        {
            name: 'Cash',
            image: require('@/assets/icons/perks/cash.png'),
            effect: 'Enemies drop 50% more coin',
            count: 0
        },
        {
            name: 'Thick Thighs',
            image: require('@/assets/icons/perks/thickThighs.png'),
            effect: 'Permanently increase max life by 2',
            count: 0
        },
        ]
        this.$store.state.playerPerks.forEach(perk => {
          availablePerks.find(obj => obj.name == perk.name).count += 1
        })
        console.log(availablePerks.filter(perk => perk.count > 0))
        return availablePerks.filter(perk => perk.count > 0);
      }
    }
  }
</script>

<style scoped>
.deck-text{
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}
</style>