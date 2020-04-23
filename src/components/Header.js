import React, { Component } from 'react';
import Modal from 'react-responsive-modal'

class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {
			sign: false,
			login: false,
		}
	}

	onOpenModal = () => {
		this.setState({sign: true});
	}

	onOpenModalLogin = () => {
		this.setState({login: true});
	}

	onCloseModal = () => {
		this.setState({sign: false});
	}

	onCloseModalclose = () => {
		this.setState({login: false});
	}

	render() {
		const { login, sign} = this.state;

		return (
			<>
			<ul>
				<li>
					<button className="btn btn-primary-outline" id="signup" onClick={this.onOpenModal}>Sign Up</button>
				</li>
				<li>
					<button className="btn btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>Login</button>
				</li>
			</ul>

			<Modal open={sign} onClose={this.onCloseModal}>
				<div className="modal-body">
					<h2> Get Started Absolutely<span> Free! </span></h2>
					<span className="subtitle">No credit card needed</span>
					<form className="contact-form form-validate3" novalidate="novalidate">
						<div className="form-group">
							<input className="form-control" type="text" name="name" id="name" placeholder="User Name" />
						</div>
					</form>
				</div>
			</Modal>
			</>
		);
	}
}

export default Header