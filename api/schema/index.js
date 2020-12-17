const { gql } = require('apollo-server');

const typeDefs = gql`

interface ShoppingCart {
  userId: ID!
  customerName : String!
  contactNumber : String!
  orderedItems : String!
  deliveryDateTime : String!
}

type Cart implements ShoppingCart {
  type: String!
  id: String!
  userId: ID!
  customerName : String!
  contactNumber : String!
  orderedItems : String!
  deliveryDateTime : String!
}

input CartInputs {
  userId: ID!
  customerName : String!
  contactNumber : String!
  orderedItems : String!
  deliveryDateTime : String!
}

type Message {
  type: String!
  id: String!
  userId: ID!
  message : String
}

input MessageInput {
  userId: ID!
  message : String!
}

union ChatContentType = Cart | Message


type Subscription {
  chat: ChatContentType
}

type Query {
  orders : [Cart]!
}

type Mutation {
  placeOrder(cartDetails : CartInputs): Cart
  addMessage(msg : MessageInput) : Message
}

`;


exports.typeDefs = typeDefs;