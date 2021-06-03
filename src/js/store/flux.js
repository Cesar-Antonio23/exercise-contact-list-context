const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: [],
			contact: {}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			getAgenda: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/cesar", settings);
				const json = await request.json();
				const data = json;

				setStore({ agenda: data });
			},

			// Get a particular contact by id.
			getContact: async (id, setName, setEmail, setPhone, setAddress) => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, settings);
				const json = await request.json();

				setStore({ contact: json });
				setName(json.full_name);
				setEmail(json.email);
				setPhone(json.phone);
				setAddress(json.address);
			},

			// delete 1 particular contact by id
			deleteContact: async id => {
				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				});
				const json = await request.json();
				const data = json;
			},

			// delete all contacts (agenda)
			deleteAgenda: async () => {
				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/cesar`, {
					method: "DELETE"
				});
				const json = await request.json();
				const data = json;
			},

			addContact: async (name, email, phone, address) => {
				const settings = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						phone: phone,
						address: address,
						agenda_slug: "cesar"
					})
				};
				const request = await fetch("https://assets.breatheco.de/apis/fake/contact/", settings);
				const json = await request.json();
			},

			// update contact info
			updateContact: async (id, name, email, phone, address) => {
				const settings = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						phone: phone,
						address: address,
						agenda_slug: "cesar"
					})
				};
				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, settings);
				const json = await request.json();
				const data = json;
			}
		}
	};
};

export default getState;
