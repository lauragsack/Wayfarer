import React, { Component } from 'react';
import UserModel from '../models/user';

class Signup extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.create(this.state)
            .then(res => {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    password2: ""
                })
                this.props.history.push('/login')
            })
            .catch(err => console.log(err))
        }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h4 className="mb-3">Sign up</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    onChange={this.handleChange}
                                    className="form control form-control-lg"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Password</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Confirm Password</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    value={this.state.password}
                                />
                            </div>
                            <button className="btn btn-primary float-right" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
