<template>
    <v-container>
        <v-row class="justify-space-around">
            <v-col cols="12" class="text-center">
                <h1>You find a place you cane take a breath and regain yourself</h1>
            </v-col>
            <v-col cols="4" class="text-center">
                <v-img contain height="15vh" :src="require('@/assets/icons/restSite/rest.png')"></v-img>
                <v-btn @click="rest">Rest</v-btn>
                <br>
                <h3>Restores 25% of max HP</h3>
            </v-col>
            <v-col cols="4" class="text-center">
                <v-img contain height="15vh" :src="require('@/assets/icons/restSite/remove.png')"></v-img>
                <v-btn @click="removeCardDialog = true">Remove card</v-btn>
                <br>
                <h3>Allows you to remove one card from your deck</h3>
            </v-col>
            <v-col cols="4" class="text-center">
                <v-img contain height="15vh" :src="require('@/assets/icons/restSite/duplicate.png')"></v-img>
                <v-btn @click="duplicateCardDialog = true">Duplicate Card</v-btn>
                <br>
                <h3>Allows you to duplicate one card from your deck</h3>
            </v-col>
        </v-row>
        <v-dialog
            v-model="removeCardDialog"
            width="75vw"
        >
            <v-card>
                <v-container>
                    <v-row>
                        <v-col cols="3" class="text-center" v-for="card in deck" :key="card.id" @click="cardToRemove = card.id">
                            <v-img :src="card[card.activeImage]" contain class="d-flex align-center">
                                <v-btn v-if="cardToRemove == card.id" color="red" @click="removeCard(card)">Remove card</v-btn>
                            </v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="duplicateCardDialog"
                width="75vw"
            >
                <v-card>
                    <v-container>
                        <v-row>
                            <v-col cols="3" class="text-center" v-for="card in deck" :key="card.id" @click="cardToDuplicate = card">
                                <v-img :src="card[card.activeImage]" contain class="d-flex align-center">
                                    <v-btn v-if="cardToDuplicate && cardToDuplicate.id == card.id" color="green" @click="removeCard(card)">Duplicate card</v-btn>
                                </v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-dialog>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            removeCardDialog: false,
            cardToRemove: '',
            duplicateCardDialog: false,
            cardToDuplicate: null
        }),
        methods: {
            rest(){
                let payload = Math.floor(this.$store.state.playerBaseHealth / 4)
                let currentHealth = this.$store.state.playerHealth
                if(currentHealth + payload > this.$store.state.playerBaseHealth){
                    payload = this.$store.state.playerBaseHealth - currentHealth
                }
                this.$store.dispatch('changePlayerHealth', payload)
                this.$emit('leaveRestSite');
            },
            duplicate(card){
                let payloadJSON = JSON.stringify(card);
                let payload = JSON.parse(payloadJSON);
                payload.id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
                this.$store.dispatch('addCard', payload);
                this.removeCardDialog = false;
                this.$emit('leaveRestSite');
            },
            removeCard(card){
                let payload = {
                    id: card.id,
                    cost: 0
                }
                this.$store.dispatch('removeCard', payload);
                this.removeCardDialog = false
                this.$emit('leaveRestSite');
            }
        },
        computed: {
            deck: function() {
                return this.$store.state.deck
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>