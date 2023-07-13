const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			People:[],
			Planets: [],
			Vehicles: [],
			Favorites: [],
			
		},

		actions: {
			
			// llamadas al fetch

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")

					.then(res => res.json())
					.then(data => setStore( {People: data.results }))
					.catch(err => console.error(err))
			},

			getPlanets: () => {	
				fetch("https://www.swapi.tech/api/planets/")

					.then(res => res.json())
					.then(data => setStore({ Planets: data.results }))
					.catch(err => console.error(err))
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")

					.then(res => res.json())
					.then(data => setStore( {Vehicles: data.results } ))
					.catch(err => console.error(err))
			},


			// funciones para setear el array de favoritos

			newFavorites: (favList) => {
				setStore( {Favorites: favList} )
			},


		}
	};
};

export default getState;
