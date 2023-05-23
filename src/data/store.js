import { reactive } from "vue";

export const store = {
    loading: true,
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cards: [],
};
