<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" class="text-center">
                <h1>PLAYABLE CARDS</h1>
            </v-col>
            <v-col cols="2">
                <v-img :src="require('@/assets/cards/static/flash.png')"></v-img>
            </v-col>
            <v-col cols="6">
                <p>This is a <span class="highlight-text">playable card</span>. All playable cards cost <span class="highlight-text">energy</span> to use, denoted in the top left corner. The number in the top right denotes a card's <span class="highlight-text">power</span>. At the end of a turn, the power of all cards played by each side are added together, and whoever has a lower total loses one hit point. The first to reach zero loses. Certain cards also have additional special rules.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <h1>ANIMATED CARDS</h1>
            </v-col>
            <v-col cols="2">
                <v-img :src="require('@/assets/cards/animated/flash.webp')"></v-img>
            </v-col>
            <v-col cols="6">
                <p><span class="highlight-text">Animated cards</span> function identically to their static counterparts. All cards acquired via battle rewards and chest rooms have a small chance to be animated, and all merchant rooms offer one animated card.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <h1>COMBAT</h1>
            </v-col>
            <v-col cols="2">
                <v-img :src="require('@/assets/enemies/001/001/001.png')" contain></v-img>
            </v-col>
            <v-col cols="6">
                <p><span class="highlight-text">Enemies</span> are scattered throughout the run, and aim to put an end to your attempt. There are two types of enemies, <span class="highlight-text">normal</span> and <span class="highlight-text">bosses</span>. Normal enemies pose a challenge, but nothing that can't be overcome with a little bit of strategy. Bosses pose a much larger risk, and are only found at the end of floors.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <h1>DOORS</h1>
            </v-col>
            <v-col cols="2">
                <v-img :src="require('@/assets/doors/doorsExample.gif')"></v-img>
            </v-col>
            <v-col cols="6">
                <p><span class="highlight-text">Doors</span> are presented to the player throughout the run after an event is completed. Doors are randomized, so no two runs offer the same things in the same order. The icon on the door will let the player know what event to expect if they select that door.</p>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="require('@/assets/icons/doorIcons/enemy.png')"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <p><span class="highlight-text">Enemy</span> doors contain standard enemies. Upon defeat, enemies drop a single card to add to your deck as well as gold to spend on the run.</p>
                    </v-col>
                    <v-col cols="2">
                        <v-img :src="require('@/assets/icons/doorIcons/boss.png')"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <p><span class="highlight-text">Boss</span> doors contain boss enemies. Upon defeat, boss enemies drop a single card to add to your deck, gold to spend on the run, and a powerful item to enhance your abilities in your run.</p>
                    </v-col>
                    <v-col cols="2">
                        <v-img :src="require('@/assets/icons/doorIcons/chest.png')"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <p><span class="highlight-text">Chest</span> doors contain chests that can give the player gold, cards, or a powerful item to enhance your abilities in your run.</p>
                    </v-col>
                    <v-col cols="2">
                        <v-img :src="require('@/assets/icons/doorIcons/merchant.png')"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <p><span class="highlight-text">Merchant</span> doors contain merchants, who will sell you cards or powerful items to enhance your abilities in your run in exchange for gold collected throughout your run.</p>
                    </v-col>
                    <v-col cols="2">
                        <v-img :src="require('@/assets/icons/doorIcons/question.png')"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <p><span class="highlight-text">Question doors will be available post beta release.</span></p>
                        <!-- <p><span class="highlight-text">Question</span> doors can contain any possible event, or special events unique to question doors.</p> -->
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="text-center mb-5">
                <v-btn color="green" @click="changeComponent">
                    <h1>BEGIN</h1>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'rules',
  
        data: () => ({

        }),
        methods: {
        changeComponent() {
            let payload = new Object;
            payload.deckTemplate = this.$store.state.defaultDecks.find(deck => deck.archetype == "Bimbo").deck
            payload.cardPool = this.$store.state.cards
            this.$store.dispatch('selectCharacter', payload);
            this.$emit('changeComponent', 'doorRoom')
        }
      }   
    }
</script>

<style scoped>
    .highlight-text {
        color: orange;
    }
    .bimbo{
        color: red;
    }
    .trans{
        color: cornflowerblue;
    }
    .domme{
        color: green;
    }
</style>