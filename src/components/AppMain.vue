<script>

import { store } from '../data/store';

    export default {
        name: 'AppMain',
        data() {
            return {
                store
            }
        },
        methods: {
            getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
            }
        }
    }


</script>

<template>

    <main class="p-5">
        <div class="container d-flex flex-column gap-4">
            <!-- <div class="col-2">
                <select class="form-select p-2" name="" id="">
                    <option value="">Alien</option>
                </select>
            </div> -->
            <div class="container bg-white p-5">
                <div class="container-fluid">
                    <div class="row bg-dark text-light p-4 fw-bold">
                        Found {{ this.store.cards.length }} cards
                    </div>
                    <div id="cards-container" class="row">
                        <div v-for="card in this.store.cards" class="card-wrapper card p-0">
                            <img class="img-fluid" :src="getImagePath(`${card.card_images[0].image_url}`)" alt="">
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
