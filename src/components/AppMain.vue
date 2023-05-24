<script>

import { store } from '../data/store.js';
import AppSelect from './AppSelect.vue';
import AppCardsNumber from './AppCardsNumber.vue';

    export default {
        name: 'AppMain',
        components: {
            AppSelect,
            AppCardsNumber
        },
        data() {
            return {
                store: store,
            }
        }
    }



</script>

<template>

    <main class="p-5">
        <div class="container d-flex flex-column gap-4">
            <AppSelect />
            <div class="container bg-white p-5">
                <div class="container-fluid">
                    <AppCardsNumber />
                    <div v-show="this.store.loading" id="loader">
                        <img src="../assets/img/Spin-1s-200px.gif" alt="loader">
                    </div>
                    <div v-show="!this.store.loading" id="cards-container" class="row">
                        <div v-for="card in this.store.cards" class="card-wrapper card p-0">
                            <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
                            <p class="text-light text-center fw-bold">{{ card.name.toUpperCase() }}</p>
                            <p>{{ card.archetype }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </main>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


main {
    background-color: $primarycolor;

    #loader {
        @include flex(row, center, center);
        padding: 10rem 0;
    }

    #cards-container {
        @include flex(row, start, stretch, wrap, 1.25rem);
        .card-wrapper {
            background-color: $primarycolor;
            width: calc((100% - 5rem) / 5);
            @include flex(column, space-between, center, nowrap, 1.25rem, 1)
        }
    }
}

</style>
