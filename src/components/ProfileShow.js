import React, {Component} from 'react';

class ProfileShow extends Component {
  state = {
    user: this.props.user,
    joinDate: Intl.DateTimeFormat('en-US').format(new Date(this.props.user.joinDate)),
  };

  render() {
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">
              Profile <i className='btn fas fa-pen float-right'
              onClick={this.props.toggleUpdate}/>
            </h4>
            <small className="float-right">Joined {this.state.joinDate}</small>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="form-control form-control-lg border-0">
                {this.state.user.name}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="city">Current city</label>
              <div className="form-control form-control-lg border-0">
                {this.state.user.city}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default ProfileShow;
