const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			People:[]
			
		},

		actions: {
			
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")

					.then(res => res.json())
					.then(data => setStore({People: data.results }))
					.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
