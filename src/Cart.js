import React from "react";

function Cart(props) {

	let renderObj = () => {
		let out = [];
		for (let key in props.cart) {
			let goods = getGoodsFromArr(key);
			console.log(goods);
			out.push(
				<tr key={key}>
					<td>{goods['title']}</td>
					<td>{props.cart[key]}</td>
					<td>{props.cart[key] * goods['cost']}</td>
				</tr>);
		}
		return out;
	}

	let getGoodsFromArr = (art) => {
		for (let i = 0; i < props.goods.length; i++) {
			if (art === props.goods[i]['articul']) {
				return props.goods[i];
			}
		}
	}

	return (
		<div className="cart-field">
			<h1>Корзина</h1>
			<table>
				<tbody>
					<tr><th>Art</th><th>Count</th><th>Cost</th></tr>
					{renderObj()}
				</tbody>
			</table>
		</div>
	)
}

// class Cart extends React.Component {
// 	constructor(props) {
// 		super();
// 	}

	// renderObj = () => {
	// 	let out = [];
	// 	for (let key in this.props.cart) {
	// 		let goods = this.getGoodsFromArr(key);
	// 		console.log(goods);
	// 		out.push(
	// 			<tr key={key}>
	// 				<td>{goods['title']}</td>
	// 				<td>{this.props.cart[key]}</td>
	// 				<td>{this.props.cart[key] * goods['cost']}</td>
	// 			</tr>);
	// 	}
	// 	return out;
	// }

	// getGoodsFromArr = (art) => {
	// 	for (let i = 0; i < this.props.goods.length; i++) {
	// 		if (art === this.props.goods[i]['articul']) {
	// 			return this.props.goods[i];
	// 		}
	// 	}
	// }

// 	render() {
// 		return (
// <div className="cart-field">
// 	<h1>Корзина</h1>
// 	<table>
// 		<tbody>
// 			<tr><th>Art</th><th>Count</th><th>Cost</th></tr>
// 			{this.renderObj()}
// 		</tbody>
// 	</table>
// </div>
// 		);
// 	}

// }

export default Cart;