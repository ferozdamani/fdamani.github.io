import React from 'react';

export class Header extends React.Component {
	render () {
		return (
			<div className="headerContainer">
				<div className="logoContainer">
					<span className="logoBox">FD</span>
				</div>
				<div className="nameContainer"></div>
				<div className="headerExtra">
					<div className="socialMediaBox">
						<a className="socialBox" href="https://twitter.com/zain_damani" target="_blank"><i className="fab fa-twitter"></i></a>
						<a className="socialBox" href="https://www.facebook.com/feroz.damani" target="_blank"><i className="fab fa-facebook"></i></a>
						<a className="socialBox" href="https://www.linkedin.com/in/fdamani/" target="_blank"><i className="fab fa-linkedin"></i></a>
						<a className="socialBox" href="https://www.pinterest.com/ferozdamani/" target="_blank"><i className="fab fa-pinterest"></i></a>
						<a className="socialBox" href="https://www.instagram.com/ferozdamani/" target="_blank"><i className="fab fa-instagram"></i></a>
					</div>
					<div className="genericSearch">
						<input type="text" className="searchField" placeholder="Search this site"/>
					</div>
				</div>
			</div>
		);
	}
}
