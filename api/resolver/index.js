const { PubSub } = require('apollo-server');

const pubsub = new PubSub();



const POST_ADDED = 'POST_ADDED';
const POST_MESSAGE = 'POST_MESSAGE';

const resolvers = {

  ChatContentType: {

    __resolveType(obj, context, info) {
      
      if(obj.customerName){
        return 'Cart';
      }

      if(obj.message){
        return 'Message';
      }

      return null;
    },
  },

  Subscription: {
    chat: {
      subscribe: () => pubsub.asyncIterator([POST_ADDED, POST_MESSAGE]),
    }
  },

  Mutation: {
    placeOrder(root, args, context) {

      const cart = {
        type: "Cart",
        ...args.cartDetails,
        id: "cart-" + Date.now()
      };

      pubsub.publish(POST_ADDED, {
        chat: cart
      });
      return cart;
    },
    addMessage(root, args, context) {

      const message = { type: "message", ...args.msg, id : "msg-" + Date.now() };

     pubsub.publish(POST_MESSAGE, {chat : message });

      return message;
    }
  },

   Query:{
    orders: ()=>{}
  },
};


exports.resolvers = resolvers;