import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Character } from "../component/character";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);

//   useEffect(() => {
//     console.log(store.People);
//   }, [store.People]);

  return (
    <div className="text-center m-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
      {store.People.map((contact) => {
		console.log(contact)
        return <Character 
				key={contact.uid}
				{...contact}
				
		 />;
      })}
    </div>
  );
};
