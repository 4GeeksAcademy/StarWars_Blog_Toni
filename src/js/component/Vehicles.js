import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";


export const Vehicles = props => {

    const [properties, setProperties] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {

        fetch(`https://www.swapi.tech/api/vehicles/${props.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setProperties(data.result.properties);
            })
            .catch((error) => console.error(error));
    }, []);


  
   

    const handlePress = () => {
        setIsFavorite(!isFavorite)
    }



    return (
        <div className="card m-2" style={{ minWidth: '18rem', textAlign: "left" }}>
            <img src="https://starwars-visualguide.com/assets/img/vehicles/18.jpg" className="card-img-top" alt="Error al cargar la imagen" />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <p className="card-text mb-1">Model: {properties.model}</p>
                <p className="card-text mb-1">Vehicle Class: {properties.vehicle_class}</p>
                <p className="card-text mb-1">Passengers: {properties.passengers}</p>
                <a href={props.url} className="btn btn-primary mt-3 bg-transparent text-primary">Learn More!</a>

                <button className="btn-icon" onClick={handlePress}>

                    {
                        (isFavorite) ? <i className="fa-sharp fa-solid fa-heart fa-lg"></i>: <i className="fa-sharp fa-regular fa-heart fa-lg"></i>
                    }

                </button>

            </div>
        </div>
    );
};