{
	// const bank = {
	// 	userName: 'Alex',
	// 	cardName: 'main',
	// 	total: 3000,
	// 	balance() {
	// 		console.log(`User ${this.userName} have balance: ${this.total}`)
	// 	},
	// }
	// bank.balance()
}

{
	/////////////
	// перебрать масив
	// мутировать, щоб залишилися лише унікальні id
	// якщо однакові Id сплюсувати значення qty

	const products = [
		{
			id: 'sku1',
			qty: 1,
		},
		{
			id: 'sku2',
			qty: 2,
		},
		{
			id: 'sku3',
			qty: 3,
		},
		{
			id: 'sku1',
			qty: 6,
		},
		{
			id: 'sku1',
			qty: 8,
		},
		{
			id: 'sku2',
			qty: 19,
		},
		{
			id: 'sku4',
			qty: 1,
		},
	]

	for (let i = 0; i < products.length; i += 1) {
		for (let y = i + 1; y < products.length; y += 1) {
			let sum = 0
			if (products[i].id === products[y].id) {
				products[y].qty += products[y].qty
				products.splice(y, 1)
				y -= 1
			}

			// console.log(products[y].id)
		}

		// console.log(products[i].id)
	}
	console.log(products)
}
