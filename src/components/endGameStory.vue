<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-btn color="pink" @click="nextStep">Continue</v-btn>
            </v-col>
        </v-row>
        <v-row class="justify-space-around">
            <v-col cols="3">
                <v-img v-if="step < 2" :src="playerImage" height='75%' contain></v-img>
            </v-col>
            <v-col cols="6"> 
                <v-row class="'justify-center'">
                    <v-col cols="12" class="text-center" v-if="step == 0">
                        <div class="triangle-border right">
                            This is impossible! We've never been beaten! This must be a fluke!
                        </div>
                        <div class="triangle-border left">
                            Its no fluke. I beat you fair and square! Now let me out of here!
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 1">
                        <div class="triangle-border right">
                            No! I refuse to accept this! You'll have to prove yourself again if you want to truly escape us!
                        </div>
                        <div class="triangle-border left">
                            As if. Its over. Now step aside, I'm taking command of this operation.
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 2">
                        <h1>A few months later...</h1>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 3">
                        <h3 v-if="ending == 'femaleWorship'">
                            You decided to go ahead with transformation. If you're going to lead an organization dedicated to transforming men into women, you might as well look the part, after all.
                        </h3>
                        <h3 v-if="ending == 'femaleWorship'">
                            You've changed a lot of stuff up, though. The old management didn't realize just how servile these newly created women were. You do, though, and you use that to the fullest extent. Every day, a new slave is brought in to service you. This is the life.
                        </h3>
                        <h3 v-if="ending == 'maleWorship'">
                            You decided to go ahead with transformation. If you're going to lead an organization dedicated to transforming men into women, you might as well look the part, after all.
                        </h3>
                        <h3 v-if="ending == 'maleWorship'">
                            But you've decided to change a few things. For one, the men in the organization were just being used as studs, essentially. Not anymore. If they want to keep their bodies, they're going to have to prove themselves to you. Each and every day.
                        </h3>
                        <h3 v-if="ending == 'pegging'">
                            You decided to go ahead with transformation. If you're going to lead an organization dedicated to transforming men into women, you might as well look the part, after all.
                        </h3>
                        <h3 v-if="ending == 'pegging'">
                            But you'd be lying if you said you didn't miss your dick. That's when it donned on you. These men in the organization thought that they were gonna fuck YOU? Not on your watch. You have taken your role as command very seriously, and you humble the men in the organizaiotn every day, reminding them of who's in charge, and that they are no higher in your eyes than the women you've transformed. Every day, you fuck them to your heart's conent, and your heart can go for hours...
                        </h3>
                        <h3 v-if="ending == 'reverseGangbang'">
                            Its time for a major shakeup. This organization is no longer going to be ran by a woman, transforming other women. The other women view that as equal footing, and they need to know where they stand.
                        </h3>
                        <h3 v-if="ending == 'reverseGangbang'">
                            You've changed a lot in the short time you've been in command. No longer do the men fuck the women for breeding purposes. Their sperm is now extracted and the women are inseminated. You're now the only game in town whenever they want to get fucked, and they're lining up outside your door for the chance to feel you fuck them, even for a moment. This is the life.
                        </h3>
                        <h3 v-if="ending == 'straponLesbian'">
                            You decided to go ahead with transformation. If you're going to lead an organization dedicated to transforming men into women, you might as well look the part, after all.
                        </h3>
                        <h3 v-if="ending == 'straponLesbian'">
                            But you'd be lying if you said you didn't miss your dick. That's when it donned on you. These women don't just need to be bred, they need to be commanded. So you take it upon yourself to fuck every woman who steps remotely out of line. They should know that you're not just a figurehead, and you're not afraid to get your hands dirty in corrective action.
                        </h3>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 3">
                        <v-img :src="endingAnimation" contain></v-img>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 4">
                        <h3>A bright flash of light suddenly blinds you.</h3>
                        <h3>As you slip out of conciousness, you hear a voice.</h3>
                        <h3 class="disembodied-voice">"That was a great simulation, now lets see if he can do it again..."</h3>
                        <h3>As you regain your vision, you find youself in your bed, groggy from a dream you can't quite remember. You decide that you need a drink to clear your head, so you get dressed and ready to go out to your favorite bar.</h3>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 5">
                        <h3>Congratulations on a successful run.</h3>
                        <h3>You finished with a total of:</h3>
                        <h3>{{ finalCoinTotal }} coins remaining</h3>
                        <h3>{{ finalDeckSize }} cards in your deck</h3>
                        <h3>{{ finalPerkTotal }} perks purchased</h3>
                        <h3>You finish this run having gained {{ totalFinalPoints }} points to spend in the shop.</h3>
                    </v-col>
                </v-row>           
            </v-col>
            <v-col cols="3">
                <v-img v-if="step < 2" :src="enemyImage" height='75%' contain></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'story',
        data: () => ({
            step: 0,
            playerImage: require('@/assets/playerCharacters/001/001.png'),
            enemyImage: require('@/assets/bosses/004/002/004.png'),
            ending: '',
            endingAnimation: '',
        }),
        methods: {
            nextStep(){
                if(this.step == 5){
                    this.unlockVarients();
                    this.$store.dispatch('gameOver')
                    this.$emit('changeComponent', 'home')
                } else {
                    this.step++
                }
            },
            unlockVarients(){
                let payload = {};
                payload.points = this.totalFinalPoints;
                let unlockedVarients = [];
                this.$store.state.deck.forEach(card => {
                    let payloadCard = {
                        name: card.name,
                        newVarient: "rainbow" + card.activeImage.slice(-1)
                    }
                    unlockedVarients.push(payloadCard)
                })
                payload.deck = unlockedVarients
                this.$store.dispatch('addFinalGameData', payload);
            }
        },
        computed: {
            totalFinalPoints(){
                return (Math.floor(this.finalPerkTotal/3)) + (Math.floor(this.finalCoinTotal/300)) + (Math.floor(this.finalDeckSize/10));
            },
            finalPerkTotal(){
                return this.$store.state.playerPerks.length;
            },
            finalCoinTotal(){
                return this.$store.state.coin;
            },
            finalDeckSize(){
                return this.$store.state.deck.length;
            }
        },
        mounted(){
            let endings = [
                "femaleWorship",
                "maleWorship",
                "pegging",
                "reverseGangbang",
                "straponLesbian",
            ]
            this.ending = endings[Math.floor((Math.random()*endings.length))];
            this.endingAnimation = require(`@/assets/endings/gameWin/${this.ending}.webp`)
        }
    }
