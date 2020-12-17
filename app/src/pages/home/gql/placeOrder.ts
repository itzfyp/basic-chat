import { gql } from '@apollo/client';

export const PLACE_ORDER = gql`
    mutation PlaceOrder($cart: CartInputs) {
        placeOrder(cartDetails: $cart){
            id
        }
    }
`;
