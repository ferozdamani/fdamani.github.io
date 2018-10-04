import React from 'react';

export class Header extends React.Component {
	render () {
		return (
			<div className="headerContainer">
				<div className="logoContainer">
					<span className="logoBox">FD</span>
				</div>
				<div className="nameContainer">Feroz Damani</div>
				<div className="headerExtra">
					<div className="socialMediaBox">
						<a className="socialBox" href="#">Tw</a>
						<a className="socialBox" href="#">Fb</a>
						<a className="socialBox" href="#">In</a>
						<a className="socialBox" href="#">Pin</a>
					</div>
					<div className="genericSearch">
						<input type="text" className="searchField" placeholder="Search this site"/>
					</div>
				</div>
			</div>
		);
	}
}
