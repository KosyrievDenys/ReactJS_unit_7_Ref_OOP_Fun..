// import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Category(props) {
	let url = useLocation();
	console.log(url);
	const listCat = props.data.map(item => <li><a href={`${url.pathname}${item.url}`}>{item.text}</a></li> )
	return (
		<div className="Category">
			<h1>Category</h1>
			
			<ul>
				{listCat}
				{/* <li><a href={`${url.pathname}/notebook`}>Ноутбуки</a></li>
				<li><a href={`${url.pathname}/monitor`}>Мониторы</a></li>
				<li><a href={`${url.pathname}/cellphone`}>Мобильные телефоны</a></li> */}
			</ul>
		</div>
	);
}

export default Category;