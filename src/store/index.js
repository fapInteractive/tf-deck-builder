import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coin: 100,
    floor: 1,
    stage: 1,
    enemyType: '',
    currentCaracter: null,
    playerBaseHealth: 8,
    playerHealth: 8,
    playerBaseEnergy: 3,
    cardRemovalCount: 0,
    playerPerks: [],
    upgradePoints: 0,
    difficulty: 0,
    maxDifficulty: 10,
    enemies: [
        {
            floor: 1,
            enemyPictures: [
                [
                    require('@/assets/enemies/001/001/001.png'),
                    require('@/assets/enemies/001/001/002.png'),
                    require('@/assets/enemies/001/001/003.png'),
                    require('@/assets/enemies/001/001/004.png'),
                ],
                [
                    require('@/assets/enemies/001/002/001.png'),
                    require('@/assets/enemies/001/002/002.png'),
                    require('@/assets/enemies/001/002/003.png'),
                    require('@/assets/enemies/001/002/004.png'),
                ],
                [
                    require('@/assets/enemies/001/003/001.png'),
                    require('@/assets/enemies/001/003/002.png'),
                    require('@/assets/enemies/001/003/003.png'),
                    require('@/assets/enemies/001/003/004.png'),
                ],
                [
                    require('@/assets/enemies/001/004/001.png'),
                    require('@/assets/enemies/001/004/002.png'),
                    require('@/assets/enemies/001/004/003.png'),
                    require('@/assets/enemies/001/004/004.png'),
                ],
                [
                    require('@/assets/enemies/001/005/001.png'),
                    require('@/assets/enemies/001/005/002.png'),
                    require('@/assets/enemies/001/005/003.png'),
                    require('@/assets/enemies/001/005/004.png'),
                ],
                [
                    require('@/assets/enemies/001/006/001.png'),
                    require('@/assets/enemies/001/006/002.png'),
                    require('@/assets/enemies/001/006/003.png'),
                    require('@/assets/enemies/001/006/004.png'),
                ],
                [
                    require('@/assets/enemies/001/007/001.png'),
                    require('@/assets/enemies/001/007/002.png'),
                    require('@/assets/enemies/001/007/003.png'),
                    require('@/assets/enemies/001/007/004.png'),
                ],
            ]
        },
        {
            floor: 2,
            enemyPictures: [
                [
                    require('@/assets/enemies/002/001/001.png'),
                    require('@/assets/enemies/002/001/002.png'),
                    require('@/assets/enemies/002/001/003.png'),
                    require('@/assets/enemies/002/001/004.png'),
                ],
                [
                    require('@/assets/enemies/002/002/001.png'),
                    require('@/assets/enemies/002/002/002.png'),
                    require('@/assets/enemies/002/002/003.png'),
                    require('@/assets/enemies/002/002/004.png'),
                ],
                [
                    require('@/assets/enemies/002/003/001.png'),
                    require('@/assets/enemies/002/003/002.png'),
                    require('@/assets/enemies/002/003/003.png'),
                    require('@/assets/enemies/002/003/004.png'),
                ],
                [
                    require('@/assets/enemies/002/004/001.png'),
                    require('@/assets/enemies/002/004/002.png'),
                    require('@/assets/enemies/002/004/003.png'),
                    require('@/assets/enemies/002/004/004.png'),
                ],
                [
                    require('@/assets/enemies/002/005/001.png'),
                    require('@/assets/enemies/002/005/002.png'),
                    require('@/assets/enemies/002/005/003.png'),
                    require('@/assets/enemies/002/005/004.png'),
                ],
                [
                    require('@/assets/enemies/002/006/001.png'),
                    require('@/assets/enemies/002/006/002.png'),
                    require('@/assets/enemies/002/006/003.png'),
                    require('@/assets/enemies/002/006/004.png'),
                ],
            ]
        },
        {
            floor: 3,
            enemyPictures: [
                [
                    require('@/assets/enemies/003/001/001.png'),
                    require('@/assets/enemies/003/001/002.png'),
                    require('@/assets/enemies/003/001/003.png'),
                    require('@/assets/enemies/003/001/004.png'),
                ],
                [
                    require('@/assets/enemies/003/002/001.png'),
                    require('@/assets/enemies/003/002/002.png'),
                    require('@/assets/enemies/003/002/003.png'),
                    require('@/assets/enemies/003/002/004.png'),
                ],
                [
                    require('@/assets/enemies/003/003/001.png'),
                    require('@/assets/enemies/003/003/002.png'),
                    require('@/assets/enemies/003/003/003.png'),
                    require('@/assets/enemies/003/003/004.png'),
                ],
                [
                    require('@/assets/enemies/003/004/001.png'),
                    require('@/assets/enemies/003/004/002.png'),
                    require('@/assets/enemies/003/004/003.png'),
                    require('@/assets/enemies/003/004/004.png'),
                ],
                [
                    require('@/assets/enemies/003/005/001.png'),
                    require('@/assets/enemies/003/005/002.png'),
                    require('@/assets/enemies/003/005/003.png'),
                    require('@/assets/enemies/003/005/004.png'),
                ],
                [
                    require('@/assets/enemies/003/006/001.png'),
                    require('@/assets/enemies/003/006/002.png'),
                    require('@/assets/enemies/003/006/003.png'),
                    require('@/assets/enemies/003/006/004.png'),
                ],
                [
                    require('@/assets/enemies/003/007/001.png'),
                    require('@/assets/enemies/003/007/002.png'),
                    require('@/assets/enemies/003/007/003.png'),
                    require('@/assets/enemies/003/007/004.png'),
                ],
            ]
        },
    ],
    bosses: [
        {
            floor: 1,
            enemyPictures: [
                [
                    require('@/assets/bosses/001/001/001.png'),
                    require('@/assets/bosses/001/001/002.png'),
                    require('@/assets/bosses/001/001/003.png'),
                    require('@/assets/bosses/001/001/004.png'),
                ]
            ]
        },
        {
            floor: 2,
            enemyPictures: [
                [
                    require('@/assets/bosses/002/001/001.png'),
                    require('@/assets/bosses/002/001/002.png'),
                    require('@/assets/bosses/002/001/003.png'),
                    require('@/assets/bosses/002/001/004.png'),
                ]
            ]
        },
        {
            floor: 3,
            enemyPictures: [
                [
                    require('@/assets/bosses/003/001/001.png'),
                    require('@/assets/bosses/003/001/002.png'),
                    require('@/assets/bosses/003/001/003.png'),
                    require('@/assets/bosses/003/001/004.png'),
                ]
            ]
        },
        {
            floor: 4,
            enemyPictures: [
                [
                    require('@/assets/bosses/004/001/001.png'),
                    require('@/assets/bosses/004/001/002.png'),
                    require('@/assets/bosses/004/001/003.png'),
                    require('@/assets/bosses/004/001/004.png'),
                ]
            ]
        },
    ],
    finalBosses: [
        {
            enemyPictures: [
                    require('@/assets/bosses/001/002/001.png'),
                    require('@/assets/bosses/001/002/002.png'),
                    require('@/assets/bosses/001/002/003.png'),
                    require('@/assets/bosses/001/002/004.png'),
            ]
        },
        {
            enemyPictures: [
                    require('@/assets/bosses/002/002/001.png'),
                    require('@/assets/bosses/002/002/002.png'),
                    require('@/assets/bosses/002/002/003.png'),
                    require('@/assets/bosses/002/002/004.png'),
            ]
        },
        {
            enemyPictures: [
                    require('@/assets/bosses/003/002/001.png'),
                    require('@/assets/bosses/003/002/002.png'),
                    require('@/assets/bosses/003/002/003.png'),
                    require('@/assets/bosses/003/002/004.png'),
            ]
        },
        {
            enemyPictures: [
                    require('@/assets/bosses/004/002/001.png'),
                    require('@/assets/bosses/004/002/002.png'),
                    require('@/assets/bosses/004/002/003.png'),
                    require('@/assets/bosses/004/002/004.png'),
            ]
        },
    ],
    perks: [
        {
            name: 'Bubble Butt',
            image: require('@/assets/icons/perks/bubbleButt.png'),
            effect: 'Remove one enemy power every turn after all other modifiers.',
            value: 400
        },
        {
            name: 'Implants',
            image: require('@/assets/icons/perks/implants.png'),
            effect: 'Permanently increase max energy by 2',
            value: 400
        },
        {
            name: 'Strapon',
            image: require('@/assets/icons/perks/strapon.png'),
            effect: 'Add one power every turn after all other modifiers.',
            value: 400
        },
        {
            name: 'Oral Fixation',
            image: require('@/assets/icons/perks/oralFixation.png'),
            effect: 'Unused energy is added to energy next turn',
            value: 400
        },
        {
            name: 'Cash',
            image: require('@/assets/icons/perks/cash.png'),
            effect: 'Enemies drop 50% more coin',
            value: 400
        },
        {
            name: 'Thick Thighs',
            image: require('@/assets/icons/perks/thickThighs.png'),
            effect: 'Permanently increase max life by 2',
            value: 400
        },
    ],
    cards: [
        {
            name: "flash",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/flash.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/flash.png"),
            static1: require("@/assets/cards/static/variant1/flash.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/flash.png"),
            static2: require("@/assets/cards/static/variant2/flash.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/flash.png"),
            static3: require("@/assets/cards/static/variant3/flash.png"),
            power: 2,
            cost: 1,
            value: 10,
            description: ''
        },
        {
            name: "moon",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/moon.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/moon.png"),
            static1: require("@/assets/cards/static/variant1/moon.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/moon.png"),
            static2: require("@/assets/cards/static/variant2/moon.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/moon.png"),
            static3: require("@/assets/cards/static/variant3/moon.png"),
            power: 3,
            cost: 2,
            value: 10,
            description: ''
        },
        {
            name: "commando",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/commando.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/commando.png"),
            static1: require("@/assets/cards/static/variant1/commando.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/commando.png"),
            static2: require("@/assets/cards/static/variant2/commando.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/commando.png"),
            static3: require("@/assets/cards/static/variant3/commando.png"),
            power: 0,
            cost: 3,
            value: 100,
            description: "Reduce opponent's card(s) power to zero this turn and next"
        },
        {
            name: "enticing",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/enticing.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/enticing.png"),
            static1: require("@/assets/cards/static/variant1/enticing.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/enticing.png"),
            static2: require("@/assets/cards/static/variant2/enticing.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/enticing.png"),
            static3: require("@/assets/cards/static/variant3/enticing.png"),
            power: 1,
            cost: 3,
            value: 15,
            description: "Draw one additional card next turn"
        },
        {
            name: "girlfriends",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/girlfriends.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/girlfriends.png"),
            static1: require("@/assets/cards/static/variant1/girlfriends.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/girlfriends.png"),
            static2: require("@/assets/cards/static/variant2/girlfriends.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/girlfriends.png"),
            static3: require("@/assets/cards/static/variant3/girlfriends.png"),
            power: "?",
            cost: 4,
            value: 30,
            description: "Power equals double the last card played"
        },
        {
            name: "reflecting",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/reflecting.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/reflecting.png"),
            static1: require("@/assets/cards/static/variant1/reflecting.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/reflecting.png"),
            static2: require("@/assets/cards/static/variant2/reflecting.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/reflecting.png"),
            static3: require("@/assets/cards/static/variant3/reflecting.png"),
            power: 0,
            cost: 3,
            value: 30,
            description: "Double the power of the next card you play"
        },
        {
            name: "abundance",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/abundance.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/abundance.png"),
            static1: require("@/assets/cards/static/variant1/abundance.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/abundance.png"),
            static2: require("@/assets/cards/static/variant2/abundance.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/abundance.png"),
            static3: require("@/assets/cards/static/variant3/abundance.png"),
            power: 0,
            cost: 2,
            value: 60,
            description: "Power is equal to the number of cards played by the user this match"
        },
        {
            name: "bubbleButts",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/bubbleButts.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/bubbleButts.png"),
            static1: require("@/assets/cards/static/variant1/bubbleButts.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/bubbleButts.png"),
            static2: require("@/assets/cards/static/variant2/bubbleButts.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/bubbleButts.png"),
            static3: require("@/assets/cards/static/variant3/bubbleButts.png"),
            power: 1,
            cost: 2,
            value: 100,
            description: "Reduce enemy's card(s) power by two this turn and next"
        },
        {
            name: "ready",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/ready.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/ready.png"),
            static1: require("@/assets/cards/static/variant1/ready.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/ready.png"),
            static2: require("@/assets/cards/static/variant2/ready.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/ready.png"),
            static3: require("@/assets/cards/static/variant3/ready.png"),
            power: 5,
            cost: 1,
            value: 40,
            description: "Increase enemy's card(s) power by 2 next turn"
        },
        {
            name: "seducing",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/seducing.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/seducing.png"),
            static1: require("@/assets/cards/static/variant1/seducing.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/seducing.png"),
            static2: require("@/assets/cards/static/variant2/seducing.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/seducing.png"),
            static3: require("@/assets/cards/static/variant3/seducing.png"),
            power: 0,
            cost: 3,
            value: 150,
            description: "Draw one additional card for the remainder of the match"
        },
        {
            name: "groupUse",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/groupUse.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/groupUse.png"),
            static1: require("@/assets/cards/static/variant1/groupUse.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/groupUse.png"),
            static2: require("@/assets/cards/static/variant2/groupUse.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/groupUse.png"),
            static3: require("@/assets/cards/static/variant3/groupUse.png"),
            power: 0,
            cost: 4,
            value: 150,
            description: "Power is equal to the number of cards played by the user this match times 2"
        },
        {
            name: "zen",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/zen.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/zen.png"),
            static1: require("@/assets/cards/static/variant1/zen.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/zen.png"),
            static2: require("@/assets/cards/static/variant2/zen.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/zen.png"),
            static3: require("@/assets/cards/static/variant3/zen.png"),
            power: 0,
            cost: 3,
            value: 150,
            description: "Gain 1 additional energy per turn for the rest of the match"
        },
        {
            name: "blowjob",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/blowjob.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/blowjob.png"),
            static1: require("@/assets/cards/static/variant1/blowjob.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/blowjob.png"),
            static2: require("@/assets/cards/static/variant2/blowjob.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/blowjob.png"),
            static3: require("@/assets/cards/static/variant3/blowjob.png"),
            power: 3,
            cost: 1,
            value: 40,
            description: ""
        },
        {
            name: "girldick",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/girldick.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/girldick.png"),
            static1: require("@/assets/cards/static/variant1/girldick.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/girldick.png"),
            static2: require("@/assets/cards/static/variant2/girldick.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/girldick.png"),
            static3: require("@/assets/cards/static/variant3/girldick.png"),
            power: 6,
            cost: 3,
            value: 40,
            description: ""
        },
        {
            name: "creampie",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/creampie.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/creampie.png"),
            static1: require("@/assets/cards/static/variant1/creampie.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/creampie.png"),
            static2: require("@/assets/cards/static/variant2/creampie.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/creampie.png"),
            static3: require("@/assets/cards/static/variant3/creampie.png"),
            power: 1,
            cost: 3,
            value: 35,
            description: "If you have one HP left, increase this card's power by 10"
        },
        {
            name: "cosplay",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/cosplay.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/cosplay.png"),
            static1: require("@/assets/cards/static/variant1/cosplay.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/cosplay.png"),
            static2: require("@/assets/cards/static/variant2/cosplay.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/cosplay.png"),
            static3: require("@/assets/cards/static/variant3/cosplay.png"),
            power: 0,
            cost: 3,
            value: 60,
            description: "Power equals the power of your last played card plus 2"
        },
        {
            name: "freeUse",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/freeUse.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/freeUse.png"),
            static1: require("@/assets/cards/static/variant1/freeUse.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/freeUse.png"),
            static2: require("@/assets/cards/static/variant2/freeUse.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/freeUse.png"),
            static3: require("@/assets/cards/static/variant3/freeUse.png"),
            power: 6,
            cost: 1,
            value: 40,
            description: "Decrease the power of your next two cards by 2"
        },
        {
            name: "restrained",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/restrained.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/restrained.png"),
            static1: require("@/assets/cards/static/variant1/restrained.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/restrained.png"),
            static2: require("@/assets/cards/static/variant2/restrained.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/restrained.png"),
            static3: require("@/assets/cards/static/variant3/restrained.png"),
            power: 10,
            cost: 2,
            value: 40,
            description: "Decrease the power of the next card you play to 0"
        },
        {
            name: "undressing",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/undressing.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/undressing.png"),
            static1: require("@/assets/cards/static/variant1/undressing.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/undressing.png"),
            static2: require("@/assets/cards/static/variant2/undressing.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/undressing.png"),
            static3: require("@/assets/cards/static/variant3/undressing.png"),
            power: 10,
            cost: 1,
            value: 100,
            description: "Discard one card at random"
        },
        {
            name: "thong",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/thong.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/thong.png"),
            static1: require("@/assets/cards/static/variant1/thong.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/thong.png"),
            static2: require("@/assets/cards/static/variant2/thong.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/thong.png"),
            static3: require("@/assets/cards/static/variant3/thong.png"),
            power: 0,
            cost: 2,
            value: 150,
            description: "The first card you play next turn costs 0"
        },
        {
            name: "bimbofication",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/bimbofication.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/bimbofication.png"),
            static1: require("@/assets/cards/static/variant1/bimbofication.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/bimbofication.png"),
            static2: require("@/assets/cards/static/variant2/bimbofication.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/bimbofication.png"),
            static3: require("@/assets/cards/static/variant3/bimbofication.png"),
            power: 0,
            cost: 5,
            value: 100,
            description: "Permanently gain 1 HP and take no damage this turn"
        },
        {
            name: "strapon",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/strapon.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/strapon.png"),
            static1: require("@/assets/cards/static/variant1/strapon.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/strapon.png"),
            static2: require("@/assets/cards/static/variant2/strapon.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/strapon.png"),
            static3: require("@/assets/cards/static/variant3/strapon.png"),
            power: 3,
            cost: 3,
            value: 100,
            description: "The side that loses this round takes 2 damage"
        },
        {
            name: "assWorship",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "animated1", "rainbow1"],
            animated1: require("@/assets/cards/animated/varient1/assWorship.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/assWorship.png"),
            static1: require("@/assets/cards/static/variant1/assWorship.png"),
            power: 0,
            cost: 0,
            value: 100,
            description: "Reduce enemy's card(s) power by one this turn and next"
        },
        {
            name: "cumCleanup",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "animated1", "rainbow1"],
            animated1: require("@/assets/cards/animated/varient1/cumCleanup.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/cumCleanup.png"),
            static1: require("@/assets/cards/static/variant1/cumCleanup.png"),
            power: 1,
            cost: 1,
            value: 100,
            description: "Reduce enemy's card(s) power by two this turn and next"
        },
        {
            name: "forcedBi",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "animated1", "rainbow1"],
            animated1: require("@/assets/cards/animated/varient1/forcedBi.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/forcedBi.png"),
            static1: require("@/assets/cards/static/variant1/forcedBi.png"),
            power: 0,
            cost: 2,
            value: 100,
            description: "Reduce opponent's card(s) power to zero this turn and next"
        },
        {
            name: "humanChair",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "animated1", "rainbow1"],
            animated1: require("@/assets/cards/animated/varient1/humanChair.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/humanChair.png"),
            static1: require("@/assets/cards/static/variant1/humanChair.png"),
            power: 0,
            cost: 3,
            value: 75,
            description: "Increase the power of your cards by 1 for the next three turns"
        },
        {
            name: "pegging",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "animated1", "rainbow1"],
            animated1: require("@/assets/cards/animated/varient1/pegging.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/pegging.png"),
            static1: require("@/assets/cards/static/variant1/pegging.png"),
            power: 4,
            cost: 3,
            value: 100,
            description: "The side that loses this round takes 2 damage"
        },
        {
            name: "suckTheStrap",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "animated1", "rainbow1"],
            animated1: require("@/assets/cards/animated/varient1/suckTheStrap.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/suckTheStrap.png"),
            static1: require("@/assets/cards/static/variant1/suckTheStrap.png"),
            power: 0,
            cost: 1,
            value: 100,
            description: "The side that loses this round takes 2 damage"
        },
        {
            name: "latexBoots",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "rainbow1"],
            rainbow1: require("@/assets/cards/static/variant1Rainbow/latexBoots.png"),
            static1: require("@/assets/cards/static/variant1/latexBoots.png"),
            power: 1,
            cost: 1,
            value: 100,
            description: ""
        },
        {
            name: "latexClothes",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "rainbow1"],
            rainbow1: require("@/assets/cards/static/variant1Rainbow/latexClothes.png"),
            static1: require("@/assets/cards/static/variant1/latexClothes.png"),
            power: 1,
            cost: 1,
            value: 100,
            description: ""
        },
        {
            name: "latexGloves",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "rainbow1"],
            rainbow1: require("@/assets/cards/static/variant1Rainbow/latexGloves.png"),
            static1: require("@/assets/cards/static/variant1/latexGloves.png"),
            power: 1,
            cost: 1,
            value: 100,
            description: ""
        },
        {
            name: "latexSet",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "rainbow1"],
            rainbow1: require("@/assets/cards/static/variant1Rainbow/latexSet.png"),
            static1: require("@/assets/cards/static/variant1/latexSet.png"),
            power: 0,
            cost: 1,
            value: 200,
            description: "If you have latex clothes, boots, and gloves in your hand, win the match."
        },
        {
            name: "latexDoll",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "rainbow1"],
            rainbow1: require("@/assets/cards/static/variant1Rainbow/latexDoll.png"),
            static1: require("@/assets/cards/static/variant1/latexDoll.png"),
            power: 0,
            cost: 1,
            value: 200,
            description: "Draw one card with latex in the name from your deck."
        },
        {
            name: "secondSkin",
            unlocked: false,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "rainbow1"],
            rainbow1: require("@/assets/cards/static/variant1Rainbow/secondSkin.png"),
            static1: require("@/assets/cards/static/variant1/secondSkin.png"),
            power: 0,
            cost: 3,
            value: 150,
            description: "This card has two additional power per latex card in your deck, hand, and discard pile."
        },
    ],
    penaltyCards: [
        {
            name: "outfitOops",
            unlocked: true,
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            potentialVarients: ["static1", "static2", "static3", "rainbow1", "rainbow2", "rainbow3", "animated1"],
            animated1: require("@/assets/cards/animated/varient1/outfitOops.webp"),
            rainbow1: require("@/assets/cards/static/variant1Rainbow/outfitOops.png"),
            static1: require("@/assets/cards/static/variant1/outfitOops.png"),
            rainbow2: require("@/assets/cards/static/variant2Rainbow/outfitOops.png"),
            static2: require("@/assets/cards/static/variant2/outfitOops.png"),
            rainbow3: require("@/assets/cards/static/variant3Rainbow/outfitOops.png"),
            static3: require("@/assets/cards/static/variant3/outfitOops.png"),
            power: 0,
            cost: 3,
            description: ""
        },
    ],
    deck: [],
    enemyDeck: [],
    completedRuns: 0,
    defaultDecks: [
        {
            archetype: "Bimbo",
            deck: [
                {
                    name: 'flash',
                    quantity: 3
                },
                {
                    name: 'moon',
                    quantity: 3
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
            ]
        },
    ],
    enemyDecks: [
        {
            floor: 1,
            deck: [
                {
                    name: 'flash',
                    quantity: 3
                },
                {
                    name: 'moon',
                    quantity: 3
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
            ]
        },
        {
            floor: 2,
            deck: [
                {
                    name: 'flash',
                    quantity: 2
                },
                {
                    name: 'moon',
                    quantity: 1
                },
                {
                    name: 'blowjob',
                    quantity: 2
                },
                {
                    name: 'bubbleButts',
                    quantity: 1
                },
                {
                    name: 'freeUse',
                    quantity: 1
                },
            ]
        },
        {
            floor: 3,
            deck: [
                {
                    name: 'blowjob',
                    quantity: 4
                },
                {
                    name: 'bubbleButts',
                    quantity: 2
                },
                {
                    name: 'freeUse',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 3
                },
                {
                    name: 'cosplay',
                    quantity: 3
                },
                {
                    name: 'commando',
                    quantity: 1
                },
            ]
        },
    ],
    bossDecks: [
        {
            floor: 1,
            deck: [
                {
                    name: 'flash',
                    quantity: 1
                },
                {
                    name: 'blowjob',
                    quantity: 1
                },
                {
                    name: 'restrained',
                    quantity: 2
                },
                {
                    name: 'moon',
                    quantity: 1
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
            ]
        },
        {
            floor: 2,
            deck: [
                {
                    name: 'blowjob',
                    quantity: 2
                },
                {
                    name: 'restrained',
                    quantity: 1
                },
                {
                    name: 'strapon',
                    quantity: 1
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
                {
                    name: 'cosplay',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 2
                },
            ]
        },
        {
            floor: 3,
            deck: [
                {
                    name: 'blowjob',
                    quantity: 2
                },
                {
                    name: 'restrained',
                    quantity: 1
                },
                {
                    name: 'strapon',
                    quantity: 1
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
                {
                    name: 'cosplay',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 2
                },
            ]
        },
        {
            floor: 4,
            deck: [
                {
                    name: 'blowjob',
                    quantity: 2
                },
                {
                    name: 'restrained',
                    quantity: 1
                },
                {
                    name: 'strapon',
                    quantity: 1
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
                {
                    name: 'cosplay',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 2
                },
            ]
        },
    ],
    finalBossDecks: [
        {
            deck: [
                {
                    name: 'blowjob',
                    quantity: 3
                },
                {
                    name: 'restrained',
                    quantity: 1
                },
                {
                    name: 'strapon',
                    quantity: 2
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 2
                },
                {
                    name: 'undressing',
                    quantity: 2
                },
                {
                    name: 'abundance',
                    quanity: 2
                }
            ],
        },
        {
            deck: [
                {
                    name: 'blowjob',
                    quantity: 3
                },
                {
                    name: 'restrained',
                    quantity: 1
                },
                {
                    name: 'strapon',
                    quantity: 2
                },
                {
                    name: 'reflecting',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 2
                },
                {
                    name: 'undressing',
                    quantity: 2
                },
                {
                    name: 'groupUse',
                    quanity: 2
                }
            ],
        },
        {
            deck: [
                {
                    name: 'blowjob',
                    quantity: 3
                },
                {
                    name: 'bubbleButts',
                    quantity: 1
                },
                {
                    name: 'strapon',
                    quantity: 2
                },
                {
                    name: 'abundance',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
                {
                    name: 'seducing',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 2
                },
                {
                    name: 'undressing',
                    quantity: 2
                },
                {
                    name: 'commando',
                    quanity: 2
                }
            ],
        },
        {
            deck: [
                {
                    name: 'blowjob',
                    quantity: 3
                },
                {
                    name: 'bubbleButts',
                    quantity: 1
                },
                {
                    name: 'strapon',
                    quantity: 2
                },
                {
                    name: 'groupUse',
                    quantity: 1
                },
                {
                    name: 'zen',
                    quantity: 1
                },
                {
                    name: 'seducing',
                    quantity: 1
                },
                {
                    name: 'girldick',
                    quantity: 2
                },
                {
                    name: 'undressing',
                    quantity: 2
                },
                {
                    name: 'commando',
                    quanity: 2
                }
            ],
        }
    ]
  },
  mutations: {
    selectCharacter(state, payload){
        state.deck = payload.constructedDeck;
        // state.currentCaracter = JSON.parse(JSON.stringify(payload.character));
    },
    buildEnemyDeck(state, payload){
        state.enemyDeck = payload.constructedDeck;
        // state.currentCaracter = JSON.parse(JSON.stringify(payload.character));
    },
    ascendStage(state) {
        state.stage += 1;
    },
    gainMoney(state, payload){
        state.coin += payload
    },
    buyCard(state, payload) {
        state.coin -= payload.value;
        state.deck.push(payload);
    },
    addCard(state, payload) {
        state.deck.push(payload)
    },
    ascendFloor(state){
        state.stage = 1;
        state.floor += 1;
    },
    buyPerk(state, payload) {
        state.coin -= payload.value;
        state.playerPerks.push(payload)
    },
    removeCard(state, payload) {
        state.coin -= payload.cost;
        state.deck = state.deck.filter(card => card.id != payload.id)
        state.cardRemovalCount += 1;
    },
    gameOver(state, payload){
        state.coin = payload.coin
        state.floor = payload.floor
        state.stage = payload.stage
        state.currentCaracter = payload.currentCaracter
        state.playerBaseHealth = payload.playerBaseHealth
        state.playerHealth = payload.playerHealth
        state.playerBaseEnergy = payload.playerBaseEnergy
        state.cardRemovalCount = payload.cardRemovalCount
        state.playerPerks = payload.playerPerks
        state.deck = payload.deck
    },
    changeVarient(state, payload){
        if(state.cards.find(card => card.name == payload.name)){
            state.cards.find(card => card.name == payload.name).activeImage = payload.varient
        } else {
            state.penaltyCards.find(card => card.name == payload.name).activeImage = payload.varient
        }
    },
    addFinalGameData(state, payload){
        state.upgradePoints += payload.points;
        payload.deck.forEach(card => {
            let stateCard = state.cards.find(x => x.name == card.name)
            if(!stateCard.unlockedVarients.includes(card.newVarient)){
                state.cards.find(x => x.name == card.name).unlockedVarients.push(card.newVarient);
            }
        })
        if(state.difficulty == state.maxDifficulty){
            state.maxDifficulty += 1
        }
    },
    decreaseDifficulty: function(state) {
        state.difficulty -=1
    },
    increaseDifficulty: function(state) {
        state.difficulty +=1
    },
    setEnemyType(state, payload){
        state.enemyType = payload;
    },
    purchaseVarientPack(state, payload){
        payload.forEach(card => {
            if(state.cards.find(x => x.name == card.name)){
                state.cards.find(x => x.name == card.name).unlockedVarients.push(card.varientName);
            } else {
                state.penaltyCards.find(x => x.name == card.name).unlockedVarients.push(card.varientName);
            }
        });
        state.upgradePoints -= 1;
    },
    purchaseNewCardPack(state, payload){
        payload.forEach(card => {
            state.cards.find(x => x.name == card.name).unlocked = true;
        });
        state.upgradePoints -= 5;
    },
    cheatPoints(state){
        state.upgradePoints += 100
    }
  },
  actions: {
    selectCharacter: function(context, payload){
        let deckTemplate = payload.deckTemplate
        let cardPool = payload.cardPool
        let constructedDeck = new Array
        deckTemplate.forEach(card => {
            for (let i = 0; i < card.quantity; i++) {
                let animatedPercent = Math.floor(Math.random() * 100) + 1;
                let cardTemplate = JSON.parse(JSON.stringify(cardPool.find(template => template.name == card.name)));
                let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
                cardTemplate.id = id;
                cardTemplate.animated = animatedPercent == 1 ? true : false;
                constructedDeck.push(cardTemplate)
            }
        }),
        payload.constructedDeck = constructedDeck;
        console.log('Player deck:')
        console.log(payload.constructedDeck)
        context.commit('selectCharacter', payload)
    },
    buildEnemyDeck: function(context, payload){
        let deckTemplate = payload.deckTemplate
        let cardPool = payload.cardPool
        let constructedDeck = new Array
        deckTemplate.forEach(card => {
            for (let i = 0; i < card.quantity; i++) {
                let animatedPercent = Math.floor(Math.random() * 100) + 1;
                let cardTemplate = JSON.parse(JSON.stringify(cardPool.find(template => template.name == card.name)));
                let id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
                cardTemplate.id = id;
                cardTemplate.animated = animatedPercent == 1 ? true : false;
                constructedDeck.push(cardTemplate)
            }
        }),
        payload.constructedDeck = constructedDeck;
        console.log('Enemy deck:')
        console.log(payload.constructedDeck)
        context.commit('buildEnemyDeck', payload)
    },
    ascendStage: function(context) {
        context.commit('ascendStage');
    },
    gainMoney: function(context, payload){
        context.commit('gainMoney', payload)
    },
    buyCard: function(context, payload){
        context.commit('buyCard', payload)
    },
    addCard: function(context, payload){
        context.commit('addCard', payload)
    },
    ascendFloor: function(context){
        context.commit('ascendFloor');
    },
    buyPerk: function(context, payload) {
        context.commit('buyPerk', payload)
    },
    removeCard: function(context, payload) {
        context.commit('removeCard', payload)
    },
    gameOver: function(context){
        let rebuiltState = {
            coin: 100,
            floor: 1,
            stage: 1,
            currentCaracter: null,
            playerBaseHealth: 8,
            playerHealth: 8,
            playerBaseEnergy: 3,
            cardRemovalCount: 0,
            playerPerks: [],
            deck: []
        }
        context.commit('gameOver', rebuiltState)
    },
    changeVarient: function(context, payload){
        context.commit('changeVarient', payload)
    },
    addFinalGameData: function(context, payload){
        context.commit('addFinalGameData', payload)
    },
    decreaseDifficulty: function(context) {
        context.commit('decreaseDifficulty')
    },
    increaseDifficulty: function(context) {
        context.commit('increaseDifficulty')
    },
    setEnemyType: function(context, payload){
        context.commit('setEnemyType', payload)
    },
    purchaseVarientPack: function(context, payload){
        context.commit('purchaseVarientPack', payload)
    },
    purchaseNewCardPack(context, payload){
        context.commit('purchaseNewCardPack', payload)
    },
    cheatPoints(context){
        context.commit('cheatPoints')
    }
  },
  modules: {
  }
})
