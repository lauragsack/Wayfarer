import React, {Component} from 'react';
import UserModel from '../models/user';

let user1={
	name:'JC',
	city:'San Bruno',
	posts:[],
}

class Profile2 extends Component {
    state = {
        name:user1.name,
        city:user1.city,
        posts:[],
    };

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
        	name: '',
			city: '',
			posts: [],
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
	            <h4 className="mb-3">Profile</h4>
	            <form onSubmit={this.handleSubmit}>
	              <div className="form-group">
	                <label htmlFor="name">Name</label>
	                <input 
	                    className="form-control form-control-lg"
	                    readOnly
	                    type="text" 
	                    id="name" 
	                    name="name" 
	                    value={this.state.name}
	                />
	              </div>
	              <div className="form-group">
	                <label htmlFor="name">Current city</label>
	                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="city" name="city" value={this.state.city} />
	              </div>
	              <div className="form-group">
	                <label htmlFor="name">Post</label>
	                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="post" name="post" value={this.state.post} />
	              </div>

	              <button className="btn btn-primary float-right" type="submit">Register</button>
	            </form>
	          </div>
	        </div>
	      </div>
        );
    }
}

export default Profile2;