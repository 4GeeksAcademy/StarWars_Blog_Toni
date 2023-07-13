import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Character } from "../component/Character";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";


export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
  }, []);

  
    // useEffect(() => {
    //   console.log(store.Planets);
    // }, [store.Planets]);

  return (
    <div>

      {/* MAPEO DE PERSONAJES */}

      <div className="text-center m-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
        {store.People.map((contact) => {
          return <Character
            key={contact.uid}
            {...contact}

          />;
        })}
      </div>

        {/* MAPEO DE PLANETAS */}

      <div className="text-center m-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
        {store.Planets.map((planet) => {
          return <Planets
            key={planet.uid}
            {...planet}

          />;
        })}
      </div>


        {/* MAPEO DE VEHÍCULOS */}

      <div className="text-center m-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
        {store.Vehicles.map((vehicle) => {
          return <Vehicles
            key={vehicle.uid}
            {...vehicle}

          />;
        })}
      </div>
      
    </div>


  );
};
