export function getItems(ids,products){
	let itemList = [], total = 0;
	ids.forEach((id)=>{
		let item = (products.find((item)=>(item.id === id)));
		total += item.price;
		itemList.push(item)
	});
	return {itemList: itemList, total: total};
}