</script>

<style lang="scss" scoped>
.triangle-border.right {
    border: 5px solid #9754ac;
    margin-right: 30px;
}
.triangle-border.left {
    border: 5px solid #0e008f;
    margin-left: 30px;
}
.triangle-border {
    position: relative;
    padding: 15px;
    margin: 1em 0 3em;
    color: #fff;
    background: #000;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
}
.disembodied-voice {
    color: rgb(179, 0, 179);
}
p {
    margin: 1em 0;
}
user agent stylesheet
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.triangle-border.right:before {
    top: 10px;
    bottom: auto;
    left: auto;
    right: -30px;
    border-width: 15px 0 15px 30px;
    border-color: transparent #9754ac;
}
.triangle-border.left:before {
    top: 10px;
    bottom: auto;
    left: -30px;
    border-width: 15px 30px 15px 0;
    border-color: transparent #0e008f;
}
.triangle-border:before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 40px;
    border-width: 20px 20px 0;
    border-style: solid;
    border-color: #5a8f00 transparent;
    display: block;
    width: 0;
}
.triangle-border.right:after {
    top: 16px;
    bottom: auto;
    left: auto;
    right: -21px;
    border-width: 9px 0 9px 21px;
    border-color: transparent #000;
}
.triangle-border.left:after {
    top: 16px;
    bottom: auto;
    left: -21px;
    border-width: 9px 21px 9px 0;
    border-color: transparent #000;
}
.triangle-border:after {
    content: "";
    position: absolute;
    bottom: -13px;
    left: 47px;
    border-width: 13px 13px 0;
    border-style: solid;
    border-color: #000 transparent;
    display: block;
    width: 0;
}
</style>