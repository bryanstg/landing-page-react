import React from "react";
import { Card } from "./Card.jsx";

export function CardsCont() {
	return (
		<div className="container d-flex p-2 flex-wrap justify-content-center ">
			<Card url="http://placehold.it/500x325.jpg" />
			<Card url="http://placehold.it/500x325.jpg" />
			<Card url="http://placehold.it/500x325.jpg" />
			<Card url="http://placehold.it/500x325.jpg" />
		</div>
	);
}
