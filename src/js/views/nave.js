import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
	const { store, actions } = useContext(Context);
    const [ starship, setStarship ] = useState({})
	const params = useParams();
	console.log(params)

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/starships/'+params.nave_id)
        .then( (response)=> response.json() )
        // .then( (data)=> console.log(data.result.properties))
        .then( (data)=> setStarship(data.result.properties))
        // .then( (data)=> setStore({ navesflux: data.results }))


    },[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.nave_id}</h1>

			<hr className="my-4" />
            <p>Model: {starship.model} </p>
            <p>Name: {starship.name} </p>
            <p>manufacter: {starship.manufacturer} </p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Nave.propTypes = {
	match: PropTypes.object
};
