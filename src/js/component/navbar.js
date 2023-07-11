import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="container navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" style={{ width: "100px", height: "50px" }} alt="error al cargar logo" />
			</Link>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle bg-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {}
				</button>
				<ul className="dropdown-menu bg-primary">
					<li><a className="dropdown-item" href="#">Action</a></li>
				</ul>
			</div>
		</nav>
	);
};
