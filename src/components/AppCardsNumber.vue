<script>
import { store } from '../data/store';
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-if="this.store.cards.length" class="row bg-dark text-light p-4 fw-bold">
        Found {{ this.store.cards.length}} cards
    </div>
</template>