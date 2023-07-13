import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="container navbar navbar-light bg-light mb-3">
            <Link to="/">
                <img
                    src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
                    style={{ width: "100px", height: "50px" }}
                    alt="error al cargar logo"
                />
            </Link>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle bg-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >

					{/* SE COMPRUEBA LONGITUD DEL ARRAY Y SI NO ES CERO SE EJECUTA EL MAP, SE AÑADE ICONO Y FUNCIÓN ON CLICK  */}


                    Favorites ({store.Favorites.length})
                </button>
                <ul className="dropdown-menu">
                    {store.Favorites.length === 0 ? (
                        <li className="dropdown-item">Empty</li>
                    ) : (
                        store.Favorites.map((favBasket) => (
                            <li key={favBasket.id}>
                                <Link
                                    className="link-fav"
                                    to={`/${favBasket.clase}/${favBasket.id}`}
                                >
                                    {favBasket.name}
                                </Link>

                                <button
                                    className="btn-fav"
                                    onClick={() =>
                                        actions.deleteFavorites(
                                            favBasket.name
                                        )
                                    }
                                >
                                    <i className="fa-solid fa-trash "></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};






