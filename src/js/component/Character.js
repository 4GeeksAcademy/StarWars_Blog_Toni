import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";
import { Context } from "../store/appContext";

export const Character = props => {

    const { store, actions } = useContext(Context);
    const [properties, setProperties] = useState({});
    const [image, setImage] = useState("")
    const [isFavorite, setIsFavorite] = useState(false);
    

    // LLAMADA FETCH PARA TRAER LAS PROPIEDADES QUE SE EJECUTA MEDIANTE USEEFFECT SOLO 1 VEZ

    useEffect(() => {

        fetch(`https://www.swapi.tech/api/people/${props.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setProperties(data.result.properties);
            })
            .catch((error) => console.error(error));


    }, []);

    // LLAMADA FETCH PARA TRAER LAS IMAGENES QUE SE EJECUTA MEDIANTE USEEFFECT SOLO 1 VEZ

    function imageDefault() {
        let photo = `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`;

        fetch(photo).then((result) => {
            if (result) {
                setImage(photo);
            }
        });
    }

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


    // Se cargan imagenes en la primera carga

    useEffect(() => {
        imageDefault();
    }, [])


    // Estructura de la card

    return (
        <div className="card m-2" style={{ minWidth: '18rem', textAlign: "left" }}>
            <img src={image} className="card-img-top" alt="Error al cargar la imagen" />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <p className="card-text mb-1">Gender: {properties.gender}</p>
                <p className="card-text mb-1">Hair Color: {properties.hair_color}</p>
                <p className="card-text mb-1">Eye-Color: {properties.eye_color}</p>
                <Link to={`/characterInfo/${props.uid}`} className="btn btn-primary mt-3 bg-transparent text-primary">Learn More!</Link>
                <button className="btn-icon" onClick={handlePress}>

                    {
                        (isFavorite) ? <i className="fa-sharp fa-solid fa-heart fa-lg"></i>: <i className="fa-sharp fa-regular fa-heart fa-lg"></i>
                    }

                </button>
                    
            </div>
        </div>
    );
};