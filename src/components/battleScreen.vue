<template>
	<v-container fluid>
		<v-row class="justify-space-around pt-5">
			<v-col cols="2">
				<v-row class="justify-center">
					<v-col cols="12">
						<v-row class="justify-center">
							<v-img :src="require(`@/assets/playerCharacters/001/00${playerStage}.png`)" contain></v-img>
							<v-col cols="12" class="text-center">
								<h3 style="color: green;">
									Remaining HP: {{playerHealth}}
								</h3>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="8" v-if="rewardsScreen">
				<v-row class="justify-space-between" :class="battlefieldBG">
					<v-col cols="12" class="text-center">
						<h3>Match Won</h3>
					</v-col>
					<v-col cols="12" class="text-center">
						<h1>Gained {{prizeMoney}} coins</h1>
					</v-col>
					<v-col cols="12" class="text-center">
						<p>Select one of the following cards to add to your deck</p>
					</v-col>
					<v-col cols="3" v-for="card in prizeCards" :key="card.id">
						<v-img :src="prizeCardSelected ? (selectedPrizeCard == card.id ? (card.animated ? card.animatedImage : card.image) : require('@/assets/cards/blankBack.png')) : (card.animated ? card.animatedImage : card.image)" contain @click="prizeCardSelected ? '' : addCard(card)">
							<div
								v-if="card.description.length > 0"
								class="d-flex v-card--reveal"
								style="height: 100%;"
								>
								{{ card.description }}
							</div>
						</v-img>
					</v-col>
					<v-col cols="12" class="text-center">
						<v-btn v-if="!prizeCardSelected" color="pink" @click="ascendStage">Pass</v-btn>
						<v-btn v-else color="pink" @click="ascendStage">Continue</v-btn>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="8" v-if="gameOverScreen">
				<v-row class="justify-space-between" :class="battlefieldBG">
					<v-col cols="12" class="text-center">
						<h3>GAME OVER</h3>
					</v-col>
					<v-col cols="12" class="text-center">
						<v-btn color="pink" @click="gameOverContinue">Continue</v-btn>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="8" v-if="!rewardsScreen && !gameOverScreen">
				<v-row class="justify-space-between" :class="battlefieldBG">
					<v-col cols="12" class="text-center match-info">
						<h3>Turn {{turnNumber}}</h3>
					</v-col>
					<v-col cols="3" class="text-center match-info">
						<h3>Current Power: {{playerPower}}</h3>
					</v-col>
					<v-col cols="6" class="text-center match-info">
						<h3>{{roundOutcome}}</h3>
					</v-col>
					<v-col cols="3" class="text-center match-info">
						<h3>Current Power: {{cardsPlayed ? enemyPower : '?'}}</h3>
					</v-col>
					<v-col cols="6" :class="roundWinner == 'player' ? 'player-cards-victory' : roundWinner == 'enemy' ? 'player-cards-defeat' : 'player-cards'">
						<v-row class="justify-end" v-if="playerPlayedCards.length != 0">
							<v-col cols="4" v-for="(card, index) in playerPlayedCardsDisplay" :key="index">
								<v-img :src="card.animated ? card.animatedImage : card.image" contain>
									<div
										v-if="card && card.description.length > 0"
										class="d-flex v-card--reveal"
										style="height: 100%;"
										>
										{{ card.description }}
									</div>
								</v-img>
							</v-col>
						</v-row>
						<v-row class="justify-end" v-else>
							<v-col cols="4">
								<v-img :src="require('@/assets/cards/blankBack.png')" contain></v-img>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="6" :class="roundWinner == 'enemy' ? 'enemy-cards-victory' : roundWinner == 'player' ? 'enemy-cards-defeat' : 'enemy-cards'">
						<v-row class="justify-start" v-if="enemyPlayedCards.length != 0">
							<v-col cols="4" v-for="(card, index) in enemyPlayedCards" :key="index">
								<v-img :src="card.image" contain>
									<div
										v-if="card && card.description.length > 0"
										class="d-flex v-card--reveal"
										style="height: 100%;"
										>
										{{ card.description }}
									</div>
								</v-img>
							</v-col>
						</v-row>
						<v-row class="justify-start" v-else>
							<v-col cols="4">
								<v-img :src="require('@/assets/cards/blankBack.png')" contain></v-img>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="3" class="text-center">
						<h3>Deck: {{playerDeck.length}}</h3>
					</v-col>
					<v-col cols="6" class="text-center">
						<v-btn color="pink" @click="playCards" v-if="!cardsPlayed">Play Cards</v-btn>
						<v-btn color="green" @click="completeTurn" v-if="cardsPlayed && !matchWon && !gameOver">Next Turn</v-btn>
						<v-btn color="green" @click="rewardsScreen = true" v-if="cardsPlayed && matchWon">Collect Rewards</v-btn>
						<v-btn color="green" @click="gameOverScreen = true" v-if="cardsPlayed && gameOver">Game Over</v-btn>
					</v-col>
					<v-col cols="3" class="text-center">
						<h3>Discard: {{playerDiscardPile.length}}</h3>
					</v-col>
					<v-col cols="12" class="text-center match-info">
						<h3>
							Remaining Energy: {{playerEnergy}}
						</h3>
					</v-col>
				</v-row>
				<v-row class="justify-space-around pt-5">
					<div class="game-card" v-for="i in 6" :key="i">
						<v-img :src="playerHand[i-1] ? (playerHand[i - 1].animated ? playerHand[i - 1].animatedImage: playerHand[i - 1].image) : require('@/assets/cards/blankBack.png')" @click="playerHand[i-1] ? playCard(playerHand[i-1], i-1) : ''" contain>
							<div
								v-if="playerHand[i-1] && playerHand[i-1].description.length > 0"
								class="d-flex v-card--reveal"
								style="height: 100%;"
								>
								{{ playerHand[i-1].description }}
							</div>
						</v-img>
					</div>
				</v-row>
			</v-col>
			<v-col cols="2">
				<v-row class="justify-center">
					<v-col cols="12">
						<v-row class="justify-center">
							<v-img :src="enemyImages[enemyStage]" contain></v-img>
							<v-col cols="12" class="text-center">
								<h3 style="color: green;">
									Remaining HP: {{enemyHealth}}
								</h3>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		playerBaseHealth: 8,
		playerHealth: 8,
		enemyBaseHealth: 4,
		enemyHealth: 4,
		playerEnergy: 0,
    enemyEnergy: 3,
		energySnackbar: false,
		playerPlayedCards: [],
		enemyPlayedCards: [],
		playerPower: 0,
		enemyPower: 0,
		playerDeck: [],
		enemyDeck: [],
		enemyHand: [],
		playerHand: [],
		playerDiscardPile: [],
		enemyDiscardPile: [],
		roundOver: false,
    turnNumber: 1,
		playerBimboficationActive: false,
		enemyBimboficationActive: false,
		straponActive: false,
    cardsPlayed: false,
    matchWon: false,
	gameOver: false,
    roundOutcome: '',
    roundWinner: '',
    prizeCardSelected: false,
    rewardsScreen: false,
	gameOverScreen: false,
    selectedPrizeCard: '',
		enemyImages: [],
		playerModifications: {
			abundance: 0,
			bimbofication: 0,
			bubbleButts: 0,
			commando: 0,
			cosplay: 0,
			enticing: 0,
			freeUse: 0,
			girlfriends: 0,
			groupUse: 0,
			ready: 0,
			reflecting: 0,
			restrained: 0,
			seducing: 0,
			thong: 0,
			zen: 0
		},
		enemyModifications: {
			abundance: 0,
			bimbofication: 0,
			bubbleButts: 0,
			commando: 0,
			cosplay: 0,
			enticing: 0,
			freeUse: 0,
			girlfriends: 0,
			groupUse: 0,
			ready: 0,
			reflecting: 0,
			restrained: 0,
			seducing: 0,
			thong: 0,
			zen: 0
		}
	}),
	methods: {
		drawHand: function() {
			for (let i = 0; i < 3; i++) {
				this.playerHand.push(this.playerDeck.shift())
			}
		},
    drawEnemyHand: function(){
      for (let i = 0; i < 3; i++) {
        this.enemyHand.push(this.enemyDeck.shift())
			}
    },
		drawTurn: function() {
			if (this.playerHand.length < 6) {
        if(this.playerDeck.length == 0){
          this.playerDeck = this.shuffle(this.playerDiscardPile);
          this.playerDiscardPile = [];
        }
				this.playerHand.push(this.playerDeck.shift())
			}
			for (let i = 0; i < this.playerModifications.enticing; i++) {
        if(this.playerDeck.length == 0){
          this.playerDeck = this.shuffle(this.playerDiscardPile);
          this.playerDiscardPile = [];
        }
				if (this.playerHand.length < 6) {
					this.playerHand.push(this.playerDeck.shift())
				}
			}
			this.playerModifications.enticing = 0;
			for (let i = 0; i < this.playerModifications.seducing; i++) {
        if(this.playerDeck.length == 0){
          this.playerDeck = this.shuffle(this.playerDiscardPile);
          this.playerDiscardPile = [];
        }
				if (this.playerHand.length < 6) {
					this.playerHand.push(this.playerDeck.shift())
				}
			}
		},
    drawEnemyTurn: function() {
			if (this.enemyHand.length < 6) {
        if(this.enemyDeck.length == 0){
          this.enemyDeck = this.shuffle(this.enemyDiscardPile);
          this.enemyDiscardPile = [];
        }
				this.enemyHand.push(this.enemyDeck.shift())
			}
			for (let i = 0; i < this.enemyModifications.enticing; i++) {
        if(this.enemyDeck.length == 0){
          this.enemyDeck = this.shuffle(this.enemyDiscardPile);
          this.enemyDiscardPile = [];
        }
				if (this.enemyHand.length < 6) {
					this.enemyHand.push(this.enemyDeck.shift())
				}
			}
			this.enemyModifications.enticing = 0;
			for (let i = 0; i < this.enemyModifications.seducing; i++) {
        if(this.enemyDeck.length == 0){
          this.enemyDeck = this.shuffle(this.enemyDiscardPile);
          this.enemyDiscardPile = [];
        }
				if (this.enemyHand.length < 6) {
					this.enemyHand.push(this.enemyDeck.shift())
				}
			}
		},
    playEnemyCards(){
      let playOne = Math.floor(Math.random() * 10) + 1;
      if(playOne > 6){
        do {
          let options = this.enemyHand.filter(card => card.cost <= this.enemyEnergy);
          let card = options[Math.floor(Math.random()*options.length)];
          this.enemyPlayedCards.push(card);
          this.enemyHand = this.enemyHand.filter(handCard => handCard.id != card.id);
          this.enemyEnergy = this.enemyEnergy - card.cost;
          this.enemyPower += card.power;
        } while (this.enemyEnergy > Math.min(...this.enemyHand.map(card => card.cost)));
      } else {
        let options = this.enemyHand.filter(card => card.cost <= this.enemyEnergy);
        let card = options[Math.floor(Math.random()*options.length)];
        this.enemyPlayedCards.push(card);
        this.enemyHand = this.enemyHand.filter(handCard => handCard.id != card.id);
        this.enemyEnergy = this.enemyEnergy - card.cost;
        this.enemyPower += card.power;
      }
    },
		shuffle(array) {
			let currentIndex = array.length,
				randomIndex;

			// While there remain elements to shuffle.
			while (currentIndex != 0) {

				// Pick a remaining element.
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				// And swap it with the current element.
				[array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]
				];
			}

			return array;
		},
		playCard(card) {
      if(this.cardsPlayed){
        return
      }
			if (this.playerModifications.thong > 0) {
				this.playerEnergy += card.cost;
				this.playerModifications.thong -= 1;
			}
			if (this.playerEnergy < card.cost) {
				return
			}
			this.playerEnergy = this.playerEnergy - card.cost;
      if(card.power == "?"){
        card.power = 0;
      }
			this.playerPower += card.power;
			this.playerPlayedCards.push(card);
			this.playerHand = this.playerHand.filter(handCard => handCard.id != card.id)
		},
		playCards() {
      this.playEnemyCards()
			let playerPlayedCardNames = this.playerPlayedCards.map(card => card.name);
			let enemyPlayedCardNames = this.enemyPlayedCards.map(card => card.name);
			this.checkPlayerModifications();
			this.checkEnemyModifications();
			this.checkPlayerCardEffects(playerPlayedCardNames);
			this.checkEnemyCardEffects(enemyPlayedCardNames);
			this.playerPower += this.playerPerks.filter(perk => perk.name == "Strapon").length;
			if (this.playerPower > this.enemyPower) {
        this.roundWinner = 'player';
				if (this.straponActive) {
          this.straponActive = false;
          this.roundOutcome = 'Player wins round with ' + this.playerPower + ' power'
					this.enemyHealth = this.enemyHealth - 1;
				}
				if (this.enemyBimboficationActive) {
          this.roundOutcome = 'Player wins round with ' + this.playerPower + ' power, enemy blocks'
					this.enemyHealth = this.enemyHealth
				} else {
          this.roundOutcome = 'Player wins round with ' + this.playerPower + ' power'
					this.enemyHealth = this.enemyHealth - 1;
				}
			}
			if (this.enemyPower > this.playerPower) {
        this.roundWinner = 'enemy';
				if (this.straponActive) {
          this.straponActive = false;
          this.roundOutcome = 'Enemy wins round with ' + this.enemyPower + ' power'
					this.playerHealth = this.playerHealth - 1;
				}
				if (this.playerBimboficationActive) {
          this.roundOutcome = 'Enemy wins round with ' + this.enemyPower + ' power, player blocks'
		  this.playerBimboficationActive = false;
					this.playerHealth = this.playerHealth
				} else {
          this.roundOutcome = 'Enemy wins round with ' + this.enemyPower + ' power'
					this.playerHealth = this.playerHealth - 1;
				}
			}
      if(this.enemyPower == this.playerPower){
        this.roundOutcome = 'Round ends in a tie'
      }
      if(this.enemyHealth <= 0){
        this.matchWon = true;
        this.$store.dispatch('gainMoney', this.prizeMoney)
      }
	  if(this.playerHealth <= 0){
		this.gameOver = true;
	  }
      this.cardsPlayed = true;
		},
    completeTurn(){
      this.enemyDiscardPile = this.enemyDiscardPile.concat(this.enemyPlayedCards);
      this.playerDiscardPile = this.playerDiscardPile.concat(this.playerPlayedCards);
      this.enemyPlayedCards = [];
      this.playerPlayedCards = [];
      this.playerPower = 0;
      this.enemyPower = 0;
	  let remainingPlayerEnergy = this.playerEnergy;
      this.playerEnergy = this.playerBaseEnergy + this.playerModifications.zen + (this.playerPerks.map(perk => perk.name).includes('Implants') ? 2 : 0) + (this.playerPerks.map(perk => perk.name).includes('Oral Fixation') ? remainingPlayerEnergy : 0);
      this.enemyEnergy = this.enemyBaseEnergy + this.enemyModifications.zen;
      this.drawTurn();
      this.drawEnemyTurn();
      this.cardsPlayed = false;
      this.roundOutcome = '';
      this.roundWinner = '';
      this.turnNumber += 1;
    },
		checkPlayerModifications() {
			this.playerModifications.abundance += this.playerPlayedCards.length;
      if(this.playerPlayedCards.length > 0){
        if(this.playerPlayedCards[this.playerPlayedCards.length - 1].name != 'cosplay'){
          this.playerModifications.cosplay = this.playerPlayedCards[this.playerPlayedCards.length - 1].power;
        }
        if(this.playerPlayedCards[this.playerPlayedCards.length - 1].name != 'girlfriends'){
          this.playerModifications.girlfriends = this.playerPlayedCards[this.playerPlayedCards.length - 1].power;
        }
      }
			this.playerModifications.groupUse += this.playerPlayedCards.length;
			if (this.playerModifications.bubbleButts > 0) {
				this.enemyPower -= this.enemyPlayedCards.length * 2
				this.playerModifications.bubbleButts -= 1;
			}
			if (this.playerModifications.commando > 0) {
				this.enemyPower = 0;
				this.playerModifications.commando -= 1
			}
			if (this.playerModifications.freeUse > 0) {
				if (this.playerPlayedCards.length >= 2 && this.playerModifications.freeUse >= 2) {
					this.playerPower -= 4;
					this.playerModifications.freeUse -= 2
				} else {
					this.playerPower -= 2;
					this.playerModifications.freeUse -= 1
				}
			}
			if (this.playerModifications.ready > 0) {
				this.enemyPower += (this.enemyPlayedCards.length * 2)
				this.playerModifications.ready = -1
			}
			if (this.playerModifications.reflecting > 0) {
				if (this.playerPlayedCards.length > 0) {
					this.playerPower += this.playerPlayedCards[0].power;
					this.playerModifications.reflecting -= 1;
				}
			}
			if (this.playerModifications.restrained > 0) {
				if (this.playerPlayedCards.length > 0) {
					this.playerPower -= this.playerPlayedCards[0].power;
					this.playerModifications.restrained -= 1;
				}
			}
		},
		checkPlayerCardEffects(cardArray) {
			if (cardArray.includes("abundance")) {
				this.playerPower += this.playerModifications.abundance;
			}
			if (cardArray.includes("bimbofication")) {
				this.playerModifications.bimbofiction += 1
				this.playerBimboficationActive = true;
			}
			if (cardArray.includes("bubbleButts")) {
				if (this.playerModifications.bubbleButts == 0) {
					this.enemyPower -= this.enemyPlayedCards.length * 2
				}
				this.playerModifications.bubbleButts += 1;
			}
			if (cardArray.includes("caughtMasturbating")) {
				if (this.playerHand.length > 0) {
					const random = Math.floor(Math.random() * this.playerHand.length);
					this.playerHand.splice(random, 1);
				}
			}
			if (cardArray.includes("commando")) {
				this.enemyPower = 0;
				this.playerModifications.commando += 1;
			}
			if (cardArray.includes("cosplay")) {
				this.playerPower += this.playerModifications.cosplay + 2
			}
			if (cardArray.includes("creampie")) {
				if (this.playerHealth == 1) {
					this.playerPower += 10
				}
			}
			if (cardArray.includes("enticing")) {
				this.playerModifications.enticing += 1
			}
			if (cardArray.includes("freeUse")) {
				this.playerModifications.freeUse += 2
			}
			if (cardArray.includes("girlfriends")) {
				this.playerPower += (this.playerModifications.girlfriends * 2);
			}
			if (cardArray.includes("groupUse")) {
				this.playerPower += (this.playerModifications.groupUse * 2)
			}
			if (cardArray.includes("ready")) {
				this.playerModifications.ready += 1
			}
			if (cardArray.includes("reflecting")) {
				this.playerModifications.reflecting += 1
			}
			if (cardArray.includes("restrained")) {
				this.playerModifications.restrained += 1
			}
			if (cardArray.includes("seducing")) {
				this.playerModifications.seducing += 1
			}
			if (cardArray.includes("strapon")) {
				this.straponActive = true;
			}
			if (cardArray.includes("thong")) {
				this.playerModifications.thong += 1
			}
			if (cardArray.includes("zen")) {
				this.playerModifications.zen += 1
			}
		},
		checkEnemyModifications() {
			this.enemyModifications.abundance += this.enemyPlayedCards.length;
      if(this.enemyPlayedCards.length > 0){
        if(this.enemyPlayedCards[this.enemyPlayedCards.length - 1].name != 'cosplay'){
          this.enemyModifications.cosplay = this.enemyPlayedCards[this.enemyPlayedCards.length - 1].power;
        }
        if(this.enemyPlayedCards[this.enemyPlayedCards.length - 1].name != 'girlfriends'){
          this.enemyModifications.girlfriends = this.enemyPlayedCards[this.enemyPlayedCards.length - 1].power;
        }
      }
			this.enemyModifications.groupUse += this.enemyPlayedCards.length;
			if (this.enemyModifications.bubbleButts > 0) {
				this.playerPower -= this.playerPlayedCards.length * 2
				this.enemyModifications.bubbleButts -= 1;
			}
			if (this.enemyModifications.commando > 0) {
				this.playerPower = 0;
				this.enemyModifications.commando -= 1
			}
			if (this.enemyModifications.freeUse > 0) {
				if (this.enemyPlayedCards.length >= 2 && this.enemyModifications.freeUse >= 2) {
					this.enemyPower -= 4;
					this.enemyModifications.freeUse -= 2
				} else {
					this.enemyPower -= 2;
					this.enemyModifications.freeUse -= 1
				}
			}
			if (this.enemyModifications.ready > 0) {
				this.enemyPower += (this.enemyPlayedCards.length * 2)
				this.enemyModifications.ready = -1
			}
			if (this.enemyModifications.reflecting > 0) {
				if (this.enemyPlayedCards.length > 0) {
					this.enemyPower += this.enemyPlayedCards[0].power;
					this.enemyModifications.reflecting -= 1;
				}
			}
			if (this.enemyModifications.restrained > 0) {
				if (this.enemyPlayedCards.length > 0) {
					this.enemyPower -= this.enemyPlayedCards[0].power;
					this.enemyModifications.restrained -= 1;
				}
			}
		},
		checkEnemyCardEffects(cardArray) {
			if (cardArray.includes("abundance")) {
				this.enemyPower += this.enemyModifications.abundance;
			}
			if (cardArray.includes("bimbofication")) {
				this.enemyModifications.bimbofiction += 1
				this.enemyBimboficationActive = true;
			}
			if (cardArray.includes("bubbleButts")) {
				if (this.enemyModifications.bubbleButts == 0) {
					this.playerPower -= this.playerPlayedCards.length * 2
				}
				this.enemyModifications.bubbleButts += 1;
			}
			if (cardArray.includes("caughtMasturbating")) {
				if (this.enemyHand.length > 0) {
					const random = Math.floor(Math.random() * this.enemyHand.length);
					this.enemyHand.splice(random, 1);
				}
			}
			if (cardArray.includes("commando")) {
				this.enemyPower = 0;
				this.enemyModifications.commando += 1;
			}
			if (cardArray.includes("cosplay")) {
				this.enemyPower += this.enemyModifications.cosplay + 2
			}
			if (cardArray.includes("creampie")) {
				if (this.enemyHealth == 1) {
					this.enemyPower += 10
				}
			}
			if (cardArray.includes("enticing")) {
				this.enemyModifications.enticing += 1
			}
			if (cardArray.includes("freeUse")) {
				this.enemyModifications.freeUse += 2
			}
			if (cardArray.includes("girlfriends")) {
				this.enemyPower += (this.enemyModifications.girlfriends * 2);
			}
			if (cardArray.includes("groupUse")) {
				this.enemyPower += (this.enemyModifications.groupUse * 2)
			}
			if (cardArray.includes("ready")) {
				this.enemyModifications.ready += 1
			}
			if (cardArray.includes("reflecting")) {
				this.enemyModifications.reflecting += 1
			}
			if (cardArray.includes("restrained")) {
				this.enemyModifications.restrained += 1
			}
			if (cardArray.includes("seducing")) {
				this.enemyModifications.seducing += 1
			}
			if (cardArray.includes("strapon")) {
				this.straponActive = true;
			}
			if (cardArray.includes("thong")) {
				this.enemyModifications.thong += 1
			}
			if (cardArray.includes("zen")) {
				this.enemyModifications.zen += 1
			}
		},
    ascendStage(){
		if(this.$store.state.stage == 4 && this.$store.state.floor == 5){
			this.$emit('changeComponent', 'endGameStory');
		}else if(this.$store.state.stage == 8){
        	this.$store.dispatch('ascendFloor');
			this.$emit('changeComponent', 'midGameStories');
		} else if(this.$store.state.floor == 4) {
			this.$store.dispatch('ascendFloor');
			this.$emit('changeComponent', 'midGameStories');
		} else {
			this.$store.dispatch('ascendStage');
			this.$emit('changeComponent', 'doorRoom');
		}
    },
	gameOverContinue(){
		this.$emit('changeComponent', 'gameOver')
	},
    addCard(card){
      this.$store.dispatch('addCard', card);
      this.prizeCardSelected = true;
      this.selectedPrizeCard = card.id;
    }
	},
	computed: {
		playerCharacter: function() {
			return this.$store.state.currentCaracter;
		},
		floor: function() {
			return this.$store.state.floor;
		},
		playerStage: function() {
			let percentageRemaining = (this.playerHealth / this.playerBaseHealth) * 100;
			if (percentageRemaining > 76) {
				return 1;
			}
			if (percentageRemaining > 51) {
				return 2;
			}
			if (percentageRemaining > 26) {
				return 3;
			} else {
				return 4
			}
		},
		enemyStage: function() {
			let percentageRemaining = (this.enemyHealth / this.enemyBaseHealth) * 100;
			if (percentageRemaining > 76) {
				return 0;
			}
			if (percentageRemaining > 51) {
				return 1;
			}
			if (percentageRemaining > 26) {
				return 2;
			} else {
				return 3
			}
		},
    playerPlayedCardsDisplay: function(){
      let returnArr = JSON.parse(JSON.stringify(this.playerPlayedCards));
      return returnArr.reverse()
    },
    prizeCards(){
      var prizeCards = JSON.parse(JSON.stringify(this.$store.state.cards.sort(() => .5 - Math.random()).slice(0,3)))
      prizeCards.forEach(card => {
        card.id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        let animatedPercent = Math.floor(Math.random() * 100) + 1;
        card.animated = animatedPercent <= 25 ? true : false;
      });
      return prizeCards
    },
    prizeMoney(){
      return Math.floor((75 + ((Math.floor(Math.random() * 25) + 1) * (Math.random() < 0.5 ? -1 : 1))) * (1 + (0.5 * this.$store.state.playerPerks.filter(perk => perk.name == "Cash").length)))
    },
    battlefieldBG(){
      if(this.$store.state.stage == 8){
        if(this.$store.state.floor == 1){
          return 'boss-battlefield-1'
        }
        if(this.$store.state.floor == 2){
          return 'boss-battlefield-2'
        }
        if(this.$store.state.floor == 3){
          return 'boss-battlefield-3'
        }
      } else if(this.$store.state.floor == 4){
        return 'boss-battlefield-4'
      } else {
        return 'battlefield'
      }
    },
    playerBaseEnergy() {
      return this.$store.state.playerBaseEnergy
    },
    enemyBaseEnergy() {
      let baseEnergyAddition = 0;
      if(this.$store.state.floor == 2){
        baseEnergyAddition += 1
      }
      if(this.$store.state.floor == 3){
        baseEnergyAddition += 2
      }
      if(this.$store.state.floor == 4){
        baseEnergyAddition += 4
      }
      if(this.$store.state.stage == 8){
        baseEnergyAddition += 1
      }
      return 3 + baseEnergyAddition;
    },
	playerPerks() {
		return this.$store.state.playerPerks;
	}
	},
	mounted: function() {
		this.playerDeck = this.shuffle(JSON.parse(JSON.stringify(this.$store.state.deck)))
		this.enemyDeck = this.shuffle(JSON.parse(JSON.stringify(this.$store.state.enemyDeck)))
		this.drawHand();
		this.drawEnemyHand();
    let availableEnemies = []
	if(this.$store.state.floor == 5){
		this.enemyImages = this.$store.state.finalBosses[this.$store.state.stage - 1].enemyPictures
	} else if(this.$store.state.stage < 8 && this.$store.state.floor != 4){
      availableEnemies = this.$store.state.enemies.find(enemy => enemy.floor == this.$store.state.floor)
      this.enemyImages = availableEnemies.enemyPictures[Math.floor(Math.random()*availableEnemies.enemyPictures.length)]
    } else if((this.$store.state.stage == 8 && this.$store.state.floor != 5) || this.$store.state.floor == 4) {
      availableEnemies = this.$store.state.bosses.find(boss => boss.floor == this.$store.state.floor)
      this.enemyImages = availableEnemies.enemyPictures[0];
    } else {
		this.enemyImages = this.$store.state.finalBosses[this.$store.state.floor]
	}
    this.playerEnergy = this.$store.state.playerBaseEnergy + (this.playerPerks.map(perk => perk.name).includes('Implants') ? 2 : 0);
    this.playerHealth = this.$store.state.playerBaseHealth + ((this.$store.state.playerPerks.filter(perk => perk.name == "Thick Thighs").length) * 2);
	this.enemyBaseHealth = 4 + (this.$store.state.floor - 1)
	this.enemyHealth = 4 + (this.$store.state.floor - 1)
	}
}
</script>

