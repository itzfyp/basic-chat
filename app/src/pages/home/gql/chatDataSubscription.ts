import { gql } from '@apollo/client';

export const SUBSCRIPTION_SHOPPING_CART_CHAT = gql`
    subscription OnShoppingCart {
        chat {
            ...on Message {
                type
              id
                 userId
              message
            }
           ...on Cart {
               type
            id
              userId
             contactNumber
            customerName
            orderedItems
            deliveryDateTime
          }
            
          }
    }
`;
