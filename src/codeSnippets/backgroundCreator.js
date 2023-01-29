const cards = [
    {
        name: "flash",
        rarity: "common",
        special: "none",
        cost: "1",
        archetype: "BaseSet",
        effect: "6 Attack",
        type: "Attack"
    },
    {
        name: "moon",
        rarity: "common",
        special: "none",
        cost: "1",
        archetype: "BaseSet",
        effect: "6 Defense",
        type: "Skill"
    },
    {
        name: "assUp",
        rarity: "common",
        special: "none",
        cost: "1",
        archetype: "BaseSet",
        effect: "Gain 2 shield",
        type: "Power"
    },
    //BIMBO
    {
        name: "airhead",
        rarity: "common",
        special: "none",
        cost: "1",
        archetype: "Bimbo",
        effect: "Draw 1 card, add one Airhead to your discard pile",
        type: "Skill"
    },
    {
        name: "bimboFood",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Bimbo",
        effect: "Start every turn with 1 extra energy",
        type: "Power"
    },
    {
        name: "fakeTits",
        rarity: "common",
        special: "selfDestruction",
        cost: "1",
        archetype: "Bimbo",
        effect: "Add one Fake Tits+ to your deck",
        type: "Skill"
    },
    {
        name: "fakeTits+",
        rarity: "common",
        special: "selfDestruction",
        cost: "2",
        archetype: "Bimbo",
        effect: "Add one Fake Tits++ to your deck",
        type: "Skill"
    },
    {
        name: "fakeTits++",
        rarity: "common",
        special: "none",
        cost: "3",
        archetype: "Bimbo",
        effect: "Deal 20 damage at the end of your turn",
        type: "Power"
    },
    {
        name: "girlTime",
        rarity: "common",
        special: "selfDestruction",
        cost: "0",
        archetype: "Bimbo",
        effect: "Play your next card twice. Add two Airheads to your discard pile",
        type: "Skill"
    },
    {
        name: "nipSlip",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Bimbo",
        effect: "Deal 10 damage +1 per airhead in play",
        type: "Attack"
    },
    {
        name: "passingTheTime",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Bimbo",
        effect: "Gain 10 defense +1 per airhead in play",
        type: "Skill"
    },
    {
        name: "personalTime",
        rarity: "common",
        special: "selfDestruction",
        cost: "4",
        archetype: "Bimbo",
        effect: "Regain all lost health",
        type: "Skill"
    },
    {
        name: "reflecting",
        rarity: "rare",
        special: "reenforced",
        cost: "0",
        archetype: "Bimbo",
        effect: "Play your next card twice. Add two Airheads to your discard pile",
        type: "Skill"
    },
    {
        name: "shoppingSpree",
        rarity: "rare",
        special: "reenforced",
        cost: "0",
        archetype: "Bimbo",
        effect: "Draw until your hand is full",
        type: "Skill"
    },
    {
        name: "tinyDress",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Bimbo",
        effect: "Play the first card of every turn twice",
        type: "Power"
    },
    //TRANS
    {
        name: "69",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Trans",
        effect: "Play the first card of every turn twice",
        type: "Power"
    },
    {
        name: "dickFlash",
        rarity: "rare",
        special: "none",
        cost: "1",
        archetype: "Trans",
        effect: "12 Attack",
        type: "Attack"
    },
    {
        name: "gettingBlown",
        rarity: "rare",
        special: "none",
        cost: "1",
        archetype: "Trans",
        effect: "12 Defense",
        type: "Skill"
    },
    {
        name: "girlDick",
        rarity: "common",
        special: "selfDestruction",
        cost: "1",
        archetype: "Trans",
        effect: "Add one Girl Dick+ to your deck",
        type: "Skill"
    },
    {
        name: "girlDick+",
        rarity: "common",
        special: "selfDestruction",
        cost: "2",
        archetype: "Trans",
        effect: "Add one Girl Dick++ to your deck",
        type: "Skill"
    },
    {
        name: "girlDick++",
        rarity: "common",
        special: "none",
        cost: "3",
        archetype: "Trans",
        effect: "Gain 10 attack and 10 defense",
        type: "Power"
    },
    {
        name: "jackingOff",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Trans",
        effect: "Remove all debuffs",
        type: "Skill"
    },
    {
        name: "pantyBulge",
        rarity: "rare",
        special: "none",
        cost: "2",
        archetype: "Trans",
        effect: "Gain all damage recieved as defense next turn",
        type: "Skill"
    },
    {
        name: "piledriver",
        rarity: "common",
        special: "none",
        cost: "3",
        archetype: "Trans",
        effect: "20 Attack",
        type: "Attack"
    },
    {
        name: "prepared",
        rarity: "rare",
        special: "reenforced",
        cost: "0",
        archetype: "Trans",
        effect: "You gain no defense this turn. Double all attacks",
        type: "Skill"
    },
    {
        name: "presenting",
        rarity: "common",
        special: "selfDestruction",
        cost: "0",
        archetype: "Trans",
        effect: "You gain no defense this turn. Double all attacks",
        type: "Skill"
    },
    {
        name: "toppingDudes",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Trans",
        effect: "Gain 2 extra energy",
        type: "Power"
    },
    //DOMME
    {
        name: "assEating",
        rarity: "common",
        special: "reenforced",
        cost: "3",
        archetype: "Domme",
        effect: "All cards next turn cost 0",
        type: "Skill"
    },
    {
        name: "cleaningFeet",
        rarity: "common",
        special: "none",
        cost: "3",
        archetype: "Domme",
        effect: "All damage recieved this turn is turned to HP",
        type: "Skill"
    },
    {
        name: "faceSitting",
        rarity: "common",
        special: "none",
        cost: "1",
        archetype: "Domme",
        effect: "Reduce enemy defense to 0",
        type: "Skill"
    },
    {
        name: "fisting",
        rarity: "common",
        special: "none",
        cost: "2",
        archetype: "Domme",
        effect: "20 Attack",
        type: "Attack"
    },
    {
        name: "fuckingMachine",
        rarity: "common",
        special: "none",
        cost: "4",
        archetype: "Domme",
        effect: "Gain 20 attack",
        type: "Power"
    },
    {
        name: "latex",
        rarity: "common",
        special: "selfDestruction",
        cost: "1",
        archetype: "Domme",
        effect: "Add one Latex+ to your deck",
        type: "Skill"
    },
    {
        name: "latex+",
        rarity: "common",
        special: "selfDestruction",
        cost: "2",
        archetype: "Domme",
        effect: "Add one Latex++ to your deck",
        type: "Skill"
    },
    {
        name: "latex++",
        rarity: "common",
        special: "none",
        cost: "3",
        archetype: "Domme",
        effect: "Gain 20 defense",
        type: "Power"
    },
    {
        name: "nippleClamps",
        rarity: "common",
        special: "none",
        cost: "1",
        archetype: "Domme",
        effect: "10 Defense",
        type: "Skill"
    },
    {
        name: "pet",
        rarity: "rare",
        special: "reenforced",
        cost: "0",
        archetype: "Domme",
        effect: "Gain 1 extra energy this turn",
        type: "Skill"
    },
    {
        name: "spanking",
        rarity: "common",
        special: "none",
        cost: "1",
        archetype: "Domme",
        effect: "10 Attack",
        type: "Attack"
    },
    {
        name: "strapon",
        rarity: "common",
        special: "none",
        cost: "3",
        archetype: "Domme",
        effect: "Gain 10 attack and 10 defense",
        type: "Skill"
    },
    {
        name: "tiedUp",
        rarity: "rare",
        special: "none",
        cost: "4",
        archetype: "Domme",
        effect: "All enemy defense is halved",
        type: "Power"
    },
]