<style lang="scss" scoped>

.match-info{
  padding-top: 0px !important;
  padding-bottom: 10px !important;
}
.game-card {
  width: 8vw;
  transition:.4s ease;
  position: relative;
  bottom:0px;
}

.game-card:hover {
  width: 10vw;
}

.player-cards{
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(90deg, rgb(0, 0, 0, 0) 55%, rgb(255, 255, 255) 100%);
}

.enemy-cards{
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 45%);
}

.player-cards-victory{
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(90deg, rgb(0, 0, 0, 0) 55%, rgb(0, 255, 64) 100%);
}

.enemy-cards-victory{
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(90deg, rgb(0, 255, 64) 0%, rgba(0, 0, 0, 0) 45%);
}

.player-cards-defeat{
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(90deg, rgb(0, 0, 0, 0) 55%, rgb(255, 0, 0) 100%);
}

.enemy-cards-defeat{
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(90deg, rgb(255, 0, 0) 0%, rgba(0, 0, 0, 0) 45%);
}

.battlefield {
  background: rgb(239,0,255,1);
  background: -moz-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgba(239,0,255,1) 50%, rgba(255,0,0,0) 95%);
  background: -webkit-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgba(239,0,255,1) 50%, rgba(255,0,0,0) 95%);
  background: linear-gradient(90deg, rgba(0,5,255,0) 5%, rgba(239,0,255,1) 50%, rgba(255,0,0,0) 95%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0005ff",endColorstr="#ff0000",GradientType=1);
  padding: 5vh 5vw;
}

