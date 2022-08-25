import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
	function randomNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
		// console.log(Math.floor(Math.random() * (max - min) + min));
	}
	let count4 = 0;
	let ref5 = React.createRef();
	let ref6 = React.createRef();
	let ref7 = React.createRef();
	let ref8 = React.createRef();
	let ref9 = React.createRef();
	let ref10 = React.createRef();

	function task1() {
		console.log('task2');
	}
	function task2(event) {
		event.target.classList.add('active');
	}
	function task3(event) {
		console.log(event.target.value);
	}
	function task4() {
		console.log(count4++);
	}
	function task5(event) {
		if (event.target.checked) {
			ref5.current.textContent = event.target.value;
		}
		else ref5.current.textContent = 0;
	}
	function task6(event) {
		ref6.current.textContent = event.target.value;
	}
	function task7() {
		let a =[];
		for (let i = 0; i < 3; i++) {
			a.push(randomNum(0, 255));
		}
		// console.log(a);
			// console.log(refBlock7.current);
			// console.log(`rgb${a[0]},${a[1]},${a[2]}`)
		ref7.current.style.backgroundColor = `rgb(${a[0]},${a[1]},${a[2]}`;
	}
	function task8(event) {
		// console.log(event.charCode);
		let eTV = event.charCode;
		if(eTV >= 48 && eTV <= 57) ref8.current.textContent += 1;
		else ref8.current.textContent += 0;
	}
	function task9(event) {
		ref9.current.textContent = event.target.value;
	}
	let ar10 = [5, 6, 7];
	function task10() {
		ar10.push(ref10.current.value);
		console.log(ar10);
	}

	return (
		<>
			<h1>События</h1>
			<section>
				<h2>Task 1</h2>
				<button className="task-1" onClick={task1}>Push</button>
			</section>
			<section>
				<h2>Task 2</h2>
				<div className="task-2" onMouseEnter={task2}></div>
			</section>
			<section>
				<h2>Task 3</h2>
				<input type="text" className="task-3" onInput={task3} />
			</section>
			<section>
				<h2>Task 4</h2>
				<button className="task-4" onClick={task4}>Count</button>
			</section>
			<section>
				<h2>Task 5</h2>
				<input type="checkbox" value="55" onChange={task5} />
				<div className="out-5" ref={ref5}></div>
			</section>
			<section>
				<h2>Task 6</h2>
				<select className="task-6" onChange={task6}>
					<option value="7">seven</option>
					<option value="4">four</option>
					<option value="9">nine</option>
					<option value="10">ten</option>
				</select>
				<div className="out-6" ref={ref6}></div>
			</section>
			<section>
				<h2>Task 7</h2>
				<div className="block-7" ref={ref7}></div>
				<button className="task-7" onClick={task7}>Color</button>
			</section>
			<section>
				<h2>Task 8</h2>
				<input type="text" className="task-8" onKeyPress={task8}></input>
				<div className="out-8" ref={ref8}></div>
			</section>
			<section>
				<h2>Task 9</h2>
				<input type="range" className="task-9" onInput={task9}></input>
				<div className="out-9" ref={ref9}></div>
			</section>
			<section>
				<h2>Task 10</h2>
				<input type="number" className="i-10" ref={ref10} ></input>
				<button className="task-10" onClick={task10}>Push</button>
			</section>
		</>
	);
}

export default App;
