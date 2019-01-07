import React from 'react';

export class MovieBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieSearchResults: []
		};
	}

	movieLookUp = () => {
		console.log('Hi there');
	}

	render () {
		return (
			<div className="movieContainer">
				<h1>Movie Search</h1>
				<h2>Search powered by - Unknown</h2>
				<label htmlFor="movieNameBox">
					<input type="text" id="movieTextBox" className="movieTextBox" placeholder="Movie, shows, artists..."/>
					<button className="movieSearchBtn" id="movieSearchBtn" onClick={this.movieLookUp}><i className="fas fa-search"></i></button>
				</label>
			</div>
		);
	}
}
