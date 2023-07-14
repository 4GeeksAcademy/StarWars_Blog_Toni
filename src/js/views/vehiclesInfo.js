import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/info.css";


export const VehiclesInfo = () => {

  const { store, actions } = useContext(Context);
  const { id, name } = useParams();
  const properties = store.VehiclesProperties;

  useEffect(() => {
    actions.getVehiclesProperties(id)
  }, [])



  return (
    <div className="container">
      <div className="row flex-row">
        <div className="col-6">
          <img
            src="https://starwars-visualguide.com/assets/img/vehicles/18.jpg"
            className="img-thumbnail  img-fluid"
            alt="..."
            style={{ maxWidth: "400px", height: "450px" }}>
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
          <p>Model</p>
          <span>{properties.model}</span>
        </div>
        <div className="col-2">
          <p>Vehicle Class</p>
          <span>{properties.vehicle_class}</span>
        </div>
        <div className="col-2">
          <p>Passengers</p>
          <span>{properties.passengers}</span>
        </div>
        <div className="col-2">
          <p>Length</p>
          <span>{properties.length}</span>
        </div>
        <div className="col-2">
          <p>Manufacturer</p>
          <span>{properties.manufacturer}</span>
        </div>
      </div>

    </div>

  )
}