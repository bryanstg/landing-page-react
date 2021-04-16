import React from "react";

//include images into your bundle
import { Nav } from "./Nav.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

import { CardsCont } from "./CardsCont.jsx";

//create your first component
export function Home() {
	return (
		<div className="container-fluid m-0 p-0">
			<Nav />
			<Jumbotron />
			<CardsCont />
		</div>
	);
}

//components to do
//home
//nav
//main
//jumbotron
//cards container
//cards
//footer
