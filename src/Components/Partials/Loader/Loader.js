import React from "react";
import "./Loader.css";

export default function Loader({fullScreen}){
	return (
		<div className={`loader ${fullScreen && "loader--full"}`}>
			<h1 className="header__title">Strange Flora</h1>
			<h2>
				Loading<span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span>
			</h2>
		</div>
	)
}