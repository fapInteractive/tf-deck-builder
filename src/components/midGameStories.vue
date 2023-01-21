<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-btn color="pink" @click="nextStep">Continue</v-btn>
            </v-col>
        </v-row>
        <v-row class="justify-space-around">
            <v-col cols="3">
                <v-img :src="playerImage" height='50%' contain></v-img>
            </v-col>
            <v-col cols="6" v-if="floor == 2"> 
                <v-row class="'justify-center'">
                    <v-col cols="12" class="text-center" v-if="step == 0">
                        <div class="triangle-border left">
                            OK, I beat your "boss" fight or whatever. Am I free to go now?
                        </div>
                        <div class="triangle-border right">
                            Hahaha you're so funny! Why didn't you tell me you were so funny? Of course not!
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 1">
                        <div class="triangle-border left">
                            What do you mean no?
                        </div>
                        <div class="triangle-border right">
                            You still have three floors to go before I even CONSIDER letting you go!
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 2">
                        <div class="triangle-border left">
                            .....
                        </div>
                        <div class="triangle-border right">
                            Well don't just stand there, go up the stairs and keep going! This floor is not gonna be as easy, these girls haven't fully transformed just yet!
                        </div>
                    </v-col>
                </v-row>           
            </v-col>
            <v-col cols="6" v-if="floor == 3"> 
                <v-row class="'justify-center'">
                    <v-col cols="12" class="text-center" v-if="step == 0">
                        <div class="triangle-border left">
                            Two floors down, why are you doing this?
                        </div>
                        <div class="triangle-border right">
                            That is not a question that you need the answer to. What you should be focusing on is getting to the top of the fourth floor.
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 1">
                        <div class="triangle-border left">
                            And what's at thetop of the fourth floor?
                        </div>
                        <div class="triangle-border right">
                            I guess you'll just have to hope you're good enough to get there and figure it out.
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 2">
                        <div class="triangle-border left">
                            .....
                        </div>
                        <div class="triangle-border right">
                            Good luck, it only gets tougher from here!
                        </div>
                    </v-col>
                </v-row>           
            </v-col>
            <v-col cols="6" v-if="floor == 4"> 
                <v-row class="'justify-center'">
                    <v-col cols="12" class="text-center" v-if="step == 0">
                        <div class="triangle-border left">
                            Fourth floor coming up, I'm getting to the end of your little challenge. I will escape this place.
                        </div>
                        <div class="triangle-border right">
                            We'll just see! You have one whole floor to go, and then you face your final challenge!
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 1">
                        <div class="triangle-border left">
                            And just what is it?
                        </div>
                        <div class="triangle-border right">
                            I suppose I can give oytu a little hint. It involves me.
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 2">
                        <div class="triangle-border left">
                            .....
                        </div>
                        <div class="triangle-border right">
                            Looking forward to seeing you soon, though I doubt you'll make it...
                        </div>
                    </v-col>
                </v-row>           
            </v-col>
            <v-col cols="6" v-if="floor == 5"> 
                <v-row class="'justify-center'">
                    <v-col cols="12" class="text-center" v-if="step == 0">
                        <div class="triangle-border left">
                            I beat you! That's it, now let me out of here!
                        </div>
                        <div class="triangle-border right">
                            You did beat me, that's true. But I have some bad news for you, sweetie.
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 1">
                        <div class="triangle-border right">
                            You beat me and my executives while we were not at full strength.
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 2">
                        <div class="triangle-border left">
                            What are you talking about? I won fair and square, we had a deal!
                        </div>
                        <div class="triangle-border right">
                            You did, but there is just one challenge remaining. Me and my girls will remove the crowns we have been wearing, and will face you in our true form.
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 3">
                        <div class="triangle-border left">
                            Wha...what are you?
                        </div>
                        <div class="triangle-border right">
                            We are inhabitants of the planet Ulrilia. We have come here to convert your race to our superior form. A form that does not need men to populate.
                        </div>
                        <div class="triangle-border right">
                            But we are not heartless. We give each of our converts a fighting chance. I will give you credit, you are the first of your race to force us to use our true form in a long time.
                        </div>
                        <div class="triangle-border right">
                            We have been harvesting your race for the last 10 years, and we are getting increasingly proficient at it. We are looking forward to facing you, you will no doubt make an excellent general after we have converted you.
                        </div>
                    </v-col>
                </v-row>           
            </v-col>
            <v-col cols="3">
                <v-img :src="enemyImage" height='50%' contain></v-img>
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
            enemyImage: require('@/assets/bosses/004/dialogue/009.png')
        }),
        methods: {
            nextStep(){
                if(this.step == 2 && this.floor <= 4){
                    this.$emit('changeComponent', 'dungeonRoom')
                } else if (this.step == 1 && this.floor == 5){
                    this.enemyImage = require('@/assets/bosses/004/002/001.png')
                }
                if(this.step == 3){
                    this.$emit('changeComponent', 'dungeonRoom')
                }
                this.step++
            }
        },
        computed: {
            floor: function() {
                return this.$store.state.floor;
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