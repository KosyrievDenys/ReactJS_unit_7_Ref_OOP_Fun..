import {NavLink} from 'react-router-dom'


function Header(props) {
	return (
		<div className="Header">
			<nav>
				<ul>
				<li><NavLink to={props.url}>{props.text}</NavLink></li>
					{/* <li><NavLink to="/">Главная</NavLink></li>
					<li><NavLink to="/about">О сайте</NavLink></li>
					<li><NavLink to="/cat">Категории</NavLink></li> */}
				</ul>
			</nav>
		</div>
	);
}

export default Header;