import React from "react";
import "./Loader.css";

export default function Loader(){
	return (
		<div id="loader">
			<h1>Loading<span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span></h1>
		</div>
	)
}