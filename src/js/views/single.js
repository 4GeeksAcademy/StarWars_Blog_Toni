import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, } from "react-router-dom";
import { Context } from "../store/appContext";
import { Character } from "../component/Character";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";

export const Single = props => {

	const { store, actions } = useContext(Context);


	return (

		<div class="card mb-3" style="max-width: 540px;">
			<div class="row g-0">
				<div class="col-md-4">
					<img src="..." class="img-fluid rounded-start" alt="..." />
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						
					</div>
				</div>
			</div>
		</div>

	);
};

Single.propTypes = {
	match: PropTypes.object
};
