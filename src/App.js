import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Name from './Components/Name';
import Breadcrumb from './Components/Breadcrumb';
import Questions from './Components/Pages/Questions';

function App() {
	const [data, setData] = useState([]);
	const [valueQuestion, setValueQuestion] = useState([]);
	let render_question = null;
	useEffect(() => {
		async function FetchAPI() {
			let respone = await fetch('http://heljayjo.com/question-app/public/api/questions');
			let responeJSON = await respone.json();
			if (responeJSON.status) {
				setData(responeJSON.data);
			} else {
				console.log('Lỗi')
			}
		}
		FetchAPI();
	}, []);

	function changeValueQuestions(e) {
		if(e.target.checked) {
			if(e.target.type == 'radio') {
				if(e.target.value)
				setValueQuestion([...valueQuestion,{
					[e.target.name] : [e.currentTarget.value]
				}])
			}
		}else{
		}
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("valueQuestion => ", valueQuestion)
	}

	render_question = data.map((value, index) => {
		return <Questions index={index} key={index} data={value} onValueQuestion={(e) => changeValueQuestions(e)} />
	})

	return (
		<div id="root">
			<Navbar />
			<div className="container mt-2">
				<Breadcrumb />
				<Name />
				<form onSubmit={handleSubmit}>
					{render_question}
					<div className="col-md-8 offset-md-2">
						<li className="list-group-item d-flex justify-content-end border-0 text-center ">
							<button type="submit" className="btn btn-success">
								Nộp bài
								<i className="fa fa-forward" />
							</button>
						</li>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
