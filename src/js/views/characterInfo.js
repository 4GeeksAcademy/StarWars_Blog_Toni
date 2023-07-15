import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/info.css";


export const CharacterInfo = () => {

  const { store, actions } = useContext(Context);
  const params = useParams()
  const properties = store.PeopleProperties;

  
  useEffect(() => {
    actions.getPeopleProperties(params.id)
  }, [])



  return (
    <div className="container">
      <div className="row flex-row">
        <div className="col-6">
          <img
            src={"https://starwars-visualguide.com/assets/img/"+ params.type + "/" + params.id + ".jpg"}
            className="img-thumbnail  img-fluid"
            alt="..."
            style={{ Width: "800px", height: "450px" }}>
          </img>
        </div>
        <div className="description col-3 text-center">
          <h1>{params.name}</h1>
          <p> sed ut perspiciatis unde omnis iste natus error sit voluptatem accusaum doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-2">
          <p>Name</p>
          <span>{params.name}</span>
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


  )

}









