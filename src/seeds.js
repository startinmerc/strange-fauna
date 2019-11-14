const seeds = [];
const types = ['mushroom','berry','flower','reduction'];

for(let i=0;i<40;i++){
	let t = types[Math.floor(Math.random()*4)]
	seeds.push({
		id: i, 
		name: `${t} ${i}`,
		photos: ["https://picsum.photos/400"], 
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: Math.floor(Math.random()*99),
		type: t
	})
}

export default seeds;