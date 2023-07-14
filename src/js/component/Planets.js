import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";
import { Context } from "../store/appContext";

export const Planets = props => {

    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);


     
    // FUNCION ICONO DE ME GUSTA

    const handlePress = (e) => {
        e.preventDefault()
        let favs = [...store.Favorites]
        setIsFavorite(!isFavorite)

        if(!isFavorite === true) {
                favs.push ({
                name: props.name,
                id: props.uid,
                class: "characterInfo"
            })

        } else (
            favs = favs.filter((item) => item.name !== props.name)
            )
         
        actions.newFavorites(favs)

    }

     // useEffect utilizado para setaar el estado de favoritos en función de si el nombre esta o no en la cesta

     useEffect(() => {
        const isCharacterFavorite = store.Favorites.some((favorite) => favorite.name === props.name);
        setIsFavorite(isCharacterFavorite);
    }, [store.Favorites]);




    return (
        <div className="card m-2" style={{ minWidth: '18rem', textAlign: "left" }}>
            <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="Error al cargar la imagen" />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <p className="card-text mb-1">Population: </p>
                <p className="card-text mb-1">Terrain: </p>
                <Link to={`/planetInfo/${props.uid}/${props.name}`}
                 className="btn btn-primary mt-3 bg-transparent text-primary">Learn More!</Link>
                <button className="btn-icon" onClick={handlePress}>

                    {
                        (isFavorite) ? <i className="fa-sharp fa-solid fa-heart fa-lg"></i>: <i className="fa-sharp fa-regular fa-heart fa-lg"></i>
                    }

                </button>

            </div>
        </div>
    );
};