function randomAngle() {
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var randomNumber = Math.floor(Math.random() * 45);
    return randomNumber * plusOrMinus;
}

function randomX() {
    var randomNumber = Math.floor(Math.random() * 960);
    return randomNumber;
}

function randomY() {
    var randomNumber = Math.floor(Math.random() * 540);
    return randomNumber;
}

function plusOrMinus() {
    var plusOrMinus = Math.random() < 0.5 ? "-" : "+";
    return plusOrMinus
}

var fs = require('fs')

fs.writeFile('D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat', '', function (err) {
    if (err) throw err;
  });

//   fs.appendFileSync("D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat", `convert -rotate ${randomAngle()} -background transparent cards/static/${cards[0].name}.png b.png` + "\r\n");
//   fs.appendFileSync("D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat", `convert whiteBack.png b.png -background none -gravity North -geometry ${randomX()}${randomY()} -composite staticBack.png` + "\r\n");

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

for (let i = 0; i < 3; i++) {
    shuffle(cards).forEach(card => {
        let X = randomX();
        let Y = randomY();
        let xPlusOrMinus = plusOrMinus();
        let yPlusOrMinus = plusOrMinus();
        fs.appendFileSync("D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat", `convert -rotate ${randomAngle()} -background transparent cards/static/${card.name}.png b.png` + "\r\n");
        fs.appendFileSync("D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat", `magick b.png -channel rgb -brightness-contrast -100,-100 +channel darkB.png` + "\r\n");
        fs.appendFileSync("D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat", `convert darkB.png -alpha set -background none -channel A -evaluate multiply 0.5 +channel darkB.png` + "\r\n");
        fs.appendFileSync("D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat", `convert staticBack.png darkB.png -background none -gravity North -geometry ${xPlusOrMinus}${X+15}${yPlusOrMinus}${Y+15} -composite staticBack.png` + "\r\n");
        fs.appendFileSync("D:/source/personalProjects/vue/games/tf-deck-builder/src/assets/createBackground.bat", `convert staticBack.png b.png -background none -gravity North -geometry ${xPlusOrMinus}${X}${yPlusOrMinus}${Y} -composite staticBack.png` + "\r\n");
    })
}