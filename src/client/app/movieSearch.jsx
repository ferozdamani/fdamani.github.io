import React from 'react';
import {render} from 'react-dom';

export class MovieBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieSearchResults: []
		};
	}
	render () {
		return (
			<div className="movieContainer">
				<h1>Movie Search</h1>
				<p>Type in a movie name</p>
				<label htmlFor="movieNameBox"> Search
					<input type="text" id="movieTextBox" className="movieTextBox"/>
					<button className="movieSearchBtn" id="movieSearchBtn">Search</button>
				</label>
			</div>
		);
	}
}
