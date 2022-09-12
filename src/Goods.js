import React from 'react';

function Goods(props) {
	return (
		<div className="goods-block">
				<img src={props.image} alt="" />
				<p>{props.title}</p>
				<p>{props.cost}</p>
				<button className="add-to-cart" data-key={props.articul}>Add to cart</button>
			</div>
	)
}

// class Goods extends React.Component {
// 	constructor(props) {
// 		super();
// 	}

// 	render() {
// 		return (
			// <div className="goods-block">
			// 	<img src={this.props.image} alt="" />
			// 	<p>{this.props.title}</p>
			// 	<p>{this.props.cost}</p>
			// 	<button className="add-to-cart" data-key={this.props.articul}>Add to cart</button>
			// </div>
// 		)
// 	}
// }

export default Goods;

