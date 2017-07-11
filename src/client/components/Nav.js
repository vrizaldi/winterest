import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
	render() {

		return(
			<div className="nav">
				<Link className="nav-link" to={this.props.loggedIn ? "/profile" : "/home"}>
					#winterest
				</Link>
				{
					this.props.loggedIn ? (
						<Link className="nav-link" to="/profile">
							<span className="fa fa-user-circle-o"/> Profile
						</Link>
					) : (
						<Link className="nav-link" to="/login">
							<span className="fa fa-hand-o-right"/> Login
						</Link>
					)
				}
			</div>
		);
	}
}