import React, { useContext, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const UpdateContact = props => {
	const { actions, store } = useContext(Context);
	const [name, setName] = useState(store.contact ? store.contact.full_name : "");
	const [email, setEmail] = useState(store.contact ? store.contact.email : "");
	const [phone, setPhone] = useState(store.contact ? store.contact.phone : "");
	const [address, setAddress] = useState(store.contact ? store.contact.address : "");

	const handleSubmit = e => {
		e.preventDefault();
		actions.updateContact(props.match.params.id, name, email, phone, address);
		return <Redirect to="/" />;
	};

	useEffect(() => {
		actions.getContact(props.match.params.id, setName, setEmail, setPhone, setAddress);
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Update contact information</h1>
				<form onSubmit={e => handleSubmit(e)}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={name}
							onChange={e => setName(e.target.value)}
							className="form-control"
							placeholder="Full name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder="E-mail"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							className="form-control"
							placeholder="Phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={address}
							onChange={e => setAddress(e.target.value)}
							className="form-control"
							placeholder="Address"
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

UpdateContact.propTypes = {
	match: PropTypes.object
};
