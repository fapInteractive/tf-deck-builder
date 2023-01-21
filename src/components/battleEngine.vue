<template>

</template>
  
  <script>
  export default {
      data: () => ({
          playerBaseHealth: 8,
          playerHealth: 8,
          enemyBaseHealth: 4,
          enemyHealth: 4,
          playerEnergy: 3,
      enemyEnergy: 3,
          baseEnergy: 3,
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
          playerBimboficationActive: false,
          enemyBimboficationActive: false,
          straponActive: false,
      cardsPlayed: false,
      matchWon: false,
      roundOutcome: '',
      roundWinner: '',
      prizeCardSelected: false,
      selectedPrizeCard: '',
          enemy: 1,
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
        this.cardsPlayed = true;
          },
      completeTurn(){
        this.enemyDiscardPile = this.enemyDiscardPile.concat(this.enemyPlayedCards);
        this.playerDiscardPile = this.playerDiscardPile.concat(this.playerPlayedCards);
        this.enemyPlayedCards = [];
        this.playerPlayedCards = [];
        this.playerPower = 0;
        this.enemyPower = 0;
        this.playerEnergy = this.baseEnergy + this.playerModifications.zen;
        this.enemyEnergy = this.baseEnergy + this.enemyModifications.zen;
        this.drawTurn();
        this.drawEnemyTurn();
        this.cardsPlayed = false;
        this.roundOutcome = '';
        this.roundWinner = '';
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
              if (cardArray.includes("undressing")) {
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
                  this.enemyPower -= this.enemyPlayedCards.length * 2
                  this.enemyModifications.bubbleButts -= 1;
              }
              if (this.enemyModifications.commando > 0) {
                  this.enemyPower = 0;
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
                      this.enemyPower -= this.enemyPlayedCards.length * 2
                  }
                  this.enemyModifications.bubbleButts += 1;
              }
              if (cardArray.includes("undressing")) {
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
        this.$store.dispatch('ascendStage');
        this.$emit('changeComponent', 'doorRoom');
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
      playerPlayedCardsDisplay: function(){
        let returnArr = JSON.parse(JSON.stringify(this.playerPlayedCards));
        return returnArr.reverse()
      },
      prizeCards(){
        var prizeCards = JSON.parse(JSON.stringify(this.$store.state.cards.sort(() => .5 - Math.random()).slice(0,3)))
        prizeCards.forEach(card => {
          card.id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        });
        return prizeCards
      },
      prizeMoney(){
        return 150 + ((Math.floor(Math.random() * 25) + 1) * (Math.random() < 0.5 ? -1 : 1))
      },
      },
      mounted: function() {
          this.playerDeck = this.shuffle(JSON.parse(JSON.stringify(this.$store.state.deck)))
          this.enemyDeck = this.shuffle(JSON.parse(JSON.stringify(this.$store.state.enemyDeck)))
          this.drawHand();
          this.drawEnemyHand();
          this.enemy = Math.floor(Math.random() * 7) + 1;
      }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>