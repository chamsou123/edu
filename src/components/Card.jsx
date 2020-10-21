import React from 'react';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data : []
		}
	}

	addSolved(id) {
		fetch(`https://my-education.herokuapp.com/${id - 1}/add`, {method : 'POST'})
		.then(response => response.json())
		.then(data => this.setState({ data }));;
	}

	calculateMark(solved) {
		return (solved * 20) / 500;
	}

	componentDidMount() {
		fetch('https://my-education.herokuapp.com/').then(response => response.json())
		.then(data => this.setState({ data }));
	}

	render() {
		return(
			<div className="container">
				{this.state.data.map(module => { return (
						<div key={module.id} className="card">
							<div className="imgBox" data-text={module.name}></div>
							<div className="content">
								<div>
									<h3>{module.name}</h3>
									<p>Solved : {module.solved}</p>
									<p>Mark : <span>{this.calculateMark(module.solved)}</span></p>
									<button onClick={() => this.addSolved(module.id)}>Add One</button>
								</div>
							</div>
						</div>
					)})}
			</div>
		)
	}
}
