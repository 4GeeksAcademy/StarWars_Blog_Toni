import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";
import { Context } from "../store/appContext";

export const Character = props => {

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


   

    // Estructura de la card

    return (
        <div className="card m-2" style={{ minWidth: '18rem', textAlign: "left" }}>
            <img className="rounded-top" alt= "Error al cargar la imagen" src= {"https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg"} />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <Link to={`/characterInfo/${props.id}/${props.type}/${props.name}`}
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