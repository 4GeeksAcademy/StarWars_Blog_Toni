import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

	// FUNCION PARA ELIMINAR CONTACTO DE CESTA Y QUE NO SE CIERRE DROPBOX

	const handleDeleteFavorites = (e, name) => {
        e.stopPropagation();
		const favs = store.Favorites.filter((item)=> item.name !== name)
		actions.newFavorites(favs)
    };

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
                <ul className="dropdown-menu dropdown-menu-end">
                    {store.Favorites.length === 0 ? (
                        <li className="dropdown-item">Empty</li>
                    ) : (
                        store.Favorites.map((favBasket) => (
                            <li key={favBasket.id}>
                                <div className="item-container">
                                <Link
                                    className="link-fav"
                                    to={`/${favBasket.class}/${favBasket.id}/${favBasket.name}`}
                                >
                                    {favBasket.name}
                                </Link>

                                <button
                                    className="btn-fav"
                                    onClick={(e) =>handleDeleteFavorites(
                                            e, favBasket.name
                                        )
                                    }
                                >
                                    <i className="fa-solid fa-trash "></i>
                                </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};






