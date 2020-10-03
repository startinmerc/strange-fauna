import React from "react";
import { Helmet } from "react-helmet";

function Question({ handleClick }) {
	return (
		<li className="question">
			<button
				className="question__header display"
				onClick={handleClick}
				aria-label="Question reveal"
				aria-pressed="false"
			>
				Question?
			</button>
			<p className="question__answer">
				Answer!
				<br />
				Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
				courgette tatsoi pea sprouts fava bean collard greens dandelion okra
				wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
			</p>
		</li>
	);
}

function FAQ() {
	function handleClick(e) {
		// Check to see if the button is pressed
		let pressed = e.target.getAttribute("aria-pressed") === "true";
		// Change aria-pressed to the opposite state
		e.target.setAttribute("aria-pressed", !pressed);
		// Add expanded class to <li>
		e.target.parentNode.classList.toggle("expanded");
		// Set focus to revealed answer
		if (pressed) {
			e.target.parentNode.lastChild.focus();
		}
	}

	return (
		<main id="faq">
			<Helmet>
				<title>Strange Flora - FAQ</title>
			</Helmet>
			<h1>FAQ</h1>
			<ul className="faq-list">
				<Question handleClick={handleClick} />
				<Question handleClick={handleClick} />
				<Question handleClick={handleClick} />
			</ul>
		</main>
	);
}

export default FAQ;
