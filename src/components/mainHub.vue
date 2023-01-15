<template>
    <v-container>
        <v-row>
            <v-col cols="4" class="text-center">
                <v-btn width="15vw" color="blue" @click="changeComponent('store')" disabled>Store</v-btn>
            </v-col>
            <v-col cols="4" class="text-center">
                <v-btn width="15vw" color="blue" @click="changeComponent('cardSettings')">Card Settings</v-btn>
            </v-col>
            <v-col cols="4" class="text-center">
                <v-btn width="15vw" color="blue" @click="changeComponent('rules')">Rules</v-btn>
            </v-col>
            <v-col cols="12" class="text-center">
                <h3>Difficulty</h3>
                <v-btn :disabled="difficulty == maxDifficulty" @click="increaseDifficulty">
                    <v-icon>mdi-arrow-up-thin</v-icon>
                </v-btn>
                <h3>{{ difficulty }}</h3>
                <v-btn :disabled="difficulty == 0" @click="decreaseDifficulty">
                    <v-icon>mdi-arrow-down-thin</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-btn width="15vw" color="blue" @click="beginGame()">Begin Game</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        methods: {
        changeComponent(component) {
            this.$emit('changeComponent', component)
        },
        beginGame() {
            let payload = new Object;
            payload.deckTemplate = this.$store.state.defaultDecks.find(deck => deck.archetype == "Bimbo").deck
            payload.cardPool = this.$store.state.cards
            this.$store.dispatch('selectCharacter', payload);
            this.$emit('changeComponent', 'story')
        },
        increaseDifficulty() {
            this.$store.dispatch('increaseDifficulty');
        },
        decreaseDifficulty() {
            this.$store.dispatch('decreaseDifficulty');
        }
      },
      computed: {
        maxDifficulty(){
            return this.$store.state.maxDifficulty
        },
        difficulty(){
            return this.$store.state.difficulty
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>