<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" class="text-center">
                <h1>SELECT AN ENCOUNTER</h1>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="4">   
            </v-col>
            <v-col cols="4" class="text-center">
                <v-row class="justify-space-around" :class="currentRowIndex == i ? 'current-row' : 'not-current-row'" v-for="(row, i) in mapArr" :key="i">
                    <v-col cols="4" class="text-center" v-for="(col, j) in row" :key="j">
                        <v-img :src="col.img" height="10vh" contain @click="currentRowIndex == i ? checkEncounterType(col.type) : ''"></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4" class="text-center">
                <v-img :src="require('@/assets/icons/doorIcons/legend.png')" height="50vh" contain></v-img>
            </v-col>
        </v-row>
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
              <restSite v-if="activeComponent == 'restSite'" v-on:leaveRestSite="leaveRestSite"></restSite>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import merchantRoom from './merchantRoom.vue'
import battleScreen from './battleScreen.vue'
import chestRoom from './chestRoom.vue'
import restSite from './restSite.vue'

export default {
    components: {
		merchantRoom,
		battleScreen,
		chestRoom,
		restSite,
	},
	data: () => ({
		mapArr: [],
		currentRowIndex: 0,
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
        leaveRestSite() {
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
            this.$store.dispatch('ascendFloor');
    		this.$emit('changeComponent', 'midGameStories');
		},
		checkEncounterType(encounterType) {
			switch (encounterType) {
				case 'enemy':
					this.$store.dispatch('setEnemyType', 'enemy')
					this.openBattleScreen('enemy');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
                case 'eliteEnemy':
					this.$store.dispatch('setEnemyType', 'eliteEnemy')
					this.openBattleScreen('eliteEnemy');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
				case 'boss':
					this.$store.dispatch('setEnemyType', 'boss')
					this.openBattleScreen('boss');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
				case 'merchant':
					this.activeComponent = 'merchantRoom';
					this.dialog = true;
					break;
				case 'chestRoom':
					this.activeComponent = 'chestRoom';
					this.dialog = true;
					break;
                case 'restSite':
					this.activeComponent = 'restSite';
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
        getEncounter(encounters) {
            let i, pickedEncounter,
                    randomNr = Math.random(),
                    threshold = 0;

            for (i = 0; i < encounters.length; i++) {
                if (encounters[i].probability === '*') {
                    continue;
                }

                threshold += encounters[i].probability;
                if (threshold > randomNr) {
                        pickedEncounter = encounters[i];
                        break;
                }

                if (!pickedEncounter) {
                    //nothing found based on probability value, so pick element marked with wildcard
                    pickedEncounter = encounters.find((encounter) => encounter.probability === '*');
                }
            }
            console.log(pickedEncounter)

            return pickedEncounter;
        },
        buildMap(){
            let encounterTypes = [
                {
                    type: "enemy",
                    img: require("@/assets/icons/doorIcons/enemy.png"),
                    probability: 1
                },
            ]
            let encounterOne = [
                {
                    type: "enemy",
                    img: require("@/assets/icons/doorIcons/enemy.png")
                }
            ]
            this.mapArr.push(encounterOne);
            for (let i = 0; i < 12; i++) {
                let rowArray = new Array;
                let numberOfEncounters = Math.floor(Math.random() * 3) + 1;
                if(i == 5){
                    encounterTypes = [
                        {
                            type: "enemy",
                            img: require("@/assets/icons/doorIcons/enemy.png"),
                            probability: 0.7
                        },
                        {
                            type: "merchant",
                            img: require("@/assets/icons/doorIcons/merchant.png"),
                            probability: 0.2
                        },
                        {
                            type: "eliteEnemy",
                            img: require("@/assets/icons/doorIcons/eliteEnemy.png"),
                            probability: "*"
                        },
                    ]
                }
                if(i == 6){
                    encounterTypes = [
                        {
                            type: "enemy",
                            img: require("@/assets/icons/doorIcons/enemy.png"),
                            probability: 0.5
                        },
                        {
                            type: "merchant",
                            img: require("@/assets/icons/doorIcons/merchant.png"),
                            probability: 0.1
                        },
                        {
                            type: "eliteEnemy",
                            img: require("@/assets/icons/doorIcons/eliteEnemy.png"),
                            probability: "*"
                        },
                        {
                            type: "restSite",
                            img: require("@/assets/icons/doorIcons/restSite.png"),
                            probability: 0.2
                        }
                    ]
                }
                if(i == 10){
                    encounterTypes = [
                        {
                            type: "enemy",
                            img: require("@/assets/icons/doorIcons/enemy.png"),
                            probability: 0.4
                        },
                        {
                            type: "merchant",
                            img: require("@/assets/icons/doorIcons/merchant.png"),
                            probability: 0.1
                        },
                        {
                            type: "eliteEnemy",
                            img: require("@/assets/icons/doorIcons/eliteEnemy.png"),
                            probability: "*"
                        },
                        {
                            type: "restSite",
                            img: require("@/assets/icons/doorIcons/restSite.png"),
                            probability: 0.2
                        }
                    ]
                }
                for (let j = 0; j < numberOfEncounters; j++) {
                    let encounter = this.getEncounter(encounterTypes);
                    rowArray.push(encounter);
                }
                this.mapArr.push(rowArray);
            }
            let encounterTwo = [
                {
                    type: "restSite",
                    img: require("@/assets/icons/doorIcons/restSite.png")
                }
            ]
            this.mapArr.push(encounterTwo);
            let encounterThree = [
                {
                    type: "boss",
                    img: require("@/assets/icons/doorIcons/boss.png")
                }
            ]
            this.mapArr.push(encounterThree);
            //Ensure that there is at least one merchant, rest site, and elite enemy per stage
            let merchantCount = 0;
            for (let i = 0; i < this.mapArr.length; i++) {
                const row = this.mapArr[i];
                for (let j = 0; j < row.length; j++) {
                    const encounter = row[j];
                    if(encounter.type == 'merchant'){
                        merchantCount++
                    }
                }
            }
            if(merchantCount == 0){
                this.mapArr[4][0] =
                    {
                        type: "merchant",
                        img: require("@/assets/icons/doorIcons/merchant.png"),
                        probability: 0.1
                    }
            }
        }
	},
	mounted: function() {
        if(this.$store.state.floor != 5){
            this.buildMap();
        } else {
            this.mapArr = [
                [{
                    type: 'boss',
                    img: require("@/assets/icons/doorIcons/boss.png")
                }],
                [{
                    type: 'boss',
                    img: require("@/assets/icons/doorIcons/boss.png")
                }],
                [{
                    type: 'boss',
                    img: require("@/assets/icons/doorIcons/boss.png")
                }],
                [{
                    type: 'merchant',
                    img: require("@/assets/icons/doorIcons/merchant.png")
                }],
                [{
                    type: 'restSite',
                    img: require("@/assets/icons/doorIcons/restSite.png")
                }],
                [{
                    type: 'eliteBoss',
                    img: require("@/assets/icons/doorIcons/eliteBoss.png")
                }],
            ]
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
    .current-row{
        -webkit-box-shadow:inset 0px 0px 6px 2px #f00;
        -moz-box-shadow:inset 0px 0px 6px 2px #f00;
        box-shadow:inset 0px 0px 6px 2px #f00;
    }

    .not-current-row{
        filter: grayscale(1);
    }
</style>