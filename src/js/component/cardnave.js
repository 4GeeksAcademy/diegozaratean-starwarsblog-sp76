import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

import { Link } from "react-router-dom";

export const Cardnave = (props) => {
    console.log('llama api')
	return (
		<div className="card" style={{width: "18rem"}}>
			<img src={rigoImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">info.</p>
				<Link to={"/nave/" + props.uid} className="btn btn-primary">ver {props.uid}</Link>
			</div>
		</div>
	);
};