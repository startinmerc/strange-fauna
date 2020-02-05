import React from 'react';

// Returns static about section

function Question() {
	return (
		<li>
			<h4>Question?</h4>
			<p>
				Answer!<br/>
				Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
			</p>
		</li>
	)
}


function FAQ(){
	document.title = 'FAQ';
	return (
		<main id="faq">
			<h1>FAQ</h1>
			<ul className="faq-list">
				<Question />
				<Question />
				<Question />
			</ul>
		</main>
	)
}

export default FAQ;
