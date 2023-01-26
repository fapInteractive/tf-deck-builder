<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" class="text-center">
                <h1>SELECT A PATH</h1>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="4">   
            </v-col>
            <v-col cols="4" class="text-center">
                <v-row class="justify-space-around" v-for="(row, i) in mapArr" :key="i">
                    <v-col cols="4" class="text-center red-background" v-for="(col, j) in row" :key="j" :class="[((hoveredCol == j && pathSelected == null) || pathSelected == j) ? 'on-hover' : '', (pathSelected == j && currentRowIndex == i) ? 'current-stage' : '']" @click="pathSelected == null ? pathSelected = j : ''" @mouseover="hoveredCol = j" @mouseleave="hoveredCol = null">
                        <v-img :src="col.img" height="10vh" contain></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4" class="text-center">
                <v-img :src="require('@/assets/icons/doorIcons/legend.png')" height="50vh" contain></v-img>
            </v-col>
        </v-row>
        <v-btn
          color="green"
          dark
          fixed
          bottom
          right
          fab
          x-large
          v-if="pathSelected != null"
          @click="checkEncounterType"
        >
            <v-img contain :src='mapArr[currentRowIndex][pathSelected].img' height="5vh">
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <p class="button-text">BEGIN</p>
                </v-row>
            </v-img>
        </v-btn>
        <v-dialog v-model="dialog" fullscreen hide-overlay persistent style="overflow: hidden !important" transition="dialog-bottom-transition">
            <v-card>
              <v-toolbar dark color="#2c2c2c">
                <v-row>
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
              </v-toolbar>
              <merchantRoom v-if="activeComponent == 'merchantRoom'" v-on:leaveShop="leaveShop"></merchantRoom>
              <battleScreen v-if="activeComponent == 'battleScreen'" v-on:completeBattle="completeBattle" v-on:completeBossBattle="completeBossBattle" v-on:completeRun="completeRun" v-on:gameOver="gameOver"></battleScreen>
              <chestRoom v-if="activeComponent == 'chestRoom'" v-on:leaveShop="leaveShop"></chestRoom>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import merchantRoom from './merchantRoom.vue'
import battleScreen from './battleScreen.vue'
import chestRoom from './chestRoom.vue'

