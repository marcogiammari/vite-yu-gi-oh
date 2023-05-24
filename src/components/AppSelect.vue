<script>

import { store } from '../data/store';
import axios from 'axios';
export default {
    name: 'AppSelect', 
    data() {
        return {
            store,
            selectedArchetype: ""
        }
    },
    computed: {
        
        filterCards() {
            console.log(this.store.urlGetCardsByArchetype + this.selectedArchetype);
            axios.get(this.store.urlGetCardsByArchetype + this.selectedArchetype)
            .then(r => {
                this.store.cards = []
                this.store.cards = r.data.data;
                this.store.loading = false;
            })
            .catch(error => {
                console.error('Error: ', error);
                this.store.loading = false;
                this.store.cards = [];
            })
        }
    },
}

</script>


<template>
    <div class="col-2">
        <select class="form-select p-2" @change="this.filterCards" v-model="this.selectedArchetype">
            <option v-for="archetype in this.store.archetypes">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>