// import { NavLink } from 'react-router-dom'


function Header(props) {
	return (
		<div className="Header">
			<nav>
				<ul>
				<li><a href={props.url}>{props.text}</a></li>
					{/* <li><a href="/">Главная</a></li>
					<li><a href="/about">О сайте</a></li>
					<li><a href="/cat">Категории</a></li> */}
				</ul>
			</nav>
		</div>
	);
}

export default Header;