export default {
    components: {
		merchantRoom,
		battleScreen,
		chestRoom,
	},
	data: () => ({
		mapArr: [],
		currentRowIndex: 0,
		currentColIndex: 0,
		hoveredCol: null,
		pathSelected: null,
		dialog: false,
		activeComponent: "none",
	}),
	methods: {
		openBattleScreen(enemyType) {
			let payload = new Object;
			if (enemyType == 'enemy' || enemyType == 'eliteEnemy') {
				payload.deckTemplate = this.$store.state.enemyDecks.find(deck => deck.floor == this.$store.state.floor).deck
				payload.cardPool = this.$store.state.cards
			} else if (enemyType == 'boss') {
				if (this.$store.state.floor == 5) {
					payload.deckTemplate = this.$store.state.finalBossDecks[this.floor5BossesBeat].deck
					payload.cardPool = this.$store.state.cards
				} else {
					payload.deckTemplate = this.$store.state.bossDecks.find(deck => deck.floor == this.$store.state.floor).deck
					payload.cardPool = this.$store.state.cards
				}
			} else {
				payload.deckTemplate = this.$store.state.finalBossDecks[3].deck
				payload.cardPool = this.$store.state.cards
			}
			this.$store.dispatch('buildEnemyDeck', payload);
		},
		gameOver() {
			this.$emit('changeComponent', 'gameOver')
		},
		completeRun() {
			this.$emit('changeComponent', 'endGameStory')
		},
		changeComponent() {
			this.activeComponent = null;
			this.dialog = false;
            this.currentRowIndex++
		},
		leaveShop() {
			this.activeComponent = null;
			this.dialog = false;
            this.currentRowIndex++
		},
		completeBattle() {
			this.activeComponent = null;
			this.dialog = false;
            this.currentRowIndex++
		},
		completeBossBattle() {
			this.activeComponent = null;
			this.dialog = false;
            this.currentRowIndex++
		},
		checkEncounterType() {
			let encounterType = this.mapArr[this.currentRowIndex][this.currentColIndex].type;
			switch (encounterType) {
				case 'enemy':
					this.$store.dispatch('setEnemyType', 'enemy')
					this.openBattleScreen('enemy');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
                case 'eliteEnemy':
					this.$store.dispatch('setEnemyType', 'eliteEnemy')
					this.openBattleScreen('enemy');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
				case 'boss':
					this.$store.dispatch('setEnemyType', 'boss')
					this.openBattleScreen('boss');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
				case 'merchantRoom':
					this.activeComponent = 'merchantRoom';
					this.dialog = true;
					break;
				case 'chestRoom':
					this.activeComponent = 'chestRoom';
					this.dialog = true;
					break;
				case 'eliteBoss':
                    this.$store.dispatch('setEnemyType', 'eliteBoss')
                    this.openBattleScreen('eliteBoss');
                    this.activeComponent = 'battleScreen';
                    this.dialog = true;
					break;
				default:
					return;
			}
		},
	},
	mounted: function() {
		let encounterTypes = [{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "enemy",
				img: require("@/assets/icons/doorIcons/enemy.png")
			},
			{
				type: "merchant",
				img: require("@/assets/icons/doorIcons/merchant.png")
			},
			{
				type: "merchant",
				img: require("@/assets/icons/doorIcons/merchant.png")
			},
			{
				type: "restSite",
				img: require("@/assets/icons/doorIcons/restSite.png")
			},
		]
		let numberOfEncounters = Math.floor(Math.random() * 3) + 1;
		for (let i = 0; i < 15; i++) {
			//Create an empty array to hold encounters
			let encounters = new Array;
			//Get between 1 and 3 encounters
			for (let j = 0; j < numberOfEncounters; j++) {
				if (i <= 2) {
					//Make sure that only enemies are the first three encounters
					let onlyEncounter = encounterTypes[0];
					encounters.push(onlyEncounter)
				} else {
					//prevent boss encounters prior to level 10
					if (i == 10) {
						encounterTypes.push({
							type: "eliteEnemy",
							img: require("@/assets/icons/doorIcons/eliteEnemy.png")
						}, )
					}
					//Limit chests to level 6
					else if (i == 6) {
						encounters.push({
							type: "chest",
							img: require("@/assets/icons/doorIcons/chest.png")
						})
					}
					//Only allow merchants at level 12
					else if (i == 12) {
						encounters.push({
							type: "merchant",
							img: require("@/assets/icons/doorIcons/merchant.png")
						}, )
					}
					//Make sure a rest site is at level 13
					else if (i == 13) {
						encounters.push({
							type: "restSite",
							img: require("@/assets/icons/doorIcons/restSite.png")
						}, )
					}
					//Make sure the boss is the final encounter
					else if (i == 14) {
						encounters.push({
							type: "boss",
							img: require("@/assets/icons/doorIcons/boss.png")
						})
					} else {
						let encounterType = encounterTypes[Math.floor(Math.random() * encounterTypes.length)];
						encounters.push(encounterType);
					}
				}
			}
			this.mapArr.push(encounters);
		}
	},
    computed: {
		floor: function() {
			return this.$store.state.floor;
		},
		deckSize: function() {
			return this.$store.state.deck.length
		},
		coin: function() {
			return this.$store.state.coin;
		},
		perks: function() {
			let availablePerks = [{
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

<style lang="css" scoped>
    .red-background {
        filter: grayscale(0);
        background: linear-gradient(90deg, 
        rgba(0,0,0,0) calc(50% - 5px),
        rgb(255, 0, 0) calc(50%),
        rgba(0,0,0,0) calc(50% + 5px)
        );
    }
    .red-background:not(.on-hover) {
        filter: grayscale(1);
        background: linear-gradient(90deg, 
        rgba(0,0,0,0) calc(50% - 5px),
        rgb(255, 0, 0) calc(50%),
        rgba(0,0,0,0) calc(50% + 5px)
        );
    }
    .current-stage {
        box-shadow: inset -1px 0 0 blue, inset 0 -1px 0 blue, inset 1px 0 0 blue, inset 0 1px 0 blue;
    }
    .button-text {
        text-shadow: 5px 5px 5px #000;
    }
</style>