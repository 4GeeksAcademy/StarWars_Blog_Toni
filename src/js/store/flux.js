const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			People: [],
			PeopleProperties: [],
			PeopleImages: [],
			Planets: [],
			Vehicles: [],
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
						setStore({PeopleProperties: data.result.properties});
					})
					.catch((error) => console.error(error));

			},

			getPeopleImages: (id) => {

				let photo = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

				fetch(photo).then((result) => {
					if (result) {
						setStore({PeopleImages: photo});
					}
				});

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
					.then(data => setStore({ Vehicles: data.results }))
					.catch(err => console.error(err))
			},


			// funciones para setear el array de favoritos

			newFavorites: (favList) => {
				setStore({ Favorites: favList })
			},


		}
	};
};

export default getState;
