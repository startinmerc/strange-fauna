import React from 'react';

function FAQ(){
	document.title = 'FAQ';

	function handleClick(e){
		e.target.parentNode.classList.toggle('expanded');
	}

	return (
		<main id="faq">
			<h1>FAQ</h1>
			<ul className="faq-list">
				<li className="question">
					<button className="question__header display"
					 onClick={handleClick}>Question?</button>
					<p className="question__answer">
						Answer!<br/>
						Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
					</p>
				</li>
				<li className="question">
					<button className="question__header display"
					 onClick={handleClick}>Question?</button>
					<p className="question__answer">
						Answer!<br/>
						Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
					</p>
				</li>
				<li className="question">
					<button className="question__header display"
					 onClick={handleClick}>Question?</button>
					<p className="question__answer">
						Answer!<br/>
						Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
					</p>
				</li>
				<li className="question">
					<button className="question__header display"
					 onClick={handleClick}>Question?</button>
					<p className="question__answer">
						Answer!<br/>
						Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
					</p>
				</li>
			</ul>
		</main>
	)
}

export default FAQ;
