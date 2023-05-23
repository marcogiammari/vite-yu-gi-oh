<script>
  import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import { store } from './data/store'
  import axios from 'axios';

  export default {
    components: {
        AppHeader,
        AppMain
        
    }, 
    data() {
      return {
        store
      }
    
    },
    methods: {
      retrieveData(num) {
        for (let i = 0; i < num; i++) {
          axios.get(this.store.urlAPI).then(r => {
            console.log('Ricevuto: ', r.data.data[i]);
            console.log('Path: ', r.data.data[i].card_images[0].image_url);
            this.store.cards.push(r.data.data[i]);
            console.log(this.store.cards);
            this.store.loading = false;
          }).catch(error => {
            this.store.cards = [];
            this.store.loading = false;
          })        
        }
      }
    },
    mounted() {
      this.retrieveData(15)
    }
}
</script>



<template>

  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
</style>
