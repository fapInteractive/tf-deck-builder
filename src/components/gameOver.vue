<template>
    <v-container>
        <v-row class="justify-space-around">
            <v-col cols="6" v-if="step == 0"> 
                <v-row class="'justify-center'">
                    <v-col cols="12" class="text-center">
                        <div class="triangle-border right">
                            Hahaha I KNEW you wouldn't make it! Don't worry, though. We'll take care of you, sweetie!
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <div class="triangle-border right" v-if="ending == 'breedEnding'">
                            You'll make an EXCELLENT breeding girl for our men who haven't completed their transformation yet!
                        </div>
                        <div class="triangle-border right" v-if="ending == 'entertainmentEnding'">
                            We'll keep you around to entertain the men who haven't completed their transformation yet!
                        </div>
                        <div class="triangle-border right" v-if="ending == 'lesbianEnding'">
                            You should consider yourself lucky! We're going to use you to get the new girls who have been transformed used to their new bodies!
                        </div>
                        <div class="triangle-border right" v-if="ending == 'lesbianEntertainmentEnding'">
                            I think I have the perfect job for you. You're going to be there for the other girls to let off steam between entertaining the men who haven't completed their transformation yet!
                        </div>
                    </v-col>
                    
                </v-row>           
            </v-col>
            <v-col cols="3" v-if="step == 0">
                <v-img :src="enemyImage" height='100%'></v-img>
            </v-col>
            <v-col cols="12" class="text-center" v-if="step == 1">
                <h1>A few months later...</h1>
            </v-col>
            <v-col cols="12" class="text-center" v-if="step == 2">
                <h3 v-if="ending == 'breedEnding'">
                    At first you weren't sure about being a breeder. The idea of something growing in you for nine months? No thanks! But as it turns out, transformation isn't the only strange tech these people have access to...
                </h3>
                <h3 v-if="ending == 'breedEnding'">
                    They also have access to accelerated pregnancy. Each one only lasts a month! And now, five children later, you're feeling very accomplished, with your huge contribution to the effort of transforming the population...
                </h3>
                <h3 v-if="ending == 'entertainmentEnding'">
                    What a terrible job, having to entertain the men. They're animals, and they act like it. They love having you take turns sucking them all off one by one, and they seem to really enjoy covering you in their cum, which is such a hassle to clean up afterwards...
                </h3>
                <h3 v-if="ending == 'entertainmentEnding'">
                    But after some time getting used to your new job, you've learned to look on the bright side of things. Its nice being the center of attention, and all that cum is doing wonders for your skin...
                </h3>
                <h3 v-if="ending == 'lesbianEnding'">
                    This really is the life. You get to sleep with hot women every single day. At first, they're nervous. Who wouldn't be, having been kidnapped and transformed into a woman, after all?
                </h3>
                <h3 v-if="ending == 'lesbianEnding'">
                    But you really put your all into your job, making sure to show these new women just how great their life is going to be, and how awesome a female orgasm really is...
                </h3>
                <h3 v-if="ending == 'lesbianEntertainmentEnding'">
                    This job is the pits. You thought for sure that this would be a great gig, sleeping with women all day, but it turns out these ladies are every bit as savage as the men can be.
                </h3>
                <h3 v-if="ending == 'lesbianEntertainmentEnding'">
                    Most of them are very partial to the strap on, probably as a reminder of what they've lost, and they take out that frustration on you HARD.
                </h3>
                <h3 v-if="ending == 'lesbianEntertainmentEnding'">
                    At least their aftercare is pretty good, so there's that silver lining..
                </h3>
            </v-col>
            <v-col cols="12" class="text-center" v-if="step == 2">
                <v-img :src="endingAnimation" contain height="50%"></v-img>
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
            enemyImage: require('@/assets/bosses/004/dialogue/005.png'),
            ending: '',
            endingAnimation: '',
            step: 0
        }),
        methods: {
            nextStep(){
                if(this.step == 2){
                    this.$store.dispatch('gameOver')
                    this.$emit('changeComponent', 'home')
                } else {
                    this.step++;
                }
            }
        },
        mounted(){
            let endings = [
                "breedEnding",
                "entertainmentEnding",
                "lesbianEnding",
                "lesbianEntertainmentEnding",
            ]
            this.ending = endings[Math.floor((Math.random()*endings.length))];
            this.endingAnimation = require(`@/assets/endings/gameOver/${this.ending}.webp`)
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