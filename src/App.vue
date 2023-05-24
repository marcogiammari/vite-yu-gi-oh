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
          this.store.cards = r.data.data;
          this.store.loading = false;
        })
        .catch(error => {
          console.error('Error: ', error);
          this.store.loading = false;
          this.store.cards = [];
        })
      },
      retrieveArchetypes() {
        axios.get(this.store.urlArchetypesAPI).then(r => {
          this.store.archetypes = r.data;
        })
      }
      
    },
    mounted() {
      this.retrieveArchetypes()
      this.retrieveData(this.store.selectedArchetype)
    }
}
</script>



<template>

  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
</style>
