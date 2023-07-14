import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/info.css";


export const CharacterInfo = () => {

  const { store, actions } = useContext(Context);
  const { id, name } = useParams();
  const imagen = store.PeopleImages;
  const properties = store.PeopleProperties;

useEffect(()=>{
  actions.getPeopleProperties(id)
  actions.getPeopleImages(id)
},[])


// useEffect(()=>{
//   console.log(store.PeopleProperties)
//   console.log(store.PeopleImages)
// },[store.PeopleProperties],[store.PeopleImages])
  
  
 
return (
  <div className="Container-fluid-principal mt-5">
    <div className="container-fluid row">
      <div className="row flex-row">
        <div className="col">
          <img
            src= {imagen}
            className="img-thumbnail ms-4 mt-4 img-fluid"
            alt="..."
            style={{ width: "600px", height: "600px" }}
          ></img>
        </div>
        <div className="right col text-center">
          <h1>{name}</h1>
          <p>
          sed ut perspiciatis unde omnis iste natus error sit voluptatem accusaum doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          </p>
        </div>
      </div>
    </div>
    
    <hr />

      <div className="row">
        <div className="col-2">
          <p>Name</p>
          <span>{name}</span>
        </div>
        <div className="col-2">
          <p>Birth Year</p>
          <span>{properties.birth_year}</span>
        </div>
        <div className="col-2">
          <p>Gender</p>
          <span>{properties.gender}</span>
        </div>
        <div className="col-2">
          <p>Height</p>
          <span>{properties.height}</span>
        </div>
        <div className="col-2">
          <p>Skin Colour</p>
          <span>{properties.skin_color}</span>
        </div>
        <div className="col-2">
          <p>Eye Colour</p>
          <span>{properties.eye_color}</span>
        </div>
      </div>
    </div>
  
);
};
