import { useMutation, useSubscription } from '@apollo/client';

import { PLACE_ORDER } from './gql/placeOrder';
import { POST_MESSAGE } from './gql/message';
import { SUBSCRIPTION_SHOPPING_CART_CHAT } from './gql/chatDataSubscription';
import "./home.scss";
import  Chat from '../../component/chat';
import  AddCart from '../../component/addCart';
import { useMemo } from 'react';


export default function Home() {

	const userIdAsRandom = useMemo(() => Date.now(), []);

	const [placeOrder] = useMutation(PLACE_ORDER);
	const [pushNewMessage] = useMutation(POST_MESSAGE);

	const { data} = useSubscription(SUBSCRIPTION_SHOPPING_CART_CHAT);

	const newMessage = useMemo(() => data?.chat, [data?.chat?.id])

	const handlePlaceOrder = ({customerName, contactNumber, itemsOrdered, deliveryDate}) => {
		placeOrder({
			variables: {
				cart: {
					userId : userIdAsRandom,
					customerName: customerName,
					contactNumber:contactNumber,
					orderedItems : itemsOrdered,
					deliveryDateTime: deliveryDate,
				}
			}
		});
	};

	const handleNewMessage = (message) => {
		pushNewMessage({
			variables: {
				msg: {message, userId : userIdAsRandom,}
			}
		});
	};


	return (
		<div className="checkout">
			<AddCart placeOrder={handlePlaceOrder } />
			<div className="chat-box">
				<Chat pushMessage={handleNewMessage} newMessage={newMessage} signedInUser={userIdAsRandom} />
			</div>
		</div>
	);

}