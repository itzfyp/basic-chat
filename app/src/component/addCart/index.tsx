import { useState } from 'react';
import "./addCart.scss";


export default function Home({placeOrder}) {

	const [customerName, setCustomerName] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [itemsOrdered, setItemsOrdered] = useState("");
	const [deliveryDate, setDeliveryDate] = useState("");

	const resetForm = () => {
		setCustomerName("");
		setContactNumber("");
		setItemsOrdered("");
		setDeliveryDate("");
	}

	const handleSubmit = () => {
		
		const isValid = customerName && contactNumber && itemsOrdered && deliveryDate;

		console.log({
			isValid,
			customerName, contactNumber, itemsOrdered, deliveryDate
		})

		if (!isValid)
			return false;

			placeOrder({
				customerName,
				contactNumber,
				itemsOrdered,
				deliveryDate,
			});

		resetForm();
	 };

	return (
        <div className="card">
            <div className="form-group">
                <label className="form-label" htmlFor="customername">Cutomer Name</label>
                <input className="form-control" type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} 
                placeholder="Please eneter customer name" required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="mobilenumber">Mobile Number</label>
                <input className="form-control" type="number" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} 
                placeholder="Please eneter mobile number" required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="itemsordered">Items ordered</label>
                <input className="form-control" type="text" value={itemsOrdered} onChange={(e)=>setItemsOrdered(e.target.value)} 
                placeholder="Please enter the items ordered"  required/>
            </div>
                <div className="form-group">
                <label className="form-label" htmlFor="deliverydate">Delivery Date</label>
                <input className="form-control" type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} 
                placeholder="Please eneter delivery date" required />
            </div>
            <div className="form-group">
                <button className="btn" onClick={handleSubmit}>Place order</button>
            </div>
        </div>
	);

}