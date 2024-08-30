import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
	const { store, actions } = useContext(Context);
    const [ starship, setStarship ] = useState({})
	const [ starshipDescription, setStarshipDescription ] = useState('')
	const params = useParams();
	console.log(params)

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/starships/'+params.nave_id)
        .then( (response)=> response.json() )
        // .then( (data)=> console.log(data.result))
		.then( (data)=> {
			setStarship(data.result.properties)
			console.log(data)
			setStarshipDescription(data.result.description)
		})
		// .then( console.log(starship))
        //.then( (data)=> setStarship(data.result))
        // .then( (data)=> setStore({ navesflux: data.results }))


    },[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.nave_id}</h1>

			<hr className="my-4" />
			<p>starshipDescription: {starshipDescription}</p>
			<p>Model: {starship.model} </p>
            {/* <p>Model: {starship.properties.model} </p>
            <p>Name: {starship.properties.name} </p>
            <p>manufacter: {starship.properties.manufacturer} </p> */}

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
