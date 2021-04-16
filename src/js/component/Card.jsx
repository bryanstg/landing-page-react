import React from "react";
import Proptypes from "prop-types";

export function Card(props) {
	return (
		<div className="card mx-2 my-2" style={{ width: "13.5rem" }}>
			<img src={props.url} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{"Card title"}</h5>
				<p className="card-text">
					{
						"Some quick example text to build on the card title and make up the bulk of the card's content."
					}
				</p>
				<a href="#" className="btn btn-primary">
					{"Fin out more"}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	url: Proptypes.string
};
