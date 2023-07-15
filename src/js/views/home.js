import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Character } from "../component/Character";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";



export const Home = () => {
  const { store, actions } = useContext(Context);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [peopleProperties, setPeopleProperties] = useState({});




  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
  }, []);

  
  useEffect(() => {
    if (selectedCharacterId) {
      actions.getPeopleProperties(selectedCharacterId)
        .then((data) => {
          setPeopleProperties(data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedCharacterId]);


  return (
    <div>

      {/* MAPEO DE PERSONAJES */}
      <h1 className="container custom-heading">Character</h1>
      <div className="text-center d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap', margin: "40px"}}>
        {store.People.map((contact) => {
          return <Character
            type={"characters"}
            id={contact.uid}
            key={contact.uid}
            name={contact.name}


          />;
        })}
      </div>

      {/* MAPEO DE PLANETAS */}
      <h1 className="container">Planets</h1>
      <div className="text-center m-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
        {store.Planets.map((contact) => (
          <Planets
            type={"planets"}
            id={contact.uid}
            key={contact.uid}
            name={contact.name}


          />
        ))}
      </div>


      {/* MAPEO DE VEHÍCULOS */}
      <h1 className="container">Vehicles</h1>
      <div className="text-center m-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
        {store.Vehicles.map((contact) => {
          return <Vehicles
            type={"vehicles"}
            id={contact.uid}
            key={contact.uid}
            name={contact.name}


          />;
        })}
      </div>

    </div>


  );
};
