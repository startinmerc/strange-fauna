const products = [], landingSections = [];

export const deliveries = [
	{name: 'Premium', price: 50},
	{name: 'Standard', price: 20}
]

export const categories = [
	{title: 'Mushrooms', section: 'mushroom', color: 'var(--mushroom)'},
	{title: 'Berries', section: 'berry', color: 'var(--berry)'},
	{title: 'Flowers', section: 'flower', color: 'var(--flower)'},
	{title: 'Reductions', section: 'reduction', color: 'var(--reduction)'},
	{title: 'About Us', section: 'about', color: 'var(--primary)'}
];

for(let i=0;i<40;i++){
	let t = categories[Math.floor(Math.random()*4)].section
	products.push({
		id: i, 
		name: `${t} ${i}`,
		photos: ["https://picsum.photos/400"], 
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: Math.floor(Math.random()*99),
		type: t
	})
}

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
	landingSections.push({
		dark: dark,
		header: header,
		copy: copy,
		image: image,
		links: links,
		type: type
	})
}

const seeds = {
	products: products,
	landingSections: landingSections
}

export default seeds;