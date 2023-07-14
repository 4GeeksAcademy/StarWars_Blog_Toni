import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/info.css";


export const PlanetInfo = () => {

  const { store, actions } = useContext(Context);
  const { id, name } = useParams();
  const properties = store.PlanetProperties;

  useEffect(() => {
    actions.getPlanetsProperties(id)
    
  }, [])


  useEffect(()=>{
    console.log(store.PlanetProperties)
  },[store.PlanetProperties],)


  return (
    <div className="container">
      <div className="row flex-row">
        <div className="col-6">
          <img
            src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
            className="img-thumbnail  img-fluid"
            alt="..."
            style={{ Width: "800px", height: "450px" }}>
          </img>
        </div>
        <div className="description col-3 text-center">
          <h1>{name}</h1>
          <p> sed ut perspiciatis unde omnis iste natus error sit voluptatem accusaum doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-2">
          <p>Name</p>
          <span>{name}</span>
        </div>
        <div className="col-2">
          <p>Population</p>
          <span>{properties.population}</span>
        </div>
        <div className="col-2">
          <p>Terrain</p>
          <span>{properties.terrain}</span>
        </div>
        <div className="col-2">
          <p>Surface Water</p>
          <span>{properties.surface_water}</span>
        </div>
        <div className="col-2">
          <p>Rotation Period</p>
          <span>{properties.rotation_period}</span>
        </div>
        <div className="col-2">
          <p>Diameter</p>
          <span>{properties.diameter}</span>
        </div>
      </div>

    </div>


  )

}
