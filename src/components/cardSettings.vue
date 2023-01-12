<template>
    <v-container>
        <v-row class="justify-space-around">
            <v-col cols="12" class="text-center">
                <h3>As you unlock varients of your cards, you can select which varient you would like to play with here.</h3>
            </v-col>
            <v-col cols="3" class="text-center" v-for="card in cards" :key="card.name">
                <v-img :src="card[card.activeImage]" contain>
                    <div
						class="d-flex v-card--reveal"
						style="height: 100%;"
						>
						<v-btn v-if="card.unlockedVarients.length > 1" @click="changeVarient(card)">Change Varient</v-btn>
					</div>
                </v-img>
            </v-col>
            <v-btn fab large bottom right fixed color="green" @click="changeComponent('mainHub')">RETURN</v-btn>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        computed: {
            cards(){
                return this.$store.state.cards.filter(card => card.unlocked == 'true');
            }
        },
        methods: {
            changeVarient(card){
                let name = card.name;
                let newImageIndex = card.unlockedVarients.findIndex(varient => varient == card.activeImage) + 1;
                if(newImageIndex == card.unlockedVarients.length){
                    newImageIndex = 0;
                }
                let varient = card.unlockedVarients[newImageIndex]
                console.log(varient)
                let payload = {
                    name: name,
                    varient: varient
                }
                this.$store.dispatch('changeVarient', payload)
            },
            changeComponent(component) {
                this.$emit('changeComponent', component)
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0);
  padding-left: 10%;
  padding-right: 10%;
  transition:.4s ease;
  text-align: center;
}
</style>