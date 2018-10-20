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
						<a className="socialBox" href="#"><i className="fab fa-twitter"></i></a>
						<a className="socialBox" href="#"><i className="fab fa-facebook"></i></a>
						<a className="socialBox" href="#"><i className="fab fa-linkedin"></i></a>
						<a className="socialBox" href="#"><i className="fab fa-pinterest"></i></a>
						<a className="socialBox" href="#"><i className="fab fa-instagram"></i></a>
					</div>
					<div className="genericSearch">
						<input type="text" className="searchField" placeholder="Search this site"/>
					</div>
				</div>
			</div>
		);
	}
}
