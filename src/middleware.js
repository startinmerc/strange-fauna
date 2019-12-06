import seeds from './seeds';

export function getItems(ids){
	let itemList = [], total = 0;
	ids.forEach((id)=>{
		let item = (seeds.products.find((item)=>(item.id === id)));
		total += item.price;
		itemList.push(item)
	});
	return {itemList: itemList, total: total};
}