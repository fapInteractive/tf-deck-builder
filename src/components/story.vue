<template>
    <v-container>
        <v-row class="justify-space-between" v-if="step == 0">
            <v-col cols="12">
                <v-img :src="require('@/assets/barBG.jpg')" contain height="75vh" class="text-center">
                    <h1 style="text-shadow: 2px 2px #000;">Night time, some bar somewhere in the US...</h1>
                </v-img>
            </v-col>
        </v-row>
        <v-row class="justify-space-around" v-if="step > 0">
            <v-col cols="3">
                <v-img :src="playerImage" height="100%"></v-img>
            </v-col>
            <v-col cols="6" class="text-center" v-if="step == 1">
                <div class="triangle-border left">
                    Hey, baby. That outfit you have is pretty far out. Any chance I can buy you a drink?
                </div>
                <div class="triangle-border right">
                    Ugh, hard pass. I don't take drinks from strangers, especially douchebags who open with "baby".
                </div>
            </v-col>
            <v-col cols="6" class="text-center" v-if="step == 2">
                <div class="triangle-border left">
                    I think we got off on the wrong foot, sorry. Let me drop the act. I really like what you're wearing, its super unique. Can I buy you a drink?
                </div>
                <div class="triangle-border right">
                    That's much better sounding, actually. And the anser is still no. I'm not interested in taking drinks from strangers. You never know WHAT'S in those drinks.
                </div>
            </v-col>
            <v-col cols="6" class="text-center" v-if="step == 3">
                <div class="triangle-border left">
                    Well, if THAT'S the case, how about you buy ME a drink?
                </div>
                <div class="triangle-border right">
                    THAT I can do. To be honest, I was a little bummed out that you were such a douche bag, you're pretty cute.
                </div>
                <div class="triangle-border left">
                    Awesome! I'll take a sex on the beach, then.
                </div>
                <div class="triangle-border right">
                    Oh! I love a man unafraid to order girly drinks!
                </div>
            </v-col>
            <v-col cols="6" class="text-center" v-if="step == 4">
                <h1>Eventually, things fade to black...</h1>
            </v-col>
            <v-col cols="6" class="text-center" v-if="step == 5">
                <div class="triangle-border left">
                    Ugh...my head....where am I? Wait! Where the hell are my clothes?!
                </div>
                <div class="triangle-border right">
                    Good morning, sunshine. I was wondering when you'd wake up! Welcome to the facility!
                </div>
                <div class="triangle-border left">
                    The what? What's going on? Why am I naked?
                </div>
                <div class="triangle-border right">
                    I told you it wasn't a good idea to taske drinks from strangers. Now you're here in my facility where we can begin experimentation.
                </div>
            </v-col>
            <v-col cols="6" class="text-center" v-if="step == 6">
                <div class="triangle-border left">
                    Experimentation? Facility? What the hell are you talking about?!?
                </div>
                <div class="triangle-border right">
                    The facility is a special place where we can experiment in human sex transformations.
                </div>
                <div class="triangle-border left">
                    Human sex transformations? What are you trying to say?
                </div>
                <div class="triangle-border right">
                    Don't worry, honey. Everything will make sense in due time. All you need to know is that we're not monsters here, we'll give you a chance to escape. You must complete a series of trials against other test subjects. The first round will be against subjects who have already submitted to testing, so it should be fairly smooth. The second round will be against unwilling subjects. They have no hope of excape, but they still have some fight in them. The third round will be against other men trying to escape, expect them to put up quite a fight. If you can get through all of them, you'll face ME.
                </div>
            </v-col>
            <v-col cols="3">
                <v-img :src="enemyImage" height="100%"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-btn color="pink" @click="nextStep">Continue</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'story',
        data: () => ({
            step: 0,
            playerImage: require('@/assets/playerCharacters/dialogue/003.png'),
            enemyImage: require('@/assets/bosses/004/dialogue/009.png')
        }),
        methods: {
            nextStep(){
                if(this.step == 1){
                    this.playerImage = require('@/assets/playerCharacters/dialogue/002.png')
                    this.enemyImage = require('@/assets/bosses/004/dialogue/008.png')
                }
                if(this.step == 2){
                    this.playerImage = require('@/assets/playerCharacters/dialogue/004.png')
                    this.enemyImage = require('@/assets/bosses/004/dialogue/007.png')
                }
                if(this.step == 3){
                    this.playerImage = ''
                    this.enemyImage = ''
                }
                if(this.step == 4){
                    this.playerImage = require('@/assets/playerCharacters/001/001.png')
                    this.enemyImage = require('@/assets/bosses/004/dialogue/002.png')
                }
                if(this.step == 5){
                    this.playerImage = require('@/assets/playerCharacters/001/001.png')
                    this.enemyImage = require('@/assets/bosses/004/dialogue/004.png')
                }
                if(this.step == 6){
                    console.log('changing component')
                    this.$emit('changeComponent', 'rules')
                }
                if(this.step < 6){
                    this.step += 1
                }
            }
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