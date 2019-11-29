const landingSeeds = [];

addToLanding(
	false,
	'Big Mushroom Offer',
	'Buy seven mushrooms get one free! Limited stock available.',
	'https://images.unsplash.com/photo-1528518290605-1fcc8dcca204?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
	'mushroom',
	[{title: 'Shop Now', link: '/'},{title: 'Shop Later', link: '/'}]
)
addToLanding(
	true,
	'Berry Special',
	"See what we did there? It's a pun. You like puns, don't you? Yeah you do.",
	'https://images.unsplash.com/photo-1445197138520-6099f1c07aa0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
	'berry',
	[{title: 'Shop Now', link: '/'},{title: 'Shop Later', link: '/'}]
)
addToLanding(
	false,
	'Lovely Lovely Flowers',
	"Lovely flowers. Just don't eat them. Really, don't eat them.",
	'https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
	'flower',
	[{title: 'Shop Now', link: '/'},{title: 'Shop Later', link: '/'}]
)

function addToLanding(dark,header,copy,image,type,links){
	landingSeeds.push({
		dark: dark,
		header: header,
		copy: copy,
		image: image,
		links: links,
		type: type
	})
}

export default landingSeeds;
