<script>
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
      retrieveData() {
       
        axios.get(this.store.urlAPI).then(r => {
          this.store.cards.push(r.data.data);
          this.store.loading = false;
        })
        .catch(error => {
          console.log('Error: ', error);
          this.store.loading = false;
          this.store.cards = [];
        })
      }
    },
    mounted() {
      this.retrieveData()
    }
}
</script>



<template>

  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
</style>
