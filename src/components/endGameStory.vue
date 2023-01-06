<template>
    <v-container>
        <v-row class="justify-space-around">
            <v-col cols="3">
                <v-img v-if="step != 2" :src="playerImage" height='100%'></v-img>
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
                            What are you talking about? We had a deal! Let me out of here!
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-center" v-if="step == 2">
                        <h3>A bright flash of light suddenly blinds you.</h3>
                        <h3>As you regain your vision, you find youself in your bed, groggy from a dream you can't quite remember. You decide that you need a drink to clear your head, so you get dressed and ready to go out to your favorite bar.</h3>
                    </v-col>
                </v-row>           
            </v-col>
            <v-col cols="3">
                <v-img v-if="step != 2" :src="enemyImage" height='100%'></v-img>
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
            playerImage: require('@/assets/playerCharacters/001/001.png'),
            enemyImage: require('@/assets/bosses/004/002/004.png')
        }),
        methods: {
            nextStep(){
                if(this.step == 2){
                    this.$store.dispatch('gameOver')
                    this.$emit('changeComponent', 'home')
                } else {
                    this.step++
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