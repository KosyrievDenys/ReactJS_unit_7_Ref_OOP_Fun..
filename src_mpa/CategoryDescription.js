import {useParams} from 'react-router-dom';

function CategoryDescription() {
	let {elem} = useParams();
	console.log(elem);
	return (
		<div className="CategoryDescription">
			<h1>Category: {elem}</h1>
			<a href="/cat">Назад</a>
		</div>
	);
}

export default CategoryDescription;