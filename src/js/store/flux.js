const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			People: [],
			PeopleProperties: [],
			Planets: [],
			PlanetProperties: [],
			Vehicles: [],
			VehiclesProperties: [],
			Favorites: [],

		},

		actions: {

			// llamadas al fetch

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")

					.then(res => res.json())
					.then(data => setStore({ People: data.results }))
					.catch(err => console.error(err))
			},


			getPeopleProperties: (id) => {

				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then((res) => res.json())
					.then((data) => {
						setStore({ PeopleProperties: data.result.properties });
					})
					.catch((error) => console.error(error));

			},

			


			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")

					.then(res => res.json())
					.then(data => setStore({ Planets: data.results }))
					.catch(err => console.error(err))
			},


			getPlanetsProperties: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then((res) => res.json())
					.then((data) => {
						setStore({ PlanetProperties: data.result.properties });
					})
					.catch((error) => console.error(error));
			},


			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")

					.then(res => res.json())
					.then(data => setStore({ Vehicles: data.results }))
					.catch(err => console.error(err))
			},


			getVehiclesProperties: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then((res) => res.json())
					.then((data) => {
						setStore({ VehiclesProperties: data.result.properties });
					})
					.catch((error) => console.error(error));
			},


			// funciones para setear el array de favoritos

			newFavorites: (favList) => {
				setStore({ Favorites: favList })
			},


		}
	};
};

export default getState;
