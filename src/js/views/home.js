import React, { useEffect, useState,useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return(
		<div className="text-center mt-5">
			<h1>Hello Rigo123!</h1>
		
	
			<h1>Desde FLUX con componenete</h1>
			<div className="row flex-row flex-nowrap" style={{overflowX: 'auto'}}>
				{store.navesflux.map( (nave)=>  <Cardnave key={nave.uid } uid={nave.model }  name={nave.name}  /> )}
			</div>

		</div>
	);
	
} 
