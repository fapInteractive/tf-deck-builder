<template>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1>FLOOR {{ floor }}</h1>
        </v-col>
      </v-row>
      <v-row class="justify-space-between">
        <v-col cols="2"></v-col>
        <v-col cols="8" class="text-center">
          <div class="dungeon-row">
            <span :class="((activeRow - 4 > 0) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow - 4][activeCell - 4]) : 'wall'"></span>
            <span :class="((activeRow - 4 > 0) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow - 4][activeCell - 3]) : 'wall'"></span>
            <span :class="((activeRow - 4 > 0) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow - 4][activeCell - 2]) : 'wall'"></span>
            <span :class="((activeRow - 4 > 0) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow - 4][activeCell - 1]) : 'wall'"></span>
            <span :class="((activeRow - 4 > 0) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow - 4][activeCell - 0]) : 'wall'"></span>
            <span :class="((activeRow - 4 > 0) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow - 4][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow - 4 > 0) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow - 4][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow - 4 > 0) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow - 4][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow - 4 > 0) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow - 4][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow - 3 > 0) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow - 3][activeCell - 4]) : 'wall'"></span>
            <span :class="((activeRow - 3 > 0) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow - 3][activeCell - 3]) : 'wall'"></span>
            <span :class="((activeRow - 3 > 0) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow - 3][activeCell - 2]) : 'wall'"></span>
            <span :class="((activeRow - 3 > 0) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow - 3][activeCell - 1]) : 'wall'"></span>
            <span :class="((activeRow - 3 > 0) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow - 3][activeCell - 0]) : 'wall'"></span>
            <span :class="((activeRow - 3 > 0) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow - 3][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow - 3 > 0) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow - 3][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow - 3 > 0) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow - 3][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow - 3 > 0) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow - 3][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow - 2 > 0) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow - 2][activeCell - 4]) : 'wall'"></span>
            <span :class="((activeRow - 2 > 0) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow - 2][activeCell - 3]) : 'wall'"></span>
            <span :class="((activeRow - 2 > 0) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow - 2][activeCell - 2]) : 'wall'"></span>
            <span :class="((activeRow - 2 > 0) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow - 2][activeCell - 1]) : 'wall'"></span>
            <span :class="((activeRow - 2 > 0) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow - 2][activeCell - 0]) : 'wall'"></span>
            <span :class="((activeRow - 2 > 0) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow - 2][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow - 2 > 0) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow - 2][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow - 2 > 0) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow - 2][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow - 2 > 0) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow - 2][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow - 1 > 0) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow - 1][activeCell - 4]) : 'wall'"></span>
            <span :class="((activeRow - 1 > 0) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow - 1][activeCell - 3]) : 'wall'"></span>
            <span :class="((activeRow - 1 > 0) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow - 1][activeCell - 2]) : 'wall'"></span>
            <span :class="((activeRow - 1 > 0) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow - 1][activeCell - 1]) : 'wall'"></span>
            <span :class="((activeRow - 1 > 0) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow - 1][activeCell - 0]) : 'wall'"></span>
            <span :class="((activeRow - 1 > 0) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow - 1][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow - 1 > 0) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow - 1][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow - 1 > 0) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow - 1][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow - 1 > 0) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow - 1][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow - 0 > 0) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow - 0][activeCell - 4]) : 'wall'"></span>
            <span :class="((activeRow - 0 > 0) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow - 0][activeCell - 3]) : 'wall'"></span>
            <span :class="((activeRow - 0 > 0) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow - 0][activeCell - 2]) : 'wall'"></span>
            <span :class="((activeRow - 0 > 0) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow - 0][activeCell - 1]) : 'wall'"></span>
            <span class="player"></span>
            <span :class="((activeRow - 0 > 0) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow - 0][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow - 0 > 0) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow - 0][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow - 0 > 0) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow - 0][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow - 0 > 0) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow - 0][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow + 1 < 49) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow + 1][activeCell - 4]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow + 1][activeCell - 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow + 1][activeCell - 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow + 1][activeCell - 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow + 1][activeCell - 0]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow + 1][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow + 1][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow + 1][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 1 < 49) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow + 1][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow + 2 < 49) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow + 2][activeCell - 4]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow + 2][activeCell - 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow + 2][activeCell - 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow + 2][activeCell - 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow + 2][activeCell - 0]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow + 2][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow + 2][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow + 2][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 2 < 49) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow + 2][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow + 3 < 49) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow + 3][activeCell - 4]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow + 3][activeCell - 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow + 3][activeCell - 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow + 3][activeCell - 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow + 3][activeCell - 0]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow + 3][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow + 3][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow + 3][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 3 < 49) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow + 3][activeCell + 4]) : 'wall'">
            </span>
          </div>
          <div class="dungeon-row">
            <span :class="((activeRow + 4 < 49) && (activeCell - 4 > 0)) ? cellClass(activeDungeon[activeRow + 4][activeCell - 4]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell - 3 > 0)) ? cellClass(activeDungeon[activeRow + 4][activeCell - 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell - 2 > 0)) ? cellClass(activeDungeon[activeRow + 4][activeCell - 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell - 1 > 0)) ? cellClass(activeDungeon[activeRow + 4][activeCell - 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell - 0 > 0)) ? cellClass(activeDungeon[activeRow + 4][activeCell - 0]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell + 1 < 49)) ? cellClass(activeDungeon[activeRow + 4][activeCell + 1]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell + 2 < 49)) ? cellClass(activeDungeon[activeRow + 4][activeCell + 2]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell + 3 < 49)) ? cellClass(activeDungeon[activeRow + 4][activeCell + 3]) : 'wall'">
            </span>
            <span :class="((activeRow + 4 < 49) && (activeCell + 4 < 49)) ? cellClass(activeDungeon[activeRow + 4][activeCell + 4]) : 'wall'">
            </span>
          </div>
        </v-col>
        <v-col cols="2" class="text-center">
          <div class="minimap-dungeon-row" v-for="(row, i) in miniMap" :key="i">
            <span v-for="(cell, j) in row" :key="j" :class="minMapCellClass(cell)"></span>
          </div>
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
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="snackbar"
        >
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
            timeout="2000"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
    </v-container>
  </template>
  
  <script>
  import dungeon from 'random-dungeon-generator'
  import merchantRoom from './merchantRoom.vue'
  import battleScreen from './battleScreen.vue'
  import chestRoom from './chestRoom.vue'

  
  export default {
	name: 'App',

	components: {
		merchantRoom,
		battleScreen,
		chestRoom,
	},

	data: () => ({
		activeDungeon: [],
		activeRow: 1,
		activeCell: 1,
		miniMap: [],
		dialog: false,
		activeComponent: "none",
        keyObtained: false,
        floor5BossesBeat: 0,
        text: '',
        snackbar: false
	}),
	methods: {
        devExit(){
            this.keyObtained = true;
            this.checkExit();
        },
        gameOver(){
            window.removeEventListener('keydown', this.preventScrolling);
            window.removeEventListener('keyup', this.handleArrows)
            this.$emit('changeComponent', 'gameOver')
        },
        completeRun(){
            window.removeEventListener('keydown', this.preventScrolling);
            window.removeEventListener('keyup', this.handleArrows)
            this.$emit('changeComponent', 'endGameStory')
        },
		changeComponent() {
			this.activeComponent = null;
			this.dialog = false;
		},
        leaveShop() {
            window.addEventListener('keydown', this.preventScrolling);
            window.addEventListener('keyup', this.handleArrows)
            this.activeComponent = null;
			this.dialog = false;
			this.activeDungeon[this.activeRow][this.activeCell] = 2
			this.miniMap[this.activeRow][this.activeCell] = 2
        },
		completeBattle() {
            window.addEventListener('keydown', this.preventScrolling);
            window.addEventListener('keyup', this.handleArrows)
			this.activeComponent = null;
			this.dialog = false;
			this.activeDungeon[this.activeRow][this.activeCell] = 2
			this.miniMap[this.activeRow][this.activeCell] = 2
		},
        completeBossBattle(){
            window.addEventListener('keydown', this.preventScrolling);
            window.addEventListener('keyup', this.handleArrows)
            this.activeComponent = null;
			this.dialog = false;
			this.activeDungeon[this.activeRow][this.activeCell] = 2
			this.miniMap[this.activeRow][this.activeCell] = 2
            if(this.$store.state.floor == 5){
                this.$store.dispatch('ascendStage');
                this.floor5BossesBeat++
            } else {
                this.keyObtained = true;
            }
        },
        preventScrolling(e){
            if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        },
        handleArrows(e){
            if (e.key == 'ArrowUp') {
                this.move('up')
            }
            if (e.key == 'ArrowDown') {
                this.move('down')
            }
            if (e.key == 'ArrowLeft') {
                this.move('left')
            }
            if (e.key == 'ArrowRight') {
                this.move('right')
            }
        },
        checkExit(){
            if(this.keyObtained){
                window.removeEventListener('keydown', this.preventScrolling);
                window.removeEventListener('keyup', this.handleArrows)
    			this.$store.dispatch('ascendFloor');
    			this.$emit('changeComponent', 'midGameStories');
            } else {
                this.text = 'I have to defeat the boss and retrieve the key first...';
                this.snackbar = true;
            }
        },
		cellClass(cellType) {
			switch (cellType) {
				case 1:
					return 'wall'
				case 2:
					return "floor"
				case 3:
					return 'enemy'
				case 4:
					return 'boss'
				case 5:
					return 'merchant'
				case 6:
					return 'exit'
                case 7:
					return 'chest'
                case 8:
                    return 'elite-boss'
				default:
					return "floor"
			}
		},
		openBattleScreen(enemyType) {
            window.removeEventListener('keydown', this.preventScrolling);
            window.removeEventListener('keyup', this.handleArrows)
			let payload = new Object;
			if (enemyType == 'enemy') {
				payload.deckTemplate = this.$store.state.enemyDecks.find(deck => deck.floor == this.$store.state.floor).deck
				payload.cardPool = this.$store.state.cards
			} else if(enemyType == 'boss') {
                if(this.$store.state.floor == 5){
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
		minMapCellClass(cellType) {
			switch (cellType) {
				case 1:
					return 'mini-wall'
				case 2:
					return "mini-floor"
				case 3:
					return 'mini-enemy'
				case 4:
					return 'mini-boss'
				case 5:
					return 'mini-merchant'
				case 6:
					return 'mini-exit'
                case 7:
					return 'mini-chest'
                case 8:
					return 'mini-elite-boss'
                case 9:
					return 'mini-player'
				default:
					return "mini-fog"
			}
		},
		move(direction) {
			if (direction == "up") {
				if (this.activeRow > 0) {
					if (this.activeDungeon[this.activeRow - 1][this.activeCell] != 1) {
						this.activeRow -= 1
						this.checkCellAfterMove();
						this.updateMiniMap();
					}
				}
			}
			if (direction == "left") {
				if (this.activeCell > 0) {
					if (this.activeDungeon[this.activeRow][this.activeCell - 1] != 1) {
						this.activeCell -= 1
						this.checkCellAfterMove();
						this.updateMiniMap();
					}
				}
			}
			if (direction == "down") {
				if (this.activeRow < 49) {
					if (this.activeDungeon[this.activeRow + 1][this.activeCell] != 1) {
						this.activeRow += 1
						this.checkCellAfterMove();
						this.updateMiniMap();
					}
				}
			}
			if (direction == "right") {
				if (this.activeCell < 49) {
					if (this.activeDungeon[this.activeRow][this.activeCell + 1] != 1) {
						this.activeCell += 1
						this.checkCellAfterMove();
						this.updateMiniMap();
					}
				}
			}
		},
        checkCellAfterMove(){
            let activeCellType = this.activeDungeon[this.activeRow][this.activeCell];
			switch (activeCellType) {
				case 1:
					return;
				case 2:
					return;
				case 3:
					this.$store.dispatch('setEnemyType', 'enemy')
					this.openBattleScreen('enemy');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
				case 4:
					this.$store.dispatch('setEnemyType', 'boss')
					this.openBattleScreen('boss');
					this.activeComponent = 'battleScreen';
					this.dialog = true;
					break;
				case 5:
                    window.removeEventListener('keydown', this.preventScrolling);
                    window.removeEventListener('keyup', this.handleArrows)
					this.activeComponent = 'merchantRoom';
					this.dialog = true;
					break;
				case 6:
					this.checkExit();
					break;
                case 7:
                    window.removeEventListener('keydown', this.preventScrolling);
                    window.removeEventListener('keyup', this.handleArrows)
                    this.activeComponent = 'chestRoom';
					this.dialog = true;
					break;
                case 8:
                    this.checkEliteBoss();
					break;
				default:
					return;
			}
        },
        checkEliteBoss(){
            if(this.floor5BossesBeat < 3){
                this.text = 'I have to defeat the other three enemies on this floor before taking her on...';
                this.snackbar = true;
            } else {
                this.$store.dispatch('setEnemyType', 'eliteBoss')
				this.openBattleScreen('eliteBoss');
				this.activeComponent = 'battleScreen';
				this.dialog = true;
            }
        },
		updateMiniMap() {
			if (this.activeCell - 1 > 0) {
				this.miniMap[this.activeRow][this.activeCell - 1] = this.activeDungeon[this.activeRow][this.activeCell - 1]
				if (this.activeRow - 1 > 0) {
					this.miniMap[this.activeRow - 1][this.activeCell - 1] = this.activeDungeon[this.activeRow - 1][this.activeCell - 1]
				}
				if (this.activeRow - 2 > 0) {
					this.miniMap[this.activeRow - 2][this.activeCell - 1] = this.activeDungeon[this.activeRow - 2][this.activeCell - 1]
				}
				if (this.activeRow - 3 > 0) {
					this.miniMap[this.activeRow - 3][this.activeCell - 1] = this.activeDungeon[this.activeRow - 3][this.activeCell - 1]
				}
				if (this.activeRow + 1 < 49) {
					this.miniMap[this.activeRow + 1][this.activeCell - 1] = this.activeDungeon[this.activeRow + 1][this.activeCell - 1]
				}
				if (this.activeRow + 2 < 49) {
					this.miniMap[this.activeRow + 2][this.activeCell - 1] = this.activeDungeon[this.activeRow + 2][this.activeCell - 1]
				}
				if (this.activeRow + 3 < 49) {
					this.miniMap[this.activeRow + 3][this.activeCell - 1] = this.activeDungeon[this.activeRow + 3][this.activeCell - 1]
				}
			}
			if (this.activeCell - 2 > 0) {
				this.miniMap[this.activeRow][this.activeCell - 2] = this.activeDungeon[this.activeRow][this.activeCell - 2]
				if (this.activeRow - 1 > 0) {
					this.miniMap[this.activeRow - 1][this.activeCell - 2] = this.activeDungeon[this.activeRow - 1][this.activeCell - 2]
				}
				if (this.activeRow - 2 > 0) {
					this.miniMap[this.activeRow - 2][this.activeCell - 2] = this.activeDungeon[this.activeRow - 2][this.activeCell - 2]
				}
				if (this.activeRow - 3 > 0) {
					this.miniMap[this.activeRow - 3][this.activeCell - 2] = this.activeDungeon[this.activeRow - 3][this.activeCell - 2]
				}
				if (this.activeRow + 1 < 49) {
					this.miniMap[this.activeRow + 1][this.activeCell - 2] = this.activeDungeon[this.activeRow + 1][this.activeCell - 2]
				}
				if (this.activeRow + 2 < 49) {
					this.miniMap[this.activeRow + 2][this.activeCell - 2] = this.activeDungeon[this.activeRow + 2][this.activeCell - 2]
				}
				if (this.activeRow + 3 < 49) {
					this.miniMap[this.activeRow + 3][this.activeCell - 2] = this.activeDungeon[this.activeRow + 3][this.activeCell - 2]
				}
			}
			if (this.activeCell - 3 > 0) {
				this.miniMap[this.activeRow][this.activeCell - 3] = this.activeDungeon[this.activeRow][this.activeCell - 3]
				if (this.activeRow - 1 > 0) {
					this.miniMap[this.activeRow - 1][this.activeCell - 3] = this.activeDungeon[this.activeRow - 1][this.activeCell - 3]
				}
				if (this.activeRow - 2 > 0) {
					this.miniMap[this.activeRow - 2][this.activeCell - 3] = this.activeDungeon[this.activeRow - 2][this.activeCell - 3]
				}
				if (this.activeRow - 3 > 0) {
					this.miniMap[this.activeRow - 3][this.activeCell - 3] = this.activeDungeon[this.activeRow - 3][this.activeCell - 3]
				}
				if (this.activeRow + 1 < 49) {
					this.miniMap[this.activeRow + 1][this.activeCell - 3] = this.activeDungeon[this.activeRow + 1][this.activeCell - 3]
				}
				if (this.activeRow + 2 < 49) {
					this.miniMap[this.activeRow + 2][this.activeCell - 3] = this.activeDungeon[this.activeRow + 2][this.activeCell - 3]
				}
				if (this.activeRow + 3 < 49) {
					this.miniMap[this.activeRow + 3][this.activeCell - 3] = this.activeDungeon[this.activeRow + 3][this.activeCell - 3]
				}
			}
			if (this.activeCell + 1 < 49) {
				this.miniMap[this.activeRow][this.activeCell + 1] = this.activeDungeon[this.activeRow][this.activeCell + 1]
				if (this.activeRow - 1 > 0) {
					this.miniMap[this.activeRow - 1][this.activeCell + 1] = this.activeDungeon[this.activeRow - 1][this.activeCell + 1]
				}
				if (this.activeRow - 2 > 0) {
					this.miniMap[this.activeRow - 2][this.activeCell + 1] = this.activeDungeon[this.activeRow - 2][this.activeCell + 1]
				}
				if (this.activeRow - 3 > 0) {
					this.miniMap[this.activeRow - 3][this.activeCell + 1] = this.activeDungeon[this.activeRow - 3][this.activeCell + 1]
				}
				if (this.activeRow + 1 < 49) {
					this.miniMap[this.activeRow + 1][this.activeCell + 1] = this.activeDungeon[this.activeRow + 1][this.activeCell + 1]
				}
				if (this.activeRow + 2 < 49) {
					this.miniMap[this.activeRow + 2][this.activeCell + 1] = this.activeDungeon[this.activeRow + 2][this.activeCell + 1]
				}
				if (this.activeRow + 3 < 49) {
					this.miniMap[this.activeRow + 3][this.activeCell + 1] = this.activeDungeon[this.activeRow + 3][this.activeCell + 1]
				}
			}
			if (this.activeCell + 2 < 49) {
				this.miniMap[this.activeRow][this.activeCell + 2] = this.activeDungeon[this.activeRow][this.activeCell + 2]
				if (this.activeRow - 1 > 0) {
					this.miniMap[this.activeRow - 1][this.activeCell + 2] = this.activeDungeon[this.activeRow - 1][this.activeCell + 2]
				}
				if (this.activeRow - 2 > 0) {
					this.miniMap[this.activeRow - 2][this.activeCell + 2] = this.activeDungeon[this.activeRow - 2][this.activeCell + 2]
				}
				if (this.activeRow - 3 > 0) {
					this.miniMap[this.activeRow - 3][this.activeCell + 2] = this.activeDungeon[this.activeRow - 3][this.activeCell + 2]
				}
				if (this.activeRow + 1 < 49) {
					this.miniMap[this.activeRow + 1][this.activeCell + 2] = this.activeDungeon[this.activeRow + 1][this.activeCell + 2]
				}
				if (this.activeRow + 2 < 49) {
					this.miniMap[this.activeRow + 2][this.activeCell + 2] = this.activeDungeon[this.activeRow + 2][this.activeCell + 2]
				}
				if (this.activeRow + 3 < 49) {
					this.miniMap[this.activeRow + 3][this.activeCell + 2] = this.activeDungeon[this.activeRow + 3][this.activeCell + 2]
				}
			}
			if (this.activeCell + 3 < 49) {
				this.miniMap[this.activeRow][this.activeCell + 3] = this.activeDungeon[this.activeRow][this.activeCell + 3]
				if (this.activeRow - 1 > 0) {
					this.miniMap[this.activeRow - 1][this.activeCell + 3] = this.activeDungeon[this.activeRow - 1][this.activeCell + 3]
				}
				if (this.activeRow - 2 > 0) {
					this.miniMap[this.activeRow - 2][this.activeCell + 3] = this.activeDungeon[this.activeRow - 2][this.activeCell + 3]
				}
				if (this.activeRow - 3 > 0) {
					this.miniMap[this.activeRow - 3][this.activeCell + 3] = this.activeDungeon[this.activeRow - 3][this.activeCell + 3]
				}
				if (this.activeRow + 1 < 49) {
					this.miniMap[this.activeRow + 1][this.activeCell + 3] = this.activeDungeon[this.activeRow + 1][this.activeCell + 3]
				}
				if (this.activeRow + 2 < 49) {
					this.miniMap[this.activeRow + 2][this.activeCell + 3] = this.activeDungeon[this.activeRow + 2][this.activeCell + 3]
				}
				if (this.activeRow + 3 < 49) {
					this.miniMap[this.activeRow + 3][this.activeCell + 3] = this.activeDungeon[this.activeRow + 3][this.activeCell + 3]
				}
			}
			if (this.activeRow - 1 > 0) {
				this.miniMap[this.activeRow - 1][this.activeCell] = this.activeDungeon[this.activeRow - 1][this.activeCell]
			}
			if (this.activeRow - 2 > 0) {
				this.miniMap[this.activeRow - 2][this.activeCell] = this.activeDungeon[this.activeRow - 2][this.activeCell]
			}
			if (this.activeRow - 3 > 0) {
				this.miniMap[this.activeRow - 3][this.activeCell] = this.activeDungeon[this.activeRow - 3][this.activeCell]
			}
			if (this.activeRow + 1 < 49) {
				this.miniMap[this.activeRow + 1][this.activeCell] = this.activeDungeon[this.activeRow + 1][this.activeCell]
			}
			if (this.activeRow + 2 < 49) {
				this.miniMap[this.activeRow + 2][this.activeCell] = this.activeDungeon[this.activeRow + 2][this.activeCell]
			}
			if (this.activeRow + 3 < 49) {
				this.miniMap[this.activeRow + 3][this.activeCell] = this.activeDungeon[this.activeRow + 3][this.activeCell]
			}
			this.miniMap[this.activeRow][this.activeCell] = 8
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
			return availablePerks.filter(perk => perk.count > 0);
		}
	},
	mounted() {
		const options = {
			width: 50,
			height: 50,
			minRoomSize: 5,
			maxRoomSize: 20
		};
		this.activeDungeon = dungeon(options)
		let newDungeon = this.activeDungeon
		for (let i = 0; i < newDungeon.length; i++) {
			const row = newDungeon[i];
			for (let j = 0; j < row.length; j++) {
				const cell = row[j];
				if (cell > 2) {
					newDungeon[i][j] = 2
				}
			}
		}
		this.activeDungeon = newDungeon;
		let enemies = 10;
		let boss = 1;
		let merchants = 2;
		let exit = 1;
        let chests = 2;
        let eliteBoss = 0;
		let elementsAdded = false
        if(this.$store.state.floor == 4){
            enemies = 0;
            merchants = 1;
            chests = 1;
        }
        if(this.$store.state.floor == 5){
            enemies = 0;
            boss = 3;
            merchants = 1;
            chests = 1;
            eliteBoss = 1;
        }
		do {
			let randomRow = Math.floor(Math.random() * 50);
			let randomCell = Math.floor(Math.random() * 50);
			if (enemies > 0) {
				if (this.activeDungeon[randomRow][randomCell] == 2) {
					this.activeDungeon[randomRow][randomCell] = 3;
					enemies--;
				}
			} else if (boss > 0) {
				if (this.activeDungeon[randomRow][randomCell] == 2) {
					this.activeDungeon[randomRow][randomCell] = 4;
					boss--;
				}
			} else if (merchants > 0) {
				if (this.activeDungeon[randomRow][randomCell] == 2) {
					this.activeDungeon[randomRow][randomCell] = 5;
					merchants--;
				}
			} else if (chests > 0) {
				if (this.activeDungeon[randomRow][randomCell] == 2) {
					this.activeDungeon[randomRow][randomCell] = 7;
					chests--;
				}
			} else if (eliteBoss > 0) {
				if (this.activeDungeon[randomRow][randomCell] == 2) {
					this.activeDungeon[randomRow][randomCell] = 8;
					eliteBoss--;
				}
			} else if (exit > 0) {
				if (this.activeDungeon[randomRow][randomCell] == 2) {
					this.activeDungeon[randomRow][randomCell] = 6;
					exit--;
					elementsAdded = true;
				}
			}
		} while (elementsAdded == false);
		this.miniMap = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		]
		this.updateMiniMap();
		window.addEventListener('keydown', this.preventScrolling);
        window.addEventListener('keyup', this.handleArrows)
	}
};
</script>
  
  <style>
    .player {
      width: 75px;
      height: 75px;
      background-color: pink;
    }
    .wall {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/wall.png');
      background-repeat: no-repeat;
    }
    .floor {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/floor.png');
      background-repeat: no-repeat;
    }
    .enemy {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/skull.png');
      background-repeat: no-repeat;
    }
    .boss {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/boss.png');
      background-repeat: no-repeat;
    }
    .elite-boss {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/boss-elite.png');
      background-repeat: no-repeat;
    }
    .merchant {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/merchant.png');
      background-repeat: no-repeat;
    }
    .exit {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/door.png');
      background-repeat: no-repeat;
    }
    .chest {
      width: 75px;
      height: 75px;
      background: url('~@/assets/tiles/chest.png');
      background-repeat: no-repeat;
    }
    .dungeon-row{
      width: 675px;
      height: 75px;
      display: flex;
      background-color: black;
    }
    .minimap-dungeon-row{
      width: 250px;
      height: 5px;
      display: flex;
      background-color: black;
    }
    .mini-player {
      width: 5px;
      height: 5px;
      background-color: pink;
    }
    .mini-wall {
      width: 5px;
      height: 5px;
      background-color: grey;
    }
    .mini-floor {
      width: 5px;
      height: 5px;
      background-color: white;
    }
    .mini-enemy {
      width: 5px;
      height: 5px;
      background-color: rgb(147, 0, 245);
    }
    .mini-boss {
      width: 5px;
      height: 5px;
      background-color: red;
    }
    .mini-elite-boss {
      width: 5px;
      height: 5px;
      background-color: rgb(121, 0, 0);
    }
    .mini-merchant {
      width: 5px;
      height: 5px;
      background-color: gold;
    }
    .mini-exit {
      width: 5px;
      height: 5px;
      background-color: brown;
    }
    .mini-chest {
      width: 5px;
      height: 5px;
      background-color: rgb(97, 243, 97);
    }
    .mini-fog {
      width: 5px;
      height: 5px;
      background-color: black;
    }
    .deck-text{
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}
  </style>