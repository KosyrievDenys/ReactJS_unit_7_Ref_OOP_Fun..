import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import Error from './Error';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const navMain = [
	{ 'url': '/', 'text': 'Главная' },
	{ 'url': '/about', 'text': 'О сайте' },
	{ 'url': '/cat', 'text': 'Категории' },
]

const navCat = [
	{'url' : '/notebook', 'text' : 'Ноутбуки'},
	{'url' : '/monitor', 'text' : 'Мониторы'},
	{'url' : '/cellphone', 'text' : 'Мобильные телефоны'},
]

function App() {
	return (
		<div className="App">
			<Router>
				{navMain.map(item => <Header url={item.url} text={item.text}/>)}
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route exact path='/cat' element={<Category data={navCat}/>} />
					<Route path='/cat/:elem' element={<CategoryDescription />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