.boss-battlefield-1 {
  background: rgb(239,0,255,1);
  background: -moz-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(0, 255, 128) 50%, rgba(255,0,0,0) 95%);
  background: -webkit-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(0, 255, 128) 50%, rgba(255,0,0,0) 95%);
  background: linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(0, 255, 128) 50%, rgba(255,0,0,0) 95%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0005ff",endColorstr="#ff0000",GradientType=1);
  padding: 5vh 5vw;
}

.boss-battlefield-2 {
  background: rgb(239,0,255,1);
  background: -moz-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(38, 0, 255) 50%, rgba(255,0,0,0) 95%);
  background: -webkit-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(38, 0, 255) 50%, rgba(255,0,0,0) 95%);
  background: linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(38, 0, 255) 50%, rgba(255,0,0,0) 95%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0005ff",endColorstr="#ff0000",GradientType=1);
  padding: 5vh 5vw;
}

.boss-battlefield-3 {
  background: rgb(239,0,255,1);
  background: -moz-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(255, 0, 0) 50%, rgba(255,0,0,0) 95%);
  background: -webkit-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(255, 0, 0) 50%, rgba(255,0,0,0) 95%);
  background: linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(255, 0, 0) 50%, rgba(255,0,0,0) 95%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0005ff",endColorstr="#ff0000",GradientType=1);
  padding: 5vh 5vw;
}

.boss-battlefield-4 {
  background: rgb(239,0,255,1);
  background: -moz-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(255, 145, 0) 50%, rgba(255,0,0,0) 95%);
  background: -webkit-linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(255, 145, 0) 50%, rgba(255,0,0,0) 95%);
  background: linear-gradient(90deg, rgba(0,5,255,0) 5%, rgb(255, 145, 0) 50%, rgba(255,0,0,0) 95%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0005ff",endColorstr="#ff0000",GradientType=1);
  padding: 5vh 5vw;
}

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