const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			navesflux: [
				{
					uid: "FIRST",
					name: "white1",
					initial: "white"
				},
				{
					uid: "SECOND",
					name: "white2",
					initial: "white"
				}
			],
			message: 'inicial',
			misNaves: ['bus','taxi']


		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeMesasge: (tituloNave) => {
				console.log('changeMesasge dsed flux')
				const store = getStore();
				setStore({ message: tituloNave });
				if(store.misNaves.includes(tituloNave)){
					console.log('ya esta el elemento')
					setStore({ misNaves: store.misNaves.filter( (nave)=> nave != tituloNave   ) });
				}else{
					console.log('No esta el elemento')
					setStore({ misNaves: [...store.misNaves,tituloNave] });
				}

				

			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('se cargo la pagina dersde flux')
				fetch('https://swapi.dev/api/starships')
				.then( (response)=> response.json() )
				// .then( (data)=> console.log(data.results))
				.then( (data)=> setStore({ navesflux: data.results }))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
