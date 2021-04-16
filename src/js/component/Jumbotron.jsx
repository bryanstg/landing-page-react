import React from "react";

export function Jumbotron() {
	return (
		<div className="container">
			<div className="jumbotron py-3">
				<h1 className="display-4">{"A Warm Welcome"}</h1>
				<p className="lead">
					{
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat placeat ipsa officiis libero hic dignissimos, blanditiis impedit, sequi eveniet eum, accusantium quidem fugit deserunt! Autem inventore expedita illum reiciendis."
					}
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{"Call to action!"}
				</a>
			</div>
		</div>
	);
}
