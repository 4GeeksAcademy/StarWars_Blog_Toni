import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

export const Character = props => {

    const [properties, setProperties] = useState({});
    const [image, setImage] = useState("")
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {

        fetch(`https://www.swapi.tech/api/people/${props.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setProperties(data.result.properties);
            })
            .catch((error) => console.error(error));


    }, []);


    function imageDefault(image) {
        let photo = `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`;

        fetch(photo).then((result) => {
            if (result) {
                setImage(photo);
            }
        });
    }

    const handlePress = (e) => {
        e.preventDefault()
        setIsFavorite(!isFavorite)
    }


    useEffect(() => {
        imageDefault();
    }, [])




    return (
        <div className="card m-2" style={{ minWidth: '18rem', textAlign: "left" }}>
            <img src={image} className="card-img-top" alt="Error al cargar la imagen" />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <p className="card-text mb-1">Gender: {properties.gender}</p>
                <p className="card-text mb-1">Hair Color: {properties.hair_color}</p>
                <p className="card-text mb-1">Eye-Color: {properties.eye_color}</p>
                <a to={props.url} className="btn btn-primary mt-3 bg-transparent text-primary">Learn More!</a>

                <button className="btn-icon" onClick={handlePress}>

                    {
                        (isFavorite) ? <i className="fa-sharp fa-solid fa-heart fa-lg"></i>: <i className="fa-sharp fa-regular fa-heart fa-lg"></i>
                    }

                </button>

            </div>
        </div>
    );
};