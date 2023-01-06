<template>
    <v-container fluid>
        <v-row class="justify-space-around">
            <v-col cols="12">
                <v-row class="justify-space-around">
                    <v-col cols="2" class="text-center" v-for="character, i in characters" :key="i">
                        <v-img @mouseover="setArchetypeText(character.archetypeDesc, character.archetype)" @mouseleave="setArchetypeText(null, null)" :src="require(`@/assets/playerCharacters/${character.archetype}.png`)" contain @click="selectCharacter(character)"></v-img>
                    </v-col>
                    <v-col cols="2" class="text-center" v-for="character, i in lockedCharacters" :key="i">
                        <v-img @mouseover="setArchetypeText('Continue playing to unlock this archetype', 'LOCKED')" @mouseleave="setArchetypeText(null, null)" :src="require(`@/assets/playerCharacters/${character.archetype}.png`)" contain @click="lockedCharacterSnackbar = true"></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="text-center">
                <h1>{{currentArchetype}}</h1>
                <h3>{{currentArchetypeDesc}}</h3>
            </v-col>
        </v-row>
        <v-snackbar
      v-model="lockedCharacterSnackbar"
    >
      This character is not yet unlocked
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="lockedCharacterSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-container>
</template>

<script>

export default {
	data: () => ({
        currentArchetype: null,
        currentArchetypeDesc: null,
        lockedCharacterSnackbar: false
	}),
    methods: {
        selectCharacter: function(character){
            let payload = new Object;
            payload.character = character
            let deckTemplateCards = this.$store.state.defaultDecks.find(deck => deck.archetype == character.archetype).deck.map(card => card.name);
            payload.deckTemplate = this.$store.state.defaultDecks.find(deck => deck.archetype == character.archetype).deck
            payload.cardPool = this.$store.state.cards.filter(card => deckTemplateCards.includes(card.name))
            this.$store.dispatch('selectCharacter', payload);
            this.$emit('changeComponent', 'doorRoom')
        },
        setArchetypeText(desc, name){
            this.currentArchetype = name;
            this.currentArchetypeDesc = desc
        }
    },
    computed: {
        unlockedArchetypes: function() {
            let archetypeArray = new Array;
            this.$store.state.unlockedCharacters.forEach(character => {
                if(!archetypeArray.includes(character.archetype)){
                    archetypeArray.push(character.archetype)
                }
            });
            return archetypeArray
        },
        characters: function() {
            return this.$store.state.unlockedCharacters
        },
        lockedCharacters: function() {
            return this.$store.state.lockedCharacters
        }
    }
}
</script>

<style lang="scss" scoped>

</style>