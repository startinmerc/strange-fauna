import React from "react";
import "./Loader.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Loader({fullScreen, isLoading}){
	return (
		<TransitionGroup component={null}>
			{isLoading && (
				<CSSTransition classNames="loader" timeout={600}>
					<div className={`loader ${fullScreen && "loader--full"}`}>
						<svg>
							<text x="50%" y="50%">SF</text>
						</svg>
						<h1 className="header__title">Strange Flora</h1>
						<h2>
							Loading<span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span>
						</h2>
					</div>
				</CSSTransition>
			)}
		</TransitionGroup>
	);
};