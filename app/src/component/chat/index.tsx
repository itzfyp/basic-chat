import { useEffect, useState } from "react";
import "./chat.scss";

export default function Chat({ pushMessage, newMessage, signedInUser }) {

	const [message, setMessage] = useState("");
	const [allMessages, setNewMessage] = useState([]);
	
	useEffect(() => {
		if(newMessage)
		setNewMessage(oldMessage => [...oldMessage, newMessage]);
	 }, [newMessage]);
	
	
	const handleEnter = () => {
		if ("" + message) {
			pushMessage(message);
			setMessage("");
		}
	};
	
	const keyPress = (e) =>{
		if(e.key === 'Enter'){
			handleEnter();
		}
	 }

	return (
		<div className="chat">
			<div className="window">
				<div className="header">
					<i className="online-status active"></i>
					<span className="username">{ signedInUser }</span>
				</div>
				<div className="content">
					{
						allMessages.map(msg => {
							return (
								<p key={msg.id} className={`message ${(msg.userId == signedInUser) ? "same" : ""}`}>
									<span className="message-owner">{msg.userId}</span> 
									{msg.type === 'message' && msg.message }
									{msg.type === 'Cart' &&  <Cart {...msg} />}
								</p>
							)
						})
					}
				</div>
				<div className="footer">
					<textarea onChange={(e)=> setMessage(e.target.value)} onKeyPress={keyPress} value={message} />
					<button onClick={handleEnter}>Send</button>
				</div>
			</div>
		</div>
	);
}


function Cart({
	contactNumber,
    customerName,
    orderedItems,
	deliveryDateTime
}) {
	return (
		<dl className="cart">
			<dt>customer name</dt>
				<dd>{ customerName || '' }</dd>
			<dt>mobile number</dt>
				<dd>{ contactNumber || '' }</dd>
			<dt>items ordered</dt>
				<dd>{ orderedItems || '' }</dd>
			<dt>Delivert Date</dt>
				<dd>{ deliveryDateTime || '' }</dd>
		</dl>);
}