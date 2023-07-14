import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharacterInfo = (props) => {
  const { store, actions } = useContext(Context);
  const { id, name } = useParams();
 
  

  return (
    <div style={{marginTop: "100px"}}>
    <div className="container card d-flex justify-content-center align-items-center">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
                {name}
            </h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

