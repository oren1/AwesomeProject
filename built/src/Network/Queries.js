import { gql } from '@apollo/client';
export const queries = {
    GET_COINS: gql `
        listCoins(page: $page) {
            id
            symbol
            coinName
            imageUrl
         }
    `,
};
