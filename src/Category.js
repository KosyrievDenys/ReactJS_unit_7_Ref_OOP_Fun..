import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Category(props) {
	let url = useLocation();
	console.log(url);
	const listCat = props.data.map(item => <li><NavLink to={`${url.pathname}${item.url}`}>{item.text}</NavLink></li>)
	return (
		<div className="Category">
			<h1>Category</h1>
			<ul>
				{listCat}
				{/* <li><NavLink to={`${url.pathname}/notebook`}>Ноутбуки</NavLink></li> */}
				{/* <li><NavLink to={`${url.pathname}/monitor`}>Мониторы</NavLink></li> */}
				{/* <li><NavLink to={`${url.pathname}/cellphone`}>Мобильные телефоны</NavLink></li> */}
			</ul>
		</div>
	);
}

export default Category;