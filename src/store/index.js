import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coin: 100,
    floor: 1,
    stage: 1,
    currentCaracter: null,
    playerBaseHealth: 8,
    playerHealth: 8,
    playerBaseEnergy: 3,
    cardRemovalCount: 0,
    playerPerks: [],
    upgradePoints: 0,
    difficulty: 0,
    maxDifficulty: 0,
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
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/flash.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/flash.png"),
            static1: require("@/assets/cards/static/varient1/flash.png"),
            power: 2,
            cost: 1,
            value: 10,
            description: ''
        },
        {
            name: "moon",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/moon.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/moon.png"),
            static1: require("@/assets/cards/static/varient1/moon.png"),
            power: 3,
            cost: 2,
            value: 10,
            description: ''
        },
        {
            name: "commando",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/commando.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/commando.png"),
            static1: require("@/assets/cards/static/varient1/commando.png"),
            power: 0,
            cost: 3,
            value: 100,
            description: "Reduce opponent's card(s) power to zero this turn and next"
        },
        {
            name: "enticing",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/enticing.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/enticing.png"),
            static1: require("@/assets/cards/static/varient1/enticing.png"),
            power: 1,
            cost: 3,
            value: 15,
            description: "Draw one additional card next turn"
        },
        {
            name: "girlfriends",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/girlfriends.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/girlfriends.png"),
            static1: require("@/assets/cards/static/varient1/girlfriends.png"),
            power: "?",
            cost: 4,
            value: 30,
            description: "Power equals double the last card played"
        },
        {
            name: "reflecting",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/reflecting.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/reflecting.png"),
            static1: require("@/assets/cards/static/varient1/reflecting.png"),
            power: 0,
            cost: 3,
            value: 30,
            description: "Double the power of the next card you play"
        },
        {
            name: "abundance",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/abundance.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/abundance.png"),
            static1: require("@/assets/cards/static/varient1/abundance.png"),
            power: 0,
            cost: 2,
            value: 60,
            description: "Power is equal to the number of cards played by the user this match"
        },
        {
            name: "bubbleButts",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/bubbleButts.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/bubbleButts.png"),
            static1: require("@/assets/cards/static/varient1/bubbleButts.png"),
            power: 1,
            cost: 2,
            value: 100,
            description: "Reduce enemy's card(s) power by two this turn and next"
        },
        {
            name: "ready",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/ready.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/ready.png"),
            static1: require("@/assets/cards/static/varient1/ready.png"),
            power: 5,
            cost: 1,
            value: 40,
            description: "Increase enemy's card(s) power by 2 next turn"
        },
        {
            name: "seducing",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/seducing.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/seducing.png"),
            static1: require("@/assets/cards/static/varient1/seducing.png"),
            power: 0,
            cost: 3,
            value: 150,
            description: "Draw one additional card for the remainder of the match"
        },
        {
            name: "groupUse",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/groupUse.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/groupUse.png"),
            static1: require("@/assets/cards/static/varient1/groupUse.png"),
            power: 0,
            cost: 4,
            value: 150,
            description: "Power is equal to the number of cards played by the user this match times 2"
        },
        {
            name: "zen",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/zen.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/zen.png"),
            static1: require("@/assets/cards/static/varient1/zen.png"),
            power: 0,
            cost: 3,
            value: 150,
            description: "Gain 1 additional energy per turn for the rest of the match"
        },
        {
            name: "blowjob",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/blowjob.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/blowjob.png"),
            static1: require("@/assets/cards/static/varient1/blowjob.png"),
            power: 3,
            cost: 1,
            value: 40,
            description: ""
        },
        {
            name: "girldick",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/girldick.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/girldick.png"),
            static1: require("@/assets/cards/static/varient1/girldick.png"),
            power: 6,
            cost: 3,
            value: 40,
            description: ""
        },
        {
            name: "creampie",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/creampie.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/creampie.png"),
            static1: require("@/assets/cards/static/varient1/creampie.png"),
            power: 1,
            cost: 3,
            value: 35,
            description: "If you have one HP left, increase this card's power by 10"
        },
        {
            name: "cosplay",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/cosplay.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/cosplay.png"),
            static1: require("@/assets/cards/static/varient1/cosplay.png"),
            power: 0,
            cost: 3,
            value: 60,
            description: "Power equals the power of your last played card plus 2"
        },
        {
            name: "freeUse",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/freeUse.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/freeUse.png"),
            static1: require("@/assets/cards/static/varient1/freeUse.png"),
            power: 6,
            cost: 1,
            value: 40,
            description: "Decrease the power of your next two cards by 2"
        },
        {
            name: "restrained",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/restrained.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/restrained.png"),
            static1: require("@/assets/cards/static/varient1/restrained.png"),
            power: 10,
            cost: 2,
            value: 40,
            description: "Decrease the power of the next card you play to 0"
        },
        {
            name: "caughtMasturbating",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/caughtMasturbating.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/caughtMasturbating.png"),
            static1: require("@/assets/cards/static/varient1/caughtMasturbating.png"),
            power: 10,
            cost: 1,
            value: 100,
            description: "Discard one card at random"
        },
        {
            name: "thong",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/thong.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/thong.png"),
            static1: require("@/assets/cards/static/varient1/thong.png"),
            power: 0,
            cost: 2,
            value: 150,
            description: "The first card you play next turn costs 0"
        },
        {
            name: "bimbofication",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/bimbofication.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/bimbofication.png"),
            static1: require("@/assets/cards/static/varient1/bimbofication.png"),
            power: 0,
            cost: 5,
            value: 100,
            description: "Permanently gain 1 HP and take no damage this turn"
        },
        {
            name: "strapon",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/strapon.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/strapon.png"),
            static1: require("@/assets/cards/static/varient1/strapon.png"),
            power: 3,
            cost: 3,
            value: 100,
            description: "The side that loses this round takes 2 damage"
        },
    ],
    penaltyCards: [
        {
            name: "outfitOops",
            unlocked: 'true',
            activeImage: 'static1',
            unlockedVarients: ["static1"],
            animated1: require("@/assets/cards/animated/outfitOops.webp"),
            rainbow1: require("@/assets/cards/rainbow/varient1/outfitOops.png"),
            static1: require("@/assets/cards/static/varient1/outfitOops.png"),
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
                    name: 'caughtMasturbating',
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
                    name: 'caughtMasturbating',
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
                    name: 'caughtMasturbating',
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
                    name: 'caughtMasturbating',
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
        state.cards.find(card => card.name == payload.name).activeImage = payload.varient
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
    }
  },
  modules: {
  }